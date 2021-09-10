import { Container } from "./styles";
import { useState } from "react";
import { useEffect } from "react";
import { api } from "../../services/api";
import { RepositoryItem } from "../RepositoryItem";
import { useSearch } from "../../hooks/useSearch";

interface Repository {
    id: number;
    name: string;
    avatar_url: string;
    html_url: string;
    description: string;
    owner: {
        login: string;
        avatar_url: string;
    }
}

export function RepositoryList() {

    //'/repositories?q=ignite-reactjs1%20in:name,description&per_page=10'


    
    const search = useSearch();
    const [repositories, setRepositories] = useState<Repository[]>([]);
    const [queryString, setQueryString] = useState("");
    

    useEffect(()=> {
        setQueryString("/repositories?q="+ search.argument +"%20in:name,description&per_page=10")
    },[search.argument])

    useEffect(()=> {
        api.get(queryString)
        .then(response => setRepositories(response.data.items))
   
    }, [queryString]);


    return (

        <Container>
            
            {repositories.map(repository =>  repository.name.includes(search.argument) ? <RepositoryItem key={repository.id} repository={repository}/> : null).sort()}
                 
        </Container>
    )
}
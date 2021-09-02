import {Container} from "./styles";
import { useState } from "react";
import { useEffect } from "react";
import { api } from "../../services/api";
import { RepositoryItem } from "../RepositoryItem";


interface Repository {
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
    const [repositories, setRepositories] = useState<Repository[]>([]);
    
    useEffect(()=> {
        api.get('/repositories?q=ignite-reactjs1%20in:name,description&per_page=10').then(response => setRepositories(response.data.items))
    }, []);


    return (

        <Container>
            {repositories.map(repository => {
                return (
                <RepositoryItem key={repository.name} repository={repository}/>
            )
            })}

        </Container>
    )
}
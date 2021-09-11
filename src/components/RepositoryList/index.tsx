import { Container } from "./styles";
import { useState } from "react";
import { useEffect } from "react";
import { api } from "../../services/api";
import { RepositoryItem } from "../RepositoryItem";
import { useSearch } from "../../hooks/useSearch";
import { UserItem } from "../UserItem/index"

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

interface User{

    login: string;
    id: number;
    name: string;
    html_url: string;
    avatar_url: string;

}

export function RepositoryList() {

    //'/repositories?q=ignite-reactjs1%20in:name,description&per_page=10'

    const search = useSearch();
    const [repositories, setRepositories] = useState<Repository[]>([]);
    const [users, setUsers] = useState<User[]>([]);
    const [queryString, setQueryString] = useState("");
    

    
    useEffect(()=> {
        setQueryString("/" + search.queryType + "?q="+ search.argument +"&per_page=10")
    },[search.argument, search.queryType])

    useEffect(()=> {
        api.get(queryString)
        .then(response => {if(search.queryType === "repositories"){setRepositories(response.data.items)}else{if(search.queryType === "users"){setUsers(response.data.items)}}})
    }, [queryString, search.queryType]);


    
    if(search.queryType === "repositories"){
        return (
            <Container>
            {repositories.map(repository => { return (<RepositoryItem key={repository.id} repository={repository}/>)})} 
            </Container>
        )
    }else{
        if(search.queryType === "users"){
        return(
            <Container>
            {users.map(user => { return(<UserItem key={user.id} user={user}/>)})}
            </Container>
        )
            
        }
    }
    

    return(
        <Container>
            {search.queryType === "repositories" 
            ? repositories.map(repository => {return (<RepositoryItem key={repository.id} repository={repository}/>)}) 
            : users.map(user => {return(<UserItem key={user.id} user={user}/>)})}
        </Container>
    )

}
import { Card } from "./styles"


interface RepositoryItemProps {
    repository: {
        id: number;
        name: string;
        html_url: string;
        description: string;
        owner: {
            login: string;
            avatar_url: string;
        }
    }
}



export function RepositoryItem(props: RepositoryItemProps){
    return(
        <Card>
            <img src={props.repository.owner.avatar_url} alt="avatar" />
            <header>{props.repository.name}</header>
            <p>{props.repository.description}</p>
        </Card>
    )
}
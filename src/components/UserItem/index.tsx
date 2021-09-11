import { Card } from "./styles"


interface UserItemProps {
    user: {
        login: string;
        id: number;
        name: string;
        html_url: string;
        avatar_url: string;

    }
}



export function UserItem(props: UserItemProps){

    //encurta a o texto de acordo com o 

    return(
        <Card>
            <img src={props.user.avatar_url} alt="avatar" />
            <a rel="noreferrer" target="_blank" href={props.user.html_url}><header>{props.user.login}</header></a>
            <p>{props.user.name}</p>
        </Card>
    )
}
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

    //encurta a o texto de acordo com o 
    function shortenDescription(text: string, maxLenght: number, separator = " ") {
        if(text != null){
            if (text.length <= maxLenght) return text;
            return text.substr(0, text.lastIndexOf(separator, maxLenght));
      }
    }

    return(
        <Card>
            <img src={props.repository.owner.avatar_url} alt="avatar" />
            <a rel="noreferrer" target="_blank" href={props.repository.html_url}><header>{props.repository.name}</header></a>
            <p>{shortenDescription(props.repository.description, 40, " ")}</p>
        </Card>
    )
}
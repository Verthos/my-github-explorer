
import { useState } from "react";
import { useSearch} from "../../hooks/useSearch"
import { SearchBar, SwitchButton, Container} from "./styles";



export function Search() {
    
    const userButtomIsSelected = function (usersIsSelected: string){
        if(usersIsSelected === "notSelected") {
            setUsersIsSelected("selected")
            setRepositoriesIsSelected("notSelected")
        }else return;
    }

    const repositoriesButtomIsSelected = function (repositoriesIsSelected: string){
        if(repositoriesIsSelected === "notSelected") {
            setRepositoriesIsSelected("selected")
            setUsersIsSelected("notSelected")
        }else return;
    }

    const search = useSearch();
    const [content, setContent] = useState("");
    const [repositoriesIsSelected, setRepositoriesIsSelected] = useState("selected")
    const [usersIsSelected, setUsersIsSelected] = useState("notSelected")

    
    

    return(
            //entender a propriedade Key neste caso
        <Container>

            <SwitchButton className={usersIsSelected} type="button" 
            onClick={() => {search.handleQueryType("users"); userButtomIsSelected(usersIsSelected)} }>Users</SwitchButton>

            <SwitchButton className={repositoriesIsSelected} type="button" 
            onClick={() => {search.handleQueryType("repositories"); repositoriesButtomIsSelected(repositoriesIsSelected)}}>Repositories</SwitchButton>
            
            <SearchBar key={search.argument}>
                <input value={content} onChange={event => setContent(event.target.value)} type="text" placeholder="Digite aqui." />
                <button type="button" onClick={() => search.handleNewArgument(content)}>Pesquisar</button>
            </SearchBar>
        </Container>
        
        )
}
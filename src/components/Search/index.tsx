
import { useState } from "react";
import { useSearch} from "../../hooks/useSearch"
import { SearchBar, SwitchButton, Container} from "./styles";



export function Search() {

    const search = useSearch();
    const [content, setContent] = useState("");


    return(
            //entender a propriedade Key neste caso
        <Container>

            <SwitchButton className={search.usersIsSelected} type="button" 
            onClick={() => {search.handleUserButtomIsSelected(search.usersIsSelected)} }>Users</SwitchButton>

            <SwitchButton className={search.repositoriesIsSelected} type="button" 
            onClick={() => {search.handleRepositoriesButtomIsSelected(search.repositoriesIsSelected)}}>Repositories</SwitchButton>
            
            <SearchBar key={search.argument}>
                <input value={content} onChange={event => setContent(event.target.value)} type="text" placeholder="Digite aqui." />
                <button type="button" onClick={() => search.handleNewArgument(content)}>Pesquisar</button>
            </SearchBar>
        </Container>
        
        )
}
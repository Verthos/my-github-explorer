
import { useState } from "react";
import { useSearch} from "../../hooks/useSearch"
import { Container } from "./styles";



export function Search() {
    
    const search = useSearch();
    const [content, setContent] = useState("");


    return(
            //entender a propriedade Key neste caso
            <Container key={search.argument}>
                     
                <input value={content} onChange={event => setContent(event.target.value)} type="text" placeholder="Digite aqui."/>
                <button type="button" onClick={() => search.handleNewArgument(content)}>Pesquisar</button>

            </Container>

        
        )
}
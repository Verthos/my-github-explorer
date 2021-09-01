import { Container, Content } from "./styles"
import icon from "../../assets/icon.png"

export function Header() {
    return (
        <>
        <Container>
        <img src={icon} alt="icon" width="32" height="32"/>
        Github Explorer!
        </Container>

        <Content>Procure aqui, por repositórios no Github!</Content>
        </>
    )
    
}
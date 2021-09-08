import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root {
    --background: #F0F2F5;
    --red: #E52E4D;
    --blue: #61DCFB;
    --blue-light: #6933FF;
    --text-title: #363F5F;
    --text-body: #969CB3;
    --shape: #FFFFFF;
    --green: #04D361;
    --soft-black: #0e1111;
}

* { margin:0;
    padding:0;
    box-sizing: border-box;
    
}

html {

//verifica resolução da tela e adapta fonte de acordo
    @media (max-width: 1080px) {
            font-size: 93.75%; //15px
        }
    @media (max-width: 720px) {
            font-size: 87.5%; //14px
        }
}


body {
    background: var(--background);
    //fontes mais nitidas utilizando engine do chrome
    -webkit-font-smoothing: antialiased;
    
}

main{
    min-height: 30rem;
};


body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
}

h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
}

button {
    cursor: pointer;
}

[disabled] {
    opacity: 0.6;
    cursor: not-allowed;
}

`
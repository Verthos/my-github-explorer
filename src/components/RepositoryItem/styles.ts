import styled from "styled-components";

export const Card = styled.div`
    display: flex;
    width: 30rem;
    padding: 1rem 10rem 1rem 1rem;
    height: 6rem;
    background: var(--shape);
    border-radius: 0.25rem;
    margin-bottom: 1rem;
    justify-content: center;
    text-align: center;
    
    
    

    header{
        position: relative;
        display: flex;
        margin:0;
        text-align: left;
        

    }
    p{
        position: relative;
        font-size: 0.9rem;
    }
    img{
        position: relative;
        margin:1rem;
        border-radius: 1rem;
    }
`
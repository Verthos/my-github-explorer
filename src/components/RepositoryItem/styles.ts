import styled from "styled-components";

export const Card = styled.li`
    align-items: center;
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
        display: flex;
        text-align: left;
    }
    
    p{
        
        font-size: 0.9rem;
    }
    
    img{
        width: 4rem;
        height: 4rem;
        margin: 1rem;
        border-radius: 3rem;
    }
    a{
        text-decoration: none;
    }
    
`
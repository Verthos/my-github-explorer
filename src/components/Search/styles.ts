import styled from 'styled-components';


export const Container = styled.div`
    position: relative;
    display:flex;
    height: 15rem;
    width: 85%auto;
    justify-content: center;
    
`;


export const SearchBar = styled.div`
    position: absolute;
    display: flex;
    background: var(--background);
    margin-bottom: 2rem;
    bottom: 3rem;
    

    input {
        padding-left: 2rem;
        height: 3rem;
        width: 25rem;
        border-radius: 0.25rem;
        border: 0;
    }

    button {
        height: 3rem;
        padding: 1rem 1rem;
        background: var(--blue);
        border-radius: 0.25rem;
        border: 0;        
        transition: filter 0.15s;

        &:hover {
            filter: brightness(0.9);
        }
    }
`;

export const SwitchButton = styled.button`
        position: relative;
        display: inline-block;
        height: 3rem;
        width: 7rem;
        padding: 1rem 1rem;
        background: var(--blue);
        border-radius: 0.25rem;
        border: 0;
        margin: 0.1rem;
        transition: filter 0.15s;
        

        &:hover {
            filter: brightness(0.9)
        }
        &.selected {
            content: "";
            height: 3rem;
            background: var(--green)
        }
        
`;

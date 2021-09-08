import styled from 'styled-components';




export const Container = styled.form`
    display: flex;
    justify-content: center;
    max-width: 100%;
    height: 150px;
    background: var(--background);

    input {
        margin: 0 0 0 1rem;
        height: 3rem;
        width: 25rem;
        padding: 1rem;
        border-radius: 0.25rem;
        border: 0;
        
                
    }

    button {
        margin: 0 0 0 0;
        height: 3rem;
        padding: 1rem 1rem;
        background: var(--blue);
        border-radius: 0.25rem;
        border: 0;        
        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.9)
        }
    }

`

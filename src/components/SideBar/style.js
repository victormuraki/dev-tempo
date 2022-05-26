import styled from "styled-components"

export const Container = styled.div`
    h3 {
        margin-top: 6rem;
        font-size: 1.2rem;
    }

    *{
        color: var(--white);
        font-size: 1rem;
    }

    position: fixed;
    right: 0;
    height: 100%;
    background: var(--background-blur);
    backdrop-filter: blur(15px);
    width: 30rem;
    max-width: 30%;
    padding: 4rem;

`

export const Input = styled.div `
    height: 3rem;
    width: 100%;
    font-size: 1rem;

    input {
        font-size: 1rem;
        height: 100%;
        width: 80%;
        background: transparent;
        border: none;
        outline: 0;
        border-bottom: 1px solid #FFFFFF;
    }
    button {
        font-size: 0.7rem;
        height: 100%;
        width: 20%;
        background: transparent;
        border: none;
    }

    button:hover {
        color: #ffa500;
        transition: 0.5s;
    }
`

export const CityCard = styled.button`
    margin: 1.5rem 0 1.5rem 0;
    background: transparent;
    border: none;
    display: flex;
    flex-direction: column;
    font-size: 1rem;
    
    p{
        color: #97a5ad;
        transition: 1s;
        &:hover {
            color: var(--white);
    }
    }

`

export const ForecastDetail = styled.div`
    font-size: 2rem;
    margin-top: 2rem;
    p{
        margin: 1.5rem 0 1.5rem 0;

    }
`

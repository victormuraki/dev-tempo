import styled from "styled-components"

export const Container = styled.div`
    h3 {
        margin-top: 3rem;
    }

    *{
        color: var(--white);
    }
    background: var(--background-blur);
    backdrop-filter: blur(15px);
    width: 30rem;
    max-width: 100%;
    padding: 4rem;
`

export const Input = styled.div `
    height: 3rem;
    width: 100%;

    input {
        height: 100%;
        width: 80%;
        background: transparent;
        border: none;
        outline: 0;
        border-bottom: 1px solid #FFFFFF;
    }
    button {
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

export const CityCard = styled.div`
    margin: 1.5rem 0 1rem 0;
    
    p{
        color: #97a5ad;
    }
`

export const ForecastDetail = styled.div`
    margin-top: 2rem;
`
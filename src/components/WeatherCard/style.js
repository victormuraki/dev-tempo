import styled from "styled-components";

export const Container = styled.div`
    *{
        color: var(--white);
    }

    display: flex;
    align-items: flex-end;
    margin-bottom: 10rem;
    margin-left: 5rem;
    margin-right: 60%;

`

export const Content = styled.div`
    span {
        font-size: 5rem;
        font-weight: 600;
    }

    display: flex;
    flex-direction: row;
    align-items: center;

`

export const LocalAndDate = styled.div`
    margin-left: 1rem;
    display: flex;
    flex-direction: column;
    font-size: 1rem;
`

export const IconAndPrev = styled.div`
    margin-left: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    img{
        height: 3rem;
        width: 3rem;
        filter: brightness(200%);
    }
`
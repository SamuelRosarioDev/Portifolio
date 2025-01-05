import styled from "styled-components";

export const Container = styled.div`
    height: 100%;
    width: 100%;
`;

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    margin-top: 1rem;
`;

export const InfoPerfil = styled.div`
    border-radius: 1rem;
    background-color: ${props => props.theme.backgroundHeader};
    width: 90%;
    span{
        display: block;
        font-style: italic;
        font-weight: 600;
    }
`

export const InfoImg = styled.img`
    width: 8rem;
    border-radius: 10rem;
`

export const History = styled.div`
    border-radius: 1rem;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.backgroundHeader};
    width: 90%;

`

export const Ability = styled.div`
    border-radius: 1rem;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.backgroundHeader};
    width: 90%;
    padding-left: 2rem;
    ul{
        display: grid;
        grid-template-columns: repeat(3, 1fr); 
        gap: 0.5rem; 
        li{
            
            font-size: 0.8rem;
        }
    }
`
import styled from "styled-components";

export const ButtonLanguage = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props=>props.theme.background};
    width: 40px;
    height: 40px;
    border: none;
    border-radius: 10rem;
    margin: 0.5rem 0 0.5rem 0;
    cursor: pointer;
`
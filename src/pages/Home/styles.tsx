import styled from "styled-components";

export const Container = styled.div`
    background-color: ${props => props.theme.background};
    height: 100%;
`;

export const Txt = styled.h1`
    color: ${props => props.theme.text};
`;


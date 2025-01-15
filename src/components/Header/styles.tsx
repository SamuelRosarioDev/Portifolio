import styled from "styled-components";

export const ContainerHeader = styled.header`
    background-color: ${props => props.theme.backgroundHeader};
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column-reverse;
    padding-bottom: 0.5rem;
    border-radius: 2rem 2rem 0 0;
    position: fixed;
    z-index: 1;
    box-shadow:${props => props.theme.backgroundHeader} 0 0 1rem 0px;
    bottom: 0;
`

export const NavBar = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-around;

    width: 100%;
`

export const Linkers = styled.a`
    display: flex;
    align-items: center;
    flex-direction: column;
    text-decoration: none;
    gap: 0.3rem;
    svg{
        width: 2rem;
        height: 2rem;
    }

    span{
        font-size: 1rem;
    }
`

export const HeaderSoul = styled.div`
    width: 100%;
    height: 17vh;
`
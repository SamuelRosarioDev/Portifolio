import styled from "styled-components";

export const ContainerHeader = styled.header`
    background-color: ${props => props.theme.backgroundHeader};
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: ${props => props.theme.backgroundHeader} 0 0 1rem 0px;
    position: fixed;
    z-index: 1;

    @media (min-width: 841px) {
        width: 99%;
        flex-direction: row;
        justify-content: space-between;
        top: 1rem;
        left: 0.3rem;
        border-radius: 2rem;
        padding: 1rem 4rem;
    }

    @media (max-width: 840px) {
        flex-direction: column-reverse;
        bottom: 0;
        border-radius: 2rem 2rem 0 0;
        padding-bottom: 0.5rem;
    }
`;

export const NavBar = styled.nav`
    display: flex;
    align-items: center;
    width: 100%;

    @media (min-width: 841px) {
        justify-content: flex-start;
        gap: 2rem;
        width: auto;
    }

    @media (max-width: 840px) {
        justify-content: space-around;
    }
`;

export const Linkers = styled.a`
    display: flex;
    align-items: center;
    text-decoration: none;
    gap: 0.5rem;
    transition: all 0.3s ease;

    svg {
        width: 1.5rem;
        height: 1.5rem;
    }

    span {
        font-size: 1rem;
    }

    &:hover {
        color: ${props => props.theme.primary};
        transform: translateY(-2px);
    }

    @media (max-width: 840px) {
        flex-direction: column;
        gap: 0.3rem;
        width: 15rem;
        
    }
`;

export const HeaderSoul = styled.div`
    width: 100%;

    @media (min-width: 841px) {
        height: 8rem;
    }

    @media (max-width: 840px) {
        height: 8rem;
    }
`;
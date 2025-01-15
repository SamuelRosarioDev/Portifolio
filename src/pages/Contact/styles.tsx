import styled from "styled-components";

export const Container = styled.div`
    background-color: ${props => props.theme.background};
    height: 100%;
    min-height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    @media (min-width: 841px) {
        height: 86vh;
    }
`;

export const Content = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
`;

export const ContactGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
`;

export const ContactCard = styled.div<{ $color: string }>`
    background-color: ${props => props.theme.backgroundHeader};
    border-radius: 15px;
    transition: all 0.3s ease;
    
    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        background-color: ${props => props.$color};
        
        a {
            color: white;
        }
    }
`;

export const ContactLink = styled.a`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 2rem;
    color: ${props => props.theme.text};
    text-decoration: none;
    width: 160px;
    
    span {
        font-size: 1.1rem;
        font-weight: bold;
    }

    svg {
        width: 40px;
        height: 40px;
        transition: transform 0.3s ease;
    }

    &:hover svg {
        transform: scale(1.1);
    }

    &:hover span {
        color: white;
    }
`;
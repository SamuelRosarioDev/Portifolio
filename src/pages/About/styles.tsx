import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

export const Container = styled.div`
    min-height: 100vh;
    width: 100%;
    background-color: ${props => props.theme.background};
    padding: 2rem;
`;

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    max-width: 1000px;
    margin: 0 auto;
    animation: ${fadeIn} 0.5s ease-out;
`;

export const InfoPerfil = styled.div`
    border-radius: 1rem;
    padding: 2rem;
    text-align: center;
    width: 100%;

    h4 {
        font-size: 2rem;
        color: ${props => props.theme.text};
        margin-bottom: 0.5rem;
    }

    span {
        display: block;
        font-style: italic;
        font-weight: 600;
        font-size: 1.2rem;
        color: ${props => props.theme.primary};
    }
`;

export const InfoImg = styled.img`
    width: 12rem;
    height: 12rem;
    border-radius: 50%;
    object-fit: cover;
    border: 4px solid ${props => props.theme.primary};
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease;

    &:hover {
        transform: scale(1.05);
    }
`;

export const History = styled.div`
    border-radius: 1rem;
    padding: 2rem;
    background-color: ${props => props.theme.backgroundHeader};
    width: 100%;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);

    p {
        color: ${props => props.theme.text};
        line-height: 1.8;
        font-size: 1.1rem;
        text-align: justify;

        b {
            color: ${props => props.theme.primary};
        }
    }
`;

export const Ability = styled.div`
    border-radius: 1rem;
    padding: 2rem;
    background-color: ${props => props.theme.backgroundHeader};
    width: 100%;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);

    ul {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
        gap: 1rem;
        list-style: none;
        padding: 0;

        li {
            font-size: 1rem;
            color: ${props => props.theme.text};
            padding: 0.8rem 1.2rem;
            background: ${props => props.theme.background};
            border-radius: 8px;
            text-align: center;
            transition: all 0.3s ease;
            border: 2px solid transparent;

            &:hover {
                transform: translateY(-3px);
                border-color: ${props => props.theme.primary};
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            }
        }
    }
`;
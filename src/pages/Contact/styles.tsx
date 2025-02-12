import styled from "styled-components";

export const Container = styled.div`
    background-color: ${props => props.theme.background};
    height: 100%;
    min-height: 86vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    @media (min-width: 880px) {
    }
`;

export const Content = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 1000px) {
        flex-direction: column;
    }
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

export const ContactForm = styled.form`
    max-width: 600px;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
    /* background-color: ${props => props.theme.backgroundHeader}; */
    padding: 2rem;
    border-radius: 8px;
`;
export const BoxInput = styled.div`
    display: flex;
    width: 100%;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    @media (max-width: 480px) {
    flex-wrap: wrap;
    }

`

export const Input = styled.input`
    width: 100%;
    padding: 12px;
    font-size: 1rem;
    border: none;
    border-bottom: 1px solid ${props => props.theme.primary};
    border-left: 1px solid ${props => props.theme.primary};
    border-radius: 5px;
    background-color: ${props => props.theme.backgroundHeader};
    color: ${props => props.theme.text};
    transition: border 0.3s ease;

    &:focus {
        border-color: ${props => props.theme.secondary};
        outline: none;
    }

`;

export const TextArea = styled.textarea`
    width: 100%;
    padding: 12px;
    font-size: 1rem;
    border: 1px solid #ddd;
    border-radius: 5px;
    background-color: ${props => props.theme.backgroundHeader};
    border: none;
    border-bottom: 1px solid ${props => props.theme.primary};
    border-left: 1px solid ${props => props.theme.primary};
    color: ${props => props.theme.text};
    transition: border 0.3s ease;
    resize: vertical;

    &:focus {
        border-color: ${props => props.theme.secondary};
        outline: none;
    }


`;

export const Button = styled.button`
    padding: 12px;
    font-size: 1.1rem;
    color: ${props => props.theme.text};
    border: none;

    background-color: ${props => props.theme.backgroundHeader};
    border-bottom: 1px solid ${props => props.theme.primary};
    border-left: 1px solid ${props => props.theme.primary};

    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: ${props => props.theme.primary};
    }

    &:focus {
        outline: none;
    }
`;

export const Title = styled.h3`
    font-size: 2rem;
    color: ${props => props.theme.text};
    margin-bottom: 1.5rem;
    text-align: center;
    @media (max-width: 1000px) {
        font-size: 1.6rem;

    }
`;
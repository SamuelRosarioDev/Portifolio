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

const rainbowText = keyframes`
    0% { color: #FF0088; text-shadow: 2px 2px 8px #FF0088; }
    20% { color: #3498db; text-shadow: 2px 2px 8px #3498db; }
    40% { color: #2ecc71; text-shadow: 2px 2px 8px #2ecc71; }
    60% { color: #e74c3c; text-shadow: 2px 2px 8px #e74c3c; }
    80% { color: #9b59b6; text-shadow: 2px 2px 8px #9b59b6; }
    100% { color: #FF0088; text-shadow: 2px 2px 8px #FF0088; }
`;

export const Container = styled.div`
    height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 2rem;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    animation: ${fadeIn} 1s ease-out;
`;

export const Name = styled.h1`
    font-size: 3.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
    animation: ${rainbowText} 8s linear infinite;
    
    @media (max-width: 768px) {
        font-size: 2.5rem;
    }
`;

export const Role = styled.h2`
    font-size: 2rem;
    font-weight: 500;
    margin-bottom: 1.5rem;
    color: ${props => props.theme.text};
    
    @media (max-width: 768px) {
        font-size: 1.5rem;
    }
`;

export const Description = styled.p`
    font-size: 1.2rem;
    line-height: 1.6;
    max-width: 600px;
    color: ${props => props.theme.text};
    
    @media (max-width: 768px) {
        font-size: 1rem;
    }
`;

export const Highlight = styled.span`
    color: ${props => props.theme.secondary};
    font-weight: bold;
`;
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
    padding: 2rem;
    min-height: 100%;
    background-color: ${props => props.theme.background};
`;

export const ProjectGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }
`;

export const ProjectCard = styled.div`
    background-color: ${props => props.theme.backgroundHeader};
    border-radius: 10px;
    padding: 1.5rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    animation: ${fadeIn} 0.5s ease-out;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
    aspect-ratio: 4/3;
    max-width: 350px;
    margin: 0 auto;

    @media (max-width: 768px) {
        padding: 1rem;
        aspect-ratio: 4/3;
    }
`;
export const ProjectLinks = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
    opacity: 0;
    transition: all 0.3s ease;
    border-radius: 8px;
`;
export const ProjectImage = styled.div`
    position: relative;
    width: 100%;
    height: 75%;
    border-radius: 8px;
    overflow: hidden;

    @media (max-width: 768px) {
        height: 70%;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.3s ease;
    }

    &:hover {
        ${ProjectLinks} {
            opacity: 1;
        }
        
        img {
            transform: scale(1.02);
        }
    }
`;

export const TechStack = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 1rem;

    @media (max-width: 768px) {
        gap: 0.4rem;
    }
`;

export const TechIcon = styled.img`
    width: 32px;
    height: 32px;

    @media (max-width: 768px) {
        width: 28px;
        height: 28px;
    }

    transition: transform 0.3s ease;

    &:hover {
        transform: scale(1.2);
    }
`;



export const ProjectLink = styled.a`
    background-color: transparent;
    color: #fff;
    padding: 0.75rem 1.5rem;
    border-radius: 25px;
    text-decoration: none;
    font-weight: bold;
    transition: all 0.3s ease;
    z-index: 2;
    border: 2px solid ${props => props.theme.secondary};
    position: relative;
    overflow: hidden;
    
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 0;
        height: 100%;
        background-color: ${props => props.theme.secondary};
        transition: all 0.3s ease;
        z-index: -1;
        border-radius: 23px;
    }

    &:hover {
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
        
        &::before {
            width: 100%;
        }
    }

    &:active {
        box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
    }

    @media (max-width: 768px) {
        padding: 0.5rem 1.2rem;
        font-size: 0.9rem;
    }
`;
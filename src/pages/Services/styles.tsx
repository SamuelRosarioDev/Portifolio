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
    display: flex;
    justify-content: center;
`;

export const ServicesGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    max-width: 1200px;
    padding: 0 1rem;

    @media (max-width: 768px) {
        gap: 1.5rem;
    }
`;

export const ServiceCard = styled.div`
    background-color: ${props => props.theme.backgroundHeader};
    border-radius: 15px;
    padding: 2rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    animation: ${fadeIn} 0.5s ease-out;
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 280px;
    max-width: calc(33.333% - 1.34rem);

    @media (max-width: 1024px) {
        max-width: calc(50% - 1rem);
    }

    @media (max-width: 768px) {
        max-width: 100%;
    }
`;

export const ServiceIcon = styled.div`
    color: ${props => props.theme.text};
    display: flex;
    align-items: center;
    justify-content: center;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .5rem;
    margin-bottom: 1rem;
`;

export const ServiceTitle = styled.h2`
    color: ${props => props.theme.text};
    font-size: 1.5rem;
`;

export const ServiceDescription = styled.p`
    color: ${props => props.theme.text};
    font-size: 1rem;
    margin-bottom: 1.5rem;
    line-height: 1.6;
`;

export const ServicesList = styled.ul`
    list-style: none;
    padding: 0;
    text-align: left;
    width: 100%;
`;

export const ServiceItem = styled.li`
    color: ${props => props.theme.text};
    margin: 0.5rem 0;
    padding-left: 1.5rem;
    position: relative;
    font-size: 0.9rem;

    &::before {
        content: "•";
        color: ${props => props.theme.secondary};
        position: absolute;
        left: 0;
        font-weight: bold;
    }
`;
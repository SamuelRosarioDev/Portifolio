import styled from "styled-components";

export const Container = styled.div`
    background-color: ${props => props.theme.background};
    min-height: 100%;
    padding: 2rem;
    display: flex;
    justify-content: center;
`;

export const Content = styled.div`
    max-width: 1200px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;

export const DownloadSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 1rem;

    h1 {
        color: ${props => props.theme.text};
        font-size: 2rem;
    }

    p {
        color: ${props => props.theme.text};
        font-size: 1.1rem;
    }
`;

export const DownloadButton = styled.a`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background-color: ${props => props.theme.primary};
    color: white;
    padding: 1rem 2rem;
    border-radius: 8px;
    text-decoration: none;
    font-weight: bold;
    transition: all 0.3s ease;

    svg {
        transition: transform 0.3s ease;
    }

    &:hover {
        background-color: ${props => props.theme.secondary};
    }
`;

export const PreviewSection = styled.div`
    width: 100%;
    height: 800px;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    iframe {
        width: 100%;
        height: 100%;
        border: none;
    }

    @media (max-width: 768px) {
        height: 500px;
    }
`;
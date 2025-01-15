import styled from "styled-components";

export const ContainerBox = styled.div`
    border-radius: 1rem;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${props => props.theme.backgroundHeader};
    width: 100%;
    gap: 2rem;

    @media (max-width: 768px) {
        flex-direction: column-reverse;
        padding: 1.5rem;
        gap: 1.5rem;
        width: 100%;
    }

    @media (max-width: 480px) {
        padding: 1rem;
        gap: 1rem;
    }
`;
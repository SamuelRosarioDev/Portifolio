import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "PT Sans", serif;
    }

    body {
        min-height: 100vh;
    }

    #root {
        height: 100%;
        display: flex;
        background-color: ${({ theme }) => theme.background};
        flex-direction: column-reverse;
    }

    @media (min-width: 841px) {
        #root {
            flex-direction: column;
        }
    }

    a, h1, h2, h3, h4, h5, h6, li, input, p, span, label, button {
        color: ${({ theme }) => theme.text};
    }

    /* 🎨 Scrollbar customizado */
    ::-webkit-scrollbar {
        width: 10px; /* Largura da scrollbar */
    }

    ::-webkit-scrollbar-track {
        background: ${({ theme }) => theme.background}; /* Cor de fundo */
        border-radius: 5px;
    }

    ::-webkit-scrollbar-thumb {
        background: ${({ theme }) => theme.primary}; /* Cor da barra */
        border-radius: 5px;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: ${({ theme }) => theme.secondary}; /* Cor ao passar o mouse */
    }

    /* Firefox */
    * {
        scrollbar-width: thin;
        scrollbar-color: ${({ theme }) => theme.primary} ${({ theme }) => theme.background};
        border-radius: 5px;
    }
`;

export default GlobalStyles;

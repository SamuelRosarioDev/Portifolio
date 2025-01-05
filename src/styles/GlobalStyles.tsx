import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "PT Sans", serif;
    }

    #root{
        height: 100vh;
        display: flex;
        flex-direction: column-reverse;
        background-color: ${props => props.theme.background};
    }

    a, h1, h2, h3, h4, h5, h6, li, input, p, span, label, button {
        color: ${props => props.theme.text};
    }
`

export default GlobalStyles
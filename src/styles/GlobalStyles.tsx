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
        margin-bottom: 6rem;
    }
`

export default GlobalStyles
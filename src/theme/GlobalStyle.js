import { createGlobalStyle } from "styled-components";

const GlobalSyle = createGlobalStyle`

*, *::before, *::after{
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

html{
    font-size: 62.5%
}

body{
    font-size: 1.6rem;
    font-family: "Montserrat", sans-serif;
    margin: 0;
    padding: 0;
}
`;

export default GlobalSyle;

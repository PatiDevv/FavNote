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
    padding-left: 150px;
}
`;

export default GlobalSyle;

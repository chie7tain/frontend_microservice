import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body{
    font-family: 'Roboto', sans-serif;
    background-color: #fafafa;
    display: flex;
    flex-direction: column;

  }
`;

export default GlobalStyles;

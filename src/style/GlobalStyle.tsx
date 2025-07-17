// GlobalStyle.js
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
   
  }

  html, body {
    width: 100%;
    height: 100%;
     color: black;
    background-color: white;
  }

  #root {
    width: 100%;
    height: 100%;
     color: black;
    background-color: white;
  }
`;

export default GlobalStyle;

import { createGlobalStyle } from "styled-components";
import "./sf-fonts.css";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family:"SF Pro Display";
    font-size: 30px;
    font-weight: 400;
    color:black
   
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

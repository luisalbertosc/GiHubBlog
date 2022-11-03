import { createGlobalStyle } from "styled-components";
import firaCode from "../assets/fonts/FiraCode-Regular.woff";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'FiraCode';
    src: url(${firaCode}) format('woff');
    font-weight: 400;
    font-style: normal;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :focus {
    outline: 0;
  }
  body {
    background-color: ${({theme})=> theme['gray-900']};
    color: ${({theme})=> theme['gray-200']};
    -webkit-font-smoothing: antialiased;
  }
  body, input, textarea, button {
    font: 400 1rem Nunito, sans-serif;
    line-height: 160%;
    color: ${({theme})=> theme['gray-200']};

  }

  ul{
    list-style: none;
  }

  a{
    color: inherit;
    text-decoration: none;
  }

  button{
        border: none;
        background: transparent;
        cursor: pointer;
    }
`;

// font-family: 'Nunito', sans-serif;
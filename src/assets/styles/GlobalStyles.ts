import { createGlobalStyle } from "styled-components";

import { getTheme } from "./themes-color";

export default createGlobalStyle`
  html {
    width: 100%;
    height: 100%;
  }

  body {
    width: 100%;
    height: 100%;

    margin: 0px;
    padding: 0px;
    background: ${getTheme().backgroundColor};
    font-family: Roboto, sans-serif;
    font-weight: 400;
    font-size: 14px;
    display: flex;
  }
  
  #root {
    flex: 1;
    display: flex;
    height: 100%;
    justify-content: center;
  }

  * {
    box-sizing: border-box;
  }
 
`;



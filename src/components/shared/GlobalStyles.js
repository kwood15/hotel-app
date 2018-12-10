import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  #root {
    display: flex;
    min-height: 100%;
    flex-direction: column;
  }

  html {
    height: 100%;
    margin: 0;
    padding: 0;
  }

  body {
    height: 100%;
    background-color: ${props => props.theme.bodyColor};
    font-family: ${props => props.theme.fontFamily};
    color: ${props => props.theme.textColor}
    font-size: 1rem;
    margin: 0;
    padding: 0;
  }

  ul, ol {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  a {
    color: ${props => props.theme.primaryColor};
    text-decoration: none;
  }

  p {
    color: ${props => props.theme.black};
  }

  h1, h2, h3, h4, h5, h6 {
    color: ${props => props.theme.headingColor};
  }

  fieldset {
    border: none;
    padding: 0;
    margin: 0;
  }

  legend {
    font-weight: bold;
  }
`;

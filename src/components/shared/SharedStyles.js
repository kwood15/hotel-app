import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${props => props.theme.fontFamily};
  }

  h1 {
    background: blue;
  }

  ul {
    list-style: none;
  }
`

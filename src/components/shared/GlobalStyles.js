import { createGlobalStyle }  from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.theme.bodyColor};
    font-family: ${props => props.theme.fontFamily};
    font-size: 1rem;
    line-height: 1.2;
    margin: 0;
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
    font-size: 1rem;
    font-weight: bold;
  }

  .separator {
    color: ${props => props.theme.textColor};
    padding: 0 4px;
    font-size: 0.85em;
  }
`;

import styled, { createGlobalStyle }  from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${props => props.theme.fontFamily};
    margin: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    color: ${props => props.theme.headingColor};
  }
`;

export const Title = styled.h1`
  font-size: 1.5em;
  color: ${props => props.theme.primaryColor}
`;

export const NavLink = styled.a`
  color: ${props => props.theme.primaryColor}
`;

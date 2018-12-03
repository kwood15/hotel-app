import styled, { createGlobalStyle }  from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${props => props.theme.fontFamily};
    font-size: 1rem;
    line-height: 1.2;
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
  color: ${props => props.theme.white}
`;

export const Button = styled.button`
  color: ${props => props.theme.primaryColor},
  background: ${props => props.theme.secondaryColor}
  border: none;
  padding: 10px 14px;
  text-transform: uppercase;
`;

export const Badge = styled(Button)`
  border-radius: 5px;
`;

export const Input = styled.input`
  padding: 10px 14px;
`;

import styled, { createGlobalStyle }  from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Box } from '@rebass/grid';

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.theme.bodyColor};
    font-family: ${props => props.theme.fontFamily};
    font-size: 1rem;
    line-height: 1.2;
    margin: 0;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  a {
    color: ${props => props.theme.primaryColor};
  }

  p {
    color: ${props => props.theme.black};
  }

  h1, h2, h3, h4, h5, h6 {
    color: ${props => props.theme.headingColor};
  }

  fieldset {
    border: 0;
  }
`;

export const ContainerWrapper = styled(Box)`
  max-width: 1024px;
`;

export const Title = styled.h1`
  font-size: 1.75em;
  margin-top: 0;
  color: ${props => props.theme.primaryColor};
`;

export const Link = styled.a`
  color: ${props => props.theme.primaryColor};
  text-decoration: none;
`;

export const NavigationLink = styled(NavLink)`
  color: ${props => props.theme.white};
  text-decoration: none;
`;

export const Button = styled.button`
  color: ${props => props.theme.primaryColor};
  background-color: ${props => props.theme.secondaryColor};
  cursor: pointer;
  border: none;
  border-radius: .3125em;
  font-weight: bold;
  text-transform: uppercase;
  box-shadow: inset 0 -4px 0 -1px #fbc02d;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  &:hover {
    background-color: #fddc76;
  }
`;

export const Badge = styled(Button)`
  border-radius: 5px;
  color: ${props => props.theme.primaryColor};
  background-color: ${props => props.theme.white};
`;


export const Input = styled.input`
  font-size: 1rem;
  border: 0;
  padding: 8px 14px 8px;
  border-radius: 2px;
`;

export const Form = styled.form`
  flex: 1;
`;

export const FooterWrapper = styled.footer`
  position: sticky;
  margin-top: 32px;
  background-color: ${props => props.theme.midGrey};
`;

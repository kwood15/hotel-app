import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Box } from '@rebass/grid';

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
`;

export const NavigationLink = styled(NavLink)`
  color: ${props => props.theme.white};
`;

export const BreadcrumbLink = styled(NavLink)`
  font-size: 0.85rem;
  color: ${props => props.theme.textColor};
  &.active {
    color: ${props => props.theme.blue};
    text-decoration: underline;
  }
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
  color: ${props => props.theme.white};
  background-color: ${props => props.theme.black};
`;

export const Form = styled.form`
  flex: 1;
`;

export const Input = styled.input`
  font-size: 1rem;
  border: 0;
  padding: 8px 14px 8px;
  border-radius: 2px;
`;

export const FooterWrapper = styled.footer`
  position: sticky;
  margin-top: 32px;
  background-color: ${props => props.theme.midGrey};
`;


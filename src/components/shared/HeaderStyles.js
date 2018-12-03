import styled from 'styled-components';
import { NavLink } from './SharedStyles';

export const HeaderWrapper = styled.header`
  background: ${props => props.theme.primaryColor};
  padding: 8px 20px;
`;

export const StyledLink = styled(NavLink)`
  color: ${props => props.theme.white}
`;

export const Logo = styled.img`
  width: 4rem;
`;


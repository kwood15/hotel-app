import React from 'react';
import { NavLink } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Flex, Box } from '@rebass/grid';
import Search from '../search';
import { HeaderWrapper, Logo } from './HeaderStyles';
import logo from '../../img/logo.svg';

export const Header = () => (
  <HeaderWrapper >
    <Flex justifyContent="space-between">
      <Box>
        <Logo src={logo} alt="Company logo" />
      </Box>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Cards</NavLink>
          </li>
          <li>
            <NavLink to="/search-results/hotels">Cards</NavLink>
          </li>
        </ul>
      </nav>
      <Search />
    </Flex>
  </HeaderWrapper>

  // <FontAwesomeIcon icon="hotel" size="3x" color="white" />
);

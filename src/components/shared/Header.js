import React from 'react';
import { Flex, Box } from '@rebass/grid';

import Search from '../search';
import { NavigationLink } from './SharedStyles';
import { HeaderWrapper, Logo } from './HeaderStyles';
import logo from '../../img/logo.svg';

export const Header = () => (
  <HeaderWrapper >
    <Flex justifyContent="space-between" alignItems="center">
      <Box>
        <Logo src={logo} alt="Company logo" />
      </Box>
      <Flex flex="1 1 auto">
        <nav>
          <ul>
            <li>
              <NavigationLink to="/" />
            </li>
            <li>
              <NavigationLink to="/search-results/hotels">Cards</NavigationLink>
            </li>
          </ul>
        </nav>
      </Flex>
      <Search />
    </Flex>
  </HeaderWrapper>
);

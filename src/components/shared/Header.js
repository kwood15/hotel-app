import React from 'react';
import { Flex, Box } from '@rebass/grid';

import Search from '../search';
import { NavigationLink } from './SharedStyles';
import { HeaderWrapper, Logo } from './HeaderStyles';
import logo from '../../img/logo.svg';

export const Header = () => (
  <HeaderWrapper className="header">
    <Flex width={[1]} justifyContent="space-between" alignItems="center">
      <Box>
        <NavigationLink to="/">
          <Logo src={logo} alt="Company logo" />
        </NavigationLink>
      </Box>
      <Flex flex="1 1 auto">
        <nav className="navigation">
          <ul>
            <li>
              <NavigationLink to="/" />
            </li>
            <li>
              <NavigationLink to="/search-results/hotels">Hotels</NavigationLink>
            </li>
          </ul>
        </nav>
      </Flex>
      <Search />
    </Flex>
  </HeaderWrapper>
);

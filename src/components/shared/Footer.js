import React from 'react';
import { Flex } from '@rebass/grid';
import { FooterWrapper } from './SharedStyles';

export const Footer = () => (
  <FooterWrapper>
    <Flex alignItems="center" flexDirection="column">
      <p>
        <small>
          Icons made BY
          <a href="https://www.freepik.com/" title="Freepik">Freepik</a>
          from
          <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
          is licensed by
          <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0">CC 3.0 BY</a>
        </small>
      </p>
    </Flex>
  </FooterWrapper>
);

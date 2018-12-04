import React from 'react';
import { ContainerWrapper } from './SharedStyles';

const Container = props => (
  <ContainerWrapper {...props} mx='auto' css={{ maxWidth: '1024px' }} />
);

Container.defaultProps = {
  mx: 'auto'
};

export default Container;

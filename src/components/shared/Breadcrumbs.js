import React from 'react';
import { Flex } from '@rebass/grid';
import { BreadcrumbLink } from './SharedStyles';

export const Breadcrumbs = () => (
  <nav aria-label="Breadcrumb" className="breadcrumbs">
    <Flex as="ol" itemScope itemType="http://schema.org/BreadcrumbList" my={2}>
      <li itemProp="itemListElement" itemScope itemType="http://schema.org/ListItem">
        <BreadcrumbLink to="/" itemProp="item" activeClassName="active">
          <span itemProp="name">Home</span>
          <meta itemProp="position" content="1" />
        </BreadcrumbLink>
      </li>
      <li><span className="u-separator">&gt;</span></li>
      <li itemProp="itemListElement" itemScope itemType="http://schema.org/ListItem">
        <BreadcrumbLink to="/hotels" itemProp="item">
          <span itemProp="name">Hotels</span>
          <meta itemProp="position" content="2" />
        </BreadcrumbLink>
      </li>
    </Flex>
  </nav>
);

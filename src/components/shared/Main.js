import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Container from './Container';
import { Breadcrumbs } from './Breadcrumbs';
import HotelContainer from '../hotel/HotelContainer';

export const Main = () => (
  <main>
    <Container>
      <Breadcrumbs />
      <Switch>
        <Route exact path='/' />
        <Route path='/hotels' component={HotelContainer} />
      </Switch>
    </Container>
  </main>
);

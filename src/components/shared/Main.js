import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Container from './Container';
import { Breadcrumbs } from './Breadcrumbs';
import SearchResults from '../views/SearchResults';

export const Main = () => (
  <main>
    <Container>
      <Breadcrumbs />
      <Switch>
        <Route exact path='/' />
        <Route path='/search-results/hotels' component={SearchResults} />
      </Switch>
    </Container>
  </main>
);

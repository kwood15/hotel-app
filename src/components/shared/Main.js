import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SearchResults from '../views/SearchResults';

export const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' />
      <Route path='/search-results/hotels' component={SearchResults} />
    </Switch>
  </main>
);

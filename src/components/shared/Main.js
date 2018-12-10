import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HotelContainer from '../hotel/HotelContainer';

export const Main = () => (
  <main className="main-content">
    <Switch>
      <Route exact path="/" />
      <Route path="/hotels" component={HotelContainer} />
    </Switch>
  </main>
);

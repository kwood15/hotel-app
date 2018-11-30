import React from 'react';
import { Link } from 'react-router-dom';
import Search from '../search';

export const Header = () => (
  <header>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/search-results/hotels">Hotels</Link>
        </li>
      </ul>
    </nav>
    <Search />
  </header>
);

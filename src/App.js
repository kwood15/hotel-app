import React, { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './components/shared/SharedStyles';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheck, faSearch } from '@fortawesome/free-solid-svg-icons';

import { Header } from './components/shared/Header';
import { Main } from './components/shared/Main';
import { Footer } from './components/shared/Footer';

export const theme = {
  textColor: '#383838',
  bodyColor: '#f9f8f6',
  primaryColor: '#411485',
  secondaryColor: '#fcc82b',
  offersColor: '#E6175C',
  white: '#ffffff',
  black: '#000000',
  lightGrey: '#e0e0e0',
  midGrey: '#e0e0e0',
  headingColor: '#333333',
  fontFamily: 'Lato, Arial, sans-serif'
};

library.add(faCheck, faSearch);

const App = () => (
  <ThemeProvider theme={theme}>
    <Fragment>
      <GlobalStyle />
      <Header />
      <Main />
      <Footer />
    </Fragment>
  </ThemeProvider>
);

export default App;

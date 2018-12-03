import React, { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './components/shared/SharedStyles';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faHotel } from '@fortawesome/free-solid-svg-icons';

import { Header } from './components/shared/Header';
import { Main } from './components/shared/Main';
import { Footer } from './components/shared/Footer';

export const theme = {
  white: '#ffffff',
  primaryColor: '#411485',
  headingColor: '#333333',
  fontFamily: 'Lato, Arial, sans-serif'
};

library.add(faHotel);

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

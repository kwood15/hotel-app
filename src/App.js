import React, { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheck, faSearch } from '@fortawesome/free-solid-svg-icons';

import { GlobalStyles } from './components/shared/GlobalStyles';
import { UtilitiesStyles } from './components/shared/UtilitiesStyles';

import { Header } from './components/shared/Header';
import { Breadcrumbs } from './components/shared/Breadcrumbs';
import Container from './components/shared/Container';
import { Main } from './components/shared/Main';
import { Footer } from './components/shared/Footer';
import './scss/main.scss';

export const theme = {
  textColor: '#383838',
  bodyColor: '#f9f8f6',
  primaryColor: '#411485',
  secondaryColor: '#fcc82b',
  offersColor: '#E6175C',
  white: '#ffffff',
  lightGrey: '#e0e0e0',
  midGrey: '#e0e0e0',
  black: '#000000',
  blue: '#399cda',
  headingColor: '#333333',
  footerColor: '#e0e0e0',
  labelColor: '#656565',
  placeholderColor: '#b3b1b1',
  placeholderBackground: '#f9f8f699',
  fontFamily: 'Lato, Arial, sans-serif',
  breakpoints: ['32em', '48em', '64em']
};

library.add(faCheck, faSearch);

const App = () => (
  <ThemeProvider theme={theme}>
    <Fragment>
      <GlobalStyles />
      <UtilitiesStyles />
      <Header />
      <Container>
        <Breadcrumbs />
        <Main />
      </Container>
      <Footer />
    </Fragment>
  </ThemeProvider>
);

export default App;

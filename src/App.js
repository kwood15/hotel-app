import React from 'react';
import { ThemeProvider } from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons';

import { Header } from './components/shared/Header';
import { Main } from './components/shared/Main';
import { Footer } from './components/shared/Footer';

import { theme } from './components/shared/Theme';
// import { GlobalStyle } from './components/shared/SharedStyles';

library.add(faStroopwafel);

const App = () => (
  <ThemeProvider theme={theme}>
    <section>
      <Header />
      <Main />
      <Footer />
    </section>
  </ThemeProvider>
);

export default App;

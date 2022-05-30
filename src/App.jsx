import React from 'react';
import Content from './components/Content';
import Provider from './components/Context/Provider';
import Header from './components/Header';
import { GlobalStyle } from './styles/global';

function App() {
  return (
    <Provider>
      <Header />
      <Content />
      <GlobalStyle />
    </Provider>
  );
}

export default App;

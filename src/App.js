import React from 'react';
import GlobalStyle from './GlobalStyle';
import { BrowserRouter } from 'react-router-dom';
import Header from './layout/Header/Header';
import Router from './Router';
import Footer from './layout/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <GlobalStyle />
        <Header />
        <Router />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
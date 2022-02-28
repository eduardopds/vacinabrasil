import './App.css';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Main from './Components/Main/Main';
import { ThemeContextProvider } from './ThemeContext';

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <ThemeContextProvider>
          <Header />
          <Main />
          <Footer />
        </ThemeContextProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;

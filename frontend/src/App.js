import './App.css';
import Listagem from './Components/Listagem/Listagem';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import UserCreate from './Components/User/UserCreate/UserCreate';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import UserUpdate from './Components/User/UserUpdate/UserUpdate';

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <main className='AppBody'>
          <Routes>
            <Route path={'/'} element={<Listagem filter='default' />} />
            <Route path={'/cadastro'} element={<UserCreate></UserCreate>} />
            <Route path={'/edicao/:id'} element={<UserUpdate></UserUpdate>} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;

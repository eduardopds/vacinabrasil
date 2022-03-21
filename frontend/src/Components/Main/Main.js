import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import Listing from '../Listing/Listing';
import UserCreate from '../User/UserCreate/UserCreate';
import UserUpdate from '../User/UserUpdate/UserUpdate';
import { ThemeContext } from '../../ThemeContext';
import UserStats from '../Stats/Stats';
import styles from './Main.module.css';

const Main = () => {
  const themeContext = useContext(ThemeContext);
  const background = themeContext.theme.background;

  return (
    <main className={styles.appBody} style={{ background: background }}>
      <Routes>
        <Route path={'/'} element={<Listing />} />
        <Route path={'/cadastro'} element={<UserCreate></UserCreate>} />
        <Route path={'/edicao/:id'} element={<UserUpdate></UserUpdate>} />
        <Route path='/estatisticas' element={<UserStats />} />
      </Routes>
    </main>
  );
};

export default Main;

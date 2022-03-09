import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import Listagem from '../Listagem/Listagem';
import UserCreate from '../User/UserCreate/UserCreate';
import UserUpdate from '../User/UserUpdate/UserUpdate';
import { ThemeContext } from '../../ThemeContext';
import styles from './Main.module.css';

const Main = () => {
  const themeContext = useContext(ThemeContext);
  const background = themeContext.theme.background;

  return (
    <main className={styles.appBody} style={{ background: background }}>
      <p>{themeContext.nome}</p>
      <Routes>
        <Route path={'/'} element={<Listagem />} />
        <Route path={'/cadastro'} element={<UserCreate></UserCreate>} />
        <Route path={'/edicao/:id'} element={<UserUpdate></UserUpdate>} />
      </Routes>
    </main>
  );
};

export default Main;

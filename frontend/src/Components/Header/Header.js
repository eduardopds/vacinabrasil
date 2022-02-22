import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import { ReactComponent as Logo } from '../../Assets/logo.svg';
import { ReactComponent as Add } from '../../Assets/add.svg';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link className={styles.logo} to='/'>
          <Logo />
        </Link>
        <Link className={styles.add} to='/cadastro'>
          <Add />
        </Link>
      </nav>
    </header>
  );
};

export default Header;

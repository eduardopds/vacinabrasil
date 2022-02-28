import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import { ReactComponent as Add } from '../../Assets/add.svg';
import { ReactComponent as Vaccine } from '../../Assets/vaccine.svg';

import { ThemeContext } from '../../ThemeContext';
import Toggle from '../Toogle/Toggle';

const Header = () => {
  const themeContext = useContext(ThemeContext);
  const backgroundHeader = themeContext.theme.header;

  const [toggled, setToggled] = React.useState(false);
  const handleClick = () => {
    setToggled((s) => !s);
    themeContext.toggleTheme();
  };

  return (
    <header className={styles.header} style={{ background: backgroundHeader }}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <Link className={styles.svg} to='/'>
            <Vaccine />
          </Link>
        </div>

        <div className={styles.action}>
          <Link className={styles.add} to='/cadastro'>
            <Add />
          </Link>
          <Toggle onClick={handleClick} toggled={toggled} />
        </div>
      </nav>
    </header>
  );
};

export default Header;

import React from 'react';
import styles from './Search.module.css';

const Search = ({ onChange }) => {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor=''></label>
      <input
        className={styles.input}
        placeholder='Digite o nome a ser pesquisado'
        onChange={onChange}
      />
    </div>
  );
};

export default Search;

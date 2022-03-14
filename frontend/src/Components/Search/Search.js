import React from 'react';
import styles from './Search.module.css';
import Select from 'react-select';

const Search = ({ onChange, onChangeField, options }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.filter}>
        <p>Filtrar por:</p>
        <Select
          options={options}
          defaultValue={options[0]}
          onChange={onChangeField}
        />
      </div>
      <div className={styles.container}>
        <label className={styles.label} htmlFor=''></label>
        <input
          className={styles.input}
          placeholder='Digite o valor a ser pesquisado'
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default Search;

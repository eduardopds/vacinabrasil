import React from 'react';
import styles from './Input.module.css';

const Input = ({
  label,
  type,
  maxLength,
  name,
  value,
  onChange,
  error,
  onBlur,
  mask,
  placeholder,
}) => {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        className={styles.input}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        maxLength={maxLength}
        placeholder={placeholder}
      />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default Input;

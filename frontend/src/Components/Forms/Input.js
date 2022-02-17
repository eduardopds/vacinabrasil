import React from "react";
import styles from "./Input.module.css";

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
        value={mask ? mask(value) : value}
        onChange={onChange}
        onBlur={onBlur}
        maxLength={maxLength}
      />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default Input;

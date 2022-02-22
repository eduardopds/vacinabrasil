import React from 'react';
import { ReactComponent as LoadingSVG } from '../../../Assets/loading.svg';
import styles from './Loading.module.css';

const Loading = () => {
  return (
    <div className={styles.loading}>
      <LoadingSVG />
    </div>
  );
};

export default Loading;

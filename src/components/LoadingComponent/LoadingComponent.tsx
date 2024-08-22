import React from 'react';
import styles from './LoadingComponent.module.scss';

const LoadingComponent: React.FC = () => {
  return (
    <div className={styles.block}>
      <div className={styles.loader}></div>
    </div>
  );
};

export default LoadingComponent;

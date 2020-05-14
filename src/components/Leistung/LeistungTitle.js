import React from 'react';
import styles from './leistungTitle.module.css';
const LeistungTitle = ({ title, subtitle }) => {
  return (
    <div className={styles.banner}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.underline}></div>
    </div>
  );
};

export default LeistungTitle;

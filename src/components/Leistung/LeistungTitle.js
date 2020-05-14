import React from 'react';
import styles from './leistungTitle.module.css';
const LeistungTitle = ({ title, subtitle }) => {
  return <h2 className={styles.heading}>{title}</h2>;
};

export default LeistungTitle;

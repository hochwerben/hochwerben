import React from 'react';
import styles from './cards.module.css';

const CardGrid = ({ children }) => (
  <div className={styles.grid}>{children}</div>
);

export default CardGrid;

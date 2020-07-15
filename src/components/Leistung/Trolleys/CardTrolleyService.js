import React from 'react';
import styles from '../cards.module.css';

const Card = () => (
  <div className={styles.container}>
    <div className={styles.card}>
      <h3 className={styles.heading}>Service</h3>

      <ul className={`${styles.details} ${styles.paddedList}`}>
        <li>Digitaldruck</li>
        <li>Konfektionieren / Säumen / Ösen</li>
      </ul>

      <span style={{ fontWeight: 'bold', marginLeft: '1rem' }}>Optional:</span>
      <ul className={styles.details} style={{ paddingTop: '0', marginTop: 0 }}>
        <li>Montage: vor Ort</li>
        <li>Fassaden- / Traversensystem</li>
        <li>Spannset</li>
      </ul>
    </div>
  </div>
);

export default Card;

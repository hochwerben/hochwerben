import React from 'react';
import styles from '../cards.module.css';

const Card = () => (
  <div className={styles.container}>
    <div className={styles.card}>
      <h3 className={styles.heading}>
        Innen
        <span className={styles.price}>
          ab € 11,95<span className={styles.mwst}>zzgl. 19% MwSt.</span>
        </span>
      </h3>
      <ul className={`${styles.details} ${styles.paddedList}`}>
        <li>1 Stück</li>
        <li>Abmaße: 500mm Ø</li>
        <li>Farbe: weiß</li>
        <li>Veredelung: ohne</li>
        <li>Innenbereich</li>
      </ul>
    </div>
  </div>
);

export default Card;

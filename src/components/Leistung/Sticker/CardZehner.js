import React from 'react';
import styles from '../cards.module.css';

const Card = () => (
  <div className={styles.container}>
    <div className={styles.card}>
      <h3 className={styles.heading}>
        10er Pack
        <span className={styles.price}>ab € 160<span className={styles.mwst}>zzgl. 19% MwSt.</span></span>
      </h3>
      
        <ul className={styles.details}>
          <li>10 Stück</li>
          <li>Abmaße: 500mm Ø</li>
          <li>Farbe: weiß</li>
          <li>Veredelung: UV-Schutz</li>
          <li>Innen- / Außenbereich</li>
        </ul>
    </div>
  </div>
);

export default Card;

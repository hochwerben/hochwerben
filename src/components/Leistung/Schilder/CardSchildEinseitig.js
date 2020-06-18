import React from 'react';
import styles from '../cards.module.css';

const Card = () => (
  <div className={styles.container}>
    <div className={styles.card}>
      <h3 className={styles.heading}>
        Einseitig
        <span className={styles.price}>
          ab € 29<span className={styles.mwst}>zzgl. 19% MwSt.</span>
        </span>
      </h3>
      <ul className={`${styles.details} ${styles.paddedList}`}>
        <li>Fläche: 0,5m²</li>
        <li>Alu-Verbundplatte</li>
        <li>Abmaße: 1.000mm x 500mm</li>
        <li>Materialstärke: 3mm</li>
        <li>Farbe: weiß lackiert (beidseitig)</li>
        <li>Kern: Kunststoff (LDPE)</li>
      </ul>
    </div>
  </div>
);

export default Card;

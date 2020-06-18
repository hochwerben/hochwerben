import React from 'react';
import styles from '../cards.module.css';

const Card = () => (
  <div className={styles.container}>
    <div className={styles.card}>
      <h3 className={styles.heading}>
        10er Pack
        <span className={styles.price}>
          ab € 750<span className={styles.mwst}>zzgl. 19% MwSt.</span>
        </span>
      </h3>
      <ul className={`${styles.details} ${styles.paddedList}`}>
        <li>10 Stück</li>
        <li>Fläche Banner: 6m²</li>
        <li>PVC Mesh Banner</li>
        <li>Abmaße: 3.410mm x 1.730mm</li>
        <li>Farbe: weiß matt</li>
        <li>Ösen: Ringsum / Abstand ca. 50cm</li>
        <li>Druck: 4/0 einseitig vierfarbig</li>
      </ul>
    </div>
  </div>
);

export default Card;

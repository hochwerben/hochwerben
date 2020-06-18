import React from 'react';
import styles from '../cards.module.css';

const Card = () => (
  <div className={styles.container}>
    <div className={styles.card}>
      <h3 className={styles.heading}>
        Komplett
        {/* <span className={styles.price}>
          ab € 85<span className={styles.mwst}>zzgl. 19% MwSt.</span>
        </span> */}
      </h3>
      <ul className={`${styles.details} ${styles.paddedList}`}>
        <li>Fläche Banner: 4m²</li>
        <li>PVC Banner / PVC Mesh Banner</li>
        <li>Abmaße: 2.000mm x 2.000mm</li>
        <li>Farbe: weiß matt</li>
        <li>Ösen: Ringsum / Abstand ca. 50cm</li>
        <li>Druck: 4/0 einseitig vierfarbig</li>
      </ul>
    </div>
  </div>
);

export default Card;

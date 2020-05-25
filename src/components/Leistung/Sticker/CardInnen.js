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
        <li>Seiten: 1</li>
        <li>Inklusive Impressum und Datenschutzerklärung</li>
        <li>Email-Adressen: 1</li>
        <li>Postfach-Speicher: 2GB</li>
        <li>Bildmaterial, Texte und Logo werden von Ihnen zugeliefert</li>
      </ul>
    </div>
  </div>
);

export default Card;

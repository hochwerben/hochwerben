import React from 'react';
import styles from './cards.module.css';
import Icons from '../Icons';

const CardTechnischeDetailsFolierung = () => (
  <div className={styles.container}>
    <div className={styles.card}>
      <h3 className={styles.heading}>Technische Details</h3>

      <ul className={`${styles.details} ${styles.paddedList}`}>
        <li>Polymere Hochleistungs-PVC-Folie mit Mikrokanälen</li>
        <li>Farbe: weiß glänzend</li>
        <li>Dicke: 70μ</li>
        <li>Kleber: permanent haftend</li>
      </ul>
      <div style={{ width: '80%', margin: '0 auto' }}>
        <Icons outside inside b1 uv cmyk />
      </div>
    </div>
  </div>
);

export default CardTechnischeDetailsFolierung;

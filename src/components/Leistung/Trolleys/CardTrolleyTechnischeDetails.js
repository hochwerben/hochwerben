import React from 'react';
import styles from '../cards.module.css';

const Card = () => (
  <div className={styles.container}>
    <div className={styles.card}>
      <h3 className={styles.heading}>Technische Details</h3>

      <ul className={`${styles.details} ${styles.paddedList}`}>
        <li>
          Maße:
          <ul>
            <li>Breite: 30cm</li>
            <li>Höhe: 102,8cm</li>
            <li>Tiefe: 40,5cm</li>
          </ul>
        </li>
      </ul>
      {/* <div style={{ width: '80%', margin: '0 auto' }}>
        <Icons outside inside b1 cmyk />
      </div>
      <ul className={`${styles.details} ${styles.paddedList}`}>
        <li>PVC Meshbanner mit Liner</li>
        <li>Farbe: weiß</li>
        <li>Gewicht: ca. 360g/m²</li>
      </ul>
      <div style={{ width: '80%', margin: '0 auto' }}>
        <Icons outside inside b1 cmyk wind />
      </div> */}

      {/* 
          <span style={{ fontWeight: 'bold', marginLeft: '1rem' }}>Optional:</span>
          <ul className={styles.details} style={{ paddingTop: '0', marginTop: 0 }}>
          <li>Hol- / Bringservice</li>
          <li>Entfolierung (bestehender Folie)</li>
          
        </ul> */}
    </div>
  </div>
);

export default Card;

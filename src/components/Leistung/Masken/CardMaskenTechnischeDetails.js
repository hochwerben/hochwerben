import React from 'react';
import styles from '../cards.module.css';
import Icons from '../../Icons';

const Card = () => (
  <div className={styles.container}>
    <div className={styles.card}>
      <h3 className={styles.heading}>Technische Details</h3>

      <ul className={`${styles.details} ${styles.paddedList}`}>
        <li>Hotmarkprint Folie</li>
        <li>Farbe: weiß matt</li>
        <li>Dicke: 70µ</li>
        <li>Kleber: permanent haftend</li>
      </ul>
      <div style={{ width: '80%', margin: '0 auto' }}>
        <Icons cmyk />
      </div>

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

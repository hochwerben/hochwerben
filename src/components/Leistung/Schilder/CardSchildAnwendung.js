import React from 'react';
import styles from '../cards.module.css';

const Card = () => (
  <div className={styles.container}>
    <div className={styles.card}>
      <h3 className={styles.heading}>Anwendung</h3>

      <ul className={`${styles.details} ${styles.paddedList}`}>
        <li>Mittel- bis langfristige Werbeanwendung</li>
        <li>Innen- / Außenbereich</li>
        <li>Fenster- / Schilderbeschriftung</li>
        <li>Privat / Gewerbetreibende / Agenturen / Städte u. Gemeinden</li>
      </ul>

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

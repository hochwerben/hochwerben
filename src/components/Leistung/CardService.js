import React from 'react';
import styles from './card.module.css';

const Card = () => (
    <div className={styles.container} style={{ marginTop: '2rem' }}>
      <div className={styles.card}>
        <h3 className={styles.heading} style={{ padding: '0.6rem 0'}}>
          Service
        </h3>
        
        <ul className={styles.details} style={{ padding: '1rem 0 0', marginBottom: 0 }}>
          <li>Flächenvorbereitung</li>
          <li>Folierung (Applizieren der Beschriftung)</li>
          
        </ul>
          <span style={{ fontWeight: 'bold', marginLeft: '1rem' }}>Optional:</span>
          <ul className={styles.details} style={{ paddingTop: '0', marginTop: 0 }}>
          <li>Hol- / Bringservice</li>
          <li>Entfolierung (bestehender Folie)</li>
          
        </ul>

      </div>
    </div>
  );

export default Card;

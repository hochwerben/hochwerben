import React from 'react';
import styles from './cards.module.css';

const Card = () => (
  <div className={styles.container}>
    <div className={styles.card}>
      <h3 className={styles.heading}>Anwendung</h3>

      <ul className={styles.details} style={{ padding: '1rem 0 2rem' }}>
        <li>Mittel- bis langfristige Werbeanwendung</li>
        <li>Innen- / Außenbereich</li>
        <li>KFZ- / Fenster- / Schilderbeschriftung</li>
        <li>Handwerk / Handel / Agenturen / Städte u. Gemeinden</li>
      </ul>
    </div>
  </div>
);

export default Card;

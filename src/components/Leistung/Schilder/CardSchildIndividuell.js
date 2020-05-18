import React from 'react';
import styles from '../cards.module.css';

const Card = () => (
  <div className={styles.container}>
    <div className={styles.card}>
      <h3 className={styles.heading}>
        Individuell
        <span className={styles.price}>individuell</span>
      </h3>

      <ul className={`${styles.details} ${styles.paddedList}`}>
        <li>
          Fläche: <em>individuell</em>
        </li>
        <li>Alu-Verbundplatte</li>
        <li>
          Abmaße: <em>individuell</em>
        </li>
        <li>Materialstärke: 3mm</li>
        <li>Farbe: weiß lackiert (beidseitig)</li>
        <li>Kern: Kunststoff (LDPE)</li>
        <li>Veredelung: bspw. UV-Schutz</li>
        <li>Verarbeitung: Fräs- / Biegarbeiten</li>
        <li>Wand- / Deckenmontage Set</li>
      </ul>
    </div>
  </div>
);

export default Card;

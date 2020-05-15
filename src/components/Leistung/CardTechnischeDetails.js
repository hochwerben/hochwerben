import React from 'react';
import styles from './cards.module.css';
import Icons from '../Icons';

const Card = () => (
    <div className={styles.container} style={{ marginTop: '2rem' }}>
      <div className={styles.card}>
        <h3 className={styles.heading} style={{ padding: '0.6rem 0'}}>
          Technische Details
        </h3>
        
        <ul className={styles.details} style={{ padding: '1rem 0 2rem' }}>
          <li>Gegossene Hochleistung-PVC-Folie für Plotteranwendungen</li>
          <li>Farbe: mehr als 100 Farbvarianten</li>
          <li>Dicke: 60μ</li>
          <li>Kleber: permanent haftend</li>
          <li>Haltbarkeit: 7 Jahre</li>
          <li>Brandschutzklasse B1</li>
          <li>Plotten von Schriftzügen / Kaschieren u. Applizieren</li>
        </ul>

        <div style={{ width: '80%', margin: '0 auto' }}>
          <Icons outside inside b1 uv />
        </div>

      </div>
    </div>
  );

export default Card;

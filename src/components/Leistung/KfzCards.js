import React from 'react';
import CardKompakt from './CardKompakt';
import CardModerat from './CardModerat';
import CardKomplex from './CardKomplex';
import styles from './kfzCards.module.css';

const KfzCards = () => (
  <div className={styles.grid}>
    <CardKompakt />
    <CardModerat />
    <CardKomplex />
  </div>
);

export default KfzCards;

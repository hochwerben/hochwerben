import React from 'react';
import CardKompakt from './CardKompakt';
import CardModerat from './CardModerat';
import CardKomplex from './CardKomplex';
import styles from '../cards.module.css';

const TransporterCards = () => (
  <div className={styles.grid}>
    <CardKompakt />
    <CardModerat />
    <CardKomplex />
  </div>
);

export default TransporterCards;

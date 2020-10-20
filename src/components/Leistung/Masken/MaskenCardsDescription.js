import React from 'react';
import CardMaskenAnwendung from './CardMaskenAnwendung';
import CardMaskenTechnischeDetails from './CardMaskenTechnischeDetails';
import CardMaskenService from './CardMaskenService';
import styles from '../cards.module.css';

const MaskenCardsDescription = () => (
  <div className={styles.grid}>
    <CardMaskenAnwendung />
    <CardMaskenTechnischeDetails />
    <CardMaskenService />
  </div>
);

export default MaskenCardsDescription;

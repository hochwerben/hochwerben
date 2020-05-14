import React from 'react';
import CardAnwendung from './CardAnwendung';
import CardTechnischeDetails from './CardTechnischeDetails';
import CardService from './CardService';
import styles from './kfzCards.module.css';

const KfzCardsDescription = () => (
  <div className={styles.grid}>
    <CardAnwendung />
    <CardTechnischeDetails />
    <CardService />
  </div>
);

export default KfzCardsDescription;

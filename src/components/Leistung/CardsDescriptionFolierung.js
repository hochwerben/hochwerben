import React from 'react';
import CardAnwendung from './CardAnwendung';
import CardTechnischeDetailsFolierung from './CardTechnischeDetailsFolierung';
import CardService from './CardService';
import styles from './cards.module.css';

const KfzCardsDescription = () => (
  <div className={styles.grid}>
    <CardAnwendung />
    <CardTechnischeDetailsFolierung />
    <CardService />
  </div>
);

export default KfzCardsDescription;

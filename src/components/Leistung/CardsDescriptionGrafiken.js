import React from 'react';
import CardAnwendung from './CardAnwendung';
import CardTechnischeDetailsGrafiken from './CardTechnischeDetailsGrafiken';
import CardService from './CardService';
import styles from './cards.module.css';

const KfzCardsDescription = () => (
  <div className={styles.grid}>
    <CardAnwendung />
    <CardTechnischeDetailsGrafiken />
    <CardService />
  </div>
);

export default KfzCardsDescription;

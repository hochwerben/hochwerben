import React from 'react';
import CardTrolleyAnwendung from './CardTrolleyAnwendung';
import CardTrolleyTechnischeDetails from './CardTrolleyTechnischeDetails';
// import CardTrolleyService from './CardTrolleyService';
import styles from '../cards.module.css';

const TrolleyCardsDescription = () => (
  <div className={styles.grid}>
    <CardTrolleyAnwendung />
    <CardTrolleyTechnischeDetails />
    {/* <CardTrolleyService /> */}
  </div>
);

export default TrolleyCardsDescription;

import React from 'react';
import CardSchildAnwendung from './CardSchildAnwendung';
import CardSchildTechnischeDetails from './CardSchildTechnischeDetails';
import CardSchildService from './CardSchildService';
import styles from '../cards.module.css';

const SchildCardsDescription = () => (
  <div className={styles.grid}>
    <CardSchildAnwendung />
    <CardSchildTechnischeDetails />
    <CardSchildService />
  </div>
);

export default SchildCardsDescription;

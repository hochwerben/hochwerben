import React from 'react';
import CardInnen from './CardInnen';
import CardAussen from './CardAussen';
import CardZehner from './CardZehner';
import styles from '../cards.module.css';

const Cards = () => (
  <div className={styles.grid}>
    <CardInnen />
    <CardAussen />
    <CardZehner />
  </div>
);

export default Cards;

import React from 'react';
import CardSchildEinseitig from './CardSchildEinseitig';
import CardSchildBeidseitig from './CardSchildBeidseitig';
import CardSchildIndividuell from './CardSchildIndividuell';
import styles from '../cards.module.css';

const Cards = () => (
  <div className={styles.grid}>
    <CardSchildEinseitig />
    <CardSchildBeidseitig />
    <CardSchildIndividuell />
  </div>
);

export default Cards;

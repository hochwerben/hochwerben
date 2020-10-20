import React from 'react';
import CardShirtsAnwendung from './CardShirtsAnwendung';
import CardShirtsTechnischeDetails from './CardShirtsTechnischeDetails';
import CardShirtsService from './CardShirtsService';
import styles from '../cards.module.css';

const ShirtsCardsDescription = () => (
  <div className={styles.grid}>
    <CardShirtsAnwendung />
    <CardShirtsTechnischeDetails />
    <CardShirtsService />
  </div>
);

export default ShirtsCardsDescription;

import React from 'react';
import CardStickerAnwendung from './CardStickerAnwendung';
import CardStickerTechnischeDetails from './CardStickerTechnischeDetails';
import CardStickerService from './CardStickerService';
import styles from '../cards.module.css';

const StickerCardsDescription = () => (
  <div className={styles.grid}>
    <CardStickerAnwendung />
    <CardStickerTechnischeDetails />
    <CardStickerService />
  </div>
);

export default StickerCardsDescription;

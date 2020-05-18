import React from 'react';
import CardBauzaunBannerAnwendung from './CardBauzaunBannerAnwendung';
import CardBauzaunBannerTechnischeDetails from './CardBauzaunBannerTechnischeDetails';
import CardBauzaunBannerService from './CardBauzaunBannerService';
import styles from '../cards.module.css';

const BauzaunBannerCardsDescription = () => (
  <div className={styles.grid}>
    <CardBauzaunBannerAnwendung />
    <CardBauzaunBannerTechnischeDetails />
    <CardBauzaunBannerService />
  </div>
);

export default BauzaunBannerCardsDescription;

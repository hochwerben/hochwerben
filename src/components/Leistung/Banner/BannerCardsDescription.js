import React from 'react';
import CardBannerAnwendung from './CardBannerAnwendung';
import CardBannerTechnischeDetails from './CardBannerTechnischeDetails';
import CardBannerService from './CardBannerService';
import styles from '../cards.module.css';

const BannerCardsDescription = () => (
  <div className={styles.grid}>
    <CardBannerAnwendung />
    <CardBannerTechnischeDetails />
    <CardBannerService />
  </div>
);

export default BannerCardsDescription;

import React from 'react';
import CardBauzaunBannerPvc from './CardBauzaunBannerPvc';
import CardBauzaunBannerMesh from './CardBauzaunBannerPvcMesh';
import CardBauzaunBannerZehner from './CardBauzaunBannerZehner';
import styles from '../cards.module.css';

const Cards = () => (
  <div className={styles.grid}>
    <CardBauzaunBannerPvc />
    <CardBauzaunBannerMesh />
    <CardBauzaunBannerZehner />
  </div>
);

export default Cards;

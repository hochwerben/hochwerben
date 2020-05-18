import React from 'react';
import CardBannerPvc from './CardBannerPvc';
import CardBannerMesh from './CardBannerPvcMesh';
import CardBannerKomplett from './CardBannerKomplett';
import styles from '../cards.module.css';

const Cards = () => (
  <div className={styles.grid}>
    <CardBannerPvc />
    <CardBannerMesh />
    <CardBannerKomplett />
  </div>
);

export default Cards;

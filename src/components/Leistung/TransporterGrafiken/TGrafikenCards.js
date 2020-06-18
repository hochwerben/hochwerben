import React from 'react';
import TGrafikenKompakt from './TGrafikenKompakt';
import TGrafikenModerat from './TGrafikenModerat';
import TGrafikenKomplex from './TGrafikenKomplex';
import styles from '../cards.module.css';

const TGrafikenCards = () => (
  <div className={styles.grid}>
    <TGrafikenKompakt />
    <TGrafikenModerat />
    <TGrafikenKomplex />
  </div>
);

export default TGrafikenCards;

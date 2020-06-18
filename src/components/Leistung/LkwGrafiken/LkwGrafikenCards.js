import React from 'react';
import LkwGrafikenKompakt from './LkwGrafikenKompakt';
import LkwGrafikenModerat from './LkwGrafikenModerat';
import LkwGrafikenKomplex from './LkwGrafikenKomplex';
import styles from '../cards.module.css';

const LkwGrafikenCards = () => (
  <div className={styles.grid}>
    <LkwGrafikenKompakt />
    <LkwGrafikenModerat />
    <LkwGrafikenKomplex />
  </div>
);

export default LkwGrafikenCards;

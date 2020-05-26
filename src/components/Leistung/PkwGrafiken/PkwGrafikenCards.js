import React from 'react';
import PkwGrafikenKompakt from './PkwGrafikenKompakt';
import PkwGrafikenModerat from './PkwGrafikenModerat';
import PkwGrafikenKomplex from './PkwGrafikenKomplex';
import styles from '../cards.module.css';

const PkwGrafikenCards = () => (
  <div className={styles.grid}>
    <PkwGrafikenKompakt />
    <PkwGrafikenModerat />
    <PkwGrafikenKomplex />
  </div>
);

export default PkwGrafikenCards;

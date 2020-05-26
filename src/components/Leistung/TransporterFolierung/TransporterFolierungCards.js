import React from 'react';
import TransporterFolierungKompakt from './TransporterFolierungKompakt';
import TransporterFolierungModerat from './TransporterFolierungModerat';
import TransporterFolierungKomplex from './TransporterFolierungKomplex';
import styles from '../cards.module.css';

const TransporterFolierungCards = () => (
  <div className={styles.grid}>
    <TransporterFolierungKompakt />
    <TransporterFolierungModerat />
    <TransporterFolierungKomplex />
  </div>
);

export default TransporterFolierungCards;

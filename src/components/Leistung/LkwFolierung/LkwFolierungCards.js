import React from 'react';
import LkwFolierungKompakt from './LkwFolierungKompakt';
import LkwFolierungModerat from './LkwFolierungModerat';
import LkwFolierungKomplex from './LkwFolierungKomplex';
import styles from '../cards.module.css';

const LkwFolierungCards = () => (
  <div className={styles.grid}>
    {/* <LkwFolierungKompakt />
    <LkwFolierungModerat /> */}
    <LkwFolierungKomplex />
  </div>
);

export default LkwFolierungCards;

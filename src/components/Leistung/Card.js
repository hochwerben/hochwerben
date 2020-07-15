import React from 'react';
import styles from './cards.module.css';

const Card = ({ title, price, children }) => (
  <div className={styles.container}>
    <div className={styles.card}>
      <h3 className={styles.heading}>
        {title}
        {price ? (
          <span className={styles.price}>
            ab € {price}
            <span className={styles.mwst}>zzgl. MwSt.</span>
          </span>
        ) : null}
      </h3>
      <ul className={`${styles.details} ${styles.paddedList}`}>{children}</ul>
    </div>
  </div>
);

export default Card;

import React from 'react';
import styles from '../css/contactLink.module.css';

const ContactLink = () => {
  return (
    <div className={styles.container}>
      <h4>So erreichen Sie uns:</h4>
      <div className={styles.underline}></div>
      <h4 className={styles.phone}>+49 6105 6766</h4>
      <a href="mailto:info@hochwerben.de" className={styles.email}>
        info@hochwerben.de
      </a>
    </div>
  );
};

export default ContactLink;

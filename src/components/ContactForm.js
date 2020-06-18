import React from 'react';
import styles from '../css/contactForm.module.css';

const ContactForm = () => {
  const onSubmit = event => {
    event.preventDefault();
    alert('Nachricht erfolgreich verschickt!');
  };

  return (
    <div className={styles.contactBody}>
      <div className={styles.container}>
        <div className={styles.row100}>
          <div className={styles.col}>
            <div className={styles.inputBox}>
              <input type="text" required />
              <span className={styles.text}>Vorname</span>
              <span className={styles.line}></span>
            </div>
          </div>
          <div className={styles.col}>
            <div className={styles.inputBox}>
              <input type="text" required />
              <span className={styles.text}>Nachname</span>
              <span className={styles.line}></span>
            </div>
          </div>
        </div>
        <div className={styles.row100}>
          <div className={styles.col}>
            <div className={styles.inputBox}>
              <input type="text" required />
              <span className={styles.text}>Email</span>
              <span className={styles.line}></span>
            </div>
          </div>
        </div>
        <div className={styles.row100}>
          <div className={styles.col}>
            <div className={`${styles.inputBox} ${styles.textarea}`}>
              <textarea required></textarea>
              <span className={styles.text}>Ihre Nachricht</span>
              <span className={styles.line}></span>
            </div>
          </div>
        </div>
        <div className={styles.row100}>
          <div className={styles.col}>
            <div className={styles.inputBox}>
              <input type="submit" value="Senden" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

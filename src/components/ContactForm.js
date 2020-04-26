import React from 'react';
import styles from '../css/contactForm.module.css';

const ContactForm = () => (
  <form className={styles.form}>
    <label htmlFor="name">
      <input type="text" name="name" id="name" />
      Name
    </label>
    <label htmlFor="email">
      <input type="text" name="email" id="email" />
      Email
    </label>
    <label htmlFor="message">
      <textarea name="message" id="message" rows="5"></textarea>
      Nachricht
    </label>
    <button>Senden</button>
  </form>
);

export default ContactForm;

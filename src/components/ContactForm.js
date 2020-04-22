import React from 'react';
import styles from '../css/contactForm.module.css';

const ContactForm = () => (
  <form className={styles.form}>
    <label htmlFor="name">
      Name
      <input type="text" name="name" id="name" />
    </label>
    <label htmlFor="email">
      Email
      <input type="text" name="email" id="email" />
    </label>
    <label htmlFor="message">
      Nachricht
      <textarea name="message" id="message"></textarea>
    </label>
  </form>
);

export default ContactForm;

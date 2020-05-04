import React from 'react';
import styles from '../css/contactForm.module.css';

const ContactForm = () => {
  const onSubmit = event => {
    event.preventDefault();
    alert('Nachricht erfolgreich verschickt!');
  };

  return (
    <div className={styles.formContainer}>
      <form className={styles.form} onSubmit={onSubmit}>
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
        <button type="submit">Senden</button>
      </form>
    </div>
  );
};

export default ContactForm;

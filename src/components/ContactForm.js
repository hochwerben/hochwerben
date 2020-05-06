import React from 'react';
// import styles from '../css/contactForm.module.css';
import styles from '../css/contactForm2.module.css';

const ContactForm = () => {
  const onSubmit = event => {
    event.preventDefault();
    alert('Nachricht erfolgreich verschickt!');
  };

  return (
    <div className={styles.contactContainer}>
      <div className={styles.adressContainer}>
        <h4>
          Kontakt<span>daten</span>
        </h4>
        <p>Hochwerben</p>
        <p>Nordendstr. 82-84</p>
        <p>64546 Mörfelden-Walldorf</p>
        <p>Telefonnummer</p>
        <button>Mail senden</button>
      </div>
      <div className={styles.formContainer}>
        <h4>
          Kontakt<span>formular</span>
        </h4>
        <form className={styles.form}>
          <label>
            Vorname
            <input type="text" />
          </label>
          <label>
            Nachname
            <input type="text" />
          </label>
          <label>
            Email
            <input type="email" />
          </label>
          <textarea name="nachricht" id="nachricht"></textarea>
          <button>Senden</button>
        </form>
      </div>
    </div>
  );

  // return (
  //   <div className={styles.formContainer}>
  //     <form className={styles.form} onSubmit={onSubmit}>
  //       <label htmlFor="name">
  //         <input type="text" name="name" id="name" />
  //         Name
  //       </label>
  //       <label htmlFor="email">
  //         <input type="text" name="email" id="email" />
  //         Email
  //       </label>
  //       <label htmlFor="message">
  //         <textarea name="message" id="message" rows="5"></textarea>
  //         Nachricht
  //       </label>
  //       <button type="submit">Senden</button>
  //     </form>
  //   </div>
  // );
};

export default ContactForm;

import React from 'react';
import Title from './Title';
import styles from '../css/contact.module.css';

const Kontakt = () => (
  <section className={styles.contact}>
    <Title title="Kontakt"></Title>
    <article className={styles.text}>
      <p>
        Für nähere Informationen senden Sie uns eine Email an{' '}
        <a href="mailto:info@hochwerben.de">info@hochwerben.de</a>
      </p>
      <p>Sie erreichen uns auch telefonisch unter</p>
      <h3
        style={{
          color: 'var(--clr-grey-1)',
          fontSize: '1.6rem',
          marginBottom: '3rem',
          fontFamily: 'var(--ff-title)',
        }}
      >
        +49 6105 6766
      </h3>
    </article>
    <div className={styles.mapContainer}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2563.6961587603237!2d8.588002216158653!3d50.01704992637837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd74d90c07d0d7%3A0xf3482d952e8f3c2e!2sNordendstra%C3%9Fe%2082-84%2C%2064546%20M%C3%B6rfelden-Walldorf!5e0!3m2!1sen!2sde!4v1587337528897!5m2!1sen!2sde"
        style={{ border: 0, width: '100%', height: '50vh' }}
        aria-hidden="false"
        name="googleMaps"
        title="googleMaps"
      ></iframe>
    </div>
  </section>
);

export default Kontakt;

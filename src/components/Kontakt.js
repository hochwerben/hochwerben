import React from 'react';
import Title from './Title';
import { IconContext } from 'react-icons';
import { MdPhone, MdMail } from 'react-icons/md';
// import ContactForm from './ContactForm';
import styles from '../css/contact.module.css';

const Kontakt = () => (
  <section className={styles.contact}>
    <Title title="Kontakt"></Title>

    <div className={styles.grid}>
      <div className={styles.contactInfo}>
        <div className={styles.phoneAndMail}>
          <IconContext.Provider
            value={{
              style: { verticalAlign: 'middle', marginRight: '1rem' },
              size: '2em',
              color: '#f49402',
            }}
          >
            <div>
              <MdPhone />
              <span>+49 6105 9777704</span>
            </div>
            <div className={styles.mail}>
              <a href="mailto:info@hochwerben.de">
                <MdMail />
                <span>info@hochwerben.de</span>
              </a>
            </div>
          </IconContext.Provider>
        </div>
        <span className={styles.divider}></span>
        <div className={styles.addressContainer}>
          <h3>Hochwerben</h3>
          Nordendstr. 82-84<br />
          64546 Mörfelden-Walldorf
        </div>
        
      </div>
      <div className={styles.mapContainer}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2563.6961587603237!2d8.588002216158653!3d50.01704992637837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd74d90c07d0d7%3A0xf3482d952e8f3c2e!2sNordendstra%C3%9Fe%2082-84%2C%2064546%20M%C3%B6rfelden-Walldorf!5e0!3m2!1sen!2sde!4v1587337528897!5m2!1sen!2sde"
          aria-hidden="false"
          name="googleMaps"
          title="googleMaps"
          className={styles.googleMap}
        ></iframe>
      </div>
    </div>
    {/* <ContactForm /> */}
  </section>
);

export default Kontakt;

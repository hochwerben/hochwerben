import React from 'react';
import { Link } from 'gatsby';
import { IconContext } from 'react-icons';
import { MdPhone, MdMail } from 'react-icons/md';
import logo from '../images/white-logo.svg';
import styles from '../css/footer.module.css';
import icons from '../constants/SocialLinks';
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.twoColumns}>
        <div className={styles.address}>
          <h3>Hochwerben</h3>
          <p>
            Nordendstr. 82-84
            <br />
            64546 Mörfelden-Walldorf
          </p>
          <br />
        </div>
        <div className={styles.contactInfo}>
          <IconContext.Provider
            value={{
              style: { verticalAlign: 'middle', marginRight: '1rem' },
              size: '2em',
            }}
          >
            <h3 className={styles.phone}>
              <MdPhone />
              +49 6105 9777704
            </h3>
            <a href="mailto:info@hochwerben.de" className={styles.mail}>
              <MdMail />
              info@hochwerben.de
            </a>
          </IconContext.Provider>
        </div>
      </div>
      <div className={styles.logo}>
        <Link to="/">
          <img src={logo} alt="Hochwerben Logo" width="100px"></img>
        </Link>
      </div>
      <div className={styles.icons}>
        {icons.map(item => {
          return (
            <a key={item.id} href={item.url} className={styles.icon}>
              {item.image}
            </a>
          );
        })}
      </div>
      <div className={styles.info}>
        © {new Date().getFullYear()} <Link to="/">Hochwerben.de</Link> - Alle
        Rechte vorbehalten.
      </div>
      <div>
        <Link to="/impressum" className={styles.impLink}>
          Impressum
        </Link>
        <Link to="/datenschutz" className={styles.impLink}>
          Datenschutzerklärung
        </Link>
      </div>
    </footer>
  );
};

export default Footer;

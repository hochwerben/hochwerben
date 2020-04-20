import React from 'react';
import { Link } from 'gatsby';
import logo from '../images/white-logo.svg';
import styles from '../css/footer.module.css';
import icons from '../constants/SocialLinks';
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>
        <img src={logo} alt="Hochwerben Logo" width="100px"></img>
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
        © {new Date().getFullYear()} Hochwerben.de - Alle Rechte vorbehalten.
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

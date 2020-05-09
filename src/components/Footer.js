import React from 'react';
import { Link } from 'gatsby';
import { IconContext } from 'react-icons';
import { MdPhone, MdMail } from 'react-icons/md';
import styles from '../css/footer.module.css';
import icons from '../constants/SocialLinks';
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        <IconContext.Provider
          value={{
            style: { verticalAlign: 'middle', marginRight: '1rem' },
            size: '2em',
          }}
        >
          <div className={styles.phone}>
            <h3>
              <MdPhone />
              +49 6105 9777704
            </h3>
          </div>
          <div className={styles.mail}>
            <a href="mailto:info@hochwerben.de">
              <MdMail />
              info@hochwerben.de
            </a>
          </div>
        </IconContext.Provider>

        <div className={styles.address}>
          <ul>
            <li>Hochwerben</li>
            <li>Nordendstr. 82-84</li>
            <li>64546 Mörfelden-Walldorf</li>
          </ul>
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
        <div className={styles.links}>
          <Link to="/impressum" className={styles.impLink}>
            Impressum
          </Link>
          <Link to="/datenschutz" className={styles.impLink}>
            Datenschutzerklärung
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

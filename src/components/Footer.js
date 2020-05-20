import React from 'react';
import { Link } from 'gatsby';
import { IconContext } from 'react-icons';
import { MdPhone, MdMail } from 'react-icons/md';
import styles from '../css/footer.module.css';
// import icons from '../constants/SocialLinks';
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        <IconContext.Provider
          value={{
            style: { verticalAlign: 'middle', marginRight: '1rem' },
            size: '2em',
            color: '#f49402',
          }}
        >
          <div className={styles.phone}>
            <h3>
              <MdPhone />
              <span>+49 6105 9777704</span>
            </h3>
          </div>
          <div className={styles.mail}>
            <a href="mailto:info@hochwerben.de">
              <MdMail />
              <span>info@hochwerben.de</span>
            </a>
          </div>
        </IconContext.Provider>

        <div className={styles.address}>
          <ul>
            <li className={styles.heading}>Hochwerben</li>
            <li>Nordendstr. 82-84</li>
            <li>64546 Mörfelden-Walldorf</li>
          </ul>
        </div>

        {/* <div className={styles.icons}>
          {icons.map(item => {
            return (
              <a key={item.id} href={item.url} className={styles.icon}>
                {item.image}
              </a>
            );
          })}
        </div> */}
        <div className={styles.info}>
          © {new Date().getFullYear()} <Link to="/">Hochwerben.de</Link> - Alle
          Rechte vorbehalten.
        </div>
        <ul className={styles.links}>
          <li>
            <Link to="/impressum" className={styles.impLink}>
              Impressum
            </Link>
          </li>
          <li>
            <Link to="/datenschutz" className={styles.impLink}>
              Datenschutzerklärung
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

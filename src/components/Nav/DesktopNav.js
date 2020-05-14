import React from 'react';
import { Link } from 'gatsby';
import styles from '../../css/navbar.module.css';
import logo from '../../images/hochwerben-logo.svg';
import icons from '../../constants/SocialLinks';

const DesktopNav = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.center}>
        <Link to="/" className={styles.logoLink}>
          <img width="60" src={logo} alt="Hochwerben Logo"></img>
        </Link>

        <ul className={styles.links}>
          <li className={styles.dropDownContainer}>
            <Link to="/" className={styles.dropBtn}>
              Kompetenzen
            </Link>
            <div className={styles.menu}>
              <Link to="/" className={styles.dropDownLink}>
                Digitaldruck
              </Link>
              <Link to="/#werbetraeger" className={styles.dropDownLink}>
                Werbeträger
              </Link>
              <Link to="/#webdesign" className={styles.dropDownLink}>
                Webdesign
              </Link>
            </div>
          </li>
          <li className={styles.dropDownContainer}>
            <Link to="/leistungen" className={styles.dropBtn}>
              Leistungen
            </Link>
            <div className={styles.menu}>
              <Link
                to="/leistungen/kfz-beschriftung"
                className={styles.dropDownLink}
              >
                KFZ-Beschriftung
              </Link>
              <Link to="/leistungen/megabanner" className={styles.dropDownLink}>
                Megabanner
              </Link>
              <Link
                to="/leistungen/messedisplays"
                className={styles.dropDownLink}
              >
                Messedisplays
              </Link>
              <Link to="/leistungen/schilder" className={styles.dropDownLink}>
                Schilder
              </Link>
              <Link
                to="/leistungen/textildruck"
                className={styles.dropDownLink}
              >
                Textildruck
              </Link>
              <Link
                to="/leistungen/visitenkarten"
                className={styles.dropDownLink}
              >
                Visitenkarten
              </Link>
              <Link to="/leistungen/waende" className={styles.dropDownLink}>
                Wände
              </Link>
              <Link to="/leistungen/webdesign" className={styles.dropDownLink}>
                Webdesign
              </Link>
            </div>
          </li>
          <li className={styles.dropDownContainer}>
            <Link to="/kontakt" className={styles.dropBtn}>
              Kontakt
            </Link>
          </li>
        </ul>
        <div className={styles.icons}>
          {icons.map(icon => {
            return (
              <a
                key={icon.id}
                href={icon.url}
                className={styles.navIcon}
                target="_blank"
                rel="noopener noreferrer"
              >
                {icon.image}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default DesktopNav;

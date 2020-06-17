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

            {/* 
            ----- Dropdown Leistungen -----
            */}
            <div className={styles.menu}>
              <Link to="/leistungen/banner">Banner</Link>
              <Link to="/leistungen/bauzaunbanner">Bauzaunbanner</Link>
              <Link to="/leistungen/lkw-beschriftung">LKW-Beschriftung</Link>
              <Link to="/leistungen/lkw-folierung">LKW-Folierung</Link>
              {/* <Link to="/leistungen/lkw-grafiken">LKW-Grafiken</Link> */}
              <Link to="/leistungen/pkw-beschriftung">PKW-Beschriftung</Link>
              <Link to="/leistungen/pkw-grafiken">PKW-Grafiken</Link>
              {/* <Link to="/leistungen/megabanner">Megabanner</Link> */}
              {/* <Link to="/leistungen/messedisplays">Messedisplays</Link> */}
              <Link to="/leistungen/schilder">Schilder</Link>
              <Link to="/leistungen/sticker">Sticker</Link>
              <Link to="/leistungen/transporter-beschriftung">Transporter-Beschriftung</Link>
              <Link to="/leistungen/transporter-grafiken">Transporter-Grafiken</Link>
              {/* <Link to="/leistungen/transporter-folierung">Transporter-Folierung</Link> */}
              {/* <Link to="/leistungen/textildruck">Textildruck</Link> */}
              {/* <Link to="/leistungen/visitenkarten">Visitenkarten</Link> */}
              <Link to="/leistungen/webdesign">Webdesign</Link>
            </div>
          </li>
          {/* <li className={styles.dropDownContainer}>
            <Link to="/blog" className={styles.dropBtn}>
              Blog
            </Link>
          </li> */}
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

import React from 'react';
import { Link } from 'gatsby';
import logo from '../images/hochwerben-logo.svg';
import styles from '../css/navbar.module.css';
// import links from '../constants/Links';
import icons from '../constants/SocialLinks';
import { IconContext } from 'react-icons';
import { FaAlignRight } from 'react-icons/fa';
import { AppContext } from '../context';
import KompetenzenDropDown from './Nav/KompetenzenDropDown';

const Navbar = () => {
  const { size, handleOpenSidebar } = React.useContext(AppContext);
  // const { size, handleOpenSidebar, height } = React.useContext(AppContext);

  if (size > 992) {
    return (
      <nav className={styles.navbar}>
        <div className={styles.center}>
          <Link to="/" className={styles.logoLink}>
            <img width="60" src={logo} alt="Hochwerben Logo"></img>
          </Link>
          <IconContext.Provider
            value={{ style: { verticalAlign: 'middle', marginLeft: '0.2rem' } }}
          >
            <ul className={styles.links}>
              <li>
                <Link to="/" className={styles.navLink}>
                  Kompetenzen
                </Link>
                <KompetenzenDropDown />
              </li>
              <li>
                <Link to="/leistungen" className={styles.navLink}>
                  Leistungen
                </Link>
                <KompetenzenDropDown />
              </li>
              <li>
                <Link to="/kontakt" className={styles.navLink}>
                  Kontakt
                </Link>
              </li>
            </ul>
          </IconContext.Provider>
          {/* <ul className={styles.links}>
            {links.map(link => {
              return (
                <li key={link.id}>
                  <Link to={link.url} className={styles.navLink}>
                    {link.text}
                  </Link>
                  <KompetenzenDropDown />
                </li>
              );
            })}
          </ul> */}
          <div className={styles.icons}>
            {icons.map(icon => {
              return (
                <a key={icon.id} href={icon.url} className={styles.navIcon}>
                  {icon.image}
                </a>
              );
            })}
          </div>
        </div>
      </nav>
    );
  } else {
    return (
      <nav className={styles.navbar}>
        <div className={styles.header}>
          <Link to="/" className={styles.logoLink}>
            <img src={logo} width="60" alt="Hochwerben Logo"></img>
          </Link>
          <button
            type="button"
            className={styles.toggleBtn}
            onClick={handleOpenSidebar}
          >
            menu<FaAlignRight className={styles.toggleIcon}></FaAlignRight>
          </button>
        </div>
      </nav>
    );
  }
};

export default Navbar;

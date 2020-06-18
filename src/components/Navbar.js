import React from 'react';
import { Link } from 'gatsby';
import logo from '../images/hochwerben-logo.svg';
import styles from '../css/navbar.module.css';
import { FaAlignRight } from 'react-icons/fa';
import { AppContext } from '../context';

import DesktopNav from './Nav/DesktopNav';

const Navbar = () => {
  const { size, handleOpenSidebar } = React.useContext(AppContext);
  // const { size, handleOpenSidebar, height } = React.useContext(AppContext);

  if (size > 992) {
    return <DesktopNav />;
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

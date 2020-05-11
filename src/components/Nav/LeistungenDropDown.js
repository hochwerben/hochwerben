import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import { IconContext } from 'react-icons';
import { FaCaretDown } from 'react-icons/fa';
import styles from '../../css/dropDown.module.css';

const LeistungenDropDown = () => {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    if (showMenu === true) {
      document.body.addEventListener('click', handleCloseMenu);
    } else {
      document.body.removeEventListener('click', handleCloseMenu);
    }
  }, [showMenu]);

  const handleShowMenu = event => {
    event.preventDefault();
    setShowMenu(true);
  };

  const handleCloseMenu = () => {
    console.log('closy');
    setShowMenu(false);
  };

  return (
    <div className={styles.caretContainer}>
      <IconContext.Provider
        value={{ style: { verticalAlign: 'middle' }, size: '1.2rem' }}
      >
        <button onClick={handleShowMenu} className={styles.btn}>
          <FaCaretDown />
        </button>
      </IconContext.Provider>

      {showMenu && (
        <div className={styles.menu}>
          <Link to="/leistungen/fahrzeug-beschriftung">
            <button>Fahrzeug-Beschriftung</button>
          </Link>
          <Link to="/leistungen/lkw-folierung">
            <button>LKW-Folierung</button>
          </Link>
          <Link to="/leistungen/megabanner">
            <button>Megabanner</button>
          </Link>
          <Link to="/leistungen/messedisplays">
            <button>Messedisplays</button>
          </Link>
          <Link to="/leistungen/schilder">
            <button>Schilder</button>
          </Link>
          <Link to="/leistungen/textildruck">
            <button>Textildruck</button>
          </Link>
          <Link to="/leistungen/visitenkarten">
            <button>Visitenkarten</button>
          </Link>
          <Link to="/leistungen/waende">
            <button>Wände</button>
          </Link>
          <Link to="/leistungen/webdesign">
            <button>Webdesign</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default LeistungenDropDown;

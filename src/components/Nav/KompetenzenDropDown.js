import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import { IconContext } from 'react-icons';
import { FaCaretDown } from 'react-icons/fa';
import styles from '../../css/dropDown.module.css';

const KompetenzenDropDown = () => {
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
          <Link to="/">
            <button>Digitaldruck</button>
          </Link>
          <Link to="/#werbetraeger">
            <button>Werbeträger</button>
          </Link>
          <Link to="/#webdesign">
            <button>Webdesign</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default KompetenzenDropDown;

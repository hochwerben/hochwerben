import React, { useState, useEffect } from 'react';
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
      <button onClick={handleShowMenu}>
        <FaCaretDown />
      </button>

      {showMenu && (
        <div className={styles.menu}>
          <button>Digitaldruck</button>
          <button>Werbeträger</button>
          <button>Webdesign</button>
        </div>
      )}
    </div>
  );
};

export default KompetenzenDropDown;

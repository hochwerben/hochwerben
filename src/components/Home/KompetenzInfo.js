import React from 'react';
import Title from '../Title';
import styles from '../../css/kompetenzInfo.module.css';

// import texte from './kompetenzenTexte.json';

const KompetenzInfo = ({ title }) => {
  // const ddText = texte[0].description;
  // const wtText = texte[1].description;
  // const wdText = texte[2].description;

  return (
    <div className={styles.container}>
      <span className={styles.infoBoxContainer}>
        <Title title={title} className={styles.title} />
        {/* <div className={styles.infoBox}>
          {title === 'Digitaldruck' && <p>{ddText}</p>}
          {title === 'Werbeträger' && <p>{wtText}</p>}
          {title === 'Webdesign' && <p>{wdText}</p>}
        </div> */}
      </span>
    </div>
  );
};

export default KompetenzInfo;

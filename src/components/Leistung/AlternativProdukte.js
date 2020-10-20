import React from 'react'
import { Link } from 'gatsby'

import styles from './alternativProdukte.module.css'
import deinSign from '../../images/dein-sign.png'

export default function AlternativProdukte(props) {
  const {
    banner,
    bauzaunbanner,
    fassadenbanner,
    bodenfolie,
    flugzeugtrolleys,
    lkwBeschriftung,
    lkwFolierung,
    pkwBeschriftung,
    pkwGrafiken,
    schilder,
    sticker,
    transporterBeschriftung,
    transporterGrafiken,
    webdesign,
    masken,
    shirts
  } = props
  return (
    <div className={styles.linkContainer}>
      <ol className={styles.linkBox}>
        {banner && (
        <li>
          <MyLink to="/leistungen/banner">
            <div className={styles.itemContainer}>
              <img src={deinSign} alt="dein sign" width="100px"/>
              <span className={styles.serviceTitle}>Banner</span>
            </div>
          </MyLink>
        </li>
        )}
        {bauzaunbanner && (
        <li>
          <MyLink to="/leistungen/bauzaunbanner">
            <div className={styles.itemContainer}>
              <img src={deinSign} alt="dein sign" width="100px"/>
              <span className={styles.serviceTitle}>Bauzaun Banner</span>
            </div>
          </MyLink>
        </li>
        )}
        {fassadenbanner && (
        <li>
          <MyLink to="/leistungen/bauzaunbanner">
            <div className={styles.itemContainer}>
              <img src={deinSign} alt="dein sign" width="100px"/>
              <span className={styles.serviceTitle}>Mega- / Fassadenbanner</span>
            </div>
          </MyLink>
        </li>
        )}
        {bodenfolie && (
        <li>
          <MyLink to="/leistungen/bauzaunbanner">
            <div className={styles.itemContainer}>
              <img src={deinSign} alt="dein sign" width="100px"/>
              <span className={styles.serviceTitle}>Bodenfolie</span>
            </div>
          </MyLink>
        </li>
        )}
        {flugzeugtrolleys && (
        <li>
          <MyLink to="/leistungen/flugzeugtrolleys">
            <div className={styles.itemContainer}>
              <img src={deinSign} alt="dein sign" width="100px"/>
              <span className={styles.serviceTitle}>Flugzeugtrolleys</span>
            </div>
          </MyLink>
        </li>
        )}
        {lkwBeschriftung && (
        <li>
          <MyLink to="/leistungen/lkw-beschriftung">
            <div className={styles.itemContainer}>
              <img src={deinSign} alt="dein sign" width="100px"/>
              <span className={styles.serviceTitle}>LKW Beschriftung</span>
            </div>
          </MyLink>
        </li>
        )}
        {lkwFolierung && (
        <li>
          <MyLink to="/leistungen/lkw-folierung">
            <div className={styles.itemContainer}>
              <img src={deinSign} alt="dein sign" width="100px"/>
              <span className={styles.serviceTitle}>LKW Folierung</span>
            </div>
          </MyLink>
        </li>
        )}
        {pkwBeschriftung && (
        <li>
          <MyLink to="/leistungen/pkw-beschriftung">
            <div className={styles.itemContainer}>
              <img src={deinSign} alt="dein sign" width="100px"/>
              <span className={styles.serviceTitle}>PKW Beschriftung</span>
            </div>
          </MyLink>
        </li>
        )}
        {pkwGrafiken && (
        <li>
          <MyLink to="/leistungen/pkw-grafiken">
            <div className={styles.itemContainer}>
              <img src={deinSign} alt="dein sign" width="100px"/>
              <span className={styles.serviceTitle}>PKW Grafiken</span>
            </div>
          </MyLink>
        </li>
        )}
        {schilder && (
        <li>
          <MyLink to="/leistungen/schilder">
            <div className={styles.itemContainer}>
              <img src={deinSign} alt="dein sign" width="100px"/>
              <span className={styles.serviceTitle}>Schilder</span>
            </div>
          </MyLink>
        </li>
        )}
        {sticker && (
        <li>
          <MyLink to="/leistungen/sticker">
            <div className={styles.itemContainer}>
              <img src={deinSign} alt="dein sign" width="100px"/>
              <span className={styles.serviceTitle}>Sticker</span>
            </div>
          </MyLink>
        </li>
        )}
        {transporterBeschriftung && (
        <li>
          <MyLink to="/leistungen/transporter-beschriftung">
            <div className={styles.itemContainer}>
              <img src={deinSign} alt="dein sign" width="100px"/>
              <span className={styles.serviceTitle}>Transporter Beschriftung</span>
            </div>
          </MyLink>
        </li>
        )}
        {transporterGrafiken && (
        <li>
          <MyLink to="/leistungen/transporter-grafiken">
            <div className={styles.itemContainer}>
              <img src={deinSign} alt="dein sign" width="100px"/>
              <span className={styles.serviceTitle}>Transporter Grafiken</span>
            </div>
          </MyLink>
        </li>
        )}
        {masken && (
        <li>
          <MyLink to="/leistungen/atemschutzmasken">
            <div className={styles.itemContainer}>
              <img src={deinSign} alt="dein sign" width="100px"/>
              <span className={styles.serviceTitle}>Atemschutzmasken</span>
            </div>
          </MyLink>
        </li>
        )}
        {shirts && (
        <li>
          <MyLink to="/leistungen/t-shirts">
            <div className={styles.itemContainer}>
              <img src={deinSign} alt="dein sign" width="100px"/>
              <span className={styles.serviceTitle}>T-Shirts</span>
            </div>
          </MyLink>
        </li>
        )}
        {webdesign && (
        <li>
          <MyLink to="/leistungen/webdesign">
            <div className={styles.itemContainer}>
              <img src={deinSign} alt="dein sign" width="100px"/>
              <span className={styles.serviceTitle}>Webdesign</span>
            </div>
          </MyLink>
        </li>
        )}
      </ol>
      </div>
  );
};

const MyLink = ({ to, children }) => (
  <Link to={to}>
    {children}
  </Link>
)
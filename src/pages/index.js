import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import DigitalDruck from '../components/Home/DigitalDruck';
import WerbeTraeger from '../components/Home/WerbeTraeger';
import WebDesign from '../components/Home/WebDesign';
// import Kontakt from '../components/Kontakt';

import styles from '../css/index.module.css';

const IndexPage = () => (
  <Layout>
    <SEO title="Home"></SEO>
    <DigitalDruck></DigitalDruck>
    <div className={styles.skewSectionOne} />
    <WerbeTraeger></WerbeTraeger>
    <div className={styles.skewSectionTwo} />
    <WebDesign></WebDesign>
    <div className={styles.skewSectionThree} id="kontakt" />
    {/* <Kontakt></Kontakt> */}
  </Layout>
);

export default IndexPage;

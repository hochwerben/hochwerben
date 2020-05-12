import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import DigitalDruck from '../components/Home/DigitalDruck';
import WerbeTraeger from '../components/Home/WerbeTraeger';
import WebDesign from '../components/Home/WebDesign';

import styles from '../css/index.module.css';

const IndexPage = () => (
  <Layout>
    <SEO title="Home"></SEO>
    <DigitalDruck></DigitalDruck>
    <div className={styles.skewSectionOne} id="werbetraeger" />
    <WerbeTraeger></WerbeTraeger>
    <div className={styles.skewSectionTwo} id="webdesign" />
    <WebDesign></WebDesign>
    <div className={styles.skewSectionThree} />
  </Layout>
);

export default IndexPage;

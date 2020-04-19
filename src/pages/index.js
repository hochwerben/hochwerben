import React from 'react';
import Layout from '../components/layout';
import SliderOne from '../components/Home/SliderOne';
// import SliderOneSide from '../components/Home/SliderOneSide';
// import SliderVertical from '../components/Home/SliderVertical';
import WerbeTraeger from '../components/Home/WerbeTraeger';
import WebDesign from '../components/Home/WebDesign';
import SEO from '../components/seo';

import styles from '../css/index.module.css';

const IndexPage = () => (
  <Layout>
    <SEO title="Home"></SEO>
    <SliderOne></SliderOne>
    <div className={styles.skewSectionOne} />
    <WerbeTraeger></WerbeTraeger>
    <div className={styles.skewSectionTwo} />
    <WebDesign></WebDesign>
    {/* <SliderOneSide></SliderOneSide> */}
    {/* <SliderVertical></SliderVertical> */}
  </Layout>
);

export default IndexPage;

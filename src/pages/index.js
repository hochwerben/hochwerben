import React from 'react';
import Layout from '../components/layout';
// import HomeBanner from '../components/Home/HomeBanner';
import SliderOne from '../components/Home/SliderOne';
import SliderOneSide from '../components/Home/SliderOneSide';
import SliderVertical from '../components/Home/SliderVertical';
import WerbeTraeger from '../components/Home/WerbeTraeger';
import WebDesign from '../components/Home/WebDesign';
// import Courses from '../components/Home/LatestCourses';
// import Projects from '../components/Home/Projects';
import SEO from '../components/seo';
const IndexPage = () => (
  <Layout>
    <SEO title="Home"></SEO>
    {/* <HomeBanner></HomeBanner> */}
    <SliderOne></SliderOne>
    {/* <Courses></Courses> */}
    {/* <Projects></Projects> */}
    <WerbeTraeger></WerbeTraeger>
    <WebDesign></WebDesign>
    <SliderOneSide></SliderOneSide>
    <SliderVertical></SliderVertical>
  </Layout>
);

export default IndexPage;

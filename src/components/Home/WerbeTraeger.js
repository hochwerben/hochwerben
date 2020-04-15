import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import Image from 'gatsby-image';
// import Course from '../Courses/Course';
import styles from '../../css/courses.module.css';
import Title from '../Title';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const WerbeTraeger = () => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { relativeDirectory: { eq: "slider-two" } }) {
        edges {
          node {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 5000,
    // variableWidth: true,
  };

  return (
    <section className={styles.courses}>
      <Title title="werbeträger"></Title>
      {/* <div className="center"> */}
      <div>
        <Slider {...settings}>
          {/* Slide 1 */}
          <div className="center-div">
            {/* <div className="center-div" style={{ width: '40vw' }}> */}
            <h3>Schilder und Poster</h3>
            <Link to="/leistungen" className="btn">
              mehr erfahren
            </Link>
          </div>
          <div className={styles.img}>
            {/* <div style={{ width: '60vw' }}> */}
            <Image
              fluid={data.allFile.edges[0].node.childImageSharp.fluid}
              alt="Image1"
            />
          </div>

          {/* Slide 2 */}
          <div className={styles.img}>
            {/* <div style={{ width: '60vw' }}> */}
            <Image
              fluid={data.allFile.edges[1].node.childImageSharp.fluid}
              alt="Image2"
            />
          </div>
          <div className="center-div">
            {/* <div className="center-div" style={{ width: '40vw' }}> */}
            <h3>Megaposter / Werbepylone</h3>
            <Link to="/leistungen" className="btn">
              mehr erfahren
            </Link>
          </div>
        </Slider>
      </div>
      {/* </div> */}
    </section>
  );
};

export default WerbeTraeger;

import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import Image from 'gatsby-image';

import styles from '../../css/courses.module.css';
import Title from '../Title';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SliderOne = () => {
  // const {
  //   allContentfulCourses: { nodes: courses },
  // } = useStaticQuery(query)

  const data = useStaticQuery(graphql`
    {
      allFile(filter: { relativeDirectory: { eq: "slider-one" } }) {
        edges {
          node {
            childImageSharp {
              fluid(maxHeight: 500) {
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
      <Title title="Digitaldruck"></Title>
      <div>
        <Slider {...settings}>
          {/* Slide 1 */}
          <div className={styles.img}>
            {/* <div style={{ width: '60vw' }}> */}
            <Image
              fluid={data.allFile.edges[0].node.childImageSharp.fluid}
              alt="Image1"
            />
          </div>
          <div className="center-div">
            {/* <div className="center-div" style={{ width: '40vw' }}> */}
            <h3>Fahrzeugfolierung</h3>
            <Link to="/leistungen" className="btn">
              mehr erfahren
            </Link>
          </div>

          {/* Slide 2 */}
          <div className="center-div">
            {/* <div className="center-div" style={{ width: '40vw' }}> */}
            <h3>LKW-Folierung</h3>
            <Link to="/leistungen" className="btn">
              mehr erfahren
            </Link>
          </div>
          <div className={styles.img}>
            {/* <div style={{ width: '60vw' }}> */}
            <Image
              fluid={data.allFile.edges[1].node.childImageSharp.fluid}
              alt="Image2"
            />
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default SliderOne;

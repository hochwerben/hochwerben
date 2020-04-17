import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import Image from 'gatsby-image';

import styles from '../../css/sliderOneSide.module.css';
import Title from '../Title';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import sideTitle from '../../images/digitaldruck.svg';

const SliderOne = () => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { relativeDirectory: { eq: "slider-one" } }) {
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
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    vertical: true,
    rtl: true,
  };

  return (
    <section className={styles.sectionBackground}>
      <div className={styles.centerSliderOne}>
        <div className={styles.twoColumns}>
          <div className={styles.tileColumn}>
            <img src={sideTitle} alt="DD" height="100%" />
          </div>
          <div className={styles.sliderColumn}>
            <div>
              <Slider {...settings}>
                {/* Slide 1 */}
                <div className={styles.sliderContainer}>
                  <div className={styles.img}>
                    <Image
                      fluid={data.allFile.edges[0].node.childImageSharp.fluid}
                      alt="Image1"
                    />
                  </div>
                  <div className={styles.sliderText}>
                    <span className={styles.name}>
                      Fahrzeug-
                      <br />
                      Folierung
                    </span>
                    <Link to="/leistungen">mehr erfahren</Link>
                  </div>
                  <div className={styles.price}>
                    <span>ab</span>
                    <span className={styles.priceText}>€ 699</span>
                  </div>
                </div>
                {/* End Slide */}

                {/* Slide 2 */}
                <div className={styles.sliderContainer}>
                  <div className={styles.img}>
                    <Image
                      fluid={data.allFile.edges[0].node.childImageSharp.fluid}
                      alt="Image1"
                    />
                  </div>
                  <div className={styles.sliderText}>
                    <span className={styles.name}>
                      LKW-
                      <br />
                      Folierung
                    </span>
                    <Link to="/leistungen">mehr erfahren</Link>
                  </div>
                  <div className={styles.price}>
                    <span>ab</span>
                    <span className={styles.priceText}>€ 1699</span>
                  </div>
                </div>
                {/* End Slide */}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SliderOne;

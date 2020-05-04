import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import Image from 'gatsby-image';

import styles from '../../css/sliderOne.module.css';
import Title from '../Title';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Webdesign = () => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { relativeDirectory: { eq: "wd" } }) {
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
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    pauseOnHover: false,
  };

  return (
    <section className={styles.sectionBackgroundWD}>
      <div className={styles.centerSliderOne}>
        <Title title="Webdesign"></Title>
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
              <Link to="/leistungen" as="div" className={styles.sliderText}>
                <span className={styles.name}>
                  Persönliche
                  <br />
                  Webseite
                </span>
              </Link>
              <div className={styles.price}>
                <span>ab</span>
                <span className={styles.priceText}>€ 499</span>
              </div>
            </div>
            {/* End Slide */}

            {/* Slide 2 */}
            <div className={styles.sliderContainer}>
              <div className={styles.img}>
                <Image
                  fluid={data.allFile.edges[1].node.childImageSharp.fluid}
                  alt="Image1"
                />
              </div>
              <Link to="/leistungen" as="div" className={styles.sliderText}>
                <span className={styles.name}>
                  Business
                  <br />
                  Lösungen
                </span>
              </Link>
              <div className={styles.price}>
                <span>ab</span>
                <span className={styles.priceText}>€ 1499</span>
              </div>
            </div>
            {/* End Slide */}

            {/* Slide 2 */}
            <div className={styles.sliderContainer}>
              <div className={styles.img}>
                <Image
                  fluid={data.allFile.edges[2].node.childImageSharp.fluid}
                  alt="Image1"
                />
              </div>
              <Link to="/leistungen" as="div" className={styles.sliderText}>
                <span className={styles.name}>
                  eCommerce
                  <br />
                  Lösungen
                </span>
              </Link>
              <div className={styles.price}>
                <span>ab</span>
                <span className={styles.priceText}>€ 2499</span>
              </div>
            </div>
            {/* End Slide */}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Webdesign;

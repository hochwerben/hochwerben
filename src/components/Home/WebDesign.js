import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import Image from 'gatsby-image';

import styles from '../../css/digitalDruck.module.css';
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
              <Image
                fluid={data.allFile.edges[0].node.childImageSharp.fluid}
                alt="Image1"
              />
              <Link to="/leistungen/webdesign" as="div">
                <span className={styles.rect}>"OnePager"</span>
              </Link>
              <span className={styles.priceTag}>ab € 699</span>
            </div>

            {/* Slide 2 */}
            <div className={styles.sliderContainer}>
              <Image
                fluid={data.allFile.edges[1].node.childImageSharp.fluid}
                alt="Image1"
              />
              <Link to="/leistungen/webdesign" as="div">
                <span className={styles.rect}>Corporate Design</span>
              </Link>
              <span className={styles.priceTag}>ab € 1299</span>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Webdesign;

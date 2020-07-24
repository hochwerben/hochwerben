import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import Image from 'gatsby-image';

import styles from '../../css/digitalDruck.module.css';
import KompetenzInfo from './KompetenzInfo';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Webdesign = () => {
  const data = useStaticQuery(graphql`
    {
      website: file(relativePath: { eq: "wd/responsive-design.jpg" }) {
        childImageSharp {
          fluid(quality: 95, maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
          id
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
        <KompetenzInfo title={'Webdesign'} />
        <div>
          <Slider {...settings}>
            {/* Slide 1 */}
            <div className={styles.sliderContainer}>
              <Image fluid={data.website.childImageSharp.fluid} alt="Image1" />
              <Link to="/leistungen/webdesign" as="div">
                <span className={styles.rect}>Webseite</span>
              </Link>
              <span className={styles.priceTag}>ab € 799</span>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Webdesign;

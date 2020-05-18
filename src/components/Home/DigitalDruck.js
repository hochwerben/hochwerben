import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import Image from 'gatsby-image';

import styles from '../../css/digitalDruck.module.css';
import KompetenzInfo from './KompetenzInfo';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const DigitalDruck = () => {
  const data = useStaticQuery(graphql`
    {
      suv: file(name: { eq: "suv" }) {
        childImageSharp {
          fluid(quality: 95, maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
          id
        }
      }
      sprinter: file(name: { eq: "sprinter" }) {
        childImageSharp {
          fluid(quality: 95, maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
          id
        }
      }
      frontHeck: file(name: { eq: "vito-front-heck-01" }) {
        childImageSharp {
          fluid(quality: 95, maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
          id
        }
      }
    }
  `);

  const ddContent = [
    {
      text: 'KFZ-',
      textSecond: 'Beschriftung',
      textFull: 'KFZ-Beschriftung',
      price: 99,
      image: data.suv.childImageSharp.fluid,
      id: data.suv.childImageSharp.id,
      link: '/kfz-beschriftung',
    },
    {
      text: 'KFZ-',
      textSecond: 'Beschriftung',
      textFull: 'KFZ-Beschriftung',
      price: 99,
      image: data.frontHeck.childImageSharp.fluid,
      id: data.frontHeck.childImageSharp.id,
      link: '/kfz-beschriftung',
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: false,
    pauseOnHover: false,
  };

  return (
    <section className={styles.centerSliderOne} style={{ paddingTop: '1rem' }}>
      <KompetenzInfo title={'Digitaldruck'} />
      <div>
        <Slider {...settings}>
          {ddContent.map(product => (
            <div className={styles.sliderContainer} key={product.id}>
              <Image fluid={product.image} alt="Digitaldruck Produkt" />
              <Link to={`/leistungen${product.link}`} as="div">
                <span className={styles.rect}>{product.textFull}</span>
              </Link>
              <span className={styles.priceTag}>ab € {product.price}</span>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default DigitalDruck;

import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import Image from 'gatsby-image';

import styles from '../../css/digitalDruck.module.css';
import Title from '../Title';

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
      text: 'Fahrzeug-',
      textSecond: 'beschriftung',
      textFull: 'Fahrzeug-Beschriftung',
      price: 99,
      image: data.suv.childImageSharp.fluid,
      id: data.suv.childImageSharp.id,
      link: '/fahrzeug-beschriftung',
    },
    {
      text: 'LKW-',
      textSecond: 'Folierung',
      textFull: 'LKW-Folierung',
      price: 1399,
      image: data.sprinter.childImageSharp.fluid,
      id: data.sprinter.childImageSharp.id,
      link: '/lkw-folierung',
    },
    {
      text: 'Fahrzeug-',
      textSecond: 'Beschriftung',
      textFull: 'Fahrzeug-Beschriftung',
      price: 599,
      image: data.frontHeck.childImageSharp.fluid,
      id: data.frontHeck.childImageSharp.id,
      link: '/fahrzeug-beschriftung',
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
    <section className={styles.centerSliderOne}>
      <Title title="Digitaldruck"></Title>
      <div>
        <Slider {...settings}>
          {ddContent.map(product => (
            <div className={styles.sliderContainer} key={product.id}>
              <div className={styles.img}>
                <Image fluid={product.image} alt="Digitaldruck Produkt" />
              </div>
              {/* old className was .sliderText */}
              <Link to={`/leistungen${product.link}`} as="div">
                <span className={styles.rect}>{product.textFull}</span>
                {/* <span className={styles.name}>
                  {product.text}
                  {product.textSecond && <br />}
                  {product.textSecond && product.textSecond}
                </span> */}
              </Link>
              <div className={styles.priceTag}>ab € {product.price}</div>
              {/* <div className={styles.price}>
                <span>ab</span>
                <span className={styles.priceText}>{`€ ${product.price}`}</span>
              </div> */}
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default DigitalDruck;

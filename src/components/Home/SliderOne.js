import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import Image from 'gatsby-image';

import styles from '../../css/sliderOne.module.css';
import Title from '../Title';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const DigitalDruck = () => {
  const data = useStaticQuery(graphql`
    {
      suv: file(name: { eq: "suv" }) {
        childImageSharp {
          fluid(quality: 95, maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
          id
        }
      }
      sprinter: file(name: { eq: "sprinter" }) {
        childImageSharp {
          fluid(quality: 95, maxWidth: 1200) {
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
      price: 699,
      image: data.suv.childImageSharp.fluid,
      id: data.suv.childImageSharp.id,
    },
    {
      text: 'LKW-',
      textSecond: 'Folierung',
      price: 1299,
      image: data.sprinter.childImageSharp.fluid,
      id: data.sprinter.childImageSharp.id,
    },
  ];

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
    <section className={styles.centerSliderOne}>
      <Title title="Digitaldruck"></Title>
      <div>
        <Slider {...settings}>
          {ddContent.map(product => (
            <div className={styles.sliderContainer} key={product.id}>
              <div className={styles.img}>
                <Image fluid={product.image} alt="Digitaldruck Produkt" />
              </div>
              <Link to="/leistungen" as="div" className={styles.sliderText}>
                <span className={styles.name}>
                  {product.text}
                  {product.textSecond && <br />}
                  {product.textSecond && product.textSecond}
                </span>
              </Link>
              <div className={styles.price}>
                <span>ab</span>
                <span className={styles.priceText}>{`€ ${product.price}`}</span>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default DigitalDruck;

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
      pkwBeschriftung: file(name: { eq: "citan-banner" }) {
        childImageSharp {
          fluid(quality: 95, maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
          id
        }
      }
      transporterBeschriftung: file(relativePath: { eq: "dd/trans-beschriftung.jpg" }) {
        childImageSharp {
          fluid(quality: 95, maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
          id
        }
      }
      lkwBeschriftung: file(relativePath: { eq: "dd/lkw-banner.jpg" }) {
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
      text: 'PKW-',
      textSecond: 'Beschriftung',
      textFull: 'PKW-Beschriftung',
      price: 99,
      image: data.pkwBeschriftung.childImageSharp.fluid,
      id: data.pkwBeschriftung.childImageSharp.id,
      link: '/pkw-beschriftung',
    },
    {
      text: 'Transporter-',
      textSecond: 'Beschriftung',
      textFull: 'Transporter-Beschriftung',
      price: 285,
      image: data.transporterBeschriftung.childImageSharp.fluid,
      id: data.transporterBeschriftung.childImageSharp.id,
      link: '/transporter-beschriftung',
    },
    {
      text: 'LKW-',
      textSecond: 'Beschriftung',
      textFull: 'LKW-Beschriftung',
      price: 729,
      image: data.lkwBeschriftung.childImageSharp.fluid,
      id: data.lkwBeschriftung.childImageSharp.id,
      link: '/lkw-beschriftung',
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

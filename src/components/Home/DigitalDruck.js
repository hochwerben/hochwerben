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
      pkwBeschriftung: file(
        relativePath: { eq: "dd/pkw-beschriftung-banner.jpg" }
      ) {
        childImageSharp {
          fluid(quality: 95, maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
          id
        }
      }
      pkwGrafiken: file(relativePath: { eq: "dd/pkw-grafiken-banner.jpg" }) {
        childImageSharp {
          fluid(quality: 95, maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
          id
        }
      }
      transporterBeschriftung: file(
        relativePath: { eq: "dd/trans-beschriftung.jpg" }
      ) {
        childImageSharp {
          fluid(quality: 95, maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
          id
        }
      }
      transporterGrafiken: file(
        relativePath: { eq: "dd/transporter-grafiken-banner.jpg" }
      ) {
        childImageSharp {
          fluid(quality: 95, maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
          id
        }
      }
      transporterFolierung: file(
        relativePath: { eq: "dd/transporter-folierung-banner.jpg" }
      ) {
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
      lkwGrafiken: file(relativePath: { eq: "dd/lkw-grafiken-banner.jpg" }) {
        childImageSharp {
          fluid(quality: 95, maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
          id
        }
      }
      lkwFolierung: file(relativePath: { eq: "dd/lkw-folierung-banner.jpg" }) {
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
      text: 'PKW-',
      textSecond: 'Grafiken',
      textFull: 'PKW-Grafiken',
      price: 285,
      image: data.pkwGrafiken.childImageSharp.fluid,
      id: data.pkwGrafiken.childImageSharp.id,
      link: '/pkw-grafiken',
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
      text: 'Transporter-',
      textSecond: 'Grafiken',
      textFull: 'Transporter-Grafiken',
      price: 469,
      image: data.transporterGrafiken.childImageSharp.fluid,
      id: data.transporterGrafiken.childImageSharp.id,
      link: '/transporter-grafiken',
    },
    // {
    //   text: 'Transporter-',
    //   textSecond: 'Folierung',
    //   textFull: 'Transporter-Folierung',
    //   price: 285,
    //   image: data.transporterFolierung.childImageSharp.fluid,
    //   id: data.transporterFolierung.childImageSharp.id,
    //   link: '/transporter-folierung',
    // },
    {
      text: 'LKW-',
      textSecond: 'Beschriftung',
      textFull: 'LKW-Beschriftung',
      price: 729,
      image: data.lkwBeschriftung.childImageSharp.fluid,
      id: data.lkwBeschriftung.childImageSharp.id,
      link: '/lkw-beschriftung',
    },
    // {
    //   text: 'LKW-',
    //   textSecond: 'Grafiken',
    //   textFull: 'LKW-Grafiken',
    //   price: 99999,
    //   image: data.lkwGrafiken.childImageSharp.fluid,
    //   id: data.lkwGrafiken.childImageSharp.id,
    //   link: '/lkw-grafiken',
    // },
    {
      text: 'LKW-',
      textSecond: 'Folierung',
      textFull: 'LKW-Folierung',
      price: 1490,
      image: data.lkwFolierung.childImageSharp.fluid,
      id: data.lkwFolierung.childImageSharp.id,
      link: '/lkw-folierung',
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

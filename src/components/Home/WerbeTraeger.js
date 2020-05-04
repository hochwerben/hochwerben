import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import Image from 'gatsby-image';

import styles from '../../css/digitalDruck.module.css';
import Title from '../Title';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Werbetraeger = () => {
  const data = useStaticQuery(graphql`
    {
      shirts: file(name: { eq: "shirts" }) {
        childImageSharp {
          fluid(quality: 95, maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
          id
        }
      }
      messedisplays: file(name: { eq: "messedisplays" }) {
        childImageSharp {
          fluid(quality: 95, maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
          id
        }
      }
      haengeschild: file(name: { eq: "haengeschild-01" }) {
        childImageSharp {
          fluid(quality: 95, maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
          id
        }
      }
      trennwand: file(name: { eq: "trennwand" }) {
        childImageSharp {
          fluid(quality: 95, maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
          id
        }
      }
      visitenkarten: file(
        relativeDirectory: { eq: "wt" }
        name: { eq: "visitenkarten" }
      ) {
        childImageSharp {
          fluid(quality: 95, maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
          id
        }
      }
    }
  `);

  const wtContent = [
    {
      text: 'Shirts',
      price: 25,
      image: data.shirts.childImageSharp.fluid,
      id: data.shirts.childImageSharp.id,
    },
    {
      text: 'Messe-',
      textSecond: 'displays',
      price: 25,
      image: data.messedisplays.childImageSharp.fluid,
      id: data.messedisplays.childImageSharp.id,
    },
    {
      text: 'Schilder',
      price: 79,
      image: data.haengeschild.childImageSharp.fluid,
      id: data.haengeschild.childImageSharp.id,
    },
    {
      text: 'Wände',
      price: 899,
      image: data.trennwand.childImageSharp.fluid,
      id: data.trennwand.childImageSharp.id,
    },
    {
      text: 'Visitenkarten',
      price: 59,
      image: data.visitenkarten.childImageSharp.fluid,
      id: data.visitenkarten.childImageSharp.id,
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
    rtl: true,
    arrows: false,
    pauseOnHover: false,
  };

  return (
    <section className={styles.sectionBackgroundWT}>
      <div className={styles.centerSliderOne}>
        <Title title="Werbeträger"></Title>
        <div>
          <Slider {...settings}>
            {wtContent.map(product => (
              <div className={styles.sliderContainer} key={product.id}>
                <div className={styles.img}>
                  <Image fluid={product.image} alt="shirts" />
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
                  <span
                    className={styles.priceText}
                  >{`€ ${product.price}`}</span>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Werbetraeger;

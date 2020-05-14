import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import Image from 'gatsby-image';

import styles from '../../css/digitalDruck.module.css';
import KompetenzInfo from './KompetenzInfo';

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
      text: 'Textildruck',
      textFull: 'Textildruck',
      price: 19,
      image: data.shirts.childImageSharp.fluid,
      id: data.shirts.childImageSharp.id,
      link: '/textildruck',
    },
    {
      text: 'Messe-',
      textSecond: 'displays',
      textFull: 'Messedisplays',
      price: 149,
      image: data.messedisplays.childImageSharp.fluid,
      id: data.messedisplays.childImageSharp.id,
      link: '/messedisplays',
    },
    {
      text: 'Schilder',
      textFull: 'Schilder',
      price: 49,
      image: data.haengeschild.childImageSharp.fluid,
      id: data.haengeschild.childImageSharp.id,
      link: '/schilder',
    },
    {
      text: 'Wände',
      textFull: 'Wände',
      price: 199,
      image: data.trennwand.childImageSharp.fluid,
      id: data.trennwand.childImageSharp.id,
      link: '/waende',
    },
    {
      text: 'Visitenkarten',
      textFull: 'Visitenkarten',
      price: 49,
      image: data.visitenkarten.childImageSharp.fluid,
      id: data.visitenkarten.childImageSharp.id,
      link: '/visitenkarten',
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
    rtl: true,
    arrows: false,
    pauseOnHover: false,
  };

  return (
    <section className={styles.sectionBackgroundWT}>
      <div className={styles.centerSliderOne}>
        <KompetenzInfo title={'Werbeträger'} />
        <div>
          <Slider {...settings}>
            {wtContent.map(product => (
              <div className={styles.sliderContainer} key={product.id}>
                <Image fluid={product.image} alt="shirts" />
                <Link to={`/leistungen${product.link}`} as="div">
                  <span className={styles.rect}>{product.textFull}</span>
                </Link>
                <span className={styles.priceTag}>ab € {product.price}</span>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Werbetraeger;

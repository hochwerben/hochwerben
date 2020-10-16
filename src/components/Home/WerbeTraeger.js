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
      # shirts: file(name: { eq: "shirts" }) {
      #   childImageSharp {
      #     fluid(quality: 95, maxWidth: 1200) {
      #       ...GatsbyImageSharpFluid
      #     }
      #     id
      #   }
      # }
      # messedisplays: file(name: { eq: "messedisplays" }) {
      #   childImageSharp {
      #     fluid(quality: 95, maxWidth: 1200) {
      #       ...GatsbyImageSharpFluid
      #     }
      #     id
      #   }
      # }
      haengeschild: file(name: { eq: "haengeschild-01" }) {
        childImageSharp {
          fluid(quality: 95, maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
          id
        }
      }
      schild: file(relativePath: { eq: "wt/aluverbund-01.jpg" }) {
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
      banner: file(relativePath: { eq: "wt/banner.jpg" }) {
        childImageSharp {
          fluid(quality: 95, maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
          id
        }
      }
      sticker: file(relativePath: { eq: "wt/sticker-fussabdruck.png" }) {
        childImageSharp {
          fluid(quality: 95, maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
          id
        }
      }
      # visitenkarten: file(name: { eq: "visitenkarten" }) {
      #   childImageSharp {
      #     fluid(quality: 95, maxWidth: 1200) {
      #       ...GatsbyImageSharpFluid
      #     }
      #     id
      #   }
      # }
    }
  `);

  const wtContent = [
    // {
    //   text: 'Textildruck',
    //   textFull: 'Textildruck',
    //   price: 0,
    //   image: data.shirts.childImageSharp.fluid,
    //   id: data.shirts.childImageSharp.id,
    //   link: '/textildruck',
    // },
    // {
    //   text: 'Messe-',
    //   textSecond: 'displays',
    //   textFull: 'Messedisplays',
    //   price: 0,
    //   image: data.messedisplays.childImageSharp.fluid,
    //   id: data.messedisplays.childImageSharp.id,
    //   link: '/messedisplays',
    // },
    {
      text: 'Schilder',
      textFull: 'Schilder',
      price: 29,
      image: data.schild.childImageSharp.fluid,
      id: data.schild.childImageSharp.id,
      link: '/schilder',
    },
    {
      text: 'Banner',
      textFull: 'Banner',
      price: 69,
      image: data.banner.childImageSharp.fluid,
      id: data.banner.childImageSharp.id,
      link: '/banner',
    },
    {
      text: 'Bauzaunbanner',
      textFull: 'Bauzaunbanner',
      price: 95,
      image: data.trennwand.childImageSharp.fluid,
      id: data.trennwand.childImageSharp.id,
      link: '/bauzaunbanner',
    },
    {
      text: 'Sticker',
      textFull: 'Sticker',
      price: 11.95,
      image: data.sticker.childImageSharp.fluid,
      id: data.sticker.childImageSharp.id,
      link: '/sticker',
    },
    // {
    //   text: 'Visitenkarten',
    //   textFull: 'Visitenkarten',
    //   price: 0,
    //   image: data.visitenkarten.childImageSharp.fluid,
    //   id: data.visitenkarten.childImageSharp.id,
    //   link: '/visitenkarten',
    // },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    rtl: false,
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
                {product.price !== 0 && (
                  <span className={styles.priceTag}>ab € {product.price}</span>
                )}
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Werbetraeger;

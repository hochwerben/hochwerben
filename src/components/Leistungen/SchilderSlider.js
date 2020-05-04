import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';

import styles from './schilderSlider.module.css';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default () => {
  const data = useStaticQuery(graphql`
    {
      hs1: file(name: { eq: "haengeschild-01" }) {
        name
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      hs2: file(name: { eq: "haengeschild-02" }) {
        name
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
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
    arrows: true,
    pauseOnHover: false,
  };

  return (
    <Slider {...settings}>
      <Image
        fluid={data.hs1.childImageSharp.fluid}
        alt={data.hs1.name}
        className="leistung"
      />
      <Image
        fluid={data.hs2.childImageSharp.fluid}
        alt={data.hs2.name}
        className="leistung"
      />
    </Slider>
  );
};

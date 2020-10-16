import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import styles from './alternativProdukte.module.css';

import deinSign from '../../images/dein-sign.png';

export default function AlternativProdukte() {
  const data = useStaticQuery(graphql`
    {
      allMdx(
        filter: { frontmatter: { type: { eq: "service" } } }
        sort: { fields: frontmatter___title }) {
        edges {
          node {
            id
            frontmatter {
              title
              type
              slug
              featuredImage {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  const settings = {
    arrows: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 700,
    autoplaySpeed: 3000,
    cssEase: 'linear',
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={styles.sliderContainer}>
      <Slider {...settings}>
        {data.allMdx.edges.map(
          ({
            node: {
              id,
              frontmatter,
            },
          }) => (
            <div key={id} className="image-container">
              <Link to={`/leistungen/${frontmatter.slug}`} style={{ textDecoration: 'none' }}>
                <Image
                  fluid={frontmatter.featuredImage.childImageSharp.fluid}
                  alt={frontmatter.title}
                />
                <span className={styles.leistungTitle}>{frontmatter.title}</span>
              </Link>
            </div>
          )
        )}
      </Slider>
    </div>
  );
};

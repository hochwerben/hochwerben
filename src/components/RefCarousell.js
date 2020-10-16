import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import styles from './Leistung/alternativProdukte.module.css';

export default function LeistungsReferenzen() {
  const data = useStaticQuery(graphql`
    {
      medintimSchild: contentfulPost(slug: {eq: "medintim-schild"}) {
          id
          title
          slug
          featuredImage {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
      }
      kfzFahrzeugbeschriftung: contentfulPost(slug: {eq: "Kfz-Fahrzeugbeschriftung"}) {
        id
        title
        slug
        featuredImage {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
      lkwFolierung: contentfulPost(slug: {eq: "lkw-folierung"}) {
        id
        title
        slug
        featuredImage {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
      transporterBeschriftung: contentfulPost(slug: {eq: "transporter-beschriftung-thai-bistro"}) {
        id
        title
        slug
        featuredImage {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
      Flottenbeschriftung: contentfulPost(slug: {eq: "Flottenbeschriftung"}) {
        id
        title
        slug
        featuredImage {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
      rollerbeschriftung: contentfulPost(slug: {eq: "rollerbeschriftung"}) {
        id
        title
        slug
        featuredImage {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
      tshirts: contentfulPost(slug: {eq: "tshirt-druck"}) {
        id
        title
        slug
        featuredImage {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
      allContentfulPost {
        edges {
          node {
            slug
            id
            createdAt
            title
            featuredImage {
              fluid {
                ...GatsbyContentfulFluid
              }
            }
          }
        }
      }
    }
  `)

  // const reference = data[refSlug]

  const settings = {
    arrows: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 700,
    autoplaySpeed: 3000,
    cssEase: 'linear',
    pauseOnHover: false,
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

  return data ? (
    <div className="ref-carousell">
      <Slider {...settings}>
        {data.allContentfulPost.edges.map(
          ({
            node: {
              id,
              slug,
              title,
              featuredImage
            },
          }) => (
            <div key={id} className="image-container">
              <Link to={`/referenzen/${slug}`} style={{ textDecoration: 'none' }}>
                <Image
                  fluid={featuredImage.fluid}
                  alt={title}
                />
                <span className={styles.leistungTitle} style={{ fontWeight: '300' }}>{title}</span>
              </Link>
            </div>
          )
        )}
      </Slider>
    </div>
    ) : (
      null
    )
}
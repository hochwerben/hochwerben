import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';

import styles from './leistungsReferenzen.module.css'

export default function LeistungsReferenzen({ refSlug }) {
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
    }
  `)

  const reference = data[refSlug]

  return reference ? (
    <div className={styles.container}>
        <div className={styles.image}>
          <Link to={`/referenzen/${reference.slug}`}>
            <div className={styles.overlay}>
              <h3 className={styles.text}>
                {reference.title}
              </h3>
            </div>
            <Image fluid={reference.featuredImage.fluid} className="referenzen-image" />
          </Link>
        </div>
      </div>
    ) : (
      null
    )
}

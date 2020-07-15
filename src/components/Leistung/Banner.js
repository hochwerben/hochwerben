import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import styles from './leistungBanner.module.css';

const Banner = ({ title, leistung, maxWidth }) => {
  let maximumWidth;
  if (maxWidth) {
    maximumWidth = maxWidth + '%';
  } else {
    maximumWidth = '80%';
  }

  const data = useStaticQuery(graphql`
    {
      flugzeugtrolleys: file(relativePath: { eq: "wt/flugzeugtrolleys.jpg" }) {
        childImageSharp {
          fluid(quality: 95, maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      banner: file(relativePath: { eq: "wt/banner.jpg" }) {
        childImageSharp {
          fluid(quality: 95, maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bauzaunbanner: file(relativePath: { eq: "wt/trennwand.jpg" }) {
        childImageSharp {
          fluid(quality: 95, maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      lkwBeschriftung: file(relativePath: { eq: "dd/lkw-banner.jpg" }) {
        childImageSharp {
          fluid(quality: 95, maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      lkwGrafiken: file(relativePath: { eq: "dd/lkw-grafiken-banner.jpg" }) {
        childImageSharp {
          fluid(quality: 95, maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      lkwFolierung: file(relativePath: { eq: "dd/lkw-folierung-banner.jpg" }) {
        childImageSharp {
          fluid(quality: 95, maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      pkwbeschriftung: file(relativePath: { eq: "dd/citan-banner.jpg" }) {
        childImageSharp {
          fluid(quality: 95, maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      pkwGrafiken: file(relativePath: { eq: "dd/pkw-grafiken-banner.jpg" }) {
        childImageSharp {
          fluid(quality: 95, maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      schilder: file(relativePath: { eq: "wt/aluverbund-01.jpg" }) {
        childImageSharp {
          fluid(quality: 95, maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sticker: file(relativePath: { eq: "wt/sticker-fussabdruck.png" }) {
        childImageSharp {
          fluid(quality: 95, maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      transBeschriftung: file(
        relativePath: { eq: "dd/trans-beschriftung.jpg" }
      ) {
        childImageSharp {
          fluid(quality: 95, maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      transporterGrafiken: file(
        relativePath: { eq: "dd/transporter-grafiken-banner.jpg" }
      ) {
        childImageSharp {
          fluid(quality: 95, maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      transporterFolierung: file(
        relativePath: { eq: "dd/transporter-folierung-banner.jpg" }
      ) {
        childImageSharp {
          fluid(quality: 95, maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      webdesign: file(relativePath: { eq: "wd/responsive-design.jpg" }) {
        childImageSharp {
          fluid(quality: 95, maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>{title || leistung}</h1>
      <div
        className={styles.bannerImageContainer}
        style={{ maxWidth: maximumWidth }}
      >
        <Image
          fluid={data[leistung].childImageSharp.fluid}
          alt={`${leistung} Banner`}
        />
      </div>
    </div>
  );
};

export default Banner;

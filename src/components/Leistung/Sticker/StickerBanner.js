import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import styles from '../leistungBanner.module.css';

const Banner = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "wt/sticker-fussabdruck.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Sticker</h1>
      <div className={styles.bannerImageContainer}>
        <Image fluid={data.file.childImageSharp.fluid} alt="Sticker Banner" />
      </div>
    </div>
  );
};
export default Banner;

import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import styles from '../leistungBanner.module.css';

const Banner = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "wt/shirts.jpg" }) {
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
      <h1 className={styles.heading}>Textildruck</h1>
      <div className={styles.bannerImageContainer} style={{ maxWidth: '80%' }}>
        <Image
          fluid={data.file.childImageSharp.fluid}
          alt="Textildruck Banner"
        />
      </div>
    </div>
  );
};
export default Banner;

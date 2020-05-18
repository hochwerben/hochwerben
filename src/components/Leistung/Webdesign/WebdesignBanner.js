import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import styles from '../leistungBanner.module.css';

const Banner = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "wd/responsive-design.jpg" }) {
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
      <h1 className={styles.heading}>Webdesign</h1>
      <div className={styles.bannerImageContainer} style={{ maxWidth: '80%' }}>
        <Image fluid={data.file.childImageSharp.fluid} alt="Webdesign Banner" />
      </div>
    </div>
  );
};
export default Banner;

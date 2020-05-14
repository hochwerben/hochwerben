import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import styles from './kfzBanner.module.css';

const KfzBanner = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "dd/citan-banner.png" }) {
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
      <h1 className={styles.heading}>KFZ-Beschriftung</h1>
      <Image fluid={data.file.childImageSharp.fluid} alt="Kfz Banner" />
    </div>
  );
};
export default KfzBanner;

import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import styles from './card.module.css';

const Card = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "dd/vito-front-heck-01.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `);

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h3 className={styles.heading}>Kompakt</h3>
        <div className={styles.image}>
          <Image fluid={data.file.childImageSharp.fluid} alt="Card Image" />
        </div>
        <ul className={styles.details}>
          <li>Fläche: 1qm</li>
          <li>2 x Seitenbeschriftung</li>
          <li>Abmaße: 1.000mm x 500mm</li>
        </ul>
      </div>
    </div>
  );
};

export default Card;

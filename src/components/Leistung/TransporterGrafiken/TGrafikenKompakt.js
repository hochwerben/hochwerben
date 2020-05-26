import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import styles from '../cards.module.css';

const Card = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "dd/transporter-grafiken-kompakt.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h3 className={styles.heading}>
          Kompakt
          <span className={styles.price}>ab € 469<span className={styles.mwst}>zzgl. 19% MwSt.</span></span>
        </h3>
        <div className={styles.cardContent}>
          <ul className={styles.details}>
            <li>Fläche: 6qm</li>
            <li>
              2 x Seitenbeschriftung
              <br />
              Abmaße: 2.000mm x 1000mm
            </li>
            <li>
              2 x Seitengrafiken
              <br />
              Abmaße: 2.000mm x 500mm
            </li>
          </ul>
          <div className={styles.image}>
            <Image fluid={data.file.childImageSharp.fluid} alt="Card Image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

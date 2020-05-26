import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import styles from '../cards.module.css';

const Card = () => {
  const data = useStaticQuery(graphql`
  {
    file(relativePath: { eq: "dd/lkw-folierung-komplex.jpg" }) {
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
          Vollfolierung
          <span className={styles.price}>ab € 1490 <span className={styles.mwst}>zzgl. 19% MwSt.</span></span>
        </h3>
        <div className={styles.cardContent}>
          <ul className={styles.details}>
          <li>Fläche: 36qm</li>
            <li>
              2 x Seitenfolierung
              <br />
              Abmaße: 6.000mm x 2.500mm
            </li>
            <li>
              1 x Heckfolierung
              <br />
              Abmaße: 2.000mm x 2.500mm
            </li>
            <li>
              1 x Frontfolierung
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

import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import styles from '../cards.module.css';

const Card = () => {
  const data = useStaticQuery(graphql`
  {
    file(relativePath: { eq: "dd/card-komplex.jpg" }) {
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
          Komplex
          <span className={styles.price}>ab € 505 <span className={styles.mwst}>zzgl. 19% MwSt.</span></span>
        </h3>
        <div className={styles.cardContent}>
          <ul className={styles.details}>
            <li>Fläche: 8qm</li>
            <li>
              2 x Seitenbeschriftung
              <br />
              <span className={styles.innerLi}>Abmaße: 3.000mm x 1.000mm</span>
            </li>
            <li>
              1 x Heckbeschriftung
              <br />
              <span className={styles.innerLi}>Abmaße: 1.500mm x 1.000mm</span>
            </li>
            <li>
              1 x Frontbeschriftung
              <br />
              <span className={styles.innerLi}>Abmaße: 1.000mm x 500mm</span>
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

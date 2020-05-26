import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import styles from '../cards.module.css';

const Card = () => {
  const data = useStaticQuery(graphql`
  {
    file(relativePath: { eq: "dd/pkw-grafiken-komplex.jpg" }) {
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
          <span className={styles.price}>ab € 675 <span className={styles.mwst}>zzgl. 19% MwSt.</span></span>
        </h3>
        <div className={styles.cardContent}>
          <ul className={styles.details}>
            <li>Fläche: 9qm</li>
            <li>
              2 x Seitenbeschriftung
              <br />
              Abmaße: 2.000mm x 500mm
            </li>
            <li>
              2 x Seitengrafik
              <br />
              Abmaße: 4.000mm x 500mm
            </li>
            <li>
              1 x Heck- u. Frontbeschriftung
              <br />
              Abmaße: 1.000mm x 500mm
            </li>
            <li>
              1 x Heck- u. Frontgrafik
              <br />
              Abmaße: 1.000mm x 1.000mm
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

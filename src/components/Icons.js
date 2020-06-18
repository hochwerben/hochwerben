import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import styles from '../css/icons.module.css';

const Icons = props => {
  const data = useStaticQuery(graphql`
    {
      b1: file(name: { eq: "icon-b1" }) {
        id
        name
        childImageSharp {
          fixed(width: 60) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      b1Mobile: file(name: { eq: "icon-b1" }) {
        name
        childImageSharp {
          fixed(width: 40) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      cmyk: file(name: { eq: "icon-cmyk" }) {
        id
        name
        childImageSharp {
          fixed(width: 60) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      cmykMobile: file(name: { eq: "icon-cmyk" }) {
        name
        childImageSharp {
          fixed(width: 40) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      inside: file(name: { eq: "icon-inside" }) {
        id
        name
        childImageSharp {
          fixed(width: 60) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      insideMobile: file(name: { eq: "icon-inside" }) {
        name
        childImageSharp {
          fixed(width: 40) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      outside: file(name: { eq: "icon-outside" }) {
        id
        name
        childImageSharp {
          fixed(width: 60) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      outsideMobile: file(name: { eq: "icon-outside" }) {
        name
        childImageSharp {
          fixed(width: 40) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      uv: file(name: { eq: "icon-uv" }) {
        id
        name
        childImageSharp {
          fixed(width: 60) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      uvMobile: file(name: { eq: "icon-uv" }) {
        name
        childImageSharp {
          fixed(width: 40) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      wind: file(name: { eq: "icon-wind" }) {
        id
        name
        childImageSharp {
          fixed(width: 60) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      windMobile: file(name: { eq: "icon-wind" }) {
        name
        childImageSharp {
          fixed(width: 40) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <div className={styles.iconsContainer}>
      {Object.keys(props).map(prop => {
        const queryString = data[prop].childImageSharp.fixed;
        const queryStringName = data[prop].name;
        const queryStringMobile = data[`${prop}Mobile`].childImageSharp.fixed;

        return (
          <div key={data[prop].id}>
            <div className={styles.bigImage}>
              <Image fixed={queryString} alt={queryStringName} />
            </div>
            <div className={styles.smallImage}>
              <Image fixed={queryStringMobile} alt={queryStringName} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Icons;

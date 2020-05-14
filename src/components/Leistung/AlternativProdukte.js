import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import styles from './alternativProdukte.module.css';

export default () => {
  const data = useStaticQuery(graphql`
    {
      allMdx(sort: { fields: frontmatter___title }) {
        edges {
          node {
            id
            frontmatter {
              title
              type
              featuredImage {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  return (
    <div className={styles.imageGrid}>
      {data.allMdx.edges.map(
        ({
          node: {
            id,
            frontmatter,
            fields: { slug },
          },
        }) => (
          <div key={id} className={styles.imageContainer}>
            <Link to={`/leistungen/${slug}`}>
              <Image
                fluid={
                  frontmatter.featuredImage
                    ? frontmatter.featuredImage.childImageSharp.fluid
                    : data.placeholder.childImageSharp.fluid
                }
                alt={frontmatter.title}
              />
              <span className={styles.leistungTitle}>{frontmatter.title}</span>
            </Link>
          </div>
        )
      )}
    </div>
  );
};

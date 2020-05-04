import React from 'react';
import { Link, graphql } from 'gatsby';
import Image from 'gatsby-image';
import Layout from '../components/layout';
import Title from '../components/Title';
import styles from '../css/leistungen.module.css';
import SEO from '../components/seo';

export default ({ data }) => {
  return (
    <Layout>
      <SEO title="Contact" />
      <section className={styles.centerLeistungenContainer}>
        <Title title="Leistungen"></Title>

        {/* TODO: key issue */}
        <div className={styles.imageGrid}>
          {data.all.edges.map(
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
                    className="leistungen-grid"
                  />
                  <span className={styles.leistungTitle}>
                    {frontmatter.title}
                  </span>
                </Link>
              </div>
            )
          )}
        </div>
      </section>
    </Layout>
  );
};

export const query = graphql`
  {
    all: allMdx(sort: { fields: frontmatter___title }) {
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
    dd: allMdx(filter: { frontmatter: { type: { eq: "dd" } } }) {
      edges {
        node {
          id
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
      }
    }
    wt: allMdx(filter: { frontmatter: { type: { eq: "wt" } } }) {
      edges {
        node {
          id
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
      }
    }
    wd: allMdx(filter: { frontmatter: { type: { eq: "wd" } } }) {
      edges {
        node {
          id
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
      }
    }
    placeholder: file(name: { eq: "change" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

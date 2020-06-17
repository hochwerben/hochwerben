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
      <SEO title="Leistungen Übersicht" description="Übersicht aller Leistungen. Digitaldruck, Werbeträger und Webdesign auf einen Blick."/>
      <section className={styles.centerLeistungenContainer}>
        <Title title="Leistungen"></Title>

        <div className={styles.imageGrid}>
          {data.all.edges.map(
            ({
              node: {
                id,
                frontmatter,
              },
            }) => (
              <div key={id} className={styles.imageContainer}>
                <Link to={`/leistungen/${frontmatter.slug}`}>
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
    all: allMdx(filter: {frontmatter: {type: {eq: "service"}}}, sort: { fields: frontmatter___title }) {
      edges {
        node {
          id
          frontmatter {
            title
            type
            slug
            featuredImage {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
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

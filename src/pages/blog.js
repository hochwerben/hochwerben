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
      <SEO title="Blog" description="Der Hochwerben Blog in der Übersicht. Hier finden Sie alle News rund um das Thema Werbung und Digitaldruck." />
      <section className={styles.centerLeistungenContainer}>
        <Title title="Blog"></Title>

        <div className={styles.imageGrid}>
          {data.all.edges.map(
            ({
              node: {
                id,
                frontmatter,
              },
            }) => (
              <div key={id} className={styles.imageContainer}>
                <Link to={`/blog/${frontmatter.slug}`}>
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
    all: allMdx(filter: {frontmatter: {type: {eq: "blog"}}}, sort: { fields: frontmatter___title }) {
      edges {
        node {
          id
          frontmatter {
            slug
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
        }
      }
    }
  }
`;

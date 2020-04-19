import React from 'react';
import { graphql } from 'gatsby';
import Image from 'gatsby-image';
import Layout from '../components/layout';
import Title from '../components/Title';
import styles from '../css/contact.module.css';
import SEO from '../components/seo';

export default ({ data }) => {
  return (
    <Layout>
      <SEO title="Contact" />
      <section className={styles.centerContactContainer}>
        <Title title="Leistungen"></Title>
        <div className={styles.imageGrid}>
          {data.allFile.edges.map(({ node }) => (
            <div
              key={node.childImageSharp.id}
              className={styles.imageContainer}
            >
              <Image fluid={node.childImageSharp.fluid} alt="MyImage" />
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export const query = graphql`
  {
    allFile(filter: { relativeDirectory: { eq: "adobe-stock" } }) {
      edges {
        node {
          childImageSharp {
            fluid {
              src
            }
          }
        }
      }
    }
  }
`;

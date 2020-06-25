import React from 'react';
import { Link, graphql } from 'gatsby';
import Image from 'gatsby-image';
import Layout from '../components/layout';
import Title from '../components/Title';
import styles from '../css/leistungen.module.css';
import SEO from '../components/seo';

export default ({
  data: {
    allContentfulPost: { nodes },
  },
}) => {
  return (
    <Layout>
      <SEO
        title="Referenzen"
        description="LKW-Folierung, Schilder oder Webdesign. Hier erhalten Sie eine Übersicht unserer Projekte und Arbeiten."
      />
      <section className={styles.centerLeistungenContainer}>
        <Title title="Referenzen"></Title>

        <div className={styles.imageGrid}>
          {nodes.map(({ id, title, slug, featuredImage: { fluid } }) => (
            <div key={id} className={styles.imageContainer}>
              <Link to={`/referenzen/${slug}`}>
                <Image
                  fluid={fluid}
                  alt="Referenz"
                  className="leistungen-grid"
                />
                <span className={styles.leistungTitle}>{title}</span>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export const query = graphql`
  {
    allContentfulPost(sort: { order: DESC, fields: createdAt }) {
      nodes {
        id
        title
        slug
        featuredImage {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`;

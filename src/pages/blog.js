import React from 'react';
import { Link, graphql } from 'gatsby';
import Image from 'gatsby-image';
import Layout from '../components/layout';
import Title from '../components/Title';
import styles from '../css/leistungen.module.css';
import SEO from '../components/seo';

export default ({ data: { allContentfulPost: { nodes }} }) => {
  return (
    <Layout>
      <SEO title="Blog" description="Der Hochwerben Blog in der Übersicht. Hier finden Sie alle News rund um das Thema Werbung und Digitaldruck." />
      <section className={styles.centerLeistungenContainer}>
        <Title title="Blog"></Title>

        <div className={styles.imageGrid}>
          {nodes.map(
            ({
                id,
                title,
                slug,
                featuredImage: {
                  fluid
                },
            }) => (
              <div key={id} className={styles.imageContainer}>
                <Link to={`/blog/${slug}`}>
                  <Image
                    fluid={
                      fluid
                    }
                    alt="Blog Image"
                    className="leistungen-grid"
                  />
                  <span className={styles.leistungTitle}>
                    {title}
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
    allContentfulPost {
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

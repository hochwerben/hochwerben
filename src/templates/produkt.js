import React from 'react';
import { graphql } from 'gatsby';
import Image from 'gatsby-image';
import Layout from '../components/layout';
import ContactForm from '../components/ContactForm';

import styles from '../css/produkt.module.css';

export default ({
  data: {
    markdownRemark: {
      html,
      frontmatter: { title, featuredImage },
    },
  },
}) => {
  return (
    <Layout>
      <section className={styles.centerProdukt}>
        <h3 className={styles.title}>{title}</h3>
        {/* <div className={styles.produktContainer}> */}
        <div className={styles.fImage}>
          {featuredImage && (
            <Image fluid={featuredImage.childImageSharp.fluid} alt={title} />
          )}
        </div>
        <div className={styles.beschreibung}>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
        {/* </div> */}
      </section>
      <ContactForm />
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        featuredImage {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      html
    }
  }
`;

import React from 'react';
import { graphql, Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';
import { FaArrowLeft } from 'react-icons/fa';
import Layout from '../components/layout';
import Image from 'gatsby-image';
import Title from '../components/Title';
import SEO from '../components/seo';
import styles from '../css/blog.module.css';

const ReferenzenTemplate = ({
  data: {
    post: {
      title,
      content,
      featuredImage: { fluid },
      seoBeschreibung,
    },
  },
}) => {
  return (
    <Layout>
      <SEO title={title} description={seoBeschreibung || 'Referenzen'} />
      <section className={styles.centerPost}>
        <Title title={title} />
        <article className={styles.featuredImage}>
          <Image fluid={fluid} alt={title} />
        </article>
        <article>
          <MDXProvider>
            <MDXRenderer>{content.childMdx.body}</MDXRenderer>
          </MDXProvider>
        </article>
        <Link to="/referenzen" className={styles.btn}>
          <FaArrowLeft
            style={{ verticalAlign: 'middle', marginRight: '0.5em' }}
            size="1em"
          />
          &nbsp;Zur Übersicht
        </Link>
      </section>
    </Layout>
  );
};

export const query = graphql`
  query GetBlogPost($slug: String) {
    post: contentfulPost(slug: { eq: $slug }) {
      title
      content {
        childMdx {
          body
        }
      }
      featuredImage {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      seoBeschreibung
    }
  }
`;

export default ReferenzenTemplate;

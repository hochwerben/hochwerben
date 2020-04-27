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
        <div className={styles.categoryGrid}>
          <div>
            <h2>Digitaldruck:</h2>
            <ul>
              {data.dd.edges.map(({ node }) => (
                <li key={node.id}>
                  <Link to={node.fields.slug}>
                    <h3>{node.frontmatter.title}</h3>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2>Werbeträger:</h2>
            <ul>
              {data.wt.edges.map(({ node }) => (
                <li key={node.id}>
                  <Link to={node.fields.slug}>
                    <h3>{node.frontmatter.title}</h3>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2>Webdesign:</h2>
            <ul>
              {data.wd.edges.map(({ node }) => (
                <li key={node.id}>
                  <Link to={node.fields.slug}>
                    <h3>{node.frontmatter.title}</h3>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* <div className={styles.imageGrid}>
          {data.allFile.edges.map(({ node }) => (
            <div
              key={Math.floor(Math.random() * 100000)}
              className={styles.imageContainer}
            >
              <Image fluid={node.childImageSharp.fluid} alt="MyImage" />
            </div>
          ))}
        </div> */}
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
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    dd: allMarkdownRemark(filter: { frontmatter: { type: { eq: "dd" } } }) {
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
    wt: allMarkdownRemark(filter: { frontmatter: { type: { eq: "wt" } } }) {
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
    wd: allMarkdownRemark(filter: { frontmatter: { type: { eq: "wd" } } }) {
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
  }
`;

import React from "react"
import { graphql, Link } from "gatsby"
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { MDXProvider } from '@mdx-js/react'
import Layout from "../components/layout"
import Image from "gatsby-image"
import Title from '../components/Title'
import styles from '../css/blog.module.css';

const BlogTemplate = ({
  data: {
    post: {
      title,
      content,
      featuredImage: { fluid }
    },
  },
}) => {
  return (
    <Layout>
      <section className={styles.centerPost}>
        <Link to="/blog">Zur Übersicht</Link>
        <Title title={title} />
        <article>
          <Image fluid={fluid} alt={title} />
        </article>
        <article>
        <MDXProvider>
          <MDXRenderer>{content.childMdx.body}</MDXRenderer>
        </MDXProvider>
        </article>
      </section>
    </Layout>
  )
}

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
    }
  }
`

export default BlogTemplate
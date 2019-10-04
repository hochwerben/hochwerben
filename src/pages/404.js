import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import styles from "../css/error.module.css"
import Banner from "../components/Banner"
import SEO from "../components/SEO"
const NotFoundPage = () => (
  <Layout>
    <SEO title="Error"></SEO>
    <header className={styles.error}>
      <Banner title="oops! it's a dead end">
        <Link to="/" className="btn-white">
          back home
        </Link>
      </Banner>
    </header>
  </Layout>
)

export default NotFoundPage

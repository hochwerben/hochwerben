import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import styles from '../css/error.module.css';
import SEO from '../components/seo';
const NotFoundPage = () => (
  <Layout>
    <SEO title="Error"></SEO>
    <header className={styles.error}>
      <Link to="/" className="btn-white">
        back home
      </Link>
    </header>
  </Layout>
);

export default NotFoundPage;

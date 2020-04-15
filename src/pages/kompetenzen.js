import React from 'react';
import Layout from '../components/layout';
import Title from '../components/Title';
import styles from '../css/contact.module.css';
import SEO from '../components/seo';

const kompetenzen = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <section className={styles.contact}>
        <Title title="Kompetenzen"></Title>
        <article className={styles.text}>
          <p>Hier erscheinen demnächst unsere Kompetenzen im Detail.</p>
        </article>
      </section>
    </Layout>
  );
};

export default kompetenzen;

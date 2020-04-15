import React from 'react';
import Layout from '../components/layout';
import Title from '../components/Title';
import styles from '../css/contact.module.css';
import SEO from '../components/seo';

const leistungen = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <section className={styles.contact}>
        <Title title="Leistungen"></Title>
        <article className={styles.text}>
          <p>Hier erscheinen demnächst unsere Leistungen im Detail.</p>
        </article>
      </section>
    </Layout>
  );
};

export default leistungen;

import React from 'react';
import Layout from '../components/layout';
import Title from '../components/Title';
import styles from '../css/contact.module.css';
import SEO from '../components/seo';

const kontakt = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <section className={styles.contact}>
        <Title title="Kontakt"></Title>
        <article className={styles.text}>
          <p>
            Für nähere Informationen senden Sie uns eine Email an{' '}
            <a href="mailto:info@hochwerben.de">info@hochwerben.de</a>
          </p>
        </article>
      </section>
    </Layout>
  );
};

export default kontakt;

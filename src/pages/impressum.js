import React from 'react';
import Layout from '../components/layout';
import Title from '../components/Title';
import styles from '../css/policy.module.css';
import SEO from '../components/seo';

export default () => (
  <Layout>
    <SEO title="Impressum"></SEO>
    <section className={styles.centerPolicy}>
      <Title title="Impressum"></Title>
      <p className={styles.firstP}>
        <strong>ATLASAVIA GmbH</strong>
        <br />
        Nordendstrasse 82
        <br />
        D-64546 Moerfelden-Walldorf
        <br />
        Germany
        <br />
      </p>
      <p>
        Telefon: +49 6105 / 6766
        <br />
        Telefax: +49 6105 / 6738
        <br />
        E-Mail: contact@atlasavia.de
        <br />
        Web: www.atlasavia.de
        <br />
        Rechtsform: GmbH
        <br />
        Geschäftsführer: Christoph Fladung
        <br />
        Registerart: Handelsregister
        <br />
        Register / Ort: Amtsgericht Darmstadt
        <br />
        Registernummer: HRB 53375
        <br />
        Angehörige Kammer: IHK Darmstadt
        <br />
        Umsatzsteuer ID: DE 113827450
      </p>
    </section>
  </Layout>
);

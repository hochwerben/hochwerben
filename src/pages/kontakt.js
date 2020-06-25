import React from 'react';
import Layout from '../components/layout';
import Kontakt from '../components/Kontakt';
import SEO from '../components/seo';

const kontakt = () => {
  return (
    <Layout>
      <SEO
        title="Kontakt"
        description="Kontaktieren Sie uns per Telefon oder per E-Mail. Wir stehen Ihnen gerne beratend zur Seite"
      />
      <Kontakt />
    </Layout>
  );
};

export default kontakt;

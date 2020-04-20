import React from 'react';
import Layout from '../components/layout';
import Kontakt from '../components/Kontakt';
import SEO from '../components/seo';

const kontakt = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <Kontakt />
    </Layout>
  );
};

export default kontakt;

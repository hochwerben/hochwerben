import React from 'react';
import PropTypes from 'prop-types';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from '../components/Footer';

import CookieConsent from 'react-cookie-consent'

const Layout = ({ children }) => {
  return (
    <main>
     <CookieConsent
        location="bottom"
        buttonText="Akzeptieren"
        declineButtonText="Ablehnen"
        enableDeclineButton
        cookieName="gatsby-gdpr-google-analytics"
        buttonStyle={{
          backgroundColor: '#f49402',
          borderRadius: '2px',
          fontSize: '15px',
          fontFamily: 'Barlow',
          fontWeight: '500',
          letterSpacing: '1px',
          color: 'white',
        }}
        declineButtonStyle={{
          backgroundColor: '#94989c',
          borderRadius: '2px',
          fontSize: '15px',
          fontFamily: 'Barlow',
          fontWeight: '500',
          letterSpacing: '1px',
        }}
      >
        Wir verwenden Analyse-Cookies (Google Analytics), die uns helfen, Ihr Nutzererlebnis zu verbessern.
      </CookieConsent>
      <Navbar></Navbar>
      <Sidebar></Sidebar>
      {children}
      <Footer></Footer>
    </main>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

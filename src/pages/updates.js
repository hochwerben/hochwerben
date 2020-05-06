import React from 'react';
import Layout from '../components/layout';

export default () => {
  return (
    <Layout>
      <div
        style={{
          maxWidth: '600px',
          margin: '5rem auto',
        }}
      >
        <h3>Updates</h3>
        <ul style={{ listStyleType: 'square' }}>
          <li>
            <div>04.05.20</div>
            <ul style={{ listStyleType: 'circle' }}>
              <li>Formattierung von Tabellen</li>
              <li>
                Inhalt hinzugefügt bei:
                <ul style={{ listStyleType: 'square' }}>
                  <li>Fahrzeug-Beschriftung</li>
                  <li>Visitenkarten</li>
                  <li>Webdesign</li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </Layout>
  );
};

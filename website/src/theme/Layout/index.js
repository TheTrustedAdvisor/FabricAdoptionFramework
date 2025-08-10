import React from 'react';
import Layout from '@theme-original/Layout';

export default function LayoutWrapper(props) {
  return (
    <Layout {...props}>
      <div style={{ textAlign: 'center', marginTop: '1rem' }}>
        <img
          src={`https://img.shields.io/badge/last%20updated-${new Date()
            .toISOString()
            .slice(0, 10)}-brightgreen`}
          alt="Last updated"
        />
      </div>
    </Layout>
  );
}
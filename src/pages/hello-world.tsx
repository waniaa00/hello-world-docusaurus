import React from 'react';
import Layout from '@theme/Layout';

function HelloWorldPage() {
  return (
    <Layout
      title="Hello World"
      description="Hello World page from SpecifyPlus + Claude!"
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          padding: '2rem',
          textAlign: 'center',
          background: 'linear-gradient(to right, #00c6ff, #0072ff)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          color: '#0072ff', // Fallback color
        }}
      >
        <h1
          style={{
            fontSize: '4rem',
            fontWeight: 'bold',
            margin: 0,
            textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
          }}
        >
          👋 Hello World from SpecifyPlus + Claude!
        </h1>
      </div>
    </Layout>
  );
}

export default HelloWorldPage;

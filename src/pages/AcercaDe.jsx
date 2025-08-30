import React from 'react';
import Navbar from '../components/Navbar';

const cardStyle = {
  maxWidth: '600px',
  margin: '48px auto',
  background: '#fff',
  borderRadius: '16px',
  boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
  padding: '40px 32px 32px 32px',
  textAlign: 'center',
};


const AcercaDe = () => (
  <div style={{ minHeight: '100vh', background: '#f7fafc', display: 'flex', flexDirection: 'column' }}>
    <Navbar />
    <main style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 16px' }}>
      <section className="consulta-card" style={{maxWidth: 600}}>
        <h2 style={{ color: '#1a202c', fontSize: '2rem', textAlign: 'center', marginBottom: 18, fontWeight: 800, letterSpacing: '-1px' }}>Acerca de</h2>
        <p style={{ color: '#4a5568', fontSize: '1.1rem', marginBottom: 16 }}>
          Esta aplicación permite consultar información electoral de manera sencilla y rápida. Desarrollada como proyecto educativo.
        </p>
        <p style={{ color: '#4a5568', fontSize: '1.1rem' }}>
          Hecha con React, Vite y amor por la tecnología.
        </p>
      </section>
    </main>
  </div>
);

export default AcercaDe;

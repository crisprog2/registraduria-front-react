import React from 'react';
import './HomePage.css';
import Navbar from '../components/Navbar';

const HomePage = () => {
  return (
    <div style={{ minHeight: '100vh', background: '#f7fafc', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <main style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 16px' }}>
        <section style={{ maxWidth: 600, width: '100%', background: '#fff', borderRadius: 16, boxShadow: '0 4px 24px rgba(0,0,0,0.08)', padding: '40px 32px 32px 32px', textAlign: 'center' }}>
          <h2 style={{ color: '#2d3748', fontSize: '2rem', marginBottom: 18 }}>Consulta tu lugar de votación</h2>
          <label htmlFor="doc">Número de documento</label>
          <input id="doc" type="text" placeholder="Ej: 123456789" style={{ width: '100%', margin: '12px 0 18px 0', padding: 10, borderRadius: 6, border: '1px solid #ccc' }} />
          <button style={{ width: '100%', background: '#111827', color: '#fff', border: 'none', borderRadius: 6, padding: 12, fontWeight: 600, fontSize: '1rem', cursor: 'pointer' }}>Consultar lugar de votación</button>
        </section>
      </main>
    </div>
  );
};

export default HomePage;

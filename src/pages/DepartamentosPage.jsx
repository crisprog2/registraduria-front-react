

import React from 'react';
import Navbar from '../components/Navbar';
import DepartamentosList from '../components/DepartamentosList';
import '../pages/HomePage.css';

const DepartamentosPage = () => {
  return (
    <div className="home-bg">
      <Navbar />
      <main className="main-content">
        <section className="consulta-card" style={{maxWidth: 700}}>
          <h2 style={{ color: '#1a202c', fontSize: '2rem', textAlign: 'center', marginBottom: 18, fontWeight: 800, letterSpacing: '-1px' }}>Departamentos</h2>
          <div className="departamentos-list-container">
            <DepartamentosList />
          </div>
        </section>
      </main>
    </div>
  );
};

export default DepartamentosPage;

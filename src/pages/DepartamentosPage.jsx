
import React from 'react';
import Navbar from '../components/Navbar';
import DepartamentosList from '../components/DepartamentosList';
import './DepartamentosPage.css';


const DepartamentosPage = () => {
  return (
    <div style={{ minHeight: '100vh', background: '#f7fafc', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <main style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 16px' }}>
        <section style={{ maxWidth: 700, width: '100%', background: '#fff', borderRadius: 16, boxShadow: '0 4px 24px rgba(0,0,0,0.08)', padding: '40px 32px 32px 32px' }}>
          <h2 style={{ color: '#2d3748', fontSize: '2rem', textAlign: 'center', marginBottom: 18 }}>Departamentos</h2>
          <div className="departamentos-list-container">
            <DepartamentosList />
          </div>
        </section>
      </main>
    </div>
  );
};

export default DepartamentosPage;

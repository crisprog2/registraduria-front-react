import React from 'react';
import './HomePage.css';
import Navbar from '../components/Navbar';

const HomePage = () => {
  return (
    <div className="home-bg">
  <Navbar />
      <main className="main-content">
        <div className="consulta-card">
          <h2>Consulta tu lugar de votación</h2>
          <label htmlFor="doc">Número de documento</label>
          <input id="doc" type="text" placeholder="Ej: 123456789" />
          <button>Consultar lugar de votación</button>
        </div>
      </main>
    </div>
  );
};

export default HomePage;

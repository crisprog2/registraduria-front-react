import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-bg">
      <header className="main-header">
        <div className="logo">
          <span role="img" aria-label="urna">🗳️</span>
          <span>Consulta Votación</span>
        </div>
        <nav>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li className="dropdown">
              <span>Departamento ▾</span>
              <ul className="dropdown-content">
                <li><Link to="/departamentos">Consultar Lista</Link></li>
              </ul>
            </li>
            <li><a href="#">Acerca de</a></li>
          </ul>
        </nav>
      </header>
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


import React from 'react';
import { Link } from 'react-router-dom';
import DepartamentosList from '../components/DepartamentosList';
import './DepartamentosPage.css';


const DepartamentosPage = () => {
  return (
    <div className="home-bg">
      <header className="main-header">
        <div className="logo">
          <span role="img" aria-label="urna">🗳️</span>
          <span>Consulta Votación</span>
        </div>
        <nav>
          <ul>
            <li><Link to="/" replace>Inicio</Link></li>
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
        <div className="departamentos-page">
          <h2>Departamentos</h2>
          <div className="departamentos-list-container">
            <DepartamentosList />
          </div>
        </div>
      </main>
    </div>
  );
};

export default DepartamentosPage;

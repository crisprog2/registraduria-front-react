import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
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
            <li><Link to="/departamentos/consulta">Consultar por Código Departamento</Link></li>
          </ul>
        </li>
        <li className="dropdown">
          <span>Ciudad ▾</span>
          <ul className="dropdown-content">
            <li><Link to="/ciudades">Consultar Lista</Link></li>
          </ul>
        </li>
  <li><Link to="/acerca">Acerca de</Link></li>
      </ul>
    </nav>
  </header>
);

export default Navbar;

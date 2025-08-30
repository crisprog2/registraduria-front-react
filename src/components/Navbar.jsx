
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ onInicioClick }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({ dep: false, ciu: false });

  const handleMenuToggle = () => setMenuOpen((v) => !v);
  const handleDropdown = (key) => setDropdownOpen((d) => ({ ...d, [key]: !d[key] }));
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="main-header">
      <div className="logo">
        <span role="img" aria-label="urna">🗳️</span>
        <span>Consulta Votación</span>
      </div>
      <button className="menu-toggle" aria-label="Abrir menú" onClick={handleMenuToggle}>
        <span className="menu-icon">☰</span>
      </button>
      <nav className={menuOpen ? 'nav-open' : ''}>
        <ul>
          <li>
            <Link to="/" onClick={() => { closeMenu(); onInicioClick && onInicioClick(); }}>Inicio</Link>
          </li>
          <li className={dropdownOpen.dep ? 'dropdown open' : 'dropdown'}>
            <span onClick={() => handleDropdown('dep')} tabIndex={0} aria-haspopup="true" aria-expanded={dropdownOpen.dep} role="button">Departamento ▼</span>
            <ul className="dropdown-content">
              <li><Link to="/departamentos" onClick={closeMenu}>Consultar Lista</Link></li>
              <li><Link to="/departamentos/consulta" onClick={closeMenu}>Consultar por Código Departamento</Link></li>
            </ul>
          </li>
          <li className={dropdownOpen.ciu ? 'dropdown open' : 'dropdown'}>
            <span onClick={() => handleDropdown('ciu')} tabIndex={0} aria-haspopup="true" aria-expanded={dropdownOpen.ciu} role="button">Ciudad ▼</span>
            <ul className="dropdown-content">
              <li><Link to="/ciudades" onClick={closeMenu}>Consultar Lista</Link></li>
            </ul>
          </li>
          <li><Link to="/acerca" onClick={closeMenu}>Acerca de</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;

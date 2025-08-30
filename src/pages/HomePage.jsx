

import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './HomePage.css';
import Navbar from '../components/Navbar';
import { buscarPersonaPorCedula } from '../api/personas';
import ResultadoElectoralCard from '../components/ResultadoElectoralCard';

const HomePage = () => {
  const [cedula, setCedula] = useState('');
  const [resultado, setResultado] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const location = useLocation();
  // Reiniciar estado solo si la ruta es inicio
  useEffect(() => {
    // Para HashRouter, la ruta de inicio puede ser '/' o '/#/'
    if (location.pathname === '/' || location.pathname === '/#/' || location.hash === '#/' || location.hash === '') {
      setCedula('');
      setResultado(null);
      setError('');
      setLoading(false);
    }
  }, [location.pathname, location.hash]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setResultado(null);
    if (!cedula.trim()) {
      setError('Por favor ingresa un número de cédula.');
      return;
    }
    setLoading(true);
    try {
      const data = await buscarPersonaPorCedula(cedula.trim());
      if (!data) {
        setError('No se encontró una persona con esa cédula.');
      } else {
        setResultado(data);
      }
    } catch (err) {
      setError('Ocurrió un error al consultar.');
    } finally {
      setLoading(false);
    }
  };

  // Función para resetear el estado
  const handleReset = () => {
    setCedula('');
    setResultado(null);
    setError('');
    setLoading(false);
  };

  return (
    <div className="home-bg">
      <Navbar onInicioClick={handleReset} />
      <main className="main-content">
        <div className="home-header">
          <h1 className="home-title">Consulta Electoral</h1>
          <p className="home-subtitle">Ingresa tu número de documento para consultar tu información electoral y lugar de votación</p>
        </div>
        <section className="consulta-card consulta-card-mockup">
          <form onSubmit={handleSubmit}>
            <label htmlFor="doc" className="consulta-label">Número de Documento</label>
            <div className="consulta-input-group">
              <input
                id="doc"
                type="text"
                value={cedula}
                onChange={e => setCedula(e.target.value)}
                placeholder="Ej: 12345678"
                autoComplete="off"
                className="consulta-input"
              />
            </div>
            <button type="submit" className="consulta-btn" disabled={loading}>
              <span role="img" aria-label="lupa">🔍</span> Consultar Información Electoral
            </button>
          </form>
          {error && <div className="consulta-error">{error}</div>}
          {resultado && (
            <ResultadoElectoralCard resultado={resultado} />
          )}
        </section>
        <div className="home-info-cards">
          <div className="info-card">
            <div className="info-icon" style={{background: '#eaf3ff'}}><span role="img" aria-label="consulta">🗳️</span></div>
            <h4>Consulta Rápida</h4>
            <p>Encuentra tu información electoral de forma sencilla y rápida.</p>
          </div>
          <div className="info-card">
            <div className="info-icon" style={{background: '#e6f9f0'}}><span role="img" aria-label="seguridad">🔒</span></div>
            <h4>Información Segura</h4>
            <p>Tus datos están protegidos y se consultan de manera segura.</p>
          </div>
          <div className="info-card">
            <div className="info-icon" style={{background: '#f6eaff'}}><span role="img" aria-label="gestion">📋</span></div>
            <h4>Gestión Completa</h4>
            <p>Administra toda la información electoral desde un solo lugar.</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;

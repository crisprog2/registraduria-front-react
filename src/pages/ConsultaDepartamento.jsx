
import React, { useState } from 'react';
import { getDepartamentoByCodigo } from '../api/departamentos';
import Navbar from '../components/Navbar';
import '../pages/HomePage.css';


const ConsultaDepartamento = () => {
  const [codigo, setCodigo] = useState('');
  const [departamento, setDepartamento] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setDepartamento(null);
    setLoading(true);
    try {
      const data = await getDepartamentoByCodigo(codigo);
      if (data && data.departamento) {
        setDepartamento(data);
      } else {
        setError('Departamento no encontrado');
      }
    } catch (err) {
      setError('Error al consultar el departamento');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="home-bg">
      <Navbar />
      <main className="main-content">
        <section className="consulta-card" style={{maxWidth: 600}}>
          <h2 style={{ color: '#1a202c', fontSize: '2rem', textAlign: 'center', marginBottom: 18, fontWeight: 800, letterSpacing: '-1px' }}>Consulta Departamento</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="codigo" className="consulta-label">Código de departamento</label>
            <input
              id="codigo"
              type="text"
              value={codigo}
              onChange={e => setCodigo(e.target.value)}
              placeholder="Ej: 11"
              required
              className="consulta-input"
            />
            <button type="submit" className="consulta-btn" disabled={loading}>{loading ? 'Consultando...' : 'Consultar'}</button>
          </form>
          {departamento && (
            <div className="consulta-resultado" style={{marginTop: 18}}>
              <strong>Nombre:</strong> {departamento.departamento}
            </div>
          )}
          {error && <div className="consulta-error" style={{marginTop: 12}}>{error}</div>}
        </section>
      </main>
    </div>
  );
};

export default ConsultaDepartamento;

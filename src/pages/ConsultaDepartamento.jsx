import React, { useState } from 'react';
import { getDepartamentoByCodigo } from '../api/departamentos';
import './ConsultaDepartamento.css';
import Navbar from '../components/Navbar';

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
      setDepartamento(data);
    } catch (err) {
      setError('Departamento no encontrado');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="consulta-departamento-bg">
        <div className="consulta-card">
          <h2>Consulta Departamento</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="codigo">Código de departamento</label>
            <input
              id="codigo"
              type="text"
              value={codigo}
              onChange={e => setCodigo(e.target.value)}
              placeholder="Ej: 11"
              required
            />
            <button type="submit" disabled={loading}>{loading ? 'Consultando...' : 'Consultar'}</button>
          </form>
          {departamento && (
            <div className="resultado">
              <strong>Nombre:</strong> {departamento.departamento}
            </div>
          )}
          {error && <div className="error">{error}</div>}
        </div>
      </div>
    </>
  );
};

export default ConsultaDepartamento;

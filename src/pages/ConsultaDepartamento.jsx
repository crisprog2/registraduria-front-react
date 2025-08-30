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
      <main>
        <section style={{ maxWidth: 600, margin: '48px auto', background: '#fff', borderRadius: 16, boxShadow: '0 4px 24px rgba(0,0,0,0.08)', padding: '40px 32px 32px 32px', textAlign: 'center' }}>
          <h2 style={{ color: '#2d3748', fontSize: '2rem', marginBottom: 18 }}>Consulta Departamento</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="codigo">Código de departamento</label>
            <input
              id="codigo"
              type="text"
              value={codigo}
              onChange={e => setCodigo(e.target.value)}
              placeholder="Ej: 11"
              required
              style={{ width: '100%', margin: '12px 0 18px 0', padding: 10, borderRadius: 6, border: '1px solid #ccc' }}
            />
            <button type="submit" disabled={loading} style={{ width: '100%', background: '#111827', color: '#fff', border: 'none', borderRadius: 6, padding: 12, fontWeight: 600, fontSize: '1rem', cursor: 'pointer' }}>{loading ? 'Consultando...' : 'Consultar'}</button>
          </form>
          {departamento && (
            <div className="resultado" style={{ marginTop: 18, fontSize: '1.1rem' }}>
              <strong>Nombre:</strong> {departamento.departamento}
            </div>
          )}
          {error && <div className="error" style={{ marginTop: 12, color: '#e53e3e' }}>{error}</div>}
        </section>
      </main>
    </>
  );
};

export default ConsultaDepartamento;

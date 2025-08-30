import React, { useEffect, useState } from 'react';
import './CiudadesPage.css';
import Navbar from '../components/Navbar';
import { getCiudades } from '../api/ciudades';
import CiudadesList from '../components/CiudadesList';

const CiudadesPage = () => {
  const [ciudades, setCiudades] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // ...existing code...

  useEffect(() => {
    getCiudades()
      .then(data => {
        // Transformar los datos para que coincidan las claves con las esperadas por el componente
        const ciudadesTransformadas = data.map(c => ({
          codigo: c.cod_Ciudad,
          nombre: c.ciudad,
          departamento: c.departamento || c.departamento_nombre || '-'
        }));
        setCiudades(ciudadesTransformadas);
        setLoading(false);
      })
      .catch(() => {
        setError('Error al cargar ciudades');
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ minHeight: '100vh', background: '#f7fafc', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <main style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 16px' }}>
        <section style={{ maxWidth: 700, width: '100%', background: '#fff', borderRadius: 16, boxShadow: '0 4px 24px rgba(0,0,0,0.08)', padding: '40px 32px 32px 32px' }}>
          <h2 style={{ color: '#2d3748', fontSize: '2rem', textAlign: 'center', marginBottom: 18 }}>Ciudades</h2>
          <div className="ciudades-table-container">
            {loading && <p>Cargando...</p>}
            {error && <p>{error}</p>}
            {!loading && !error && (
              <CiudadesList ciudades={ciudades} />
            )}
          </div>
        </section>
      </main>
    </div>
  );
};

export default CiudadesPage;

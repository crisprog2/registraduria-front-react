
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { getCiudades } from '../api/ciudades';
import CiudadesList from '../components/CiudadesList';
import '../pages/HomePage.css';

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
    <div className="home-bg">
      <Navbar />
      <main className="main-content">
        <section className="consulta-card" style={{maxWidth: 700}}>
          <h2 style={{ color: '#1a202c', fontSize: '2rem', textAlign: 'center', marginBottom: 18, fontWeight: 800, letterSpacing: '-1px' }}>Ciudades</h2>
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

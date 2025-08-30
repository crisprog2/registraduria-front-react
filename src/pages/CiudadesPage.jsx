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
    <>
      <Navbar />
      <div className="ciudades-page">
        <h2>Ciudades</h2>
        <div className="ciudades-table-container">
          {loading && <p>Cargando...</p>}
          {error && <p>{error}</p>}
          {!loading && !error && (
            <CiudadesList ciudades={ciudades} />
          )}
        </div>
      </div>
    </>
  );
};

export default CiudadesPage;

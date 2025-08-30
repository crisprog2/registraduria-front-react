import React, { useEffect, useState } from 'react';
import { getDepartamentos } from '../api/departamentos';

const DepartamentosList = () => {
  const [departamentos, setDepartamentos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getDepartamentos()
      .then(data => {
        setDepartamentos(data);
        setLoading(false);
      })
      .catch(err => {
        setError('Error al cargar departamentos');
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="departamentos-table-container">
      <table className="departamentos-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
          </tr>
        </thead>
        <tbody>
          {departamentos.map(dep => (
            <tr key={dep.DepartamentoId}>
              <td>{dep.DepartamentoId}</td>
              <td>{dep.DepartamentoNombre}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DepartamentosList;

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
      <table className="departamentos-table departamentos-table-simple">
        <thead>
          <tr>
            <th>Código</th>
            <th>Departamento</th>
          </tr>
        </thead>
        <tbody>
          {departamentos.map((dep, idx) => (
            <tr key={idx}>
              <td>{dep.cod_Departamento}</td>
              <td>{dep.departamento}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DepartamentosList;

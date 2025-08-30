import React from 'react';
import '../styles/CiudadesList.css';

function CiudadesList({ ciudades }) {
  if (!ciudades || ciudades.length === 0) {
    return <p>No hay ciudades para mostrar.</p>;
  }

  return (
    <table className="ciudades-table">
      <thead>
        <tr>
          <th>Código</th>
          <th>Nombre</th>
          <th>Departamento</th>
        </tr>
      </thead>
      <tbody>
        {ciudades.map((ciudad) => (
          <tr key={ciudad.codigo}>
            <td>{ciudad.codigo}</td>
            <td>{ciudad.nombre}</td>
            <td>{ciudad.departamento_nombre || ciudad.departamento || '-'}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default CiudadesList;

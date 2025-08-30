import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function GeocodedMap({ direccion, ciudad, departamento }) {
  const [coords, setCoords] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!direccion || !ciudad || !departamento) return;
  const queryString = `${direccion}, ${ciudad}, ${departamento}, Colombia`;
  const query = encodeURIComponent(queryString);
    fetch(`https://nominatim.openstreetmap.org/search?q=${query}&format=json&limit=1`)
      .then(res => res.json())
      .then(data => {
        if (data && data[0]) {
          setCoords([parseFloat(data[0].lat), parseFloat(data[0].lon)]);
        } else {
          setError('No se pudo encontrar la ubicación.');
        }
      })
      .catch(() => setError('Error al buscar la ubicación.'));
  }, [direccion, ciudad, departamento]);

  if (error) return <div style={{color:'#e53e3e'}}>{error}</div>;
  if (!coords) return <div>Cargando mapa...</div>;

  return (
    <MapContainer center={coords} zoom={17} style={{ height: 200, width: '100%', borderRadius: 8 }} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={coords}>
        <Popup>
          {direccion}<br />{ciudad}, {departamento}
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default GeocodedMap;

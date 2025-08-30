import React from 'react';

import './ResultadoElectoralCard.css';
import GeocodedMap from './GeocodedMap';

const iconCheck = (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" style={{marginRight: 8, verticalAlign: 'middle'}}><circle cx="12" cy="12" r="12" fill="#e6f9f0"/><path d="M7 13.5L10.5 17L17 10.5" stroke="#16a34a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
);
const iconUser = <span style={{color:'#2563eb',marginRight:6,fontSize:'1.2em'}}>👤</span>;
const iconVote = <span style={{color:'#15803d',marginRight:6,fontSize:'1.2em'}}>🏛️</span>;
const iconMesa = <span style={{color:'#7c3aed',marginRight:6,fontSize:'1.2em'}}>🗳️</span>;
const iconMap = <span style={{color:'#ea580c',marginRight:6,fontSize:'1.2em'}}>🗺️</span>;

const ResultadoElectoralCard = ({ resultado }) => {
  if (!resultado) return null;
  return (
    <div className="resultado-electoral-card">
      <div className="rec-header">
        {iconCheck}
        <span className="rec-title">Información Electoral Encontrada</span>
      </div>
      <div className="rec-grid">
        <div className="rec-block rec-block-blue">
          <div className="rec-block-title rec-block-title-blue">{iconUser}Datos Personales</div>
          <div><b>Nombre:</b> {[resultado.primer_nombre, resultado.segundo_nombre, resultado.primer_apellido, resultado.segundo_apellido].filter(Boolean).join(' ') || '-'}</div>
          <div><b>Documento:</b> {resultado.cedula || '-'}</div>
          <div><b>Género:</b> {resultado.genero === 'm' ? 'Masculino' : resultado.genero === 'f' ? 'Femenino' : '-'}</div>
        </div>
        <div className="rec-block rec-block-purple">
          <div className="rec-block-title rec-block-title-purple">{iconMesa}Mesa de Votación</div>
          <div><b>Mesa N°:</b> {resultado.mesa_votacion || '-'}</div>
          <div><b>Jurado:</b> <span style={{color: resultado.es_jurado === 'N' ? '#16a34a' : '#b91c1c', fontWeight:600}}>{resultado.es_jurado === 'Y' ? 'Sí' : 'No'}</span></div>
        </div>
        <div className="rec-block rec-block-green">
          <div className="rec-block-title rec-block-title-green">{iconVote}Lugar de Votación</div>
          <div><b>Departamento:</b> {resultado.departamento || '-'}</div>
          <div><b>Ciudad:</b> {resultado.ciudad || '-'}</div>
          <div><b>Dirección:</b> {resultado.direccion_lugar_votacion || '-'}</div>
        </div>
        <div className="rec-block rec-block-orange">
          <div className="rec-block-title rec-block-title-orange">{iconMap}Ubicación</div>
          <GeocodedMap
            direccion={resultado.direccion_lugar_votacion}
            ciudad={resultado.ciudad}
            departamento={resultado.departamento}
          />
        </div>
      </div>
    </div>
  );
};

export default ResultadoElectoralCard;

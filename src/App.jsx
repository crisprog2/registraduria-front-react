
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';



import HomePage from './pages/HomePage';
import DepartamentosPage from './pages/DepartamentosPage';
import ConsultaDepartamento from './pages/ConsultaDepartamento';
import CiudadesPage from './pages/CiudadesPage';
import AcercaDe from './pages/AcercaDe';
import ReportePorGenero from './pages/ReportePorGenero';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/departamentos" element={<DepartamentosPage />} />
        <Route path="/departamentos/consulta" element={<ConsultaDepartamento />} />
        <Route path="/ciudades" element={<CiudadesPage />} />
        <Route path="/acerca" element={<AcercaDe />} />
        <Route path="/reportes/genero" element={<ReportePorGenero />} />
      </Routes>
    </Router>
  );
}

export default App

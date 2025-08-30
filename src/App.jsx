
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import DepartamentosPage from './pages/DepartamentosPage';
import ConsultaDepartamento from './pages/ConsultaDepartamento';
import CiudadesPage from './pages/CiudadesPage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/departamentos" element={<DepartamentosPage />} />
  <Route path="/departamentos/consulta" element={<ConsultaDepartamento />} />
  <Route path="/ciudades" element={<CiudadesPage />} />
      </Routes>
    </Router>
  );
}

export default App

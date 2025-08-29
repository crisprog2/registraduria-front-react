
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DepartamentosPage from './pages/DepartamentosPage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/departamentos" element={<DepartamentosPage />} />
      </Routes>
    </Router>
  );
}

export default App

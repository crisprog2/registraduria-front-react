
import React from 'react';
import Navbar from '../components/Navbar';
import DepartamentosList from '../components/DepartamentosList';
import './DepartamentosPage.css';


const DepartamentosPage = () => {
  return (
    <div className="home-bg">
  <Navbar />
      <main className="main-content">
        <div className="departamentos-page">
          <h2>Departamentos</h2>
          <div className="departamentos-list-container">
            <DepartamentosList />
          </div>
        </div>
      </main>
    </div>
  );
};

export default DepartamentosPage;

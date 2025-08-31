import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { getReportePorGenero } from '../api/reportes';
// Si usas otra librería de gráficos, cambia la importación
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ReportePorGenero = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    getReportePorGenero()
      .then((res) => {
        // Espera un array de objetos [{ genero: 'm', consultas: 1 }, ...]
        setData(res);
        setLoading(false);
      })
      .catch(() => {
        setError('Error al cargar el reporte');
        setLoading(false);
      });
  }, []);

  // Preparar datos para Chart.js
  let chartData = null;
  if (Array.isArray(data)) {
    // Mapear los géneros a etiquetas legibles
    const generoMap = { m: 'Masculino', f: 'Femenino' };
    const labels = data.map(item => generoMap[item.genero] || item.genero);
    const values = data.map(item => item.consultas);
    chartData = {
      labels,
      datasets: [
        {
          label: 'Consultas por Género',
          data: values,
          backgroundColor: ['#2563eb', '#ea580c', '#7c3aed', '#16a34a'],
        },
      ],
    };
  }

  return (
    <div className="home-bg">
      <Navbar />
      <main className="main-content">
        <section className="consulta-card" style={{maxWidth: 700}}>
          <h2 style={{ color: '#1a202c', fontSize: '2rem', textAlign: 'center', marginBottom: 18, fontWeight: 800, letterSpacing: '-1px' }}>
            Reporte por Género
          </h2>
          {loading && <p>Cargando...</p>}
          {error && <p style={{color:'#e53e3e'}}>{error}</p>}
          {!loading && !error && chartData && (
            <Bar data={chartData} options={{
              responsive: true,
              plugins: {
                legend: { display: false },
                title: { display: false },
              },
              scales: {
                y: { beginAtZero: true }
              }
            }} />
          )}
        </section>
      </main>
    </div>
  );
};

export default ReportePorGenero;

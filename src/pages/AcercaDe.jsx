import React from 'react';
import Navbar from '../components/Navbar';

const cardStyle = {
  maxWidth: '600px',
  margin: '48px auto',
  background: '#fff',
  borderRadius: '16px',
  boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
  padding: '40px 32px 32px 32px',
  textAlign: 'center',
};


const AcercaDe = () => (
  <div style={{ minHeight: '100vh', background: '#f7fafc', display: 'flex', flexDirection: 'column' }}>
    <Navbar />
    <main style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 16px' }}>
      <section style={cardStyle}>
        <h1 style={{ color: '#2d3748', fontSize: '2.2rem', marginBottom: 18 }}>Acerca de Consulta de Votación</h1>
        <p style={{ fontSize: '1.15rem', color: '#444', marginBottom: 24 }}>
          <strong>Consulta de Votación</strong> es una aplicación web moderna desarrollada con <b>React</b> y <b>Vite</b> que permite consultar información de votación y explorar departamentos y ciudades de Colombia, consumiendo datos desde una API REST construida en Django.
        </p>
        <ul style={{ textAlign: 'left', margin: '0 auto 28px auto', maxWidth: 500, paddingLeft: 0 }}>
          <li style={{ fontSize: '1.08rem', marginBottom: 10, color: '#2d3748', listStyle: 'none', position: 'relative', paddingLeft: 24 }}>
            <span style={{ color: '#3182ce', position: 'absolute', left: 0, fontSize: '1.2em' }}>•</span> Navegación intuitiva y responsiva con <b>React Router</b>.
          </li>
          <li style={{ fontSize: '1.08rem', marginBottom: 10, color: '#2d3748', listStyle: 'none', position: 'relative', paddingLeft: 24 }}>
            <span style={{ color: '#3182ce', position: 'absolute', left: 0, fontSize: '1.2em' }}>•</span> Listado de departamentos y ciudades actualizado desde el backend.
          </li>
          <li style={{ fontSize: '1.08rem', marginBottom: 10, color: '#2d3748', listStyle: 'none', position: 'relative', paddingLeft: 24 }}>
            <span style={{ color: '#3182ce', position: 'absolute', left: 0, fontSize: '1.2em' }}>•</span> Consulta individual de departamentos por código.
          </li>
          <li style={{ fontSize: '1.08rem', marginBottom: 10, color: '#2d3748', listStyle: 'none', position: 'relative', paddingLeft: 24 }}>
            <span style={{ color: '#3182ce', position: 'absolute', left: 0, fontSize: '1.2em' }}>•</span> Lógica de consumo de API centralizada para un código limpio y mantenible.
          </li>
          <li style={{ fontSize: '1.08rem', marginBottom: 10, color: '#2d3748', listStyle: 'none', position: 'relative', paddingLeft: 24 }}>
            <span style={{ color: '#3182ce', position: 'absolute', left: 0, fontSize: '1.2em' }}>•</span> Estilos modernos y consistentes en todas las tablas y vistas.
          </li>
        </ul>
        <div>
          <h2 style={{ color: '#3182ce', fontSize: '1.15rem', marginBottom: 10 }}>Tecnologías principales</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center', marginBottom: 18 }}>
            <span style={{ background: '#e2e8f0', color: '#2d3748', borderRadius: 6, padding: '6px 14px', fontSize: '1rem', fontWeight: 500 }}>React</span>
            <span style={{ background: '#e2e8f0', color: '#2d3748', borderRadius: 6, padding: '6px 14px', fontSize: '1rem', fontWeight: 500 }}>Vite</span>
            <span style={{ background: '#e2e8f0', color: '#2d3748', borderRadius: 6, padding: '6px 14px', fontSize: '1rem', fontWeight: 500 }}>Axios</span>
            <span style={{ background: '#e2e8f0', color: '#2d3748', borderRadius: 6, padding: '6px 14px', fontSize: '1rem', fontWeight: 500 }}>React Router</span>
            <span style={{ background: '#e2e8f0', color: '#2d3748', borderRadius: 6, padding: '6px 14px', fontSize: '1rem', fontWeight: 500 }}>CSS Moderno</span>
            <span style={{ background: '#e2e8f0', color: '#2d3748', borderRadius: 6, padding: '6px 14px', fontSize: '1rem', fontWeight: 500 }}>API REST (Django)</span>
          </div>
        </div>
        <footer style={{ marginTop: 24, color: '#888', fontSize: '0.98rem' }}>
          <p>Desarrollado por Christian y equipo &copy; 2025</p>
        </footer>
      </section>
    </main>
  </div>
);

export default AcercaDe;

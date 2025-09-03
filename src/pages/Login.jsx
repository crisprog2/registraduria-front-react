// src/pages/Login.jsx
import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { login } from '../api/auth';

const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const data = await login(username, password);
      loginUser(data.access, data.refresh);
      setLoading(false);
      window.location.href = '/'; // Redirige al home o dashboard
    } catch (err) {
      setError('Credenciales incorrectas o error de autenticación');
      setLoading(false);
    }
  };

  return (
    <div className="home-bg">
      <main className="main-content">
        <section className="consulta-card" style={{maxWidth: 400}}>
          <h2 style={{ color: '#1a202c', fontSize: '2rem', textAlign: 'center', marginBottom: 18, fontWeight: 800, letterSpacing: '-1px' }}>Iniciar Sesión</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username" className="consulta-label">Usuario</label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={e => setUsername(e.target.value)}
              placeholder="Usuario"
              required
              className="consulta-input"
            />
            <label htmlFor="password" className="consulta-label">Contraseña</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Contraseña"
              required
              className="consulta-input"
            />
            <button type="submit" className="consulta-btn" disabled={loading}>{loading ? 'Ingresando...' : 'Ingresar'}</button>
          </form>
          {error && <div className="consulta-error" style={{marginTop: 12}}>{error}</div>}
        </section>
      </main>
    </div>
  );
};

export default Login;

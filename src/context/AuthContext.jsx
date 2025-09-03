// src/context/AuthContext.jsx
import React, { createContext, useState, useEffect } from 'react';
import { refreshToken } from '../api/auth';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [accessToken, setAccessToken] = useState(localStorage.getItem('accessToken'));
  const [refreshTokenValue, setRefreshTokenValue] = useState(localStorage.getItem('refreshToken'));
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (accessToken) {
      setUser({}); // Puedes guardar más info si el backend la retorna
    } else {
      setUser(null);
    }
  }, [accessToken]);

  // Refresca el token si es necesario (puedes mejorar esto con lógica de expiración)
  const handleRefresh = async () => {
    if (refreshTokenValue) {
      try {
        setLoading(true);
        const data = await refreshToken(refreshTokenValue);
        setAccessToken(data.access);
        localStorage.setItem('accessToken', data.access);
        setLoading(false);
      } catch {
        setUser(null);
        setAccessToken(null);
        setRefreshTokenValue(null);
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        setLoading(false);
      }
    }
  };

  const loginUser = (access, refresh) => {
    setAccessToken(access);
    setRefreshTokenValue(refresh);
    localStorage.setItem('accessToken', access);
    localStorage.setItem('refreshToken', refresh);
    setUser({});
  };

  const logoutUser = () => {
    setUser(null);
    setAccessToken(null);
    setRefreshTokenValue(null);
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    window.location.href = '/login';
  };

  return (
    <AuthContext.Provider value={{ user, accessToken, refreshToken: refreshTokenValue, loginUser, logoutUser, handleRefresh, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

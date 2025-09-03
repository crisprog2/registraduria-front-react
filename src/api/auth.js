// src/api/auth.js
import api from './index';

// Solicita el token de acceso y refresh
export const login = async (email, password) => {
  const response = await api.post('token/', { email, password });
  return response.data; // { access, refresh }
};

// Refresca el token de acceso
export const refreshToken = async (refresh) => {
  const response = await api.post('token/refresh/', { refresh });
  return response.data; // { access }
};

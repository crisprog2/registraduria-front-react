import api from './index';

export const getCiudades = async () => {
  try {
    const response = await api.get('ciudades/');
    return response.data;
  } catch (error) {
    console.error('Error al obtener ciudades:', error);
    throw error;
  }
};

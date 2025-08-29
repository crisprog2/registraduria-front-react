import api from './index';

// Obtiene la lista de departamentos desde el backend Django
export const getDepartamentos = async () => {
  try {
    const response = await api.get('departamentos/');
    return response.data;
  } catch (error) {
    console.error('Error al obtener departamentos:', error);
    throw error;
  }
};

import api from './index';

// Busca una persona por cédula desde el backend Django
export const buscarPersonaPorCedula = async (cedula) => {
  try {
    const response = await api.get(`personas/buscar-por-cedula/?cedula=${cedula}`);
    return response.data;
  } catch (error) {
    console.error('Error al buscar persona:', error);
    throw error;
  }
};

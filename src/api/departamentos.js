// Obtiene un departamento por su código desde el backend Django
export const getDepartamentoByCodigo = async (codigo) => {
  try {
    const response = await api.get(`departamentos/${codigo}/`);
    return response.data;
  } catch (error) {
    console.error('Error al obtener el departamento:', error);
    throw error;
  }
};
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

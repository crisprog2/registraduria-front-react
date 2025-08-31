import api from './index';

export const getReportePorGenero = async () => {
  try {
    const response = await api.get('reportes/consultas-por-genero/');
    return response.data;
  } catch (error) {
    console.error('Error al obtener reporte por género:', error);
    throw error;
  }
};

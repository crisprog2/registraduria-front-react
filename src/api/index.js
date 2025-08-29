// Aquí puedes centralizar las funciones para consumir tu backend usando Axios
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://127.0.0.1:8000/api', // URL correcta del backend Django
});

export default api;

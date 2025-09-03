# Consulta de Votación - Frontend

Aplicación web moderna desarrollada en React + Vite para consultar información electoral, listar departamentos y ciudades, y visualizar reportes, consumiendo una API Django protegida con JWT.

## Características principales

- Consulta personalizada de información electoral por número de documento (pública).
- Autenticación JWT: login, refresh automático y logout seguro.
- Menú de navegación responsivo que muestra opciones según autenticación.
- Listado de departamentos y ciudades (protegido, requiere login).
- Reportes visuales (ej: por género) usando Chart.js (protegido).
- Página informativa "Acerca de" siempre accesible.
- Estilos modernos y experiencia de usuario optimizada.

## Instalación y uso

1. Clona el repositorio o descarga el código fuente.
2. Instala las dependencias:
   npm install
3. Inicia el servidor de desarrollo:
   npm run dev
4. Abre tu navegador en http://localhost:5173/

### Requisitos del backend
- El backend debe estar corriendo y permitir CORS desde el frontend.
- Endpoints protegidos requieren autenticación JWT (token y refresh).

## Estructura del proyecto

- src/pages/HomePage.jsx: Página principal y búsqueda pública.
- src/pages/Login.jsx: Página de login (autenticación JWT).
- src/pages/DepartamentosPage.jsx: Listado de departamentos (protegido).
- src/pages/CiudadesPage.jsx: Listado de ciudades (protegido).
- src/pages/ConsultaDepartamento.jsx: Consulta de departamento por código.
- src/pages/ReportePorGenero.jsx: Reporte visual por género (protegido).
- src/pages/AcercaDe.jsx: Página informativa accesible siempre.
- src/components/Navbar.jsx: Menú de navegación dinámico según autenticación.
- src/components/ResultadoElectoralCard.jsx: Tarjeta de resultados de consulta.
- src/components/DepartamentosList.jsx, src/components/CiudadesList.jsx: Tablas reutilizables.
- src/context/AuthContext.jsx: Contexto global de autenticación y manejo de sesión.
- src/api/: Lógica centralizada para consumir la API (Axios, interceptores, endpoints).

## Autenticación y seguridad

- El login se realiza en /login y requiere email y contraseña.
- Al autenticarse, se guardan los tokens JWT (access y refresh) en localStorage.
- Axios agrega automáticamente el token a cada petición protegida.
- Si el access token expira, Axios usa el refresh token para obtener uno nuevo (flujo automático).
- Al cerrar sesión, se eliminan los tokens y se redirige al login.
- El menú y las rutas protegidas solo son accesibles si el usuario está autenticado.

## Configuración de la API y variables

- La URL base de la API se configura en src/api/index.js.
- Por defecto apunta a http://127.0.0.1:8000/api.
- Puedes cambiarla según tu entorno de desarrollo o producción.
- Asegúrate de que el backend permita CORS para el dominio del frontend.

## Dependencias principales

- React
- Vite
- Axios
- react-router-dom
- chart.js
- react-chartjs-2

## Notas adicionales

- El proyecto sigue buenas prácticas de separación de lógica, componentes reutilizables y centralización de la autenticación.
- El código es fácilmente extensible para agregar nuevos reportes, endpoints o roles de usuario.
- Para desarrollo, puedes usar el backend local o remoto, solo ajusta la baseURL.

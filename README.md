
# Consulta de Votación - Frontend

Este proyecto es una aplicación web desarrollada en React + Vite para consultar información de votación y listar departamentos consumiendo una API creada en Django.

## Características principales

- Página principal con formulario para consultar lugar de votación.
- Menú de navegación moderno y responsivo.
- Página dedicada para listar departamentos obtenidos desde una API REST.
- Navegación entre páginas usando React Router.
- Estilos modernos y responsivos.

## Instalación y uso

1. Clona el repositorio o descarga el código fuente.
2. Instala las dependencias:
	```bash
	npm install
	```
3. Inicia el servidor de desarrollo:
	```bash
	npm run dev
	```
4. Abre tu navegador en [http://localhost:5173](http://localhost:5173)

## Estructura del proyecto

- `src/pages/HomePage.jsx`: Página principal con formulario y menú.
- `src/pages/DepartamentosPage.jsx`: Página para listar departamentos.
- `src/components/DepartamentosList.jsx`: Componente que consume la API y muestra los departamentos en tabla.
- `src/api/`: Lógica para consumir la API del backend (Axios).

## Configuración de la API

La URL base de la API se configura en `src/api/index.js`. Por defecto apunta a `http://127.0.0.1:8000/api`.
Asegúrate de que tu backend Django permita CORS para `http://localhost:5173`.

## Dependencias principales

- React
- Vite
- Axios
- react-router-dom

## Autor

Christian (y equipo)

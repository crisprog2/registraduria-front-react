
# Consulta de Votación - Frontend

Este proyecto es una aplicación web desarrollada en React + Vite para consultar información de votación y listar departamentos consumiendo una API creada en Django.

## Características principales

- Página principal con formulario para consultar lugar de votación.
- Menú de navegación moderno y responsivo con submenú de reportes.
- Página dedicada para listar departamentos obtenidos desde una API REST.
- Página de reportes: incluye reporte por género con gráfico de barras (Chart.js).
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
- `src/pages/CiudadesPage.jsx`: Página para listar ciudades.
- `src/pages/ConsultaDepartamento.jsx`: Consulta un departamento por código usando función centralizada.
- `src/pages/ReportePorGenero.jsx`: Reporte por género con gráfico de barras.
- `src/components/DepartamentosList.jsx`: Componente que muestra los departamentos en tabla.
- `src/components/CiudadesList.jsx`: Componente que muestra las ciudades en tabla.
- `src/api/`: Lógica centralizada para consumir la API del backend (Axios). Todas las funciones para endpoints están aquí.


## Buenas prácticas y organización

- Todas las llamadas a la API están centralizadas en la carpeta `src/api`.
- No se usa Axios ni fetch directamente en páginas o componentes, solo funciones de la API.
- Ejemplo: para consultar un departamento por código, usa `getDepartamentoByCodigo` desde `src/api/departamentos.js`.
- Los estilos de las tablas de departamentos y ciudades están unificados para una apariencia consistente.
- Los reportes consumen endpoints dedicados y presentan los datos con gráficos usando Chart.js.

## Configuración de la API

La URL base de la API se configura en `src/api/index.js`. Por defecto apunta a `http://127.0.0.1:8000/api`.
Asegúrate de que tu backend Django permita CORS para `http://localhost:5173`.

## Dependencias principales

- React
- Vite
- Axios
- react-router-dom
- chart.js
- react-chartjs-2

## Autor

Christian (y equipo)

# Mantaro Web Client

Menú web interactivo e interfaz de pedidos para Mantaro Ginebra. Desarrollado con React y Vite, la aplicación permite a los usuarios buscar productos, seleccionar variaciones de tamaño y transferir el estado de su carrito al flujo conversacional del backend.

## Tecnologías Utilizadas

- React 18
- Vite
- Context API (Gestión de estado del carrito)
- CSS Modules (Estilos encapsulados por componente)
- Framer Motion (Transiciones y animaciones fluidas)

## Puntos Técnicos Destacados

- Análisis Dinámico de Variantes: Procesa datos de precios con variaciones (ej. "3000/5000") para renderizar selectores condicionales en la interfaz gráfica automáticamente.
- Carrito Global: Gestión del carrito de compras sincronizada globalmente en memoria mediante Context API.
- Modularidad de Red: Conexión parametrizada al backend a través de la variable de entorno `VITE_API_URL`.

## Instrucciones de Configuración

1. Instalar Node.js (versión 18 o superior).
2. Clonar el repositorio y acceder a la carpeta del proyecto.
3. Instalar dependencias necesarias:
   ```bash
   npm install
   ```
4. Declarar variables de entorno en el archivo `.env` en la raíz del proyecto:
   ```env
   VITE_API_URL=http://localhost:5033/api
   ```
5. Iniciar el servidor local de desarrollo:
   ```bash
   npm run dev
   ```

## Compilación y Despliegue

El proyecto genera un artefacto estático (Single Page Application) que cuenta con optimizaciones nativas para plataformas de alojamiento web como Netlify. Para construir la versión minimizada a producción:
```bash
npm run build
```
Los archivos finales se depositarán dentro de la carpeta `dist`.# Mantaro Web UI

Interactive web menu and ordering interface for Mantaro Ginebra. Built with React and Vite, it allows users to browse products, select size variations, and transfer their cart to the backend's conversational flow.

## Technologies Used

- React 18
- Vite
- Context API (Cart Management)
- CSS Modules (Component styling)
- Framer Motion (Transitions and animations)

## Technical Highlights

- Dynamic Variant Parsing: Parses complex price strings (e.g., "3000/5000") to render interactive variant selectors (radio buttons) automatically.
- Global Context Cart: In-memory cart state synced across the application.
- API Integration: Modular API communication referencing the backend via VITE_API_URL.

## Setup Instructions

1. Install Node.js (v18 or higher recommended).
2. Clone the repository and navigate to the directory.
3. Install dependencies:

   `ash
   npm install
   `

4. Configure environment variables in a .env file:

   `env
   VITE_API_URL="http://localhost:5033/api"
   `

5. Start the development server:

   `ash
   npm run dev
   `

6. To generate a production build:

   `ash
   npm run build
   `

## Deployment

The project is built as a static SPA and is optimized for platforms like Netlify. The build output is deposited in the dist/ directory.

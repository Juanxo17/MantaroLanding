# 🚀 Guía de Instalación, Desarrollo y Deployment

Bienvenido a **Mantaro Ginebra** - Una landing page mágica para nuestro café-restaurante.

---

## 📋 Requisitos Previos

- **Node.js** (v14 o superior) - [Descargar](https://nodejs.org/)
- **npm** (incluido con Node.js)
- Una cuenta de **Anthropic** para obtener la API key de Claude
- Opcionalmente, cuentas en **Vercel** o **Railway** para deployment

---

## 🏃 Correr el Proyecto Localmente

### 1. Instalación Inicial

```bash
# Clonar el repositorio (o navegar a la carpeta del proyecto)
cd "Mantaro web/m"

# Instalar dependencias
npm install
```

### 2. Configurar Variables de Entorno

Copiar el archivo `.env.example` a `.env.local` y agregar tu API key de Anthropic:

```bash
# Copiar el template (en Windows)
copy .env.example .env.local

# Copiar el template (en macOS/Linux)
cp .env.example .env.local
```

Luego, edita `.env.local` y reemplaza el valor:

```env
VITE_ANTHROPIC_API_KEY=sk_ant_xxxxxxxxxxxxxxxxxxxxxxxx
```

**Para obtener tu API key:**
1. Ir a [console.anthropic.com](https://console.anthropic.com)
2. Iniciar sesión (crear cuenta si es necesario)
3. Navegar a "API Keys"
4. Copiar tu API key

### 3. Ejecutar el Servidor de Desarrollo

```bash
npm run dev
```

El proyecto estará disponible en: **http://localhost:5173**

### 4. Compilar para Producción

```bash
npm run build
```

Los archivos compilados estarán en la carpeta `dist/`

---

## 🌐 Deployment en Vercel (Recomendado ⭐)

Vercel es la plataforma más rápida y fácil para desplegar aplicaciones Vite + React.

### Paso 1: Preparar el Repositorio

```bash
# Inicializar Git (si no lo has hecho)
git init
git add .
git commit -m "Initial commit: Mantaro Ginebra landing page"

# Crear un repositorio en GitHub y hacer push
git remote add origin https://github.com/tu_usuario/mantaro-ginebra.git
git branch -M main
git push -u origin main
```

### Paso 2: Conectar con Vercel

1. Ir a [vercel.com](https://vercel.com)
2. Iniciar sesión o crear cuenta
3. Hacer clic en "New Project"
4. Seleccionar tu repositorio de GitHub
5. Vercel detectará automáticamente que es un proyecto Vite

### Paso 3: Configurar Variables de Entorno en Vercel

1. En la pantalla de configuración del proyecto:
   - Ir a **Settings → Environment Variables**
   - Agregar la variable:
     - **Name:** `VITE_ANTHROPIC_API_KEY`
     - **Value:** Tu API key de Anthropic
2. Hacer clic en "Save"

### Paso 4: Desplegar

Vercel automáticamente:
- Detecta cambios en Git
- Ejecuta `npm run build`
- Despliega en su CDN global

**¡Tu sitio estará en vivo en segundos!** 🎉

URL: `https://tu-proyecto.vercel.app`

---

## 🚂 Deployment en Railway (Alternativa)

Railway es otra opción excelente para desplegar aplicaciones JavaScript.

### Paso 1: Preparar el Git Repository

```bash
# Si aún no tienes Git configurado
git init
git add .
git commit -m "Initial commit: Mantaro Ginebra"
```

### Paso 2: Conectar con Railway

1. Ir a [railway.app](https://railway.app)
2. Iniciar sesión con GitHub
3. Hacer clic en "New Project → Deploy from GitHub repo"
4. Conectar tu cuenta de GitHub y seleccionar el repositorio

### Paso 3: Configurar Buildpack

1. En el proyecto de Railway, ir a **Settings**
2. Configurar el **Build Command**:
   ```
   npm run build
   ```
3. Configurar el **Start Command**:
   ```
   npm run preview
   ```

### Paso 4: Agregar Variables de Entorno

1. Ir a **Variables → Raw Editor**
2. Pegar:
   ```
   VITE_ANTHROPIC_API_KEY=sk_ant_xxxxxxxxxxxxxxxxxxxxxxxx
   ```
3. Hacer clic en "Deploy"

---

## 📁 Estructura del Proyecto

```
m/
├── src/
│   ├── components/          # Componentes React
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Menu.jsx
│   │   ├── Panzerotti.jsx
│   │   ├── Delivery.jsx
│   │   ├── Location.jsx
│   │   ├── Footer.jsx
│   │   └── Chatbot.jsx
│   ├── styles/              # Estilos CSS
│   │   └── globals.css      # Variables de color y estilos base
│   ├── data/                # Datos estáticos
│   │   └── menu.js          # Menú con categorías
│   ├── assets/              # Imágenes y recursos
│   │   └── logo.png         # Logo de Mantaro (debe ser agregado)
│   ├── App.jsx              # Componente principal
│   ├── main.jsx             # Punto de entrada
│   └── index.css            # Estilos de Vite
├── public/                  # Archivos públicos estáticos
├── .env.example             # Template de variables de entorno
├── .env.local               # Variables de entorno locales (no committear)
├── vercel.json              # Configuración para Vercel
├── vite.config.js           # Configuración de Vite
├── package.json             # Dependencias y scripts
└── README.md                # Este archivo
```

---

## 🎨 Personalización

### Colores Principales

Los colores están definidos en `src/styles/globals.css`:

```css
--color-dark-bg: #1a1008;        /* Fondo oscuro */
--color-beige: #C8A96E;          /* Beige principal */
--color-gold: #F5C518;           /* Oro/amarillo dorado */
--color-blue: #4A90D9;           /* Azul (no usado actualmente) */
```

### Tipografía

- **Display (títulos):** Cinzel (serif elegante)
- **Body (texto):** Inter (sans-serif legible)

### Agregar Logo

1. Colocar la imagen del logo en `src/assets/logo.png`
2. La imagen debe ser cuadrada y de preferencia PNG con fondo transparente
3. El tamaño recomendado es 500x500px o superior

### Modificar el Menú

Editar `src/data/menu.js` para agregar, eliminar o modificar productos.

---

## 🤖 Chatbot - Configuración

El chatbot flotante está conectado a Claude (Anthropic) y puede:
- Responder preguntas sobre el menú
- Proporcionar información de horarios y ubicación
- Sugerir pedidos por WhatsApp

### System Prompt del Chatbot

Está definido en `src/components/Chatbot.jsx`. Para modificarlo, editar el campo `system:` en la función `handleSendMessage`.

---

## 🔒 Variables de Entorno

**IMPORTANTE:** Nunca commitear `.env.local` a Git.

Las variables de entorno requeridas son:

| Variable | Descripción |
|----------|-------------|
| `VITE_ANTHROPIC_API_KEY` | API key de Anthropic para Claude |

El prefijo `VITE_` es necesario para que Vite exponga la variable al cliente.

---

## 🐛 Troubleshooting

### Error: "API key not valid"

- ✅ Verificar que la API key sea correcta en el archivo `.env.local`
- ✅ Verificar que no haya espacios en blanco antes o después
- ✅ Reiniciar el servidor de desarrollo (`npm run dev`)

### Error: "CORS error"

- La API de Anthropic debe aceptar requests desde tu dominio
- Si desplegaste en Vercel/Railway, los headers CORS suelen estar correctamente configurados
- Verificar que estés usando HTTPS en producción

### El chatbot no responde

- Verificar que la API key esté configurada en las variables de entorno
- Abrir la consola del navegador (F12) para ver mensajes de error
- Verificar que tengas crédito en la cuenta de Anthropic

### Estilos no se cargan correctamente

- Limpiar la caché: `npm run build` seguido de `npm run preview`
- Verificar que los módulos CSS estén siendo importados correctamente

---

## 📱 Responsive Design

El proyecto está completamente responsivo:
- **Desktop:** Soporte completo con todas las secciones optimizadas
- **Tablet:** Diseño adaptado (768px)
- **Mobile:** Navegación hamburger, layout de una columna (480px)

---

## 📊 Estadísticas del Proyecto

- **Componentes:** 9 (Navbar, Hero, About, Menu, Panzerotti, Delivery, Location, Footer, Chatbot)
- **Librerías principales:** React, Vite, Framer Motion, Lucide React, Axios
- **Líneas de código:** ~2000+ (componentes + estilos)
- **Tiempo de carga:** < 2 segundos (optimizado)

---

## 🎯 Próximas Mejoras

- [ ] Integrar carrito de compras real
- [ ] Sistema de reservas
- [ ] Galería de fotos/videos con Instagram API
- [ ] Multi-idioma (EN/ES)
- [ ] Analytics avanzado
- [ ] Integración con sistema POS

---

## 📞 Contacto y Soporte

**Mantaro Ginebra**
- 📍 Carrera 1 Calle 5 Esquina, Ginebra, Valle del Cauca
- 📱 WhatsApp: +57 316 667 7871
- 📧 Instagram: @mantaroginebra

---

## 📄 Licencia

Este proyecto es propiedad de Mantaro Ginebra. Todos los derechos reservados © 2024.

---

**Hecho con ❤️ para Mantaro Ginebra**

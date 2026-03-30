# 🚀 INSTRUCCIONES RÁPIDAS - Mantaro Ginebra

## ⚡ En 3 Minutos

### 1️⃣ Prepara tu API Key
```
Ir a: https://console.anthropic.com
Copiar tu API key
```

### 2️⃣ Configura el Proyecto
```bash
cd "Mantaro web/m"
npm install
```

### 3️⃣ Crea `.env.local`
```env
VITE_ANTHROPIC_API_KEY=tu_api_key_aqui
```

### 4️⃣ Corre el Servidor
```bash
npm run dev
```

**¡Listo! Abre http://localhost:5173** ✨

---

## 📱 Agregar Logo

1. Colocar imagen en: `src/assets/logo.png`
2. Debe ser PNG cuadrado (500x500px ideal)
3. Fondo transparente (recomendado)

---

## 🌐 Desplegar (Elige Uno)

### VERCEL (Lo más fácil) ⭐
```bash
# 1. Ir a vercel.com
# 2. Conectar tu GitHub
# 3. Seleccionar este proyecto
# 4. Agregar variable: VITE_ANTHROPIC_API_KEY
# 5. ¡Done! Deploy automático en cada push
```

### RAILWAY (Alternativa)
```bash
# 1. Ir a railway.app
# 2. Conectar GitHub
# 3. Seleccionar proyecto
# 4. Agregar variable: VITE_ANTHROPIC_API_KEY
# 5. Deploy automático
```

---

## 📝 Ediciones Comunes

### Cambiar Menú
Editar: `src/data/menu.js`

### Cambiar Colores
Editar: `src/styles/globals.css`
```css
--color-beige: #C8A96E;
--color-gold: #F5C518;
```

### Cambiar Horarios
Editar en cada componente (Hero, Footer, etc.)
Buscar: "9am–10pm"

### Cambiar WhatsApp
Buscar y reemplazar: `573166677871`

---

## ✅ Checklist Final

- [ ] Logo agregado en `src/assets/logo.png`
- [ ] API key configurada en `.env.local`
- [ ] Proyecto corre sin errores: `npm run dev`
- [ ] Se compila correctamente: `npm run build`
- [ ] Variables de entorno configuradas en Vercel/Railway
- [ ] Dominio personalizado agregado (opcional)

---

## 🆘 Problemas Comunes

| Problema | Solución |
|----------|----------|
| API key error | Verificar `.env.local` y reiniciar server |
| Puert 5173 ocupado | `npm run dev -- --port 3000` |
| Estilos rotos | `npm run build` luego `npm run preview` |
| Chatbot no responde | Checar consola (F12) y API key |

---

## 📚 Documentación Completa

Ver [README_PROYECTO.md](./README_PROYECTO.md) para descripción completa.
Ver [DEPLOYMENT.md](./DEPLOYMENT.md) para guía detallada de deploy.

---

## 🎯 Próximos Pasos

1. ✅ Agregar logo
2. ✅ Configurar API key
3. ✅ Personalizar menú si es necesario
4. ✅ Testear en mobile y desktop
5. ✅ Desplegar en Vercel o Railway
6. ✅ Compartir URL con @mantaroginebra

---

## 💬 Soporte

**WhatsApp:** +57 316 667 7871
**Instagram:** @mantaroginebra

---

**¡A disfrutar la magia de Mantaro Ginebra!** ✨

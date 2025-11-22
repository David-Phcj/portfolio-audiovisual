<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Portfolio Audiovisual

Portfolio personal desarrollado con React, TypeScript y Vite.

## 🚀 Ejecutar Localmente

### Opción 1: Con Docker Compose (Recomendado)

**Prerrequisitos:** Docker y Docker Compose

1. Construir y ejecutar el contenedor:
   ```bash
   docker-compose up --build
   ```

2. Abrir en el navegador:
   ```
   http://localhost:3000
   ```

3. Para detener:
   ```bash
   docker-compose down
   ```

### Opción 2: Sin Docker

**Prerrequisitos:** Node.js 20+

1. Instalar dependencias:
   ```bash
   npm install
   ```

2. Configurar variables de entorno (opcional):
   - Crear archivo `.env.local` con `GEMINI_API_KEY` si es necesario

3. Ejecutar en modo desarrollo:
   ```bash
   npm run dev
   ```

4. Abrir en el navegador:
   ```
   http://localhost:3000
   ```

## 🏗️ Construir para Producción

### Con Docker Compose

```bash
docker-compose -f docker-compose.prod.yml up --build
```

La aplicación estará disponible en `http://localhost:8080`

### Sin Docker

```bash
npm run build
```

Los archivos estáticos estarán en la carpeta `dist/`

## 📦 Desplegar en GitHub Pages

**IMPORTANTE:** GitHub Pages NO funciona directamente con Docker Compose. Necesitas construir la aplicación y usar GitHub Actions.

### Pasos para desplegar:

1. **Habilitar GitHub Pages en tu repositorio:**
   - Ve a Settings → Pages
   - Source: selecciona "GitHub Actions"

2. **Configurar el base path (si tu repo no es la raíz):**
   - Si tu repositorio se llama `portfolio-audiovisual`, edita `vite.config.ts`:
   ```typescript
   const base = '/portfolio-audiovisual/';
   ```
   - Si lo despliegas en un dominio personalizado, usa:
   ```typescript
   const base = '/';
   ```

3. **Hacer push a la rama main:**
   ```bash
   git add .
   git commit -m "Configurar despliegue en GitHub Pages"
   git push origin main
   ```

4. **El workflow automático se ejecutará:**
   - Ve a la pestaña "Actions" en GitHub
   - El workflow construirá y desplegará automáticamente
   - Tu sitio estará disponible en: `https://tu-usuario.github.io/portfolio-audiovisual/`

### Despliegue Manual (sin GitHub Actions)

Si prefieres desplegar manualmente:

```bash
# Construir la aplicación
npm run build

# Subir la carpeta dist/ a la rama gh-pages
# (puedes usar gh-pages: npm install -g gh-pages && gh-pages -d dist)
```

## 📝 Notas

- **¿Por qué no se ve nada al abrir index.html directamente?**
  - Este es un proyecto React con Vite que necesita ser procesado por un servidor
  - Los módulos ES6 y JSX necesitan ser transpilados
  - Usa `npm run dev` o Docker Compose para desarrollo
  - Para producción, construye con `npm run build` y sirve la carpeta `dist/`

- **Docker Compose vs GitHub Pages:**
  - Docker Compose es para desarrollo local o servidor propio
  - GitHub Pages solo sirve archivos estáticos (HTML, CSS, JS)
  - Usa GitHub Actions para construir automáticamente y desplegar

## 🛠️ Scripts Disponibles

- `npm run dev` - Servidor de desarrollo
- `npm run build` - Construir para producción
- `npm run preview` - Previsualizar build de producción

## 📄 Licencia

Este proyecto es privado.

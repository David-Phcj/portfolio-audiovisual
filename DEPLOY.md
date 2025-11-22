# Guía de Despliegue en GitHub Pages

Esta guía te ayudará a desplegar tu portfolio audiovisual en GitHub Pages.

## 📋 Requisitos Previos

1. Tener una cuenta de GitHub
2. Tener el proyecto en un repositorio de GitHub
3. Tener permisos de escritura en el repositorio

## 🚀 Pasos para Desplegar

### Paso 1: Configurar el Base Path

**IMPORTANTE:** Si tu repositorio se llama `portfolio-audiovisual` (o cualquier nombre que NO sea `tu-usuario.github.io`), el base path ya está configurado en `vite.config.ts`.

Si tu repositorio se llama exactamente `tu-usuario.github.io`, necesitas cambiar el base path a `/`:

1. Abre `vite.config.ts`
2. Cambia la línea:
   ```typescript
   const base = process.env.GITHUB_PAGES_BASE || '/portfolio-audiovisual/';
   ```
   Por:
   ```typescript
   const base = process.env.GITHUB_PAGES_BASE || '/';
   ```

### Paso 2: Configurar Permisos del Repositorio

1. Ve a tu repositorio en GitHub
2. Haz clic en **Settings** (Configuración)
3. En el menú lateral, busca **Actions** → **General**
4. Desplázate hasta **Workflow permissions**
5. Selecciona: **Read and write permissions**
6. Marca la casilla: **Allow GitHub Actions to create and approve pull requests**
7. Haz clic en **Save**

### Paso 3: Habilitar GitHub Pages en tu Repositorio

1. En **Settings**, busca **Pages**
2. En **Source** (Fuente), selecciona:
   - **Source**: `GitHub Actions` (NO selecciones "Deploy from a branch")
3. Guarda los cambios

### Paso 4: Hacer Push de tu Código

1. Asegúrate de que todos tus cambios estén guardados
2. Haz commit y push a la rama `main`:

```bash
git add .
git commit -m "Preparar para despliegue en GitHub Pages"
git push origin main
```

### Paso 5: Verificar el Despliegue

1. Ve a la pestaña **Actions** en tu repositorio de GitHub
2. Verás que se está ejecutando el workflow "Deploy to GitHub Pages"
3. Espera a que termine (puede tardar 2-5 minutos)
4. Cuando veas una marca verde ✅, el despliegue fue exitoso

### Paso 6: Acceder a tu Sitio

Tu sitio estará disponible en:
- **Si tu repo NO es `tu-usuario.github.io`**: 
  `https://tu-usuario.github.io/portfolio-audiovisual/`
  
- **Si tu repo SÍ es `tu-usuario.github.io`**: 
  `https://tu-usuario.github.io/`

## 🔧 Generar package-lock.json (Opcional)

Si quieres generar el archivo `package-lock.json` usando Docker:

```bash
docker-compose up -d
docker exec portfolio-audiovisual npm install
docker-compose down
```

Esto generará el `package-lock.json` en tu proyecto local, que puedes hacer commit y push. Sin embargo, **NO es necesario** - el workflow funciona sin él usando `npm install` en lugar de `npm ci`.

## 🔧 Solución de Problemas

### El sitio no carga correctamente

1. Verifica que el base path en `vite.config.ts` coincida con el nombre de tu repositorio
2. Revisa los logs en la pestaña **Actions** para ver si hay errores
3. Asegúrate de que todos los archivos en `public/assets/` estén incluidos en el repositorio

### Los videos/imágenes no se ven

1. Verifica que los archivos estén en `public/assets/` (no solo en `assets/`)
2. Asegúrate de que las rutas en `constants.ts` empiecen con `/assets/`
3. Verifica que los archivos estén incluidos en el repositorio (no en `.gitignore`)

### El workflow falla

1. Revisa los logs en **Actions** para ver el error específico
2. Verifica que `package.json` tenga todos los scripts necesarios
3. Asegúrate de que no haya errores de sintaxis en el código

### Error de permisos (403)

Si ves un error de permisos al hacer push:

1. Ve a **Settings** → **Actions** → **General**
2. En **Workflow permissions**, selecciona **Read and write permissions**
3. Guarda los cambios
4. Haz push nuevamente o re-ejecuta el workflow desde la pestaña **Actions**

### El directorio dist no se crea

Si el build falla porque no se crea el directorio `dist`:

1. Verifica que `npm run build` funcione localmente
2. Revisa los logs del paso "Build" en GitHub Actions
3. Asegúrate de que no haya errores de compilación en el código

## 🔄 Actualizar el Sitio

Cada vez que hagas push a la rama `main`, el sitio se actualizará automáticamente:

```bash
git add .
git commit -m "Actualizar contenido"
git push origin main
```

El workflow se ejecutará automáticamente y tu sitio se actualizará en unos minutos.

## 📝 Notas Importantes

- **Primera vez**: El despliegue puede tardar más tiempo (5-10 minutos)
- **Actualizaciones**: Los despliegues posteriores son más rápidos (2-5 minutos)
- **Base Path**: Si cambias el nombre del repositorio, actualiza el base path en `vite.config.ts`
- **Archivos estáticos**: Todos los archivos en `public/` se copian automáticamente al build

## 🎯 Verificación Final

Después del despliegue, verifica que:
- ✅ El sitio carga correctamente
- ✅ Los videos se reproducen
- ✅ Las imágenes se muestran
- ✅ Los reproductores de audio funcionan
- ✅ La navegación funciona correctamente

¡Listo! Tu portfolio está desplegado en GitHub Pages. 🎉


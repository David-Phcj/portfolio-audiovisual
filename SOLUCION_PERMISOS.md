# Solución al Error de Permisos 403 en GitHub Pages

Si sigues teniendo el error 403 después de configurar los permisos, sigue estos pasos:

## 🔑 Opción 1: Crear Personal Access Token (Recomendado)

### Paso 1: Crear el Token

1. Ve a GitHub → Tu perfil (esquina superior derecha) → **Settings**
2. En el menú lateral izquierdo, busca **Developer settings**
3. Haz clic en **Personal access tokens** → **Tokens (classic)**
4. Haz clic en **Generate new token** → **Generate new token (classic)**
5. Dale un nombre: `GitHub Pages Deploy`
6. Selecciona la expiración (puedes poner "No expiration" o una fecha lejana)
7. **Marca estos scopes:**
   - ✅ `repo` (marca todas las sub-opciones)
   - ✅ `workflow` (si está disponible)
8. Haz clic en **Generate token** al final
9. **⚠️ IMPORTANTE: Copia el token inmediatamente** - no podrás verlo de nuevo

### Paso 2: Agregar el Token como Secret

1. Ve a tu repositorio: `https://github.com/David-Phcj/portfolio-audiovisual`
2. Ve a **Settings** → **Secrets and variables** → **Actions**
3. Haz clic en **New repository secret**
4. **Name**: `GH_PAGES_TOKEN`
5. **Secret**: Pega el token que copiaste
6. Haz clic en **Add secret**

### Paso 3: Actualizar el Workflow

Actualiza el archivo `.github/workflows/deploy.yml` y cambia:

```yaml
github_token: ${{ secrets.GITHUB_TOKEN }}
```

Por:

```yaml
github_token: ${{ secrets.GH_PAGES_TOKEN }}
```

### Paso 4: Hacer Push

```bash
git add .github/workflows/deploy.yml
git commit -m "Usar Personal Access Token para despliegue"
git push origin main
```

## 🔄 Opción 2: Usar la Acción Oficial de GitHub Pages

Si prefieres usar la acción oficial de GitHub (puede funcionar mejor con permisos):

### Actualizar el workflow a:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      pages: write
      id-token: write
    
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
      
      - name: Install dependencies
        run: npm install
      
      - name: Build
        run: npm run build
      
      - name: Setup Pages
        uses: actions/configure-pages@v4
      
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    permissions:
      pages: write
      id-token: write
    
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### Configurar GitHub Pages:

1. Ve a **Settings** → **Pages**
2. En **Source**, selecciona: **GitHub Actions** (no "Deploy from a branch")
3. Guarda

## ✅ Verificación

Después de aplicar cualquiera de las soluciones:

1. Ve a la pestaña **Actions** en tu repositorio
2. Espera a que el workflow termine
3. Si es exitoso, verás una marca verde ✅
4. Tu sitio estará disponible en: `https://david-phcj.github.io/portfolio-audiovisual/`

## 🆘 Si Nada Funciona

1. Verifica que el repositorio sea público (o que tengas GitHub Pro si es privado)
2. Verifica que GitHub Pages esté habilitado en **Settings** → **Pages**
3. Intenta eliminar la rama `gh-pages` manualmente y dejar que el workflow la cree
4. Contacta con el soporte de GitHub si el problema persiste


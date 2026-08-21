# Santoryu Labs

Landing de **Santoryu Labs** — antes, durante y después de cada partida.
Construida con React + TypeScript + Vite + Tailwind CSS, con una estética
claymorphism sobre una paleta morado / lima / cian / dorado.

Incluye la sección de **Score 7** (el score tracker de la marca) y una
**bitácora de noticias de juegos de mesa** que siempre enlaza a la fuente
original (Spiel des Jahres, Gen Con, Zatu Games, etc.).

## Desarrollo local

Requiere Node 20+ y [pnpm](https://pnpm.io/).

```bash
pnpm install
pnpm dev
```

Abrí `http://localhost:5173`.

## Build de producción

```bash
pnpm build
```

Genera el sitio estático en `dist/`.

## Desplegar en GitHub Pages (deploy por branch)

GitHub Pages, en modo **"Deploy from a branch"**, sirve los archivos
estáticos que estén en una rama del repo (no compila nada por vos). Como
este proyecto necesita un build de Vite antes de servirse, usamos el
paquete `gh-pages` para automatizar eso: compila el sitio y sube el
contenido de `dist/` a una rama `gh-pages`, lista para que Pages la sirva.

### Primera vez

1. **Creá el repositorio en GitHub** (vacío, sin README/gitignore/license
   para no pisar el historial que ya trae este proyecto). Por ejemplo
   `tu-usuario/tu-usuario.github.io` si querés que el sitio viva en la raíz
   de `https://tu-usuario.github.io`.

2. **Conectá tu repo local con el remoto** (parado en la carpeta del
   proyecto, la que tiene este `README.md`):

   ```bash
   git remote add origin https://github.com/TU-USUARIO/TU-REPO.git
   git push -u origin main
   ```

3. **Instalá dependencias** (si no lo hiciste ya):

   ```bash
   pnpm install
   ```

4. **Desplegá** — este comando compila el sitio y publica `dist/` en la
   rama `gh-pages` (la crea sola la primera vez):

   ```bash
   pnpm run deploy:pages
   ```

5. **Activá Pages**: en GitHub, andá a **Settings → Pages**.
   - **Source**: `Deploy from a branch`
   - **Branch**: `gh-pages` / carpeta `/ (root)`
   - **Save**

   A los pocos minutos el sitio queda activo en
   `https://tu-usuario.github.io/tu-repo/` (o en la raíz si el repo se
   llama `tu-usuario.github.io`).

### Cada vez que quieras publicar cambios

Con el sitio ya activado una vez, alcanza con:

```bash
git add -A && git commit -m "cambios"
git push origin main          # guarda el código fuente en main
pnpm run deploy:pages         # compila y publica la nueva versión
```

`main` es el código fuente; `gh-pages` es únicamente el sitio compilado —
no la edites a mano, `gh-pages` la sobrescribe en cada deploy.

### Dominio propio (santoryulabs.com)

`public/CNAME` ya trae `santoryulabs.com`, así que Vite lo copia a
`dist/CNAME` en cada build y `gh-pages` lo sube junto con el resto — GitHub
Pages lo reconoce automáticamente apenas hacés el primer `deploy:pages`.
Solo falta:

1. En tu proveedor de DNS, apuntar `santoryulabs.com` con un registro `A` a
   las IPs de GitHub Pages (`185.199.108.153`, `.109.153`, `.110.153`,
   `.111.153`), o un `CNAME` a `tu-usuario.github.io` si vas a usar un
   subdominio como `www`.
2. En **Settings → Pages → Custom domain**, confirmar que diga
   `santoryulabs.com` y guardar (GitHub verifica el DNS y puede tardar
   unos minutos).
3. Activar **Enforce HTTPS** una vez que el certificado esté listo.

Si todavía no tenés el dominio conectado, borrá `public/CNAME` antes del
deploy y GitHub Pages va a servir el sitio solo en la URL `github.io`, sin
problema.

## Estructura

```
src/
  components/site/   secciones de la landing (Hero, Score7, News, Faq, ...)
  index.css          tokens de color + utilidades "clay"
  App.tsx            composición de la página
public/
  favicon.svg        ícono de tres trazos (morado/lima/cian/dorado)
  CNAME              dominio para GitHub Pages
  .nojekyll          evita que GitHub procese el sitio con Jekyll
```

## Previsualizar como artifact de claude.ai (opcional)

```bash
pnpm add -D parcel @parcel/config-default parcel-resolver-tspaths html-inline
cp public/favicon.svg ./favicon.svg
pnpm exec parcel build index.html --dist-dir dist --no-source-maps
pnpm exec html-inline dist/index.html > bundle.html
rm favicon.svg
```

Esto no hace falta para el deploy real — es solo para generar un único
`bundle.html` de referencia.

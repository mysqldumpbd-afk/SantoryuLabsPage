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

## Desplegar en GitHub Pages

Este repo ya incluye un workflow (`.github/workflows/deploy.yml`) que compila
el sitio y lo publica en GitHub Pages en cada push a `main`.

Pasos para activarlo:

1. Creá el repositorio en GitHub (por ejemplo `tu-usuario/tu-usuario.github.io`
   para un sitio de usuario en la raíz del dominio, o `tu-usuario/santoryu-labs`
   para un sitio de proyecto).
2. Pusheá este proyecto a la rama `main`.
3. En **Settings → Pages**, elegí **Source: GitHub Actions**.
4. El workflow corre solo y publica `dist/` en cada push.

### Dominio propio (santoryulabs.com)

Ya dejamos el archivo `public/CNAME` con `santoryulabs.com`, así que Vite lo
copia a `dist/CNAME` en cada build y GitHub Pages lo reconoce automáticamente.
Solo falta:

1. En tu proveedor de DNS, apuntar `santoryulabs.com` con un registro `A` a
   las IPs de GitHub Pages (`185.199.108.153`, `.109.153`, `.110.153`,
   `.111.153`), o un `CNAME` a `tu-usuario.github.io` si vas a usar un
   subdominio como `www`.
2. En **Settings → Pages → Custom domain**, escribir `santoryulabs.com` y
   guardar (GitHub verifica el DNS y puede tardar unos minutos).
3. Activar **Enforce HTTPS** una vez que el certificado esté listo.

Si todavía no tenés el dominio conectado, podés borrar `public/CNAME` y
GitHub Pages va a servir el sitio en `https://tu-usuario.github.io/...`
sin problema.

## Estructura

```
src/
  components/site/   secciones de la landing (Hero, Score7, News, Faq, ...)
  index.css          tokens de color + utilidades "clay"
  App.tsx            composición de la página
public/
  favicon.svg        ícono de tres trazos (morado/lima/cian/dorado)
  CNAME              dominio para GitHub Pages
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

# Portafolio de desarrollador

Base de un portafolio personal construido con Astro y TypeScript.

## Requisitos

Node.js `>=22.12.0` (ver `engines` en `package.json`).

## Empezar

```bash
npm install
npm run dev
```

El servidor local estará en http://localhost:4321.

## Comandos

- `npm run dev`: servidor de desarrollo.
- `npm run build`: genera el sitio estático en `dist/`.
- `npm run preview`: previsualiza la compilación.

## Estructura

```text
public/                 Archivos estáticos servidos sin transformación.
src/
├── assets/              Imágenes y recursos importados desde el código.
├── components/          Componentes Astro reutilizables.
├── content/projects/    Contenido de proyectos (preparado para organizarlo).
├── data/                Datos del sitio y configuración editable.
├── layouts/             Estructuras compartidas de página.
├── pages/               Rutas; cada archivo define una URL.
└── styles/              Estilos globales y tokens de diseño.
```

Mantener las páginas enfocadas en componer componentes y dejar los estilos compartidos en `src/styles/`. Usar `public/` para archivos con ruta fija (por ejemplo, `favicon.svg`) y `src/assets/` para imágenes que se quiera importar y optimizar desde Astro.



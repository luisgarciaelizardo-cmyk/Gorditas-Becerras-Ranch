# Gorditas Becerra's Ranch

Página web estática (sin build) para el restaurante, lista para Vercel.

```
index.html          Página principal (logo, menú, WhatsApp, Instagram, Facebook)
menu.pdf            Menú en PDF que se abre con el botón "Ver menú"
assets/             Logo, íconos y fuentes locales
menu-src/           Fuente del menú (HTML) y script para regenerar el PDF
vercel.json         Sirve el PDF en línea (se abre en el navegador)
```

## Publicar en Vercel

1. En vercel.com → **Add New… → Project** → importa este repositorio.
2. Framework Preset: **Other**. Sin comando de build ni carpeta de salida.
3. **Deploy**.

## Cambiar precios o productos del menú

1. Edita `menu-src/menu.html`.
2. Regenera el PDF:
   ```bash
   npm i --no-save playwright && npx playwright install chromium
   node menu-src/render.mjs
   ```
   Esto actualiza `menu.pdf` y `menu-src/preview.png`.

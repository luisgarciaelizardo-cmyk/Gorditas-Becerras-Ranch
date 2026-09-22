# Gorditas Becerra's Ranch

Página web estática (sin build) para el restaurante, lista para Vercel.

```
index.html   Página principal (logo, menú, WhatsApp, ubicaciones, Instagram, Facebook)
menu.html    Menú completo (se abre en /menu)
assets/      Logo, íconos y fuentes locales
vercel.json  URLs limpias (/menu en lugar de /menu.html)
```

## Publicar en Vercel

1. En vercel.com → **Add New… → Project** → importa este repositorio.
2. Framework Preset: **Other**. Sin comando de build ni carpeta de salida.
3. **Deploy**.

## Cambiar precios o productos

Edita `menu.html`: cada grupo de gorditas/bebidas es una lista `<ul>` y su
precio está en `<div class="sign">$27</div>`.

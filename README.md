# Gorditas Becerra's Ranch

Página web estática (sin build) para el restaurante, lista para Vercel.

```
index.html   Página principal (logo, menú, WhatsApp, ubicaciones, Instagram, Facebook)
menu.html    Página del menú (se abre en /menu), muestra assets/menu.jpg
assets/      Logo, íconos y fuentes locales
vercel.json  URLs limpias (/menu en lugar de /menu.html)
```

## Publicar en Vercel

1. En vercel.com → **Add New… → Project** → importa este repositorio.
2. Framework Preset: **Other**. Sin comando de build ni carpeta de salida.
3. **Deploy**.

## Cambiar el menú

Reemplaza `assets/menu.jpg` por la nueva imagen del menú (mismo nombre).
Si cambia el tamaño, actualiza `width`/`height` del `<img>` en `menu.html`.

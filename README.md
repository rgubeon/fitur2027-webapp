# FITUR 2027 · Pabellón de Andalucía — App v38

Prototipo interactivo de la app companion del Pabellón de Andalucía en **FITUR 2027**, construido con el sistema de diseño **Andalusian Cromarium v2**.

## Entregable

- **`FITUR 2027 App v38.dc.html`** — App companion. Portales público, profesional, empresa, prensa y organización: Home, Explora, Ficha de destino/empresa, Agenda, Mapa del pabellón, Cromarium, Networking, Mi pase, Actividades, Sostenibilidad y paneles de organización.

## Dependencias incluidas

- `support.js` — runtime de los Design Components.
- `fitur-data-v38.js` — datos de provincias, destinos, ciudades, agenda, mapa, actividades y empresas.
- `FilterDropdown.dc.html` — componente de menú desplegable reutilizable.
- `_ds/…/` — sistema de diseño Andalusian Cromarium v2 (tokens, estilos y bundle de componentes).
- `assets/` — imágenes que usa v38 (crystal-A, hero e iconografía de actividades).

## Cómo abrir

Los `*.dc.html` son **Design Components** autocontenidos: se abren en el navegador sirviendo la carpeta (necesitan `support.js` y `_ds/` en las rutas relativas).

```
python3 -m http.server 8000
# → http://localhost:8000/FITUR%202027%20App%20v38.dc.html
```

## Notas

- Idioma de interfaz: español (Castellano).
- Es un **prototipo de diseño en HTML**, no código de producción.

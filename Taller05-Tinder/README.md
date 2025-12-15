Taller05 - Mini Tinder (replica educativa)
===========================================

Descripción
-----------
Pequeña réplica educativa de la interfaz de 'swipe' (tipo Tinder) usando HTML, CSS y JavaScript puro (sin frameworks). El objetivo es mostrar la UI y la lógica básica de arrastrar (drag) para "like" / "dislike" y botones de control.

Estructura
----------
- `index.html` — página principal con la pila de tarjetas y botones.
- `css/style.css` — estilos para la pila, animaciones y controles.
- `js/app.js` — lógica de interacción: pointer (mouse/touch), animaciones, botones.

Paleta de colores
-----------------
Esta réplica usa la paleta distintiva del proyecto para mantener coherencia visual:

- Primario: `#D72631` (rojo)
- Acento: `#FFC300` (amarillo)
- Naranja: `#FF9F1C` (warm orange)
- Neutro: `#1B1B1B` (texto)
- Fondo suave: `#FFF9F2`

Los botones y la cabecera usan estas variables CSS (definidas en `css/style.css`) para que la interfaz tenga los colores del curso.

Inspiración visual (Tinder-like)
--------------------------------
El fondo ahora usa un degradado rosa inspirado en la apariencia de Tinder para que la réplica parezca más familiar:

- Degradado: `linear-gradient(135deg, #FF7A7A, #FF3B30)` (definido como `--tinder-pink-1` / `--tinder-pink-2` en `:root`).
- Cabecera y botones contrastan con fondo rosa para mantener legibilidad.

Probar localmente
-----------------
Puedes servir la carpeta con `http-server` (Node.js) o con Python.

Node (`http-server`):

```cmd
cd "c:\Users\Leo\Desktop\EPN\maldonado-2025-b-blm-web-gr1\Taller05-Tinder"
http-server -p 8005
# abrir http://localhost:8005
```

Python:

```cmd
cd "c:\Users\Leo\Desktop\EPN\maldonado-2025-b-blm-web-gr1\Taller05-Tinder"
py -m http.server 8005
# abrir http://localhost:8005
```

Uso
---
Uso
---
- Arrastra la tarjeta hacia la derecha para "Like" o hacia la izquierda para "Dislike". Si la arrastras lo suficiente (umbral ~100px) se desliza fuera y la siguiente tarjeta queda arriba. Puedes ajustar el valor en `js/app.js` (busca `if (Math.abs(diffX) > 100)`).
- Botones disponibles: ✖ (Nope), ⭐ (Super/Star), ❤ (Like), 🚀 (Boost). Los botones aplican la misma acción que el gesto.
- Soporte básico de teclado: Flecha derecha = Like, Flecha izquierda = Dislike.

Detalles de implementación
-------------------------
- Las reglas de estilo se extrajeron desde el `index.html` a `css/style.css`. Edita este archivo para cambiar el aspecto (p. ej. tamaño de tarjetas, sombras, offsets de pila, degradado de fondo).
- La lógica de creación y manejo de tarjetas está en `js/app.js`:
	- `profiles` contiene los perfiles de ejemplo.
	- `createCard(profile)` genera cada tarjeta y le añade listeners `pointerdown`/`pointermove`/`pointerup` para manejar drag (funciona para mouse y touch).
	- El umbral de swipe (100px) y la distancia de salida (600px) se pueden ajustar en el mismo archivo.
	- Se guarda el HTML de tarjetas eliminadas en `removedStack` por si queremos implementar un "rewind" más adelante.

Comprobaciones y debug
---------------------
- Abre DevTools → Console para ver errores de JS si algo no responde.
- En Elements puedes inspeccionar las clases `.card`, `.like`, `.nope` para ver por qué indicadores aparecen.
- Si las imágenes no cargan (CORS/403), reemplázalas por otras URLs o usa `picsum.photos` como alternativa.

Notas técnicas
--------------
- Implementación simple para fines educativos; en producción convendría separar datos (p.ej. cargar perfiles via API) y mejorar la accesibilidad.
- Las imágenes usan `https://picsum.photos` como ejemplos aleatorios; puedes reemplazarlas por tus propias imágenes en `index.html`.

¿Quieres que añada?
------------------
- Soporte para animaciones más suaves o físicas (usando requestAnimationFrame o una librería de físicas).
- Un pequeño generador de perfiles con formulario y persistencia en `localStorage`.
- Implementar "rewind" (volver la última tarjeta) usando `removedStack` y un botón dedicado.
- Tests automáticos o una versión con soporte para server-side rendering.

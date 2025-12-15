Taller02 - Web Educativa
========================

Descripción
-----------

Esta es una plantilla sencilla para una página educativa llamada **HTML & CSS Academy**. Su propósito es servir como ejercicio y ejemplo de maquetación responsive, uso de variables CSS para una paleta de colores y buenas prácticas de accesibilidad.

Composición de la página
------------------------

- `index.html` (único archivo del taller): contiene toda la estructura HTML y los estilos (CSS) _inline_ dentro de una etiqueta `<style>` en el `<head>` para que el taller quede contenido en un solo archivo.
- `assets/` (opcional): carpeta donde puedes colocar recursos como `logo.png`. Si el logo está presente se mostrará en el encabezado; la página funciona correctamente si el archivo falta.

Estructura principal del HTML
----------------------------

- `header` → navegación principal: marca, logo y enlaces.
- `.hero` → sección destacada con título, subtítulo y CTA (botón).
- `main` → contiene tres secciones principales:
	- `#cursos` → tarjetas de cursos (HTML básico, CSS esencial, proyectos prácticos).
	- `.features` → motivos para elegir la academia (galería de ítems).
	- `#recursos` → recursos gratuitos (guías, ejemplos, herramientas).
- `footer` → información de copyright y enlaces a redes.

Decisiones de diseño y paleta de colores
----------------------------------------

- La paleta se derivó del logo provisto: **rojo principal** (#D72631), **amarillo acento** (#FFC300) y **naranja cálido** (#FF9F1C), más tonos neutros para texto y fondos.
- Los colores se aplican mediante variables CSS (declaradas al inicio de la hoja) para facilitar cambios rápidos y coherencia visual.
- Se añadió un overlay en la sección `.hero` para garantizar contraste suficiente entre texto blanco y el fondo amarillo del gradiente.

Aspectos técnicos y accesibilidad
--------------------------------

- CSS inline: todos los estilos están en `index.html` dentro de `<style>` (busca las variables en `:root` para personalizar la paleta).
- Accesibilidad: soporte para foco visible (`:focus-visible`) en enlaces y botones, tamaños y espaciados adecuados y mejoras para contraste visual.
- Responsive: diseño basado en Grid/Flex y consultas `@media` para adaptarse a móviles.
- Compatibilidad: funciona en navegadores modernos (Chrome, Edge, Firefox, Safari). Para desarrollo local no requiere servidor, pero usar `python -m http.server` o Live Server facilita pruebas.

Cómo ver y modificar
--------------------

Abrir localmente:

 - Doble clic en `index.html` (abrirá directamente en el navegador).

Servidor local (recomendado para desarrollo):

```cmd
cd "c:\Users\Leo\Desktop\EPN\maldonado-2025-b-blm-web-gr1\Taller02-WebEducativa"
python -m http.server 8000
# luego abre http://localhost:8000
```

Editar estilos y colores:

- Los colores principales están definidos en `:root` dentro de la etiqueta `<style>` al principio del documento; modificar esas variables actualizará la paleta de toda la página.

Agregar el logo:

- Coloca tu imagen `logo.png` dentro de la carpeta `assets/` (tamaño recomendado: 56×56 o similar). Si quieres, puedo incrustarla en el `index.html` como Data URI para que el único archivo sea completamente autónomo.

Notas finales
-------------

Si quieres que deje la página totalmente autocontenida (logo embebido y sin carpeta `assets/`), o que vuelva a separar el CSS en un archivo externo, dime cuál opción prefieres y lo hago.


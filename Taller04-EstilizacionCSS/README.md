Taller04 - Estilización CSS (educativo)
=======================================

Descripción
-----------
Proyecto educativo que muestra las diferentes formas de aplicar estilos a una página web:
- Inline (atributo style)
- Internal (etiqueta <style> en el HTML)
- External (archivo .css enlazado con <link>)
- @import dentro de CSS
- Preload (rel="preload")
- Dinámico con JS (añadir <link> o <style> desde JavaScript)
- CSSOM (insertRule desde JS)

Paleta de colores usada
-----------------------
- Primario: #D72631 (rojo)
- Acento: #FFC300 (amarillo)
- Naranja: #FF9F1C
- Neutros: #1B1B1B, fondo suave #FFF9F2

Cómo probar con http-server (Node.js)
------------------------------------
1) Instala http-server si no lo tienes:

```cmd
npm i -g http-server
```

2) Sirve la carpeta del taller:

```cmd
cd "c:\Users\Leo\Desktop\EPN\maldonado-2025-b-blm-web-gr1\Taller04-EstilizacionCSS"
http-server -p 8002
# luego abre http://localhost:8002
```

Alternativa con Python (si no quieres usar Node):

```cmd
cd "c:\Users\Leo\Desktop\EPN\maldonado-2025-b-blm-web-gr1\Taller04-EstilizacionCSS"
py -m http.server 8002
# abre http://localhost:8002
```

Comprobaciones rápidas (desde la máquina local)
------------------------------------------------
- Abre tu navegador en http://localhost:8002 y abre DevTools (F12) → pestaña Network → filtra por "css" para ver las peticiones a `css/external.css`, `css/preloaded.css`, etc.
- Verifica que las peticiones devuelven 200 OK y que la columna "Type" muestra `text/css`.
- Si quieres hacer una comprobación desde la terminal (Windows):

```cmd
curl -I http://localhost:8002/css/external.css
```

Cómo detener el servidor
------------------------
- Si lo ejecutaste en la misma terminal: presiona `Ctrl + C` y confirma con `Y` si te pregunta "Terminate batch job (Y/N)?".
- Si lo ejecutaste en otra terminal o necesitas matar por puerto (ej. 8002):

```cmd
netstat -ano | findstr :8002
# toma el PID que aparece en la última columna y luego
taskkill /PID <PID> /F
```

- Para detener todos los procesos `node.exe` (útil si ejecutaste `http-server` con Node):

```cmd
taskkill /IM node.exe /F
```

Problemas comunes y soluciones
-----------------------------
- 404 en `css/external.css`: asegúrate de iniciar el servidor desde la carpeta `Taller04-EstilizacionCSS` (el enlace en el HTML es relativo: `css/external.css`).
- No puedo conectar a `localhost`: revisa que el servidor esté corriendo en la terminal (debe mostrar el puerto) y que no haya un firewall bloqueando el puerto local.
- `@import` no se aplica o tarda: recuerda que `@import` genera peticiones adicionales y puede retrasar la aplicación de estilos; usa `preload` o concatenación en producción para mejor rendimiento.

Cambios recientes y notas de implementación
-----------------------------------------
- Se corrigió la estructura del `<head>` en `index.html` para asegurar que las etiquetas `<meta>` y `<link>` carguen correctamente.
- Se añadió explicitamente `<link rel="stylesheet" href="css/external.css">` para que el demo "External" haga una petición real.
- Se añadió `<link rel="preload" as="style" href="css/preloaded.css" onload="this.rel='stylesheet'">` para el ejemplo de Preload.
- `css/external.css` incluye un `@import` de demostración para mostrar cómo una hoja puede traer otra.

Qué observar
-------------
- Abre DevTools → Network para ver las peticiones HTTP para hojas externas y precargadas.
- Pulsa "Cargar CSS dinámico" en la sección de Dinámico para ver cómo JS añade un <link> y un <style>.
- Pulsa "Insertar regla CSSOM" para ver cómo se insertan reglas en tiempo de ejecución.

Notas técnicas
--------------
- `@import` puede generar peticiones adicionales y retrasar la aplicación de estilos si se usa dentro de archivos que dependen uno de otro; para rendimiento, preloading o concatenar estilos en build es preferible.
- `rel=preload` mejora el tiempo de carga cuando quieres asegurar la descarga temprana de CSS crítico.
- Cargar estilos dinámicamente es útil para temas, módulos o cargar solo lo necesario (lazy load).

Si quieres, puedo:
- Incrustar el logo en el HTML como Data URI para mantener el taller en un único archivo.
- Agregar más ejemplos (media queries dinámicas, temas claros/oscuro, o ejemplo con SASS compilado).

¿Quieres que haga alguna de estas mejoras ahora? Puedo además añadir una pequeña comprobación automática (un script `check-server.bat`) que haga `curl` a los recursos y devuelva un resumen.

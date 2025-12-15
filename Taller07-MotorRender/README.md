Taller 07 — Motor de renderizado: PUG
===================================

Objetivo
--------
Que los estudiantes exploren y utilicen un motor de renderizado distinto a EJS (usado en clase). En este taller usamos **Pug** para generar HTML desde plantillas en Node.js con Express.

Contenido del ejercicio
-----------------------
- `server.js` — servidor Express configurado para Pug.
- `views/` — plantillas Pug: `layout.pug`, `index.pug`, `product.pug`, `thanks.pug`.
- `public/css/style.css` — estilos básicos para la demo.

Instrucciones para ejecutar (Windows - cmd)
------------------------------------------
1. Abrir una terminal en la carpeta del taller:

```cmd
cd "c:\Users\Leo\Desktop\EPN\maldonado-2025-b-blm-web-gr1\Taller07-MotorRender"
```

2. Instalar dependencias:

```cmd
npm install
```

3. Arrancar el servidor:

```cmd
npm start
# o para desarrollo con reinicios automáticos (si instalaste nodemon)
npm run dev
```

4. Abrir: http://localhost:8050

Descripción del ejemplo
-----------------------
La aplicación muestra una pequeña "línea de muebles de cocina de lujo" con una colección de productos. Hay detalle de producto y un formulario de contacto (simulado). Está pensada para editarla en clase: cambiar datos, añadir partials, o adaptar estilos.

Actividad para estudiantes
--------------------------
1. Modifica o añade nuevos productos en `server.js` y actualiza la vista para mostrar categorías.
2. Crea una vista parcial `views/_card.pug` y úsala dentro de `index.pug` (incluye/extends en Pug).
3. Añade un campo de búsqueda que filtre productos (sin backend, usando JS cliente).
4. Experimenta con mixins de Pug para generar tarjetas de producto de forma reusable.

Nota: ya incluimos un ejemplo de **mixin** en `views/_card.pug` y `index.pug` está refactorizado para usarlo.

Por qué Pug (explicación para entrega)
------------------------------------
Elegimos **Pug** porque:
- Tiene una sintaxis indentada que reduce la verborrea del HTML (sin etiquetas de cierre repetitivas).
- Permite escribir plantillas de forma muy concisa (ideal para prototipos y plantillas que dependan mucho de estructuras repetidas).

Diferencias vs EJS
------------------
- Sintaxis: Pug usa indentación y es muy conciso; EJS embebe HTML con tags `<% %>` que se parecen más a HTML tradicional.
- Legibilidad: EJS es más cercano a HTML puro (fácil para principiantes); Pug puede ser más rápido de escribir pero inicialmente confuso por la sintaxis basada en indentación.
- Renderizado: Ambos pueden recibir `locals` y renderizar datos desde Express. Pug compila templates en funciones JS, lo que puede ser más eficiente en algunos flujos.

Ventajas / Desventajas (resumen)
--------------------------------
- Ventajas Pug: menos repetición, mixins/pug helpers, plantillas compactas.
- Desventajas Pug: curva de aprendizaje (indentación), depuración de templates puede producir tracebacks menos obvios si se cometen errores de indentación.

Criterios de entrega (sugeridos)
--------------------------------
- Un repo o carpeta con el proyecto funcionando (`npm install` + `npm start`).
- README que explique por qué se eligió el motor y diferencias observadas.
- Opcional: añadir un archivo `ENTREGA.md` con capturas o comentarios de la experiencia (qué cambiaste, qué te pareció mejor/peor que EJS).

¿Quieres que añada una solución con partials (mixin) y un script `check-server.bat` para Windows que arranque el servidor automáticamente? Puedo implementarlo ahora si quieres.

Extras incluidos
---------------
- `views/_card.pug` — mixin de ejemplo para tarjetas de producto.
- `check-server.bat` — script para Windows que arranca el servidor (útil en aulas con Windows).

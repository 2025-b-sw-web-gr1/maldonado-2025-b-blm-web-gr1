Clase 008 — Práctica con métodos HTTP y parámetros (Bruno)
==========================================================

Objetivo
--------
Practicar los métodos HTTP (GET, POST, PUT, PATCH, DELETE), query params y body JSON usando la API de ejemplo: https://jsonplaceholder.typicode.com/ y la herramienta cliente Bruno.

Estructura de la carpeta
------------------------
Cada petición está guardada como un archivo `.bru` con nombre descriptivo (por ejemplo `get-all-posts.bru`). Bruno puede abrir la carpeta como colección.

Instrucciones rápidas
---------------------
1. Instalar Bruno: https://www.usebruno.com/
2. Abrir Bruno y usar *Open folder* para cargar `Clase-008` como colección.
3. Ejecutar cada petición (.bru) y verificar:
   - Método HTTP correcto (GET/POST/PUT/PATCH/DELETE)
   - Query params cuando apliquen (ej: `?postId=1`)
   - `Content-Type: application/json` en peticiones con body
   - Código de respuesta HTTP adecuado
   - La respuesta (JSON) es coherente con la operación realizada

Archivos incluidos
------------------
- POSTS
  - `get-all-posts.bru` — GET /posts (200)
  - `get-post-by-id.bru` — GET /posts/1 (200)
  - `create-post.bru` — POST /posts (201)
  - `update-post-put.bru` — PUT /posts/1 (200)
  - `update-post-title.bru` — PATCH /posts/1 (200)
  - `delete-post.bru` — DELETE /posts/1 (200)
- COMMENTS
  - `get-all-comments.bru` — GET /comments (200)
  - `get-comments-by-post.bru` — GET /comments?postId=1 (200)
  - `create-comment.bru` — POST /comments (201)
- ALBUMS
  - `get-all-albums.bru` — GET /albums (200)
  - `get-album-by-id.bru` — GET /albums/1 (200)
  - `create-album.bru` — POST /albums (201)
- PHOTOS
  - `get-all-photos.bru` — GET /photos (200)
  - `get-photos-by-album.bru` — GET /photos?albumId=1 (200)
- TODOS
  - `get-all-todos.bru` — GET /todos (200)
  - `get-todo-by-id.bru` — GET /todos/1 (200)
  - `create-todo.bru` — POST /todos (201)
- USERS
  - `get-all-users.bru` — GET /users (200)
  - `get-user-by-id.bru` — GET /users/1 (200)

Checklist para evaluar cada petición
-----------------------------------
- [ ] Método correcto
- [ ] Query params (si aplica) están en la URL o en la sección correspondiente
- [ ] Body JSON bien formado para POST/PUT/PATCH
- [ ] Header `Content-Type: application/json` presente en peticiones con body
- [ ] Código de respuesta esperado (200/201/404 según prueba)
- [ ] Respuesta coherente (objetos/arrays con campos esperados)

Notas y expectativas de códigos HTTP
-----------------------------------
- GET (listado o por id) → 200 OK
- POST (crear) → 201 Created (jsonplaceholder devuelve un objeto con id nuevo)
- PUT (reemplazo completo) → 200 OK
- PATCH (actualización parcial) → 200 OK
- DELETE → 200 OK (jsonplaceholder devuelve 200)

¿Quieres que además:
- Genere un `README_entrega.md` listo para subir con capturas de pantalla de Bruno? (sí/no)
- Prepare una lista de verificación en formato imprimible o un `checklist.md` con cada petición lista para marcar? (sí/no)

Si quieres, puedo ejecutar una ronda de comprobaciones rápidas con `curl` para confirmar códigos de respuesta desde esta máquina y adjuntar los resultados (nota: las comprobaciones en Bruno las harás tú en tu entorno visual).

Resumen de lo realizado
-----------------------
- Se crearon todos los archivos `.bru` solicitados (POSTS, COMMENTS, ALBUMS, PHOTOS, TODOS, USERS).
- Se añadió `checklist.md` para la comprobación manual en clase.
- Se añadió `run-tests.bat` para ejecutar comprobaciones automáticas con `curl` y guardar las respuestas en `test-results/`.

Detalles y explicación de cada petición
--------------------------------------
Cada archivo `.bru` incluye: método HTTP, URL, headers (p. ej. `Content-Type: application/json`) y el body JSON cuando aplica. A continuación una breve descripción de lo que hace y lo que debes comprobar en la respuesta:

- `get-all-posts.bru` — GET /posts
  - Qué hace: devuelve el listado completo de posts.
  - Revisar: código 200 y que la respuesta sea un array de objetos con campos `{ userId, id, title, body }`.

- `get-post-by-id.bru` — GET /posts/1
  - Qué hace: devuelve el post con id=1.
  - Revisar: código 200 y que `id === 1` en el objeto.

- `create-post.bru` — POST /posts
  - Qué hace: envía un JSON para crear un post.
  - Revisar: header `Content-Type: application/json`, código 201 y que la respuesta incluya un `id` nuevo y los campos enviados.

- `update-post-put.bru` — PUT /posts/1
  - Qué hace: reemplazo completo del recurso (envía `id`, `title`, `body`, `userId`).
  - Revisar: código 200 y que la respuesta refleje los campos enviados.

- `update-post-title.bru` — PATCH /posts/1
  - Qué hace: actualización parcial (sólo `title`).
  - Revisar: código 200 y que `title` haya cambiado en la respuesta.

- `delete-post.bru` — DELETE /posts/1
  - Qué hace: elimina el recurso (simulado por jsonplaceholder).
  - Revisar: código 200 (jsonplaceholder devuelve 200) y cuerpo (vacío o `{}`).

Las peticiones sobre `comments`, `albums`, `photos`, `todos` y `users` siguen la misma lógica: comprobar método, código y coherencia del JSON (query params en las que aplica, p. ej. `?postId=1`, `?albumId=1`).

Probar automáticamente (script)
-----------------------------
He incluido `run-tests.bat` en la raíz de `Clase-008`. Este script realiza llamadas `curl` para todas las peticiones y guarda cada respuesta en `Clase-008/test-results/` (ej: `get-all-posts.json`). También imprime los códigos HTTP en la consola. Para ejecutarlo en Windows (cmd):

```cmd
cd "c:\Users\Leo\Desktop\EPN\maldonado-2025-b-blm-web-gr1\Clase-008"
run-tests.bat
```

Qué comprobar después de ejecutar el script:
- Revisa los códigos que imprime el script (p.ej. `create-post -> HTTP 201`).
- Abre los archivos en `test-results/` y confirma que el JSON tiene los campos esperados.

Interpretación de los códigos esperados (por petición)
---------------------------------------------------
- GET (listados/por id): 200 OK
- POST (crear): 201 Created — jsonplaceholder devuelve el objeto creado con un `id` simulado
- PUT/PATCH: 200 OK — la respuesta debe contener los cambios aplicados
- DELETE: 200 OK — jsonplaceholder devuelve 200 (simula borrado)

Consejos didácticos y notas para la entrega
-----------------------------------------
- Pide a los estudiantes que guarden capturas de pantalla en Bruno mostrando la petición, el body (cuando aplica) y el código de respuesta.
- Sugiere una práctica: modificar el body de `create-post.bru` y ejecutar la petición para ver que la API devuelve el objeto con el `id` nuevo.
- Para la evaluación, utiliza `checklist.md` y pide que añadan una breve nota para cada petición: "OK" o "Issue: descripción".

¿Quieres que genere también un `README_entrega.md` con plantilla para subir (incluyendo secciones para pegar capturas y comentarios)? Puedo crearlo con ejemplos de evidencias y un formato listo para entregar.
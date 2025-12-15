Informe: Aplicación de Swagger/OpenAPI en JSONPlaceholder

Autor: Leonardo Maldonado
Asignatura: Aplicaciones Web

Resumen
-----------------
En este informe se describe la aplicación práctica de **Swagger** (OpenAPI 3.0) para documentar la API pública **JSONPlaceholder**. Se consolida una especificación que cubre los recursos y operaciones principales trabajadas en los talleres: Posts, Comments, Albums, Photos, Todos y Users. Se discute la estructura de la especificación, beneficios, buenas prácticas aplicadas y recomendaciones para su uso en entornos académicos y de desarrollo.

Metodología
-----------
- Identificación de endpoints relevantes (según ejercicios previos con Bruno).
- Redacción de especificaciones OpenAPI (YAML) por recurso y consolidación en `swagger.yaml`.
- Inclusión de `components/schemas` para modelar respuestas y cuerpos de petición.
- Validación manual mediante Swagger Editor y pruebas en Swagger UI.

Beneficios observados
---------------------
1. Claridad: Documentar parámetros, cuerpos y códigos esperados reduce ambigüedades.
2. Interactividad: Swagger UI permite probar endpoints sin herramientas adicionales.
3. Reutilización: `components` facilita mantener esquemas consistentes entre endpoints.
4. Enseñanza: La combinación Bruno (testing) + Swagger (documentación) es didácticamente poderosa.

Buenas prácticas aplicadas
-------------------------
- Definición explícita de parámetros `path` y `query` (con tipos y descripciones).
- `requestBody` tipado y marcado como `required` cuando es necesario.
- Respuestas documentadas con códigos (200, 201, 404) y esquemas de respuesta.
- Archivo consolidado y archivos por ejercicio para prácticas guiadas.

Actualizaciones en esta entrega
-------------------------------

- Se añadieron **ejemplos concretos** (`examples`) para operaciones como POST /posts, GET /posts/{id} y PATCH /posts/{id}, además de ejemplos de creación para Comment, Album y Todo. Estos bloques ayudan a los estudiantes a comprender mejor las solicitudes y respuestas típicas.
- Se incluyó una **Swagger UI estática** en `01-Examen/swagger-ui/index.html` y un script `serve-01-examen.bat` para levantar un servidor local y ver la documentación de forma inmediata.

Limitaciones y observaciones
----------------------------
- JSONPlaceholder simula cambios; POST/PUT/PATCH no persisten datos, pero la API responde consistentemente (201/200), lo cual es útil para práctica aunque no represente persistencia real.
- La validación automática (linters o `swagger-cli`) puede detectar inconsistencias finas; es recomendable ejecutar validación antes de publicar la especificación.

Recomendaciones
---------------
- Añadir `examples` en `requestBody` y `responses` para que estudiantes vean inputs/outputs concretos.
- Integrar la especificación en un pipeline de CI para validar cambios automáticamente (p.ej. `swagger-cli validate` o GitHub Actions con `openapi` linter).
- Mantener los archivos por ejercicio (fáciles de usar en clase) y un archivo consolidado para demos y generación de clientes.

Conclusión
----------
La adopción de OpenAPI/Swagger en el contexto de los talleres ha facilitado la comprensión de métodos HTTP, parámetros y códigos de respuesta por parte de los estudiantes. La documentación interactiva reduce la fricción al momento de probar APIs y sirve como material didáctico reutilizable en futuras iteraciones del curso.

Anexos
------
- Archivo principal: `swagger.yaml` (ubicado en `01-Examen/`)
- Recomendación práctica: importar `swagger.yaml` en https://editor.swagger.io/ para validar y experimentar con "Try it out".

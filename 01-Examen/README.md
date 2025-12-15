Documentación OpenAPI — JSONPlaceholder
=========================================

**Autor:** Leonardo Maldonado
**Asignatura:** Aplicaciones Web
**Fecha:** 16 de Noviembre de 2025

Descripción
-----------
Especificación OpenAPI (YAML) consolidada que documenta los endpoints públicos de JSONPlaceholder que se trabajaron en los talleres con Bruno (GET/POST/PUT/PATCH/DELETE, query params y bodies JSON). El archivo principal es `swagger.yaml`.

Contenido
---------
- `swagger.yaml` — especificación OpenAPI 3.0 que agrupa los endpoints: posts, comments, albums, photos, todos y users.

Cómo usar
--------
1. Abrir https://editor.swagger.io/ y pegar el contenido de `swagger.yaml` para visualizar y editar.
2. Para una demo local, sirve la carpeta con Python:

```cmd
cd "c:\Users\Leo\Desktop\EPN\maldonado-2025-b-blm-web-gr1\01-Examen"
py -3 -m http.server 9003
# abrir http://localhost:9003/swagger.yaml o cargarlo en Swagger UI
```

Buenas prácticas incluidas
-------------------------
- Definición clara de parámetros `path` y `query`.
- `requestBody` con `application/json` y esquemas para POST/PUT/PATCH.
- Respuestas documentadas con códigos 200/201/404 y esquemas de respuesta.


Añadidos en esta entrega:

- Una colección de **ejemplos concretos** en `01-Examen/swagger.yaml` (bloques `examples`) para POST, GET (por id), PATCH y creación de recursos como Comment, Album y Todo. Estos ejemplos aparecen en la Swagger UI para que los estudiantes vean peticiones y respuestas típicas.
- Una **Swagger UI estática** en `01-Examen/swagger-ui/index.html` que carga `01-Examen/swagger.yaml` por defecto.
- Un script `serve-01-examen.bat` para levantar un servidor estático en el puerto 9003 (Windows). Ejecutar: `serve-01-examen.bat` y abrir `http://localhost:9003/swagger-ui/`.

## Definiciones y por qué usar Swagger/OpenAPI ✨

**¿Qué es Swagger (OpenAPI)?**

Swagger es el ecosistema que rodea la especificación **OpenAPI**. Una especificación OpenAPI (JSON o YAML) describe de forma estructurada los endpoints de una API: rutas, parámetros, cuerpos de petición, respuestas y esquemas de datos.

**¿Por qué usar Swagger / OpenAPI?**

- **Documentación interactiva:** Swagger UI genera documentación navegable y permite probar endpoints con "Try it out".
- **Contrato claro:** Facilita el acuerdo entre front y back, evitando malentendidos en integraciones.
- **Automatización:** Permite generar clientes, servidores y tests desde la especificación.
- **Validación:** Herramientas como `swagger-cli` ayudan a detectar problemas en la especificación antes de publicar.

## Por qué es importante documentar APIs 📚

- **Onboarding más rápido:** Nuevos miembros (o estudiantes) entienden las rutas y datos esperados sin preguntar.
- **Menos errores:** Documentar campos obligatorios y tipos reduce integraciones rotas.
- **Mejor interoperabilidad:** Terceros pueden consumir la API con menos fricción.
- **Base para pruebas y CI:** La especificación puede usarse para pruebas automáticas y validación de contrato.

## Objetivo del examen 🎯

Evaluar la capacidad del alumno para:

- Modelar recursos y operaciones HTTP en OpenAPI (YAML).
- Reutilizar `components/schemas` y parámetros.
- Añadir ejemplos claros (request/response) para mejorar la comprensión.
- Entregar una UI (Swagger UI) que permita probar y documentar la API de forma interactiva.

## Dos formas de usar esta especificación 🔁

1. **Servirla localmente (recomendado para clase)**

	- Ejecuta `serve-01-examen.bat` en la carpeta `01-Examen` (Windows). Se levanta un servidor en `http://localhost:9003/`.
	- Abre `http://localhost:9003/swagger-ui/` para ver la documentación y usar "Try it out".

2. **Copiar y pegar en Swagger Editor (rápido, sin servidor)**

	- Abre https://editor.swagger.io/ y pega el contenido de `01-Examen/swagger.yaml` en el panel izquierdo.
	- Desde ahí verás la documentación y podrás probar endpoints con "Try it out".

> 💡 Nota: "Try it out" realiza peticiones reales si el spec apunta a `https://jsonplaceholder.typicode.com`. JSONPlaceholder es un servicio de pruebas y no persiste cambios, pero es útil para prácticas.


Contacto
-------
Leonardo Maldonado — leonardo.maldonado@example.com

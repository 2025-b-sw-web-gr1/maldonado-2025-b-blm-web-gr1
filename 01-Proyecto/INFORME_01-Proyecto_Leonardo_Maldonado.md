# Informe técnico — Proyecto: Tiendas y Productos (1:N)

**Autor:** Leonardo Maldonado
**Fecha:** 15 de diciembre de 2025
**Repositorio:** maldonado-2025-b-blm-web-gr1 / `01-Proyecto`

---

## Resumen ejecutivo

Este documento presenta el diseño, implementación y pruebas de la API RESTful "Tiendas y Productos" (Stores / Products) con enfoque didáctico para demostrar una relación 1 a muchos. El objetivo principal fue modelar correctamente la relación, ofrecer una especificación OpenAPI 3.0 completa (con ejemplos), y proveer una colección de pruebas reproducibles para evaluación y enseñanza (estilo Bruno/curl).

El proyecto incluye:
- Implementación mínima en Node.js/Express (datos en memoria).
- Especificación OpenAPI (`swagger.yaml`) con `components/schemas` y ejemplos `examples`.
- UI estática (Swagger UI) para visualización interactiva.
- Colección de pruebas en `01-Proyecto/bruno` y scripts para ejecución reproducible.
- Documentación y recomendaciones para extender a producción.

---

## Objetivos y alcance

1. Diseñar endpoints RESTful que sigan buenas prácticas y estándares (métodos HTTP, códigos de estado, URIs semánticas).
2. Documentar la API con OpenAPI 3.0 y proporcionar ejemplos prácticos para uso docente.
3. Crear una colección de pruebas reproducible con scripts (simulando Bruno) para automatización básica.
4. Implementar operaciones CRUD para `Store` y `Product` y exponer la relación `1:N` mediante rutas y validaciones.
5. Entregar material didáctico (README e informe) que explique diseño, pruebas y próximos pasos.

Límites y decisiones:
- Persistencia: se usa almacenamiento en memoria para simplificar la entrega (demo). Para producción se recomienda una base de datos relacional/NoSQL.
- Autenticación/autorización: fuera del alcance (puede añadirse como mejora posterior).

---

## Diseño conceptual y teoría

### Modelo de datos

- Store (tienda)
  - id (integer, PK)
  - name (string)
  - address (string)

- Product (producto)
  - id (integer, PK)
  - storeId (integer, FK -> Store.id)
  - name (string)
  - price (number)

Relación: una `Store` puede tener muchos `Product`. Se modela el vínculo colocando `storeId` en cada `Product`.

### Consideraciones de diseño

- Rutas jerárquicas: se expone `GET /stores/{id}/products` para navegar la relación padre-hijo.
- Validación mínima: al crear un `Product` se valida que `storeId` exista; se responde `400 Bad Request` si no.
- Eliminación en cascada (demo): al eliminar una `Store`, los `Product` asociados se eliminan en la implementación en memoria para mantener consistencia.
- Uso de códigos HTTP adecuados: `200`, `201`, `204`, `400`, `404`.

---

## Especificación OpenAPI

Archivo: `01-Proyecto/swagger.yaml`

Contenido clave:
- `info`: título y versión.
- `servers`: `http://localhost:3001` por defecto para desarrollo.
- `paths`: todos los endpoints CRUD para `stores` y `products`, incluídos `GET /stores/{id}/products`.
- `components/schemas`: `Store`, `StoreCreate`, `Product`, `ProductCreate`.
- `examples`: ejemplos de request y response para facilitar la comprensión y la enseñanza.

El uso de `examples` permite a Swagger UI y a herramientas de mocking (p.ej. Prism) devolver respuestas coherentes para demos sin necesidad de implementar el backend completo.

---

## Implementación (resumen técnico)

- Lenguaje/stack: Node.js (Express), `cors`, `body-parser`.
- Archivos principales:
  - `server.js`: servidor Express con rutas CRUD y lógica en memoria.
  - `package.json`: dependencias y scripts.
  - `swagger.yaml`: especificación OpenAPI.
  - `swagger-ui/index.html`: UI estática que carga la especificación local.
  - `bruno/`: colección de peticiones y script `run-bruno-tests.bat`.

Notas:
- El servidor corre por defecto en el puerto `3001`.
- Para ver la UI se puede ejecutar `serve-01-proyecto.bat` o abrir la UI desde un servidor estático.

---

## Pruebas y verificación

### Pruebas manuales
- Usar Swagger UI (`http://localhost:3001/swagger-ui/`) para explorar endpoints y usar "Try it out".
- Realizar peticiones con Postman o `curl` a endpoints implementados.

### Pruebas reproducibles (Bruno/curl)
- Se incluyeron archivos `.bru` y el script `run-bruno-tests.bat` que ejecuta un conjunto de `curl` y guarda respuestas en `bruno/test-results/`.
- Ejemplos de casos automatizados incluidos:
  - GET /stores
  - POST /stores
  - POST /products
  - GET /stores/{id}/products

### Mock server (opcional)
- Para ofrecer pruebas sin implementar el backend real, es recomendable usar **Prism**. Con Prism se puede mockear la API desde la especificación OpenAPI y ejecutar las pruebas `curl`/Bruno contra el mock (p. ej. `npx @stoplight/prism-cli mock ./swagger.yaml -p 4010`).

---

## Casos de uso y escenarios

1. Registrar una nueva tienda y productos asociados.
2. Buscar todos los productos de una tienda para mostrar catálogo.
3. Actualizar información del producto (precio, nombre).
4. Eliminar tienda y verificar que los productos asociados quedan eliminados (comportamiento de demo).
5. Validar comportamiento frente a entradas inválidas (`storeId` no existente → 400).

Cada caso se puede comprobar con `curl`, con los archivos Bruno incluidos, o con la UI de Swagger (Try it out).

---

## Comparación de herramientas: Swagger vs Bruno (profesional)

- Swagger/OpenAPI
  - Propósito: especificación, documentación interactiva y contrato técnico.
  - Usos: documentación visual, generación de clientes/servidores, demos y mocking.
  - Ventajas: estandarización, legibilidad, capacidad de integrar con CI (linters) y herramientas de generación.
  - Limitaciones: no sustituye pruebas automatizadas en pipelines, requiere herramientas externas para mocking y testing automatizado.

- Bruno / Curl (colecciones)
  - Propósito: pruebas automatizadas, reproducibles y simples mediante scripts.
  - Usos: ejecutar escenarios, guardar respuestas, integrar en CI para regresiones funcionales.
  - Ventajas: ligereza, control total sobre peticiones, fácil integración en entornos Windows/Linux.
  - Limitaciones: no es visual ni orientado a mostrar contratos; para enseñanza puede no ser tan amigable.

Conclusión: la combinación de ambas herramientas es adecuada: OpenAPI/Swagger para documentar y enseñar; Bruno/curl para verificar y automatizar pruebas.

---

## Riesgos, limitaciones y recomendaciones

- Persistencia: la implementación actual usa memoria → pérdida de datos al reiniciar el servidor. Recomendamos integrar una base de datos (SQLite / Postgres / MongoDB) para persistencia real.
- Validación y seguridad: implementar validación robusta (Joi, express-validator), control de errores centralizado, y autenticación/roles si la API se expone públicamente.
- Tests: añadir pruebas unitarias y de integración (Mocha/Chai + Supertest) y un job de CI que ejecute `swagger-cli validate` y los tests.
- Deploy: para producción, contenerizar con Docker, usar variables de entorno y un entorno de staging previo a producción.

---

## Anexos

### Comandos útiles

- Instalar dependencias:

```cmd
cd "01-Proyecto"
npm install
```

- Ejecutar servidor:

```cmd
npm start
# API: http://localhost:3001
```

- Servir documentación estática:

```cmd
serve-01-proyecto.bat
# Swagger UI: http://localhost:3001/swagger-ui/
```

- Ejecutar pruebas Bruno (script incluido):

```cmd
cd "01-Proyecto\bruno"
run-bruno-tests.bat
```

- Ejecutar Prism mock server (opcional):

```cmd
npx @stoplight/prism-cli@latest mock ./swagger.yaml -p 4010
# Apunta tus tests a http://localhost:4010
```

### Fragmentos de ejemplo (requests/responses)

- POST /stores — Request

```json
{ "name": "Tienda Norte", "address": "Calle Norte 77" }
```

- POST /stores — Response (201)

```json
{ "id": 3, "name": "Tienda Norte", "address": "Calle Norte 77" }
```

- POST /products — Request

```json
{ "storeId": 1, "name": "Molino Premium", "price": 89.9 }
```

- POST /products — Response (201)

```json
{ "id": 4, "storeId": 1, "name": "Molino Premium", "price": 89.9 }
```

---

## Apéndice: próximos pasos sugeridos (priorizados)

1. Añadir pruebas de integración (Mocha + Supertest).
2. Reemplazar almacenamiento en memoria por SQLite o Postgres y añadir migraciones.
3. Añadir validación avanzada y manejo de errores centralizado.
4. Exponer Swagger UI embebida en `/docs` desde Express y añadir OpenAPI validation middleware.
5. Añadir CI que ejecute `swagger-cli validate`, tests unitarios e integración.

---


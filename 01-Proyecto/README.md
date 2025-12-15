# Proyecto: Tiendas y Productos (1:N)

**Autor:** Leonardo Maldonado

## Descripción

Este proyecto implementa una API RESTful que modela la relación 1 a muchos entre **Tiendas (stores)** y **Productos (products)**. Una tienda puede tener muchos productos, y cada producto pertenece a una única tienda.

## 🎯 Objetivos

- Diseñar endpoints RESTful siguiendo estándares de la industria.
- Documentar la API usando OpenAPI 3.0 (Swagger).
- Crear una colección de pruebas estilo Bruno para validar endpoints.
- Implementar operaciones CRUD completas para ambas entidades.
- Demostrar la relación 1 a muchos en la API.

## Teoría y justificación

La relación 1 a muchos es común en sistemas donde una entidad agrega varias instancias de otra (p.ej. empresa -> empleados, tienda -> productos). Modelar esta relación correctamente en la API implica:

- Mantener un identificador de la entidad padre en los objetos hijo (`storeId` en `Product`).
- Proveer endpoints que permitan navegar la relación (p.ej. `GET /stores/{id}/products`).
- Diseñar restricciones básicas (validar `storeId` al crear un producto).

## Diseño de endpoints

Resumen de endpoints incluidos:

- Stores
  - GET /stores
  - POST /stores
  - GET /stores/{id}
  - PUT /stores/{id}
  - PATCH /stores/{id}
  - DELETE /stores/{id}
  - GET /stores/{id}/products

- Products
  - GET /products
  - POST /products
  - GET /products/{id}
  - PUT /products/{id}
  - PATCH /products/{id}
  - DELETE /products/{id}

Los endpoints siguen convenciones REST (uso de métodos HTTP para CRUD, status codes 200/201/204/404/400 según corresponda).

## Relación entre entidades

- `Store` (1) ----< `Product` (N)
- `Product` incluye la propiedad `storeId` que referencia la tienda padre.
- Al eliminar una `Store`, los `Product` asociados son eliminados en memoria (comportamiento implementado en este demo).

## Estructura del proyecto

```
01-Proyecto/
├─ server.js              # Servidor Express con endpoints
├─ package.json
├─ swagger.yaml           # OpenAPI 3.0
├─ swagger-ui/            # UI estática para ver la documentación
│  └─ index.html
├─ bruno/                 # Colección de peticiones estilo Bruno
│  ├─ 01_get_stores.bru
│  ├─ 02_create_store.bru
│  ├─ 03_create_product.bru
│  ├─ 04_get_products_by_store.bru
│  └─ run-bruno-tests.bat
└─ serve-01-proyecto.bat  # Script para servir la carpeta con Python (port 3001)
```

## Cómo abrir y ejecutar el proyecto

1. Instalar dependencias (Node.js y npm deben estar instalados):

```cmd
cd "c:\Users\Leo\Desktop\EPN\maldonado-2025-b-blm-web-gr1\01-Proyecto"
npm install
```

2. Iniciar el servidor Express:

```cmd
npm start
```

El servidor escucha en `http://localhost:3001`.

3. Opcional: servir la carpeta estática (Swagger UI) para ver la documentación:

```cmd
serve-01-proyecto.bat
# luego abrir http://localhost:3001/swagger-ui/
```

## Cómo probar con Bruno (y curl)

- En la carpeta `01-Proyecto/bruno` hay ejemplos `.bru` y un script `run-bruno-tests.bat` que ejecuta una serie de peticiones con `curl` y guarda respuestas en `bruno/test-results/`.

Ejecuta:

```cmd
cd "01-Proyecto\bruno"
run-bruno-tests.bat
```

Las respuestas quedan en `01-Proyecto/bruno/test-results/`.

## Casos de uso implicados

1. Registrar nuevas tiendas y productos (POST).
2. Listar tiendas y productos (GET).
3. Actualizar información de tiendas y productos (PUT/PATCH).
4. Eliminar tiendas (DELETE) y comprobar eliminación en cascada de productos asociados.
5. Consultar productos por tienda para ver la relación 1:N.

## Comparación: Swagger vs Bruno

- **Swagger (OpenAPI + Swagger UI)**
  - Objetivo: documentación interactiva, contrato y pruebas ad-hoc vía "Try it out".
  - Ventajas: visual, genera documentación automática, se integra con herramientas para generar clientes y servidores.
  - Uso recomendado: documentación viva, demos, generación de clientes y validación manual.

- **Bruno (colección de peticiones / curl)**
  - Objetivo: colección de peticiones reproducibles para pruebas funcionales / automatización.
  - Ventajas: fácil de integrar en scripts, repetir pruebas, guardar respuestas, y parte de flujos de evaluación automática.
  - Uso recomendado: pruebas automatizadas, validación en CI, conjuntos de ejercicios prácticos.

Ambas son complementarias: Swagger facilita la exploración y la enseñanza, Bruno/curl facilita la verificación repetible y la automatización.

## Ejemplos rápidos

- Crear tienda (POST /stores)

```json
{ "name": "Tienda Norte", "address": "Calle Norte 77" }
```

- Crear producto (POST /products)

```json
{ "storeId": 1, "name": "Molino Premium", "price": 89.9 }
```

## Notas finales

Este proyecto es una implementación didáctica: los datos se mantienen en memoria para facilitar la comprensión. En una aplicación real se usaría una base de datos con claves foráneas y migraciones.

---


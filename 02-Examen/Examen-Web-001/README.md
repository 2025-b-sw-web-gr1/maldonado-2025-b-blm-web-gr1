# Examen Web - Backend

Este proyecto implementa una API RESTful con NestJS, conectada a SQLite mediante TypeORM.

## Requisitos

- Node.js
- NPM

## Instalación

```bash
npm install
```

## Ejecución

```bash
# Desarrollo
npm run start:dev
```

## Documentación de la API (Swagger)

La API cuenta con documentación interactiva generada con Swagger. Una vez que el servidor esté en ejecución, puedes acceder a ella en:

[http://localhost:3000/api](http://localhost:3000/api)

Desde esta interfaz podrás ver todos los endpoints disponibles, sus esquemas de datos y probar las peticiones directamente.

## Validaciones

Se han implementado validaciones automáticas en el backend utilizando `class-validator` y DTOs (Data Transfer Objects). 

- **Campos Obligatorios**: La API devolverá un error `400 Bad Request` si faltan campos requeridos como `name` o `country`.
- **Tipado**: Se verifica que los datos enviados coincidan con el tipo esperado (string, number, etc.).
- **Limpieza de Datos**: El servidor está configurado para ignorar campos que no estén definidos en los DTOs (`whitelist: true`).

Ejemplo de error por validación:
```json
{
  "message": [
    "name is required"
  ],
  "error": "Bad Request",
  "statusCode": 400
}
```

## Endpoints

### Teams (Equipos)

- `GET /teams`: Obtener todos los equipos
- `GET /teams/:id`: Obtener un equipo por ID
- `POST /teams`: Crear un equipo (Requiere `name` y `country`)
- `PUT /teams/:id`: Actualizar un equipo
- `DELETE /teams/:id`: Eliminar un equipo
- `GET /teams/:id/players`: Obtener jugadores de un equipo específico

### Players (Jugadores)

- `GET /players`: Obtener todos los jugadores
- `GET /players/:id`: Obtener un jugador por ID
- `POST /players`: Crear un jugador (Requiere `name`, `position` y `teamId`)
- `PUT /players/:id`: Actualizar un jugador
- `DELETE /players/:id`: Eliminar un jugador

## Estructura

- `src/team`: Módulo de Equipos
- `src/player`: Módulo de Jugadores
- `db.sqlite`: Base de datos (se crea automáticamente al correr el proyecto)
- `seed_teams.bat`: Script para crear 5 equipos de ejemplo utilizando `curl`.

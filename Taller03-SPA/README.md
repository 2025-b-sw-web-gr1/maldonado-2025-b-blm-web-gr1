Taller03 - Gestor de Tareas
================================

Contenido
---------

- `no-spa/index.html`: versión clásica **sin SPA**. Implementada con HTML y JavaScript DOM (sin persistencia — las tareas viven en memoria mientras la página está abierta).
- `spa/index.html`: versión **SPA** (vanilla JavaScript). Implementa componentes (funciones que devuelven nodos DOM), un router simple basado en hash (`#/` y `#/add`) y **persistencia en `localStorage`** usando la clave `spaTasks_v1`.

Paleta de colores aplicada
--------------------------
Basada en el logo que proporcionaste (y usada también en Taller02):
- Primario: #D72631 (rojo)
- Acento: #FFC300 (amarillo)
- Calor/gradiente: #FF9F1C (naranja)
- Neutros: #1B1B1B y fondo suave #FFF9F2

Cómo funciona la SPA (arquitectura y componentes)
------------------------------------------------
1) Estado y persistencia
- `no-spa`: el estado (array de tareas) está en memoria (no se guarda en disco). Si recargas la página, las tareas desaparecen.
- `spa`: el estado se sincroniza con `localStorage` (clave `spaTasks_v1`) para persistencia entre recargas.

2) Componentes
Componentes implementados
- TaskForm: formulario para crear tareas (título + nivel de importancia).
- TaskItem: representación de una tarea (texto, fecha, importancia, acciones: marcar como hecho/ deshacer y eliminar).
- TaskList: contenedor que monta `TaskItem`.

3) Router y vistas
Router y vistas (SPA)
- Router hash simple: `#/` → lista de tareas, `#/add` → formulario de creación.
- `div#app` es el punto de montaje donde la SPA renderiza vistas dinámicamente.

4) Principios de diseño
- Separación de responsabilidades: componentes son funciones que crean el DOM y exponen callbacks.
- Estado centralizado mínimo: las operaciones actualizan el array de tareas y luego se persisten y re-renderizan.
- Sin dependencias externas: diseño en vanilla JS para que sea fácil de entender y portar a frameworks.

Características principales y extensiones posibles
--------------------
- Añadir filtro por importancia o búsqueda.
- Integrar un backend (API REST) con sincronización remota y autenticación.
- Migrar la SPA a un framework (React/Vue/Svelte) para mejor escalabilidad y testing.
Otras mejoras prácticas:
- Añadir validación y mensajes de error en los formularios.
- Añadir controles de ordenamiento (por fecha o por importancia).
- Añadir pruebas unitarias y de integración (por ejemplo con Jest + JSDOM o pruebas E2E con Playwright).

Cómo probar
-----------
- Abre los archivos con doble clic o arranca un servidor simple en la carpeta `Taller03-SPA`:

Resumen de funcionalidades
- Añadir tarea (título + prioridad: Baja/Media/Alta).
- Marcar como hecho / deshacer.
- Eliminar tarea individual.
- Borrar todas las tareas.
- `no-spa`: no persiste (memoria only).
- `spa`: persiste en `localStorage` bajo la clave `spaTasks_v1`.

Cómo probar (localmente)
- Abre los archivos con doble clic o arranca un servidor simple en la carpeta `Taller03-SPA`:

```cmd
cd "c:\Users\Leo\Desktop\EPN\maldonado-2025-b-blm-web-gr1\Taller03-SPA"
python -m http.server 8001
# luego abrir http://localhost:8001/no-spa/ o http://localhost:8001/spa/
```

Diferencias prácticas y cómo trabajar con cada versión
-----------------------------------------------------

No-SPA (`no-spa/index.html`)
- Estado y persistencia: el array de tareas vive en memoria — al recargar la página se pierden.
- Desarrollo y flujo: editar `no-spa/index.html` (HTML y JS inline) → abrir con el navegador → probar. Ideal para prototipos rápidos.
- Depuración: usar DevTools (Consola, Sources), poner breakpoints en los handlers y utilizar `console.log`.
- Ventajas: simplicidad, sin build tools ni organización compleja. Desventajas: no persiste y no escala bien.

SPA (`spa/index.html`)
- Estado y persistencia: el estado se sincroniza con `localStorage` (clave `spaTasks_v1`) y sobrevive recargas.
- Desarrollo y flujo: editar las funciones de componente (`TaskForm`, `TaskList`, `TaskItem`) en `spa/index.html` → recargar o cambiar hash para probar (`#/`, `#/add`).
- Depuración: inspeccionar `localStorage`, usar breakpoints en `route()` y los componentes; probar rutas hash manualmente.
- Ventajas: UX sin recargas completas, persistencia y arquitectura modular; ideal si piensas escalar o migrar a un framework. Desventajas: mayor complejidad inicial.

Consejos prácticos
- Si quieres que `no-spa` también persista, añade `localStorage` (getItem/setItem) siguiendo el mismo esquema que la SPA.
- Para convertir la SPA a React/Vue: transforma `TaskForm`, `TaskItem`, `TaskList` en componentes del framework y conserva la estrategia de persistencia (o sustituye por un backend).
- Añadir pruebas: la SPA es más fácil de testear con Jest + JSDOM (unit tests) y Playwright o Cypress para E2E.

***Fin***

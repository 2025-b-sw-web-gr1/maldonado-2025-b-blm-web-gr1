Divulgadora Ambiental — ejemplo accesible
=========================================

Descripción
-----------
Pequeña página accesible sobre una divulgadora de conciencia ambiental ("María Verde"). Está diseñada como recurso para la clase: muestra prácticas de **WCAG** y **WAI-ARIA** aplicadas a una página realista y fácil de modificar.

Contenido de la carpeta
----------------------
- `index.html` — la página principal (skip link, dialog, formulario, live region).
- `css/styles.css` — estilos (contraste y focos visibles).
- `js/main.js` — interacciones accesibles (diálogo, live region, skip link behavior).

Qué se implementa
------------------
- Semántica HTML5: `header`, `main`, `section`, `article`, `footer`.
- "Skip to content" para saltar al contenido principal y mejorar la navegación por teclado.
- Formularios accesibles con `label` y `aria-required`.
- Diálogo accesible: `role="dialog"` con `aria-modal` y control de foco (abre/cierra con teclado, ESC).
- Live region para notificaciones (`role="status"`, `aria-live="polite"`).
- Enlaces externos con `rel="noopener"` y `target="_blank"` cuando aplica.
- Estilos con foco visible y contraste pensado para cumplir WCAG AA (ej. 1.4.3).

Criterios WCAG demostrados (ejemplos)
-------------------------------------
- 1.1.1 Non-text Content — imágenes con `alt` adecuado.
- 1.3.1 Info and Relationships — uso de elementos semánticos y encabezados estructurados.
- 2.1.1 Keyboard — todas las interacciones principales accesibles por teclado (formularios, diálogos, skip link).
- 1.4.3 Contrast (Minimum) — contraste suficiente en textos y controles.
- 4.1.2 Name, Role, Value — uso de roles ARIA (`role="dialog"`) y atributos `aria-*`.

Cómo probar localmente
----------------------
Puedes abrir `index.html` directamente (doble clic) para ver el sitio en local, pero para pruebas más fieles y para usar DevTools → Network se recomienda servirlo con un servidor local.

Con Python:
```cmd
cd "c:\Users\Leo\Desktop\EPN\maldonado-2025-b-blm-web-gr1\Taller06\Implementacion\divulgadora-ambiental"
py -m http.server 8011
# abrir http://localhost:8011
```

Con http-server (Node):
```cmd
cd "c:\Users\Leo\Desktop\EPN\maldonado-2025-b-blm-web-gr1\Taller06\Implementacion\divulgadora-ambiental"
http-server -p 8011
# abrir http://localhost:8011
```

Pruebas recomendadas
--------------------
- Navegación por teclado (Tab / Shift+Tab): confirma que el enlace "Saltar al contenido" aparece y mueve el foco a `main`.
- Abrir diálogo con el botón "Suscribirme" y verificar que el foco va al campo de correo; cerrar con ESC o el botón "Cancelar".
- Enviar formularios (form principal y diálogo) y observar el mensaje en la live region (anunciado por lectores de pantalla).
- Ejecutar auditoría de accesibilidad (axe, Lighthouse o Accessibility Insights) y revisar las recomendaciones.

Notas docentes y de entrega
--------------------------
- El ejemplo es intencionadamente pequeño para facilitar su lectura y modificación en clase.
- Para entregar, suban la carpeta `divulgadora-ambiental` al repositorio (o dejen un enlace al ZIP en `Clase-006/links.txt`).
- Si quieren, puedo añadir un script `check-a11y.bat` que ejecute una comprobación básica con `axe-core` (requiere Node) o una checklist automática de contrastes.

Recursos útiles
---------------
- Mapa mental (Clase): http://enlace.com
- Presentación (Slides): https://app.presentations.ai/view/Mj0n7oPZel

¿Quieres que añada validación inline con `aria-invalid` y mensajes asociados en el formulario o que genere el script de comprobación automática?
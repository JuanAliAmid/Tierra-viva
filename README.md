# Tierra Viva 

Proyecto desarrollado como entrega final del curso de React JS en Coderhouse.

## Demo

[Ver proyecto](https://tierra-viva.netlify.app/) 

## Descripción:

Tierra Viva es una Single Page Application (SPA) de e-commerce enfocada en la venta de plantas. La aplicación permite a los usuarios explorar un catálogo dinámico extraído de una base de datos en la nube, gestionar un carrito de compras de forma global y finalizar pedidos generando órdenes de compra en tiempo real. con un diseño limpio y funcional.

## Funcionalidades:

- Catálogo Dinámico: Visualización de productos obtenida desde Firebase Firestore.

- Navegación SPA: Implementación de rutas dinámicas con react-router-dom para navegar sin recargar el navegador.

- Filtrado por Categorías: Clasificación de plantas (Interior / Exterior) mediante rutas dinámicas.

- Detalle de Producto: Vista profunda de cada especie (riego, iluminación y descripción) utilizando parámetros de URL.

- Carrito de Compras Global: - Agregar, sumar, restar y eliminar productos unitariamente.

- Persistencia de datos y cálculo de totales automáticos.

- Gestión de Stock: Renderizado condicional que deshabilita el botón de compra cuando no hay disponibilidad.

- Checkout y Órdenes: Formulario de validación para generar una orden de compra en Firestore, devolviendo un ID de seguimiento al usuario.

- Experiencia de Usuario (UX):

- Loaders durante la carga de datos.

- Notificaciones visuales de confirmación.

- Carrito tipo Drawer (menú lateral) para no interrumpir la navegación.

## Tecnologías utilizadas:

- React.js (Vite)

- React Router DOM (Navegación)

- Context API (Estado Global)

- Firebase / Firestore (BaaS)

- HTML5 & CSS3 

- localStorage

- Toastify

- React Icons / FontAwesome (Iconografía)

- Variables de Entorno (.env): Implementación de variables para la protección de credenciales de Firebase en el deploy.
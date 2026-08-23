# Tierra Viva

Proyecto desarrollado como entrega final del curso de React JS en CoderHouse.

## Demo

[Ver proyecto](https://tierra-viva-ehlu.vercel.app/)

## Descripción

Tierra Viva es una Single Page Application (SPA) de e-commerce enfocada en la venta de plantas. La aplicación permite a los usuarios explorar un catálogo dinámico extraído de una base de datos en la nube, gestionar un carrito de compras de forma global y finalizar pedidos generando órdenes de compra en tiempo real, con un diseño limpio y funcional.

## Funcionalidades

- **Catálogo dinámico**: visualización de productos obtenida desde Firebase Firestore.
- **Navegación SPA**: rutas dinámicas con `react-router-dom` para navegar sin recargar el navegador.
- **Filtrado por categorías**: clasificación de plantas (interior / exterior) mediante rutas dinámicas.
- **Detalle de producto**: vista profunda de cada especie (riego, iluminación y descripción) usando parámetros de URL.
- **Carrito de compras global**: agregar, sumar, restar y eliminar productos unitariamente, con persistencia y cálculo de totales automático.
- **Gestión de stock**: renderizado condicional que deshabilita el botón de compra cuando no hay disponibilidad.
- **Checkout y órdenes**: formulario con validación que genera una orden de compra en Firestore, devolviendo un ID de seguimiento al usuario.
- **Experiencia de usuario**: loaders durante la carga de datos, notificaciones visuales de confirmación, y carrito tipo drawer (menú lateral) para no interrumpir la navegación.

## Tecnologías utilizadas

- React.js (Vite)
- React Router DOM (navegación)
- Context API (estado global)
- Firebase / Firestore (BaaS)
- HTML5 & CSS3
- localStorage
- Toastify
- React Icons / FontAwesome
- Variables de entorno (`.env`) para proteger credenciales de Firebase en el deploy

## Instalación y uso local

### Requisitos previos

- Node.js v18 o superior
- Una base de datos en Firebase Firestore (o usar la propia)

### Pasos

1. Cloná el repositorio

```bash
git clone https://github.com/JuanAliAmid/Tierra-viva.git
cd Tierra-viva
```

2. Instalá las dependencias

```bash
npm install
```

3. Creá un archivo `.env` en la raíz con tus credenciales de Firebase:

```
VITE_FIREBASE_API_KEY=tu_api_key
VITE_FIREBASE_AUTH_DOMAIN=tu_auth_domain
VITE_FIREBASE_PROJECT_ID=tu_project_id
VITE_FIREBASE_STORAGE_BUCKET=tu_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=tu_sender_id
VITE_FIREBASE_APP_ID=tu_app_id
```

4. Levantá el servidor de desarrollo:

```bash
npm run dev
```

5. Abrí en el navegador la URL que indique la terminal (por defecto `http://localhost:5173`).

## Estructura del proyecto

```
src/
├── components/
│   ├── Carrito/          # Carrito global y drawer lateral
│   ├── Header/            # Navegación principal
│   ├── ItemDetail/         # Cards y detalle de producto
│   ├── TiendaList/         # Listado del catálogo
│   ├── NotFound.jsx        # Página 404
│   └── firebase/           # Configuración de Firebase
├── context/
│   └── CartContext.jsx     # Estado global del carrito (Context API)
├── pages/
│   ├── Home/
│   ├── Tienda/
│   ├── ItemDetail/
│   └── CheckoutForm/        # Formulario y generación de orden
├── services/
│   └── firestore/           # Consultas a Firestore
├── App.jsx
└── main.jsx
```

## Desafíos

- Sincronizar el estado global del carrito entre componentes desacoplados usando Context API.
- Persistir el carrito y recalcular totales de forma consistente ante cada cambio de cantidad.
- Modelar rutas dinámicas por categoría y por producto (`:id`) manteniendo el catálogo filtrable.
- Proteger las credenciales de Firebase mediante variables de entorno tanto en desarrollo como en el deploy.
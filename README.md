# MotoStyle — React App

Proyecto MotoStyle convertido de HTML/CSS a React + Bootstrap 5.

## 📁 Estructura del proyecto

```
motostyle/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.jsx           ← Nav con React Router Link (detecta ruta activa)
│   │   ├── Carousel.jsx         ← Carrusel controlado con useState
│   │   ├── About.jsx            ← Sección "Acerca de"
│   │   ├── Services.jsx         ← Tarjetas de servicios
│   │   ├── WhoWeAre.jsx         ← "¿Quiénes Somos?" y "Nuestra Pasión"
│   │   ├── Footer.jsx           ← Pie de página con contacto y redes sociales
│   │   └── AppointmentModal.jsx ← Modal de solicitud de cita
│   ├── pages/
│   │   ├── Home.jsx             ← Página principal (/)
│   │   └── Store.jsx            ← Página de tienda (/tienda)
│   ├── App.jsx                  ← BrowserRouter + Routes
│   ├── index.js                 ← Punto de entrada de React
│   └── index.css                ← Estilos globales
├── package.json
└── README.md
```

## 🚀 Cómo ejecutar

1. **Instalar dependencias**
   ```bash
   npm install
   ```

2. **Iniciar en modo desarrollo**
   ```bash
   npm start
   ```
   La app se abrirá en [http://localhost:3000](http://localhost:3000)

3. **Construir para producción**
   ```bash
   npm run build
   ```

## 🖼️ Imágenes propias

Reemplaza los `placehold.co` en los componentes por las rutas de tus imágenes reales:

| Componente      | Imagen original                              |
|-----------------|----------------------------------------------|
| `Navbar.jsx`    | `logo for MotoStyle with initials MS.webp`   |
| `WhoWeAre.jsx`  | `logo for MotoStyle with initials MS.webp`   |
| `WhoWeAre.jsx`  | `ChatGPT Image 19 nov 2025, 11_08_21 p.m..png` |

Copia tus imágenes a la carpeta `public/` y actualiza el atributo `src` con `/nombre-imagen.webp`.

## 📦 Dependencias

- **React 18**
- **Bootstrap 5.3**
- **Bootstrap Icons 1.11**
- **Google Fonts**: Rajdhani + Open Sans

## 💡 Mejoras incluidas en la conversión

- Formulario del modal con **estado controlado** (React hooks)
- Carrusel sin depender del JS de Bootstrap (manejado con `useState`)
- Menú hamburguesa funcional sin JS externo
- Confirmación visual al enviar el formulario de cita
- Variables CSS centralizadas (`--accent`, `--card-bg`, etc.)
- Hover animado en íconos del footer y underline en nav links

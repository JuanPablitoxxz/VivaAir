# VivaAir - Plataforma de Vuelos Nacionales

Una plataforma web moderna para la búsqueda y reserva de vuelos nacionales en Colombia, desarrollada con tecnologías de vanguardia.

## 🚀 Proyectos Incluidos

### 1. **Versión HTML/CSS/JS** (Original)
- Página web estática con diseño moderno
- Colores azul claro y blanco
- Enfoque en vuelos nacionales
- Responsive design

### 2. **Versión Next.js** (Moderno) ⭐
- Framework React con Next.js 14
- TypeScript para mayor robustez
- Tailwind CSS para estilos
- Componentes reutilizables
- Optimización SEO
- Animaciones con Framer Motion

## 📁 Estructura del Repositorio

```
VivaAir/
├── vivaair-nextjs/          # Aplicación Next.js moderna
│   ├── src/
│   │   ├── app/            # App Router de Next.js
│   │   └── components/     # Componentes React
│   ├── public/             # Archivos estáticos
│   └── package.json        # Dependencias
├── index.html              # Versión HTML original
├── styles.css              # Estilos CSS originales
├── script.js               # JavaScript original
└── README.md               # Este archivo
```

## 🎯 Características Principales

### ✈️ **Funcionalidades de Vuelos**
- Búsqueda de vuelos nacionales
- Selección de fechas y pasajeros
- Destinos populares colombianos
- Precios en tiempo real

### 🎨 **Diseño y UX**
- Colores: Azul claro (#87CEEB) y blanco
- Diseño responsive
- Animaciones suaves
- Interfaz intuitiva

### 🛠️ **Tecnologías**

#### Versión Next.js:
- **Frontend**: Next.js 14, React 19, TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod
- **Icons**: Heroicons

#### Versión HTML:
- **Frontend**: HTML5, CSS3, JavaScript
- **Icons**: Font Awesome
- **Responsive**: CSS Grid y Flexbox

## 🚀 Cómo Usar

### Versión Next.js (Recomendada)

```bash
# Navegar al directorio
cd vivaair-nextjs

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Construir para producción
npm run build

# Ejecutar en producción
npm run start
```

### Versión HTML

```bash
# Simplemente abrir index.html en el navegador
open index.html
```

## 🌐 Despliegue

### Vercel (Recomendado para Next.js)
```bash
# Instalar Vercel CLI
npm i -g vercel

# Desplegar
vercel
```

### GitHub Pages (Para versión HTML)
1. Subir archivos a la rama `gh-pages`
2. Activar GitHub Pages en la configuración del repositorio

## 📱 Responsive Design

- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px+

## 🎨 Paleta de Colores

- **Azul claro principal**: #87CEEB
- **Azul oscuro**: #4682B4
- **Blanco**: #FFFFFF
- **Gris claro**: #F8F9FA
- **Rojo de botones**: #FF4757

## 🏗️ Arquitectura

### Next.js (App Router)
```
src/
├── app/
│   ├── layout.tsx          # Layout principal
│   ├── page.tsx            # Página de inicio
│   └── globals.css         # Estilos globales
└── components/
    ├── Header.tsx          # Componente header
    ├── SearchForm.tsx      # Formulario de búsqueda
    ├── DestinationCard.tsx # Tarjetas de destinos
    ├── SpecialOffers.tsx   # Ofertas especiales
    └── AdditionalServices.tsx # Servicios adicionales
```

## 🚀 Próximas Funcionalidades

- [ ] Integración con API de reservas
- [ ] Sistema de autenticación
- [ ] Carrito de compras
- [ ] Pago con Stripe
- [ ] Notificaciones push
- [ ] PWA (Progressive Web App)
- [ ] App móvil con React Native

## 📞 Contacto

- **Email**: soporte@vivaair.com
- **Teléfono**: 01 800 518 9327
- **WhatsApp**: +57 300 123 4567

## 📄 Licencia

© 2025 VivaAir. Todos los derechos reservados.

---

## 🎯 ¿Cuál Versión Usar?

### **Usa la versión Next.js si:**
- Quieres una aplicación moderna y escalable
- Necesitas SEO optimizado
- Planeas agregar funcionalidades avanzadas
- Quieres mejor rendimiento

### **Usa la versión HTML si:**
- Necesitas algo simple y rápido
- No tienes experiencia con React/Next.js
- Quieres un sitio estático básico

---

Desarrollado con ❤️ para VivaAir - Tu compañía de vuelos nacionales
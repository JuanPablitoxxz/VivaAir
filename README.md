# VivaAir Next.js - Plataforma de Vuelos Nacionales

Una aplicación web moderna construida con Next.js 14, TypeScript y Tailwind CSS para la búsqueda y reserva de vuelos nacionales en Colombia.

## 🚀 Características

- **Framework**: Next.js 14 con App Router
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS con colores personalizados
- **Animaciones**: Framer Motion
- **Formularios**: React Hook Form con validación Zod
- **Iconos**: Heroicons
- **Responsive**: Diseño adaptable a todos los dispositivos

## 🎨 Diseño

- **Colores principales**: Azul claro (#87CEEB) y blanco
- **Enfoque**: Solo vuelos nacionales en Colombia
- **UI/UX**: Moderna e intuitiva inspirada en plataformas líderes

## 🛠️ Tecnologías

- **Frontend**: Next.js 14, React 19, TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod
- **Icons**: Heroicons
- **Images**: Next.js Image Optimization

## 📦 Instalación

```bash
# Clonar el repositorio
git clone https://github.com/JuanPablitoxxz/VivaAir.git
cd VivaAir/vivaair-nextjs

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev
```

## 🚀 Scripts Disponibles

```bash
# Desarrollo
npm run dev

# Construcción para producción
npm run build

# Ejecutar en producción
npm run start

# Linting
npm run lint
```

## 📁 Estructura del Proyecto

```
vivaair-nextjs/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── components/
│       ├── Header.tsx
│       ├── SearchForm.tsx
│       ├── DestinationCard.tsx
│       ├── SpecialOffers.tsx
│       └── AdditionalServices.tsx
├── public/
├── tailwind.config.ts
├── next.config.js
└── package.json
```

## 🎯 Funcionalidades Implementadas

### ✅ Formulario de Búsqueda
- Búsqueda por origen y destino
- Selección de fechas
- Configuración de pasajeros
- Validación de formularios
- Intercambio de origen/destino

### ✅ Destinos Populares
- Tarjetas interactivas
- Precios en tiempo real
- Efectos hover
- Animaciones suaves

### ✅ Ofertas Especiales
- Promociones de hoteles
- Descuentos en vuelos
- Sección especial con Shakira
- Diseño atractivo

### ✅ Servicios Adicionales
- Asesoría personalizada
- Asistente de IA (SOFIA)
- Diseño responsive

## 🌐 Despliegue

### Vercel (Recomendado)
```bash
# Instalar Vercel CLI
npm i -g vercel

# Desplegar
vercel
```

### Netlify
```bash
# Construir el proyecto
npm run build

# Subir la carpeta 'out' a Netlify
```

## 🔧 Configuración

### Variables de Entorno
Crea un archivo `.env.local`:

```env
NEXT_PUBLIC_API_URL=https://api.vivaair.com
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
```

### Personalización de Colores
Edita `tailwind.config.ts` para cambiar la paleta de colores:

```typescript
colors: {
  'vivaair-blue': {
    500: '#87CEEB', // Color principal
    600: '#4682B4', // Color secundario
  }
}
```

## 📱 Responsive Design

- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px+

## 🎨 Componentes Principales

### Header
- Logo y navegación
- Información de contacto
- Menú responsive

### SearchForm
- Formulario de búsqueda avanzado
- Validación en tiempo real
- Estados de carga

### DestinationCard
- Tarjetas de destinos
- Animaciones hover
- Información de precios

### SpecialOffers
- Ofertas promocionales
- Diseño atractivo
- Call-to-actions

## 🚀 Próximas Funcionalidades

- [ ] Integración con API de reservas
- [ ] Sistema de autenticación
- [ ] Carrito de compras
- [ ] Pago con Stripe
- [ ] Notificaciones push
- [ ] PWA (Progressive Web App)

## 📞 Soporte

- **Email**: soporte@vivaair.com
- **Teléfono**: 01 800 518 9327
- **WhatsApp**: +57 300 123 4567

## 📄 Licencia

© 2025 VivaAir. Todos los derechos reservados.

---

Desarrollado con ❤️ para VivaAir - Tu compañía de vuelos nacionales
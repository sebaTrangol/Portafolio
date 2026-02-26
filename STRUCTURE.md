# Estructura del Proyecto - Portafolio

## 📁 Árbol de Directorios

```
Portafolio/
├── src/
│   ├── components/
│   │   ├── About.jsx           # Sección "Sobre mí"
│   │   ├── Contact.jsx         # Sección de contacto
│   │   ├── Footer.jsx          # Pie de página
│   │   ├── Hero.jsx            # Sección principal/héroe
│   │   ├── Navbar.jsx          # Barra de navegación
│   │   ├── ProjectCard.jsx     # Componente de tarjeta de proyecto
│   │   ├── Projects.jsx        # Sección de proyectos
│   │   └── Skills.jsx          # Sección de habilidades
│   ├── App.jsx                 # Componente principal de la aplicación
│   ├── main.jsx                # Punto de entrada de React
│   └── index.css               # Estilos globales (Tailwind + custom)
│
├── dist/                        # Archivos compilados (generado por Vite)
│   └── assets/
│       ├── index-*.css         # CSS compilado
│       └── index-*.js          # JS compilado
│
├── public/                      # Archivos estáticos (si existen)
│
├── Configuración del Proyecto
│   ├── package.json            # Dependencias y scripts
│   ├── package-lock.json       # Lock file de npm
│   ├── vite.config.js          # Configuración de Vite (bundler)
│   ├── tailwind.config.js      # Configuración de Tailwind CSS
│   ├── postcss.config.js       # Configuración de PostCSS
│   ├── vercel.json             # Configuración de despliegue (Vercel)
│   ├── STRUCTURE.md            # Este archivo
│   └── README.md               # Documentación general
│
└── .claude/                     # Archivos de configuración de Claude Code
    └── worktrees/              # Ramas de trabajo
```

## 📋 Descripción de Componentes

### **Componentes Principales**

| Componente | Descripción | Props |
|-----------|-------------|-------|
| **Navbar** | Barra de navegación fija con enlaces y menú móvil | Ninguno |
| **Hero** | Sección principal con presentación y CTA | Ninguno |
| **About** | Sección de información personal | Ninguno |
| **Skills** | Sección de habilidades técnicas | Ninguno |
| **Projects** | Sección con galería de proyectos | Ninguno |
| **ProjectCard** | Tarjeta individual de proyecto | `project` (objeto), `index` (número) |
| **Contact** | Sección de formulario de contacto | Ninguno |
| **Footer** | Pie de página con enlaces | Ninguno |

## 🛠 Tecnologías Utilizadas

- **React** - Framework UI
- **Vite** - Bundler y herramienta de desarrollo
- **Tailwind CSS** - Utilidades CSS
- **Lucide React** - Iconos
- **PostCSS** - Procesador CSS

## 🚀 Scripts Disponibles

```json
{
  "dev": "Inicia servidor de desarrollo",
  "build": "Compila el proyecto para producción",
  "preview": "Previsualiza la compilación",
  "deploy": "Despliega en Vercel"
}
```

## 📦 Estructura de Archivos Principales

### `src/App.jsx`
- Componente raíz que importa y organiza todos los componentes
- Define el layout general de la página

### `src/main.jsx`
- Punto de entrada de la aplicación React
- Monta App en el DOM

### `src/index.css`
- Importa Tailwind CSS (`@tailwind` directives)
- Estilos globales personalizados
- Animaciones personalizadas (fade-in-up)
- Estilos del scrollbar

### `tailwind.config.js`
- Configuración de colores personalizados
- Temas y paleta de colores del proyecto
- Extensiones de Tailwind

## 🎨 Estructura de Estilos

Los componentes utilizan **Tailwind CSS** con:
- **Colores custom**: `primary-*`, `secondary-*`, `light-*`
- **Responsive design**: Breakpoints `sm`, `md`, `lg`
- **Animaciones**: `fade-in-up` y transiciones

## 📍 Secciones de la Página

La página está organizada en secciones con IDs para navegación:

1. `#navbar` - Navegación
2. `#hero` - Sección principal
3. `#about` - Sobre mí
4. `#skills` - Habilidades
5. `#projects` - Proyectos
6. `#contact` - Contacto
7. `#footer` - Pie de página

---

**Última actualización**: 2026-02-22

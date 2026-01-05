# 🦷 HackDental - Landing Page

Landing page de alta conversión para clínicas dentales que buscan potenciar su marketing digital.

## 🎯 Características

- ✨ Diseño moderno y profesional con efectos visuales impactantes
- 📱 Completamente responsive (mobile, tablet, desktop)
- ⚡ Optimizado para conversión con CTA destacado
- 🎨 Animaciones suaves y efectos hover profesionales
- 🚀 Construido con Astro + Tailwind CSS para máximo rendimiento

## 🛠️ Tecnologías

- **[Astro](https://astro.build/)** - Framework web estático
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework CSS utility-first
- **Google Fonts** - Inter & Oswald

## 📁 Estructura del Proyecto

```
/
├── src/
│   ├── layouts/
│   │   └── Layout.astro          # Layout principal con header y footer
│   ├── components/
│   │   └── Hero.astro            # Sección hero con CTA
│   └── pages/
│       └── Home.astro            # Página principal
├── public/
│   └── perfil.svg                # Imagen de perfil de Jose Whittembury
├── tailwind.config.mjs           # Configuración de Tailwind
└── README.md
```

## 🚀 Instalación

### Prerequisitos

- Node.js 18+ 
- npm o pnpm

### Pasos

1. **Clona el repositorio**
```bash
git clone [tu-repositorio]
cd hackdental
```

2. **Instala las dependencias**
```bash
npm install
```

3. **Inicia el servidor de desarrollo**
```bash
npm run dev
```

4. **Abre tu navegador**
```
http://localhost:4321
```

## 📦 Comandos Disponibles

| Comando                | Acción                                      |
| :--------------------- | :------------------------------------------ |
| `npm install`          | Instala las dependencias                    |
| `npm run dev`          | Inicia servidor local en `localhost:4321`   |
| `npm run build`        | Construye el sitio para producción en `./dist/` |
| `npm run preview`      | Vista previa del build antes de desplegar   |

## 🎨 Personalización

### Colores

Los colores principales están configurados en `tailwind.config.mjs`:

```javascript
colors: {
  primary: '#01dbb0',        // Verde principal
  'primary-light': '#00ffc8', // Verde claro
}
```

### Fuentes

Las fuentes se importan desde Google Fonts en `Layout.astro`:
- **Inter**: Texto general (400, 600, 700)
- **Oswald**: Títulos y CTA (700)

### Contenido

Para modificar el contenido:
- **Header/Footer**: Edita `src/layouts/Layout.astro`
- **Hero Section**: Edita `src/components/Hero.astro`
- **Textos**: Busca y reemplaza directamente en los archivos

## 🖼️ Recursos Necesarios

Asegúrate de tener estos recursos en la carpeta `public/`:

- `perfil.svg` - Imagen de perfil de Jose Whittembury (80x80px recomendado)

## 📱 Responsive Breakpoints

La página está optimizada para estos breakpoints:

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## ⚡ Optimizaciones Implementadas

- ✅ Lazy loading de imágenes
- ✅ Fuentes optimizadas con preconnect
- ✅ Animaciones con CSS transitions (sin JavaScript pesado)
- ✅ Gradientes y efectos con CSS puro
- ✅ Smooth scroll nativo

## 🎯 Características del CTA

El botón de Call-To-Action incluye:

- Gradiente dinámico (verde a verde claro)
- Efecto de brillo animado al hover
- Elevación con sombra dinámica
- Feedback visual al hacer click
- Totalmente accesible (keyboard navigation)

## 🌟 Próximas Mejoras

- [ ] Integración con formulario de contacto
- [ ] Google Analytics
- [ ] Página de gracias post-conversión
- [ ] Testimonios de clientes
- [ ] Sección de casos de éxito
- [ ] Blog integrado

## 📄 Licencia

[Tu licencia aquí]

## 👨‍💻 Autor

**Jose Whittembury**  
Marketing Digital para Clínicas Dentales

---

## 🤝 Contribuir

¿Encontraste un bug o tienes una sugerencia? 

1. Fork el proyecto
2. Crea tu rama de feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

---

# Taller Industrial Brenes - Guía de Configuración

## 🚀 Inicio Rápido

```bash
npm install
npm run dev
```

## 📁 Estructura del Proyecto

```
/
├── src/
│   ├── components/           # Componentes reutilizables
│   ├── content/             # Content Collections (datos estáticos)
│   │   ├── services/        # Servicios ofrecidos
│   │   ├── products/        # Catálogo de productos
│   │   ├── gallery_images/  # Imágenes de galería
│   │   └── testimonials/    # Testimonios de clientes
│   ├── layouts/             # Layouts de página
│   ├── lib/                 # Utilidades y configuración
│   ├── pages/               # Páginas del sitio
│   └── styles/              # Estilos globales
├── public/
│   └── images/              # Imágenes estáticas
└── astro.config.mjs         # Configuración de Astro
```

## 🎨 Content Collections (Actual)

Actualmente el sitio usa **Content Collections** de Astro para gestionar el contenido:

- **Servicios**: `src/content/services/*.json`
- **Productos**: `src/content/products/*.json`  
- **Galería**: `src/content/gallery_images/*.json`
- **Testimonios**: `src/content/testimonials/*.json`

### Agregar Nuevo Contenido

1. Crear archivo JSON en la carpeta correspondiente
2. Seguir el schema definido en `src/content/config.ts`
3. Reiniciar el servidor de desarrollo

## 🗄️ Migración a Supabase (Futuro)

### 1. Configurar Variables de Entorno

Copiar `.env.example` a `.env` y completar:

```bash
cp .env.example .env
```

```env
PUBLIC_SUPABASE_URL=https://tu-proyecto.supabase.co
PUBLIC_SUPABASE_ANON_KEY=tu-clave-anonima
```

### 2. Schema de Base de Datos Sugerido

```sql
-- Profiles (vinculado a auth.users)
CREATE TABLE profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id),
    email TEXT NOT NULL,
  full_name TEXT,
  role TEXT CHECK (role IN ('admin', 'editor', 'viewer')) DEFAULT 'viewer',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Servicios
CREATE TABLE services (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  category TEXT CHECK (category IN ('Soldadura', 'Portones', 'Puertas', 'Reparaciones')),
  image_url TEXT,
  icon TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Productos
CREATE TABLE products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  category TEXT NOT NULL,
  price NUMERIC,
  image_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Imágenes de galería
CREATE TABLE gallery_images (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  image_url TEXT NOT NULL,
  caption TEXT,
  category TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Testimonios
CREATE TABLE testimonials (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  author TEXT NOT NULL,
  text TEXT NOT NULL,
  rating INTEGER CHECK (rating >= 1 AND rating <= 5),
  visible BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Leads/Contactos
CREATE TABLE leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'nuevo',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Habilitar RLS
ALTER TABLE services ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE gallery_images ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
```

### 3. Políticas RLS Sugeridas

```sql
-- Lectura pública para contenido
CREATE POLICY "Public read access" ON services FOR SELECT TO public USING (true);
CREATE POLICY "Public read access" ON products FOR SELECT TO public USING (true);
CREATE POLICY "Public read access" ON gallery_images FOR SELECT TO public USING (true);
CREATE POLICY "Public read access" ON testimonials FOR SELECT TO public USING (visible = true);

-- Inserción pública para leads
CREATE POLICY "Public insert access" ON leads FOR INSERT TO public WITH CHECK (true);

-- Acceso completo para administradores
CREATE POLICY "Admin full access" ON services FOR ALL TO authenticated 
  USING ((SELECT role FROM profiles WHERE id = auth.uid()) = 'admin');

-- Aplicar políticas similares para otras tablas...
```

### 4. Pasos de Migración

1. **Configurar Supabase**: Crear proyecto y obtener credenciales
2. **Ejecutar schema**: Crear tablas y políticas en Supabase
3. **Migrar datos**: Mover contenido de Content Collections a Supabase
4. **Actualizar componentes**: Cambiar `getCollection()` por queries de Supabase
5. **Activar auth**: Habilitar autenticación en `/login` y `/panel`
6. **Habilitar CRUD**: Activar formularios en panel administrativo

### 5. Archivos a Modificar

- `src/lib/db.ts`: Implementar funciones CRUD reales
- `src/lib/auth.ts`: Implementar funciones de autenticación
- `src/pages/panel/*.astro`: Activar funcionalidades CRUD
- Componentes: Reemplazar `getCollection()` por queries

## 🎯 Funcionalidades Implementadas

### ✅ Completado
- [x] Estructura base con Astro + TypeScript + Tailwind
- [x] Content Collections para contenido estático
- [x] Sistema de navegación responsive
- [x] Página de inicio con hero y secciones principales
- [x] Páginas de servicios, productos y galería con filtros
- [x] Página de contacto con formulario
- [x] Sistema de horarios dinámico "Abierto ahora"
- [x] Animaciones con scroll e IntersectionObserver
- [x] SEO optimizado (meta tags, sitemap, robots.txt)
- [x] Panel administrativo (maqueta)
- [x] Sistema de notificaciones (Toast)
- [x] Cliente Supabase preparado (sin usar)

### 🔄 Preparado para Futuro
- [ ] Autenticación con Supabase
- [ ] CRUD completo en panel administrativo
- [ ] Upload de imágenes
- [ ] Gestión de leads en tiempo real
- [ ] Analytics e informes

## 🚗 Comandos Disponibles

| Comando | Acción |
|---------|--------|
| `npm run dev` | Servidor de desarrollo en `localhost:4321` |
| `npm run build` | Construir sitio para producción |
| `npm run preview` | Vista previa del build local |
| `npm run astro` | Comandos CLI de Astro |

## 🎨 Personalización

### Colores (Tailwind)
- **Primary**: Azules/grises oscuros del sitio original
- **Accent**: Azules más claros para CTAs y elementos interactivos
- **Dark**: Negros para fondos de hero y footer

### Tipografía
- **Font principal**: Poppins (Google Fonts)
- **Weights**: 400 (normal), 600 (semibold), 700 (bold)

### Animaciones
- Fade up, left, right para elementos
- Scale in para elementos especiales
- Hover effects en cards y botones
- Delays escalonados en grids

## 📱 Responsive Design

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## 🔧 Troubleshooting

### Error de TypeScript
```bash
npm run astro check
```

### Problemas de build
```bash
rm -rf node_modules .astro
npm install
npm run build
```

### Limpiar cache
```bash
npm run astro clear
```

## 📞 Soporte

Para soporte técnico o preguntas sobre la implementación, consulte:
- Documentación de Astro: https://docs.astro.build
- Documentación de Supabase: https://supabase.com/docs
- Documentación de Tailwind: https://tailwindcss.com/docs
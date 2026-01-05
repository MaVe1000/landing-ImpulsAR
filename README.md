# ImpulsAR Landing Page

Landing page oficial para **ImpulsAR** - Infraestructura Pública Digital para Protección Social basada en blockchain Stellar.

## Descripción

ImpulsAR es una infraestructura blockchain B2G (Business-to-Government) que moderniza las transferencias de ayuda social en Argentina. Elimina intermediarios bancarios costosos, ofrece transferencias instantáneas, protección automática contra la inflación y garantiza transparencia pública total.

## Características

- **Navegación suave**: Scroll smooth entre secciones
- **Diseño responsivo**: Optimizado para todos los dispositivos
- **Video demo integrado**: Demostración en YouTube embebida
- **Secciones informativas**:
  - Hero con llamada a la acción principal
  - Estadísticas de impacto
  - Descripción del problema actual
  - Solución propuesta
  - Demo en video
  - Explicación técnica de Stellar blockchain
  - Call-to-action final
- **Integración con la app**: Enlaces directos a [impulsar-web.vercel.app](https://impulsar-web.vercel.app/)

## Tecnologías

- **Next.js 16** con App Router
- **TypeScript**
- **Tailwind CSS v4**
- **shadcn/ui components**
- **Geist Font**

## Estructura del Proyecto

```
├── app/
│   ├── layout.tsx          # Layout principal con metadata
│   ├── page.tsx            # Página principal que compone todas las secciones
│   └── globals.css         # Estilos globales y tokens de diseño
├── components/
│   ├── header.tsx          # Navegación sticky superior
│   ├── hero.tsx            # Sección hero principal
│   ├── stats.tsx           # Estadísticas de impacto
│   ├── problem.tsx         # Descripción del problema
│   ├── solution.tsx        # Solución propuesta
│   ├── video-demo.tsx      # Video de demostración
│   ├── why-stellar.tsx     # Explicación técnica de Stellar
│   ├── cta.tsx             # Call-to-action final
│   └── footer.tsx          # Footer con información
└── README.md               # Este archivo
```

## Instalación y Desarrollo

```bash
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Build para producción
npm run build

# Iniciar en producción
npm start
```

La aplicación estará disponible en [http://localhost:3000](http://localhost:3000)

## Enlaces

- **App en producción**: [https://impulsar-web.vercel.app/](https://impulsar-web.vercel.app/)
- **Video demo**: [https://www.youtube.com/watch?v=2sKzz8X2m0Q](https://www.youtube.com/watch?v=2sKzz8X2m0Q)
- **DoraHacks**: [https://dorahacks.io/buidl/38100](https://dorahacks.io/buidl/38100)

## Despliegue

Este proyecto está optimizado para desplegarse en Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone)

## Licencia

Este proyecto es parte de la iniciativa ImpulsAR para modernizar la infraestructura de protección social en Argentina.

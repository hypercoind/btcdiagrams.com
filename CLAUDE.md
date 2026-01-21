# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Deploy (Docker)

```bash
docker-compose up -d        # Build and run at http://localhost:3333
docker-compose down         # Stop
docker-compose build        # Rebuild after changes
```

The production build uses a multi-stage Dockerfile:
1. Build stage: Node.js builds static export to `/out`
2. Runtime stage: nginx serves static files with gzip, caching, and security headers

## Development Commands

```bash
npm run dev      # Start development server at http://localhost:3000
npm run build    # Build for production (static export to /out)
npm run lint     # Run ESLint
npm start        # Serve production build
```

## Architecture

This is a **static-export Next.js site** (`output: 'export'` in next.config.ts) that displays educational Bitcoin infographics. All pages are pre-rendered at build time.

### Core Data Flow

1. **Diagram metadata** lives in `src/data/diagrams.ts` - the `DIAGRAMS` array defines all available diagrams with slugs, titles, descriptions, categories, and keywords
2. **Categories** are defined in `src/lib/types.ts` - four fixed categories: `bitcoin-basics`, `wallets-security`, `how-it-works`, `economics`
3. **Diagram components** in `src/components/diagrams/` are React components that render each diagram's SVG/visualization
4. **Thumbnail components** in `src/components/thumbnails/` are simplified versions for the gallery cards
5. Both diagram and thumbnail components are registered by slug in their respective `index.ts` files

### Adding a New Diagram

1. Add diagram metadata to `DIAGRAMS` array in `src/data/diagrams.ts`
2. Create full diagram component in `src/components/diagrams/YourDiagram.tsx`
3. Create thumbnail component in `src/components/thumbnails/YourDiagramThumbnail.tsx`
4. Register both in their `index.ts` files using the same slug

### Key Patterns

- **Theme support**: Dark/light mode via `ThemeProvider` in `src/lib/theme.tsx`. Components should use Tailwind's `dark:` variants and CSS custom properties defined in `globals.css`
- **Path alias**: `@/*` maps to `./src/*`
- **Static generation**: Dynamic routes use `generateStaticParams()` to pre-render all diagram pages at build time

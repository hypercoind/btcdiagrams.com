# Build & Deploy Guide

## Quick Start (Docker)

```bash
docker-compose up -d        # Build and run at http://localhost:3333
docker-compose down         # Stop
docker-compose build        # Rebuild after changes
```

## Development

```bash
npm install                 # Install dependencies
npm run dev                 # Start dev server at http://localhost:3000
npm run lint                # Run ESLint
```

## Build Commands

| Command | Purpose |
|---------|---------|
| `npm run dev` | Development server at localhost:3000 |
| `npm run build` | Static export to `/out` directory |
| `npm run lint` | Run ESLint |
| `npm start` | Serve production build (Next.js server) |

**Build output:** Next.js is configured with `output: 'export'` in `next.config.ts`, generating a fully static site in the `/out` folder.

## Docker Architecture

### Multi-Stage Dockerfile

1. **Build stage** (`node:20-alpine`)
   - Installs dependencies with `npm ci`
   - Runs `npm run build` to generate static export

2. **Runtime stage** (`nginx:alpine`)
   - Copies static files from `/out` to nginx html directory
   - Serves on port 80

### docker-compose.yml

- Service: `btcdiagrams`
- Port mapping: `3333:80` (host:container)
- Restart policy: `unless-stopped`

### nginx.conf Features

- **Gzip compression** for text, CSS, JS, JSON, SVG
- **Security headers:**
  - `X-Frame-Options: SAMEORIGIN`
  - `X-Content-Type-Options: nosniff`
  - `X-XSS-Protection: 1; mode=block`
- **Static asset caching:** 1-year expiry with `immutable` flag
- **Health check:** GET `/health` returns 200 "healthy"
- **SPA routing:** Falls back to index.html for client-side routing

### .dockerignore

Excludes from Docker build context:
- `node_modules/` - Reinstalled in container
- `out/`, `.next/` - Regenerated during build
- IDE/editor files
- Git files
- Environment files
- Logs

## Environment Setup

This is a **purely static site** with no runtime configuration. No environment variables are required.

## Verification

After starting with Docker:

1. Open http://localhost:3333
2. Check health endpoint: `curl http://localhost:3333/health`
3. Verify all diagram pages load correctly
4. Test dark/light mode toggle

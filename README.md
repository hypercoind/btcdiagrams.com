# btcdiagrams.com

Educational Bitcoin infographics and diagrams to help people understand Bitcoin concepts visually.

## Features

- Interactive diagrams explaining Bitcoin fundamentals
- Dark/light theme support
- Static site generation for fast loading
- Responsive design for all devices
- Docker deployment ready

## Quick Start

### Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Production (Docker)

```bash
docker-compose up -d
```

The site will be available at [http://localhost:3333](http://localhost:3333).

## Project Structure

```
src/
├── app/                    # Next.js app router pages
├── components/
│   ├── diagrams/          # Full diagram components
│   └── thumbnails/        # Gallery card thumbnails
├── data/
│   └── diagrams.ts        # Diagram metadata definitions
└── lib/
    ├── theme.tsx          # Theme provider (dark/light)
    └── types.ts           # TypeScript types and categories
```

## Adding a New Diagram

1. Add metadata to `src/data/diagrams.ts`:
   ```typescript
   {
     slug: 'your-diagram',
     title: 'Your Diagram Title',
     description: 'Brief description',
     category: 'bitcoin-basics', // or other category
     keywords: ['keyword1', 'keyword2']
   }
   ```

2. Create the diagram component at `src/components/diagrams/YourDiagram.tsx`

3. Create thumbnail at `src/components/thumbnails/YourDiagramThumbnail.tsx`

4. Register both in their respective `index.ts` files using the same slug

## Categories

- `bitcoin-basics` - Foundational Bitcoin concepts
- `wallets-security` - Wallet types and security practices
- `how-it-works` - Technical explanations
- `economics` - Economic principles and monetary policy

## License

MIT License - see [LICENSE](LICENSE) for details.

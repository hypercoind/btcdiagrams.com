import { Diagram } from '@/lib/types';

export const DIAGRAMS: Diagram[] = [
  {
    slug: 'how-bitcoin-works',
    title: 'How Bitcoin Works',
    description: 'A simple flow diagram showing the journey of a Bitcoin transaction from sender to receiver.',
    category: 'bitcoin-basics',
    keywords: ['bitcoin', 'transaction', 'basics', 'beginner', 'how it works'],
  },
  {
    slug: 'wallet-types',
    title: 'Wallet Types Comparison',
    description: 'Compare different types of Bitcoin wallets: hot vs cold, custodial vs non-custodial.',
    category: 'wallets-security',
    keywords: ['wallet', 'security', 'hot wallet', 'cold wallet', 'hardware wallet', 'custodial'],
  },
  {
    slug: 'blockchain-structure',
    title: 'Blockchain Structure',
    description: 'Visual breakdown of how blocks are chained together to form the Bitcoin blockchain.',
    category: 'how-it-works',
    keywords: ['blockchain', 'blocks', 'chain', 'structure', 'hash', 'mining'],
  },
  {
    slug: 'transaction-lifecycle',
    title: 'Transaction Lifecycle',
    description: 'Step-by-step flow of a Bitcoin transaction from creation to confirmation.',
    category: 'how-it-works',
    keywords: ['transaction', 'mempool', 'confirmation', 'mining', 'broadcast'],
  },
  {
    slug: 'supply-schedule',
    title: 'Bitcoin Supply & Halving',
    description: 'Timeline showing Bitcoin\'s supply schedule, halving events, and the path to 21 million.',
    category: 'economics',
    keywords: ['supply', 'halving', '21 million', 'scarcity', 'inflation', 'monetary policy'],
  },
];

export function getDiagramBySlug(slug: string): Diagram | undefined {
  return DIAGRAMS.find(d => d.slug === slug);
}

export function getDiagramsByCategory(categoryId: string): Diagram[] {
  return DIAGRAMS.filter(d => d.category === categoryId);
}

export function getAllSlugs(): string[] {
  return DIAGRAMS.map(d => d.slug);
}

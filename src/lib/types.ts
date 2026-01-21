export type Category =
  | 'bitcoin-basics'
  | 'wallets-security'
  | 'how-it-works'
  | 'economics';

export interface CategoryInfo {
  id: Category;
  label: string;
  description: string;
}

export interface Diagram {
  slug: string;
  title: string;
  description: string;
  category: Category;
  keywords: string[];
}

export const CATEGORIES: CategoryInfo[] = [
  {
    id: 'bitcoin-basics',
    label: 'Bitcoin Basics',
    description: 'Fundamental concepts for beginners',
  },
  {
    id: 'wallets-security',
    label: 'Wallets & Security',
    description: 'How to store and protect your Bitcoin',
  },
  {
    id: 'how-it-works',
    label: 'How It Works',
    description: 'Technical concepts explained simply',
  },
  {
    id: 'economics',
    label: 'Economics',
    description: 'Bitcoin monetary policy and supply',
  },
];

export function getCategoryInfo(categoryId: Category): CategoryInfo | undefined {
  return CATEGORIES.find(c => c.id === categoryId);
}

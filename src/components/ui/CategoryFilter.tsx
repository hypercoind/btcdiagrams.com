'use client';

import { CATEGORIES, Category } from '@/lib/types';
import { CategoryPill } from './CategoryPill';

interface CategoryFilterProps {
  selectedCategory: Category | 'all';
  onCategoryChange: (category: Category | 'all') => void;
}

export function CategoryFilter({ selectedCategory, onCategoryChange }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      <CategoryPill
        label="All"
        isActive={selectedCategory === 'all'}
        onClick={() => onCategoryChange('all')}
      />
      {CATEGORIES.map((category) => (
        <CategoryPill
          key={category.id}
          label={category.label}
          isActive={selectedCategory === category.id}
          onClick={() => onCategoryChange(category.id)}
        />
      ))}
    </div>
  );
}

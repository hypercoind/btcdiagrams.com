'use client';

import { useState } from 'react';
import { Diagram, Category } from '@/lib/types';
import { CategoryFilter } from './CategoryFilter';
import { DiagramCard } from './DiagramCard';

interface DiagramGalleryProps {
  diagrams: Diagram[];
}

export function DiagramGallery({ diagrams }: DiagramGalleryProps) {
  const [selectedCategory, setSelectedCategory] = useState<Category | 'all'>('all');

  const filteredDiagrams = selectedCategory === 'all'
    ? diagrams
    : diagrams.filter(d => d.category === selectedCategory);

  return (
    <div className="space-y-8">
      <CategoryFilter
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />

      {filteredDiagrams.length === 0 ? (
        <div className="text-center py-12 text-muted-foreground">
          No diagrams found in this category.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDiagrams.map((diagram) => (
            <DiagramCard key={diagram.slug} diagram={diagram} />
          ))}
        </div>
      )}
    </div>
  );
}

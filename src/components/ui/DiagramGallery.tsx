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
        <div className="flex flex-col items-center max-w-[580px] mx-auto">
          {filteredDiagrams.map((diagram, index) => (
            <div key={diagram.slug} className="w-full">
              {index > 0 && (
                <div className="flex flex-col items-center py-1">
                  <div className="w-px h-3 bg-border" />
                  <div className="w-3 h-3 rounded-full border-2 border-bitcoin bg-card" />
                  <div className="w-px h-3 bg-border" />
                </div>
              )}
              <DiagramCard diagram={diagram} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

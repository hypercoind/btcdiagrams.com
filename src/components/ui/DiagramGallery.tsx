import { Diagram, CATEGORIES } from '@/lib/types';
import { DiagramCard } from './DiagramCard';

interface DiagramGalleryProps {
  diagrams: Diagram[];
}

export function DiagramGallery({ diagrams }: DiagramGalleryProps) {
  const diagramsByCategory = CATEGORIES.map(category => ({
    category,
    diagrams: diagrams.filter(d => d.category === category.id),
  })).filter(group => group.diagrams.length > 0);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {diagramsByCategory.map(({ category, diagrams: catDiagrams }) => (
        <div key={category.id} className="flex flex-col">
          <div className="mb-4 text-center">
            <h2 className="text-lg font-semibold text-foreground">{category.label}</h2>
            <p className="text-sm text-muted-foreground">{category.description}</p>
          </div>
          <div className="flex flex-col items-center">
            {catDiagrams.map((diagram, index) => (
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
        </div>
      ))}
    </div>
  );
}

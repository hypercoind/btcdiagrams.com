'use client';

import Link from 'next/link';
import { Diagram, getCategoryInfo } from '@/lib/types';
import { getThumbnailComponent } from '@/components/thumbnails';

interface DiagramCardProps {
  diagram: Diagram;
}

export function DiagramCard({ diagram }: DiagramCardProps) {
  const ThumbnailComponent = getThumbnailComponent(diagram.slug);
  const categoryInfo = getCategoryInfo(diagram.category);

  return (
    <Link
      href={`/diagram/${diagram.slug}`}
      className="group block bg-card rounded-xl border border-border overflow-hidden hover:border-bitcoin transition-colors"
    >
      {/* Thumbnail */}
      <div className="aspect-video bg-muted p-4 flex items-center justify-center">
        {ThumbnailComponent ? (
          <ThumbnailComponent className="max-h-full" />
        ) : (
          <div className="text-muted-foreground text-sm">Preview</div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="mb-2">
          <span className="inline-block px-2 py-1 text-xs rounded-full bg-accent text-accent-foreground">
            {categoryInfo?.label || diagram.category}
          </span>
        </div>
        <h3 className="font-semibold text-foreground group-hover:text-bitcoin transition-colors mb-1">
          {diagram.title}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2">
          {diagram.description}
        </p>
      </div>
    </Link>
  );
}

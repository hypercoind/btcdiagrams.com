'use client';

import { getDiagramComponent } from '@/components/diagrams';
import { DiagramWrapper } from './DiagramWrapper';

interface DiagramRendererProps {
  slug: string;
  title: string;
}

export function DiagramRenderer({ slug, title }: DiagramRendererProps) {
  const DiagramComponent = getDiagramComponent(slug);

  if (!DiagramComponent) {
    return (
      <DiagramWrapper title={title}>
        <div className="flex items-center justify-center h-64 text-muted-foreground">
          Diagram not found
        </div>
      </DiagramWrapper>
    );
  }

  return (
    <DiagramWrapper title={title}>
      <DiagramComponent />
    </DiagramWrapper>
  );
}

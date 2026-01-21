'use client';

import { ReactNode } from 'react';

interface DiagramWrapperProps {
  children: ReactNode;
  title: string;
  className?: string;
}

export function DiagramWrapper({ children, title, className = '' }: DiagramWrapperProps) {
  return (
    <div
      className={`w-full bg-card rounded-xl border border-border p-4 sm:p-6 lg:p-8 ${className}`}
      role="img"
      aria-label={title}
    >
      {children}
    </div>
  );
}

'use client';

interface CategoryPillProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

export function CategoryPill({ label, isActive, onClick }: CategoryPillProps) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
        isActive
          ? 'bg-bitcoin text-white'
          : 'bg-muted text-muted-foreground hover:bg-border hover:text-foreground'
      }`}
    >
      {label}
    </button>
  );
}

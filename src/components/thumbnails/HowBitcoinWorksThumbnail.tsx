'use client';

import { ThumbnailComponentProps } from './index';

export function HowBitcoinWorksThumbnail({ className = '' }: ThumbnailComponentProps) {
  return (
    <svg
      viewBox="0 0 200 120"
      className={`w-full h-auto ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="200" height="120" className="fill-card" />

      {/* Simplified flow: Person → Arrow → Block → Arrow → Person */}
      <circle cx="30" cy="60" r="18" className="fill-primary/20 stroke-primary" strokeWidth="2" />
      <text x="30" y="64" textAnchor="middle" className="fill-foreground text-xs">A</text>

      <line x1="52" y1="60" x2="72" y2="60" className="stroke-bitcoin" strokeWidth="2" />
      <polygon points="72,60 66,56 66,64" className="fill-bitcoin" />

      <rect x="78" y="45" width="44" height="30" rx="4" className="fill-accent stroke-bitcoin" strokeWidth="2" />
      <text x="100" y="64" textAnchor="middle" className="fill-foreground text-xs">TX</text>

      <line x1="128" y1="60" x2="148" y2="60" className="stroke-bitcoin" strokeWidth="2" />
      <polygon points="148,60 142,56 142,64" className="fill-bitcoin" />

      <circle cx="170" cy="60" r="18" className="fill-green-500/20 stroke-green-500" strokeWidth="2" />
      <text x="170" y="64" textAnchor="middle" className="fill-foreground text-xs">B</text>

      <text x="100" y="105" textAnchor="middle" className="fill-muted-foreground text-xs">
        Send → Verify → Receive
      </text>
    </svg>
  );
}

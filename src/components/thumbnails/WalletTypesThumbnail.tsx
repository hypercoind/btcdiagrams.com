'use client';

import { ThumbnailComponentProps } from './index';

export function WalletTypesThumbnail({ className = '' }: ThumbnailComponentProps) {
  return (
    <svg
      viewBox="0 0 200 120"
      className={`w-full h-auto ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="200" height="120" className="fill-card" />

      {/* Hot wallet */}
      <g transform="translate(25, 15)">
        <rect x="0" y="0" width="65" height="55" rx="4" className="fill-primary/20 stroke-primary" strokeWidth="2" />
        <text x="32" y="22" textAnchor="middle" className="fill-primary text-xs font-bold">HOT</text>
        <g transform="translate(6, 28)">
          <path d="M4 8C1.5 8 0 6.5 0 4.5c0-1 .5-2 1-2.5.3 1 1 1.5 2 1.5-.5-1.5 0-3.5 1.5-3.5 0 1.5 1 2.5 2 3-.5-1 0-2.5 1.5-3 0 2 1 4 1 5.5C9 6.5 7.5 8 5 8H4z" className="fill-primary/60" />
        </g>
        <text x="38" y="42" textAnchor="middle" className="fill-muted-foreground text-xs">Online</text>
      </g>

      {/* Cold wallet */}
      <g transform="translate(110, 15)">
        <rect x="0" y="0" width="65" height="55" rx="4" className="fill-secondary/20 stroke-secondary" strokeWidth="2" />
        <text x="32" y="22" textAnchor="middle" className="fill-secondary text-xs font-bold">COLD</text>
        <g transform="translate(4, 28)">
          <path d="M5 0v10M0 5h10M1.5 1.5l7 7M8.5 1.5l-7 7" className="stroke-secondary" fill="none" strokeWidth="1" strokeLinecap="round" />
        </g>
        <text x="38" y="42" textAnchor="middle" className="fill-muted-foreground text-xs">Offline</text>
      </g>

      <text x="100" y="100" textAnchor="middle" className="fill-muted-foreground text-xs">
        Compare security &amp; ease
      </text>
    </svg>
  );
}

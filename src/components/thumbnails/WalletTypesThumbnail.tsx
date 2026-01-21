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
      <g transform="translate(25, 20)">
        <rect x="0" y="0" width="65" height="55" rx="4" className="fill-primary/20 stroke-primary" strokeWidth="2" />
        <text x="32" y="25" textAnchor="middle" className="fill-primary text-xs font-bold">HOT</text>
        <text x="32" y="42" textAnchor="middle" className="fill-muted-foreground text-xs">🔥 Online</text>
      </g>

      {/* Cold wallet */}
      <g transform="translate(110, 20)">
        <rect x="0" y="0" width="65" height="55" rx="4" className="fill-blue-500/20 stroke-blue-500" strokeWidth="2" />
        <text x="32" y="25" textAnchor="middle" className="fill-blue-500 text-xs font-bold">COLD</text>
        <text x="32" y="42" textAnchor="middle" className="fill-muted-foreground text-xs">❄️ Offline</text>
      </g>

      {/* VS */}
      <text x="100" y="52" textAnchor="middle" className="fill-muted-foreground text-sm font-bold">vs</text>

      <text x="100" y="100" textAnchor="middle" className="fill-muted-foreground text-xs">
        Compare security & ease
      </text>
    </svg>
  );
}

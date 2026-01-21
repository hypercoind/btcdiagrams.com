'use client';

import { ThumbnailComponentProps } from './index';

export function TransactionLifecycleThumbnail({ className = '' }: ThumbnailComponentProps) {
  return (
    <svg
      viewBox="0 0 200 120"
      className={`w-full h-auto ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="200" height="120" className="fill-card" />

      {/* Step circles */}
      <g transform="translate(20, 35)">
        <circle cx="20" cy="20" r="15" className="fill-primary/20 stroke-primary" strokeWidth="2" />
        <text x="20" y="24" textAnchor="middle" className="fill-primary text-xs font-bold">1</text>
      </g>

      <line x1="55" y1="55" x2="70" y2="55" className="stroke-border" strokeWidth="1" strokeDasharray="3,2" />

      <g transform="translate(70, 35)">
        <circle cx="20" cy="20" r="15" className="fill-yellow-500/20 stroke-yellow-500" strokeWidth="2" />
        <text x="20" y="24" textAnchor="middle" className="fill-yellow-600 dark:fill-yellow-400 text-xs font-bold">2</text>
      </g>

      <line x1="105" y1="55" x2="120" y2="55" className="stroke-border" strokeWidth="1" strokeDasharray="3,2" />

      <g transform="translate(120, 35)">
        <circle cx="20" cy="20" r="15" className="fill-green-500/20 stroke-green-500" strokeWidth="2" />
        <text x="20" y="24" textAnchor="middle" className="fill-green-600 dark:fill-green-400 text-xs font-bold">3</text>
      </g>

      <line x1="155" y1="55" x2="170" y2="55" className="stroke-border" strokeWidth="1" strokeDasharray="3,2" />

      <g transform="translate(160, 35)">
        <circle cx="20" cy="20" r="15" className="fill-green-600/20 stroke-green-600" strokeWidth="2" />
        <text x="20" y="24" textAnchor="middle" className="fill-green-600 dark:fill-green-400 text-xs font-bold">✓</text>
      </g>

      <text x="40" y="85" textAnchor="middle" className="fill-muted-foreground text-xs">Create</text>
      <text x="90" y="85" textAnchor="middle" className="fill-muted-foreground text-xs">Wait</text>
      <text x="140" y="85" textAnchor="middle" className="fill-muted-foreground text-xs">Mine</text>
      <text x="180" y="85" textAnchor="middle" className="fill-muted-foreground text-xs">Done</text>

      <text x="100" y="105" textAnchor="middle" className="fill-muted-foreground text-xs">
        TX journey to confirmation
      </text>
    </svg>
  );
}

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
      <g transform="translate(15, 35)">
        <circle cx="20" cy="20" r="15" className="fill-primary/20 stroke-primary" strokeWidth="2" />
        <text x="20" y="24" textAnchor="middle" className="fill-primary text-xs font-bold">1</text>
      </g>

      <line x1="50" y1="55" x2="65" y2="55" className="stroke-border" strokeWidth="1" strokeDasharray="3,3" strokeDashoffset="3" />

      <g transform="translate(60, 35)">
        <circle cx="20" cy="20" r="15" className="fill-yellow-500/20 stroke-yellow-500" strokeWidth="2" />
        <text x="20" y="24" textAnchor="middle" className="fill-yellow-600 dark:fill-yellow-400 text-xs font-bold">2</text>
      </g>

      <line x1="95" y1="55" x2="110" y2="55" className="stroke-border" strokeWidth="1" strokeDasharray="3,3" strokeDashoffset="3" />

      <g transform="translate(105, 35)">
        <circle cx="20" cy="20" r="15" className="fill-green-500/20 stroke-green-500" strokeWidth="2" />
        <text x="20" y="24" textAnchor="middle" className="fill-green-600 dark:fill-green-400 text-xs font-bold">3</text>
      </g>

      <line x1="140" y1="55" x2="155" y2="55" className="stroke-border" strokeWidth="1" strokeDasharray="3,3" strokeDashoffset="3" />

      <g transform="translate(150, 35)">
        <circle cx="20" cy="20" r="15" className="fill-green-600/20 stroke-green-600" strokeWidth="2" />
        {/* Checkmark icon */}
        <path d="M14 20l4 4 8-9" className="stroke-green-600 dark:stroke-green-400" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </g>

      <text x="35" y="85" textAnchor="middle" className="fill-muted-foreground text-xs">Create</text>
      <text x="80" y="85" textAnchor="middle" className="fill-muted-foreground text-xs">Wait</text>
      <text x="125" y="85" textAnchor="middle" className="fill-muted-foreground text-xs">Mine</text>
      <text x="170" y="85" textAnchor="middle" className="fill-muted-foreground text-xs">Done</text>
    </svg>
  );
}

'use client';

import { ThumbnailComponentProps } from './index';

export function SupplyScheduleThumbnail({ className = '' }: ThumbnailComponentProps) {
  return (
    <svg
      viewBox="0 0 200 120"
      className={`w-full h-auto ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="200" height="120" className="fill-card" />

      {/* Simple supply curve */}
      <g transform="translate(5, 20)">
        {/* Y axis */}
        <line x1="20" y1="10" x2="20" y2="70" className="stroke-border" strokeWidth="1" />
        {/* X axis */}
        <line x1="20" y1="70" x2="160" y2="70" className="stroke-border" strokeWidth="1" />

        {/* 21M cap line */}
        <line x1="20" y1="15" x2="160" y2="15" className="stroke-primary" strokeWidth="1" strokeDasharray="4,2" />
        <text x="165" y="18" className="fill-bitcoin text-xs">21M</text>

        {/* Supply curve */}
        <path
          d="M 20 70 L 20 50 L 50 50 L 50 35 L 80 35 L 80 25 L 110 25 L 110 20 L 140 20 L 140 16 L 160 16"
          className="fill-none stroke-bitcoin"
          strokeWidth="2"
        />

        {/* Area fill */}
        <path
          d="M 20 70 L 20 50 L 50 50 L 50 35 L 80 35 L 80 25 L 110 25 L 110 20 L 140 20 L 140 16 L 160 16 L 160 70 Z"
          className="fill-bitcoin/10"
        />

        {/* Halving markers */}
        <circle cx="50" cy="50" r="3" className="fill-bitcoin" />
        <circle cx="80" cy="35" r="3" className="fill-bitcoin" />
        <circle cx="110" cy="25" r="3" className="fill-bitcoin" />
        <circle cx="140" cy="20" r="3" className="fill-bitcoin" />
      </g>
    </svg>
  );
}

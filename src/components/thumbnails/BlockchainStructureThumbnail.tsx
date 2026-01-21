'use client';

import { ThumbnailComponentProps } from './index';

export function BlockchainStructureThumbnail({ className = '' }: ThumbnailComponentProps) {
  return (
    <svg
      viewBox="0 0 200 120"
      className={`w-full h-auto ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="200" height="120" className="fill-card" />

      {/* Block 1 */}
      <g transform="translate(15, 30)">
        <rect x="0" y="0" width="45" height="50" rx="4" className="fill-muted stroke-border" strokeWidth="2" />
        <rect x="0" y="0" width="45" height="15" rx="4" className="fill-primary" />
        <rect x="0" y="11" width="45" height="4" className="fill-primary" />
        <text x="22" y="11" textAnchor="middle" className="fill-primary-foreground text-xs">#1</text>
      </g>

      {/* Chain 1 */}
      <line x1="62" y1="55" x2="75" y2="55" className="stroke-bitcoin" strokeWidth="2" />

      {/* Block 2 */}
      <g transform="translate(77, 30)">
        <rect x="0" y="0" width="45" height="50" rx="4" className="fill-muted stroke-border" strokeWidth="2" />
        <rect x="0" y="0" width="45" height="15" rx="4" className="fill-primary" />
        <rect x="0" y="11" width="45" height="4" className="fill-primary" />
        <text x="22" y="11" textAnchor="middle" className="fill-primary-foreground text-xs">#2</text>
      </g>

      {/* Chain 2 */}
      <line x1="124" y1="55" x2="137" y2="55" className="stroke-bitcoin" strokeWidth="2" />

      {/* Block 3 */}
      <g transform="translate(139, 30)">
        <rect x="0" y="0" width="45" height="50" rx="4" className="fill-muted stroke-border" strokeWidth="2" />
        <rect x="0" y="0" width="45" height="15" rx="4" className="fill-primary" />
        <rect x="0" y="11" width="45" height="4" className="fill-primary" />
        <text x="22" y="11" textAnchor="middle" className="fill-primary-foreground text-xs">#3</text>
      </g>

      <text x="100" y="105" textAnchor="middle" className="fill-muted-foreground text-xs">
        Linked blocks = chain
      </text>
    </svg>
  );
}

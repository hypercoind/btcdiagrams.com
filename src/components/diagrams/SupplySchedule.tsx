'use client';

import { DiagramComponentProps } from './index';

export function SupplySchedule({ className = '' }: DiagramComponentProps) {
  return (
    <svg
      viewBox="0 0 800 500"
      className={`w-full h-auto ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background */}
      <rect width="800" height="500" className="fill-card" />

      {/* Title */}
      <text x="400" y="40" textAnchor="middle" className="fill-foreground text-xl font-bold">
        Bitcoin Supply Schedule & Halving
      </text>

      {/* Y-axis */}
      <line x1="80" y1="80" x2="80" y2="380" className="stroke-border" strokeWidth="2" />
      <text x="25" y="235" textAnchor="middle" className="fill-muted-foreground text-xs" transform="rotate(-90, 25, 235)">
        Total Supply
      </text>

      {/* Y-axis labels */}
      <text x="70" y="85" textAnchor="end" className="fill-muted-foreground text-xs">21M</text>
      <text x="70" y="155" textAnchor="end" className="fill-muted-foreground text-xs">15.75M</text>
      <text x="70" y="230" textAnchor="end" className="fill-muted-foreground text-xs">10.5M</text>
      <text x="70" y="305" textAnchor="end" className="fill-muted-foreground text-xs">5.25M</text>
      <text x="70" y="375" textAnchor="end" className="fill-muted-foreground text-xs">0</text>

      {/* X-axis with break */}
      <line x1="80" y1="380" x2="630" y2="380" className="stroke-border" strokeWidth="2" />
      <path d="M 630 380 L 636 374 L 642 386 L 648 374 L 654 386 L 660 380" className="fill-none stroke-border" strokeWidth="2" />
      <line x1="660" y1="380" x2="750" y2="380" className="stroke-border" strokeWidth="2" />
      <text x="425" y="410" textAnchor="middle" className="fill-muted-foreground text-xs">Year</text>

      {/* X-axis labels */}
      <text x="80" y="395" textAnchor="middle" className="fill-muted-foreground text-xs">2009</text>
      <text x="200" y="395" textAnchor="middle" className="fill-muted-foreground text-xs">2012</text>
      <text x="300" y="395" textAnchor="middle" className="fill-muted-foreground text-xs">2016</text>
      <text x="400" y="395" textAnchor="middle" className="fill-muted-foreground text-xs">2020</text>
      <text x="500" y="395" textAnchor="middle" className="fill-muted-foreground text-xs">2024</text>
      <text x="600" y="395" textAnchor="middle" className="fill-muted-foreground text-xs">2028</text>
      <text x="700" y="395" textAnchor="middle" className="fill-muted-foreground text-xs">2140</text>

      {/* Supply curve - stepped approximation */}
      <path
        d="M 80 380
           L 80 305 L 200 305
           L 200 225 L 300 225
           L 300 155 L 400 155
           L 400 120 L 500 120
           L 500 100 L 600 100
           L 600 92 L 630 92"
        className="fill-none stroke-bitcoin"
        strokeWidth="3"
      />
      <path
        d="M 630 92 L 636 81 L 642 93 L 648 81 L 654 93 L 660 87"
        className="fill-none stroke-bitcoin"
        strokeWidth="3"
      />
      <path
        d="M 660 87 L 750 87"
        className="fill-none stroke-bitcoin"
        strokeWidth="3"
      />

      {/* Area fill under curve */}
      <path
        d="M 80 380
           L 80 305 L 200 305
           L 200 225 L 300 225
           L 300 155 L 400 155
           L 400 120 L 500 120
           L 500 100 L 600 100
           L 600 92 L 630 92 L 636 81 L 642 93 L 648 81 L 654 93 L 660 87 L 750 87 L 750 380 Z"
        className="fill-bitcoin/10"
      />

      {/* 21M limit line */}
      <line x1="80" y1="85" x2="750" y2="85" className="stroke-primary" strokeWidth="2" strokeDasharray="8,4" />
      <text x="740" y="78" className="fill-bitcoin text-xs font-bold">21M CAP</text>

      {/* Halving markers */}
      <g>
        {/* Halving 1 - 2012 */}
        <line x1="200" y1="80" x2="200" y2="380" className="stroke-muted-foreground" strokeWidth="1" strokeDasharray="4,4" />
        <circle cx="200" cy="305" r="8" className="fill-bitcoin" />
        <text x="200" y="70" textAnchor="middle" className="fill-foreground text-xs font-bold">Halving 1</text>
        <text x="210" y="311" textAnchor="start" className="fill-muted-foreground text-xs">50→25 BTC</text>

        {/* Halving 2 - 2016 */}
        <line x1="300" y1="80" x2="300" y2="380" className="stroke-muted-foreground" strokeWidth="1" strokeDasharray="4,4" />
        <circle cx="300" cy="225" r="8" className="fill-bitcoin" />
        <text x="300" y="70" textAnchor="middle" className="fill-foreground text-xs font-bold">Halving 2</text>
        <text x="310" y="231" textAnchor="start" className="fill-muted-foreground text-xs">25→12.5 BTC</text>

        {/* Halving 3 - 2020 */}
        <line x1="400" y1="80" x2="400" y2="380" className="stroke-muted-foreground" strokeWidth="1" strokeDasharray="4,4" />
        <circle cx="400" cy="155" r="8" className="fill-bitcoin" />
        <text x="400" y="70" textAnchor="middle" className="fill-foreground text-xs font-bold">Halving 3</text>
        <text x="410" y="161" textAnchor="start" className="fill-muted-foreground text-xs">12.5→6.25 BTC</text>

        {/* Halving 4 - 2024 */}
        <line x1="500" y1="80" x2="500" y2="380" className="stroke-muted-foreground" strokeWidth="1" strokeDasharray="4,4" />
        <circle cx="500" cy="120" r="8" className="fill-bitcoin" />
        <text x="500" y="70" textAnchor="middle" className="fill-foreground text-xs font-bold">Halving 4</text>
        <text x="510" y="126" textAnchor="start" className="fill-muted-foreground text-xs">6.25→3.12 BTC</text>

        {/* Halving 5 - 2028 */}
        <line x1="600" y1="80" x2="600" y2="380" className="stroke-muted-foreground" strokeWidth="1" strokeDasharray="4,4" />
        <circle cx="600" cy="100" r="8" className="fill-bitcoin" />
        <text x="600" y="70" textAnchor="middle" className="fill-foreground text-xs font-bold">Halving 5</text>
      </g>

      {/* Info boxes */}
      <g transform="translate(100, 430)">
        <rect x="0" y="0" width="180" height="55" rx="6" className="fill-accent stroke-bitcoin" strokeWidth="2" />
        <text x="90" y="15" textAnchor="middle" className="fill-bitcoin text-xs font-bold">Block Reward Halving</text>
        <text x="90" y="32" textAnchor="middle" className="fill-foreground text-xs">Every 210,000 blocks</text>
        <text x="90" y="45" textAnchor="middle" className="fill-muted-foreground text-xs">(~4 years)</text>
      </g>

      <g transform="translate(310, 430)">
        <rect x="0" y="0" width="180" height="55" rx="6" className="fill-muted stroke-border" strokeWidth="2" />
        <text x="90" y="15" textAnchor="middle" className="fill-foreground text-xs font-bold">Current Supply</text>
        <text x="90" y="32" textAnchor="middle" className="fill-foreground text-xs">~19.9M BTC</text>
        <text x="90" y="45" textAnchor="middle" className="fill-muted-foreground text-xs">(95% mined)</text>
      </g>

      <g transform="translate(520, 430)">
        <rect x="0" y="0" width="180" height="55" rx="6" fill="rgba(34,197,94,0.1)" stroke="#22c55e" strokeWidth="2" />
        <text x="90" y="15" textAnchor="middle" fill="#22c55e" className="text-xs font-bold">Final Bitcoin Mined</text>
        <text x="90" y="32" textAnchor="middle" className="fill-foreground text-xs">Year ~2140</text>
        <text x="90" y="45" textAnchor="middle" className="fill-muted-foreground text-xs">(21M hard cap)</text>
      </g>
    </svg>
  );
}

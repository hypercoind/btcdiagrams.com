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
      <line x1="100" y1="80" x2="100" y2="380" className="stroke-border" strokeWidth="2" />
      <text x="50" y="235" textAnchor="middle" className="fill-muted-foreground text-xs" transform="rotate(-90, 50, 235)">
        Total Supply (millions BTC)
      </text>

      {/* Y-axis labels */}
      <text x="90" y="85" textAnchor="end" className="fill-muted-foreground text-xs">21M</text>
      <text x="90" y="155" textAnchor="end" className="fill-muted-foreground text-xs">15.75M</text>
      <text x="90" y="225" textAnchor="end" className="fill-muted-foreground text-xs">10.5M</text>
      <text x="90" y="305" textAnchor="end" className="fill-muted-foreground text-xs">5.25M</text>
      <text x="90" y="375" textAnchor="end" className="fill-muted-foreground text-xs">0</text>

      {/* X-axis */}
      <line x1="100" y1="380" x2="750" y2="380" className="stroke-border" strokeWidth="2" />
      <text x="425" y="410" textAnchor="middle" className="fill-muted-foreground text-xs">Year</text>

      {/* X-axis labels */}
      <text x="100" y="395" textAnchor="middle" className="fill-muted-foreground text-xs">2009</text>
      <text x="200" y="395" textAnchor="middle" className="fill-muted-foreground text-xs">2012</text>
      <text x="300" y="395" textAnchor="middle" className="fill-muted-foreground text-xs">2016</text>
      <text x="400" y="395" textAnchor="middle" className="fill-muted-foreground text-xs">2020</text>
      <text x="500" y="395" textAnchor="middle" className="fill-muted-foreground text-xs">2024</text>
      <text x="600" y="395" textAnchor="middle" className="fill-muted-foreground text-xs">2028</text>
      <text x="700" y="395" textAnchor="middle" className="fill-muted-foreground text-xs">2140</text>

      {/* Supply curve - stepped approximation */}
      <path
        d="M 100 380
           L 100 305 L 200 305
           L 200 225 L 300 225
           L 300 155 L 400 155
           L 400 120 L 500 120
           L 500 100 L 600 100
           L 600 90 L 700 85
           L 750 85"
        className="fill-none stroke-bitcoin"
        strokeWidth="3"
      />

      {/* Area fill under curve */}
      <path
        d="M 100 380
           L 100 305 L 200 305
           L 200 225 L 300 225
           L 300 155 L 400 155
           L 400 120 L 500 120
           L 500 100 L 600 100
           L 600 90 L 700 85
           L 750 85 L 750 380 Z"
        className="fill-bitcoin/10"
      />

      {/* 21M limit line */}
      <line x1="100" y1="85" x2="750" y2="85" className="stroke-primary" strokeWidth="2" strokeDasharray="8,4" />
      <text x="760" y="88" className="fill-bitcoin text-xs font-bold">21M CAP</text>

      {/* Halving markers */}
      <g>
        {/* Halving 1 - 2012 */}
        <line x1="200" y1="80" x2="200" y2="380" className="stroke-muted-foreground" strokeWidth="1" strokeDasharray="4,4" />
        <circle cx="200" cy="305" r="8" className="fill-bitcoin" />
        <text x="200" y="70" textAnchor="middle" className="fill-foreground text-xs font-bold">Halving 1</text>
        <text x="200" y="330" textAnchor="middle" className="fill-muted-foreground text-xs">50→25 BTC</text>

        {/* Halving 2 - 2016 */}
        <line x1="300" y1="80" x2="300" y2="380" className="stroke-muted-foreground" strokeWidth="1" strokeDasharray="4,4" />
        <circle cx="300" cy="225" r="8" className="fill-bitcoin" />
        <text x="300" y="70" textAnchor="middle" className="fill-foreground text-xs font-bold">Halving 2</text>
        <text x="300" y="250" textAnchor="middle" className="fill-muted-foreground text-xs">25→12.5 BTC</text>

        {/* Halving 3 - 2020 */}
        <line x1="400" y1="80" x2="400" y2="380" className="stroke-muted-foreground" strokeWidth="1" strokeDasharray="4,4" />
        <circle cx="400" cy="155" r="8" className="fill-bitcoin" />
        <text x="400" y="70" textAnchor="middle" className="fill-foreground text-xs font-bold">Halving 3</text>
        <text x="400" y="180" textAnchor="middle" className="fill-muted-foreground text-xs">12.5→6.25 BTC</text>

        {/* Halving 4 - 2024 */}
        <line x1="500" y1="80" x2="500" y2="380" className="stroke-muted-foreground" strokeWidth="1" strokeDasharray="4,4" />
        <circle cx="500" cy="120" r="8" className="fill-bitcoin" />
        <text x="500" y="70" textAnchor="middle" className="fill-foreground text-xs font-bold">Halving 4</text>
        <text x="500" y="145" textAnchor="middle" className="fill-muted-foreground text-xs">6.25→3.125 BTC</text>
      </g>

      {/* Info boxes */}
      <g transform="translate(100, 430)">
        <rect x="0" y="0" width="180" height="55" rx="6" className="fill-accent stroke-bitcoin" strokeWidth="2" />
        <text x="90" y="20" textAnchor="middle" className="fill-bitcoin text-xs font-bold">Block Reward Halving</text>
        <text x="90" y="35" textAnchor="middle" className="fill-foreground text-xs">Every 210,000 blocks</text>
        <text x="90" y="48" textAnchor="middle" className="fill-muted-foreground text-xs">(~4 years)</text>
      </g>

      <g transform="translate(310, 430)">
        <rect x="0" y="0" width="180" height="55" rx="6" className="fill-muted stroke-border" strokeWidth="2" />
        <text x="90" y="20" textAnchor="middle" className="fill-foreground text-xs font-bold">Current Supply</text>
        <text x="90" y="35" textAnchor="middle" className="fill-foreground text-xs">~19.5M BTC</text>
        <text x="90" y="48" textAnchor="middle" className="fill-muted-foreground text-xs">(93% mined)</text>
      </g>

      <g transform="translate(520, 430)">
        <rect x="0" y="0" width="180" height="55" rx="6" className="fill-muted stroke-border" strokeWidth="2" />
        <text x="90" y="20" textAnchor="middle" className="fill-foreground text-xs font-bold">Final Bitcoin Mined</text>
        <text x="90" y="35" textAnchor="middle" className="fill-foreground text-xs">Year ~2140</text>
        <text x="90" y="48" textAnchor="middle" className="fill-muted-foreground text-xs">(21M hard cap)</text>
      </g>
    </svg>
  );
}

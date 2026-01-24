'use client';

import { DiagramComponentProps } from './index';

export function WalletTypes({ className = '' }: DiagramComponentProps) {
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
        Bitcoin Wallet Types Comparison
      </text>

      {/* Headers */}
      <g transform="translate(0, 70)">
        <rect x="184" y="0" width="150" height="40" className="fill-primary" rx="4" />
        <text x="259" y="26" textAnchor="middle" className="fill-primary-foreground text-sm font-bold">
          Hot Wallets
        </text>

        <rect x="386" y="0" width="150" height="40" className="fill-secondary" rx="4" />
        <text x="461" y="26" textAnchor="middle" className="fill-secondary-foreground text-sm font-bold">
          Cold Wallets
        </text>
      </g>

      {/* Row labels */}
      <g transform="translate(52, 140)">
        <text x="0" y="20" className="fill-foreground text-sm font-semibold">Internet</text>
        <text x="0" y="100" className="fill-foreground text-sm font-semibold">Security</text>
        <text x="0" y="180" className="fill-foreground text-sm font-semibold">Convenience</text>
        <text x="0" y="260" className="fill-foreground text-sm font-semibold">Best For</text>
      </g>

      {/* Hot Wallet Column */}
      <g transform="translate(184, 130)">
        {/* Internet */}
        <rect x="0" y="0" width="150" height="50" className="fill-red-100 dark:fill-red-900/30 stroke-border" rx="4" />
        <text x="75" y="30" textAnchor="middle" className="fill-foreground text-xs">
          Connected
        </text>

        {/* Security */}
        <rect x="0" y="80" width="150" height="50" className="fill-yellow-100 dark:fill-yellow-900/30 stroke-border" rx="4" />
        <text x="75" y="110" textAnchor="middle" className="fill-foreground text-xs">
          Moderate Risk
        </text>

        {/* Convenience */}
        <rect x="0" y="160" width="150" height="50" className="fill-green-100 dark:fill-green-900/30 stroke-border" rx="4" />
        <text x="50" y="190" textAnchor="middle" className="fill-foreground text-xs">
          Very Easy
        </text>
        {/* 3 filled stars */}
        <g transform="translate(80, 180)">
          <path d="M5 0l1.5 3 3.5.5-2.5 2.4.6 3.5L5 7.8 1.9 9.4l.6-3.5L0 3.5 3.5 3z" className="fill-bitcoin" />
          <path d="M17 0l1.5 3 3.5.5-2.5 2.4.6 3.5-3.1-1.6-3.1 1.6.6-3.5-2.5-2.4 3.5-.5z" className="fill-bitcoin" />
          <path d="M29 0l1.5 3 3.5.5-2.5 2.4.6 3.5-3.1-1.6-3.1 1.6.6-3.5-2.5-2.4 3.5-.5z" className="fill-bitcoin" />
        </g>

        {/* Best For */}
        <rect x="0" y="240" width="150" height="50" className="fill-muted stroke-border" rx="4" />
        <text x="75" y="260" textAnchor="middle" className="fill-foreground text-xs">
          Daily spending
        </text>
        <text x="75" y="275" textAnchor="middle" className="fill-foreground text-xs">
          Small amounts
        </text>
      </g>

      {/* Cold Wallet Column */}
      <g transform="translate(386, 130)">
        {/* Internet */}
        <rect x="0" y="0" width="150" height="50" className="fill-green-100 dark:fill-green-900/30 stroke-border" rx="4" />
        <text x="75" y="30" textAnchor="middle" className="fill-foreground text-xs">
          100% Offline
        </text>

        {/* Security */}
        <rect x="0" y="80" width="150" height="50" className="fill-green-100 dark:fill-green-900/30 stroke-border" rx="4" />
        <text x="75" y="110" textAnchor="middle" className="fill-foreground text-xs">
          Very Low Risk
        </text>

        {/* Convenience */}
        <rect x="0" y="160" width="150" height="50" className="fill-yellow-100 dark:fill-yellow-900/30 stroke-border" rx="4" />
        <text x="50" y="190" textAnchor="middle" className="fill-foreground text-xs">
          Less Easy
        </text>
        {/* 1 filled star, 2 empty stars */}
        <g transform="translate(80, 180)">
          <path d="M5 0l1.5 3 3.5.5-2.5 2.4.6 3.5L5 7.8 1.9 9.4l.6-3.5L0 3.5 3.5 3z" className="fill-bitcoin" />
          <path d="M17 0l1.5 3 3.5.5-2.5 2.4.6 3.5-3.1-1.6-3.1 1.6.6-3.5-2.5-2.4 3.5-.5z" className="stroke-muted-foreground fill-none" strokeWidth="0.8" />
          <path d="M29 0l1.5 3 3.5.5-2.5 2.4.6 3.5-3.1-1.6-3.1 1.6.6-3.5-2.5-2.4 3.5-.5z" className="stroke-muted-foreground fill-none" strokeWidth="0.8" />
        </g>

        {/* Best For */}
        <rect x="0" y="240" width="150" height="50" className="fill-muted stroke-border" rx="4" />
        <text x="75" y="260" textAnchor="middle" className="fill-foreground text-xs">
          Long-term savings
        </text>
        <text x="75" y="275" textAnchor="middle" className="fill-foreground text-xs">
          Larger amounts
        </text>
      </g>

      {/* Examples section */}
      <g transform="translate(184, 445)">
        <text x="75" y="0" textAnchor="middle" className="fill-muted-foreground text-xs">
          Examples: Mobile apps,
        </text>
        <text x="75" y="15" textAnchor="middle" className="fill-muted-foreground text-xs">
          Desktop wallets, Browser wallets
        </text>
      </g>

      <g transform="translate(386, 445)">
        <text x="75" y="0" textAnchor="middle" className="fill-muted-foreground text-xs">
          Examples: Hardware wallets,
        </text>
        <text x="75" y="15" textAnchor="middle" className="fill-muted-foreground text-xs">
          Paper wallets, Steel backups
        </text>
      </g>

      {/* Key insight box */}
      <g transform="translate(588, 130)">
        <rect x="0" y="0" width="160" height="180" rx="8" className="fill-accent stroke-bitcoin" strokeWidth="2" />
        {/* Lightbulb icon */}
        <g transform="translate(38, 16)">
          <path d="M6 0C2.7 0 0 2.7 0 6c0 2 1 3.8 2.5 4.9V13c0 .6.4 1 1 1h5c.6 0 1-.4 1-1v-2.1C11 9.8 12 8 12 6c0-3.3-2.7-6-6-6z" className="stroke-bitcoin fill-bitcoin/20" strokeWidth="1" />
          <line x1="4" y1="15" x2="8" y2="15" className="stroke-bitcoin" strokeWidth="1" strokeLinecap="round" />
        </g>
        <text x="90" y="30" textAnchor="middle" className="fill-bitcoin text-sm font-bold">
          Pro Tip
        </text>
        <text x="80" y="60" textAnchor="middle" className="fill-foreground text-xs">
          Use both!
        </text>
        <text x="80" y="90" textAnchor="middle" className="fill-muted-foreground text-xs">
          Hot wallet for
        </text>
        <text x="80" y="105" textAnchor="middle" className="fill-muted-foreground text-xs">
          daily use
        </text>
        <text x="80" y="135" textAnchor="middle" className="fill-muted-foreground text-xs">
          Cold wallet for
        </text>
        <text x="80" y="150" textAnchor="middle" className="fill-muted-foreground text-xs">
          savings
        </text>
      </g>
    </svg>
  );
}

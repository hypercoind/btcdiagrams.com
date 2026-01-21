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
        <rect x="200" y="0" width="150" height="40" className="fill-primary" rx="4" />
        <text x="275" y="26" textAnchor="middle" className="fill-primary-foreground text-sm font-bold">
          Hot Wallets
        </text>

        <rect x="450" y="0" width="150" height="40" className="fill-blue-600" rx="4" />
        <text x="525" y="26" textAnchor="middle" className="fill-white text-sm font-bold">
          Cold Wallets
        </text>
      </g>

      {/* Row labels */}
      <g transform="translate(30, 140)">
        <text x="0" y="20" className="fill-foreground text-sm font-semibold">Internet</text>
        <text x="0" y="100" className="fill-foreground text-sm font-semibold">Security</text>
        <text x="0" y="180" className="fill-foreground text-sm font-semibold">Convenience</text>
        <text x="0" y="260" className="fill-foreground text-sm font-semibold">Best For</text>
      </g>

      {/* Hot Wallet Column */}
      <g transform="translate(200, 130)">
        {/* Internet */}
        <rect x="0" y="0" width="150" height="50" className="fill-red-100 dark:fill-red-900/30 stroke-border" rx="4" />
        <text x="75" y="30" textAnchor="middle" className="fill-foreground text-xs">
          Always Connected
        </text>

        {/* Security */}
        <rect x="0" y="80" width="150" height="50" className="fill-yellow-100 dark:fill-yellow-900/30 stroke-border" rx="4" />
        <text x="75" y="105" textAnchor="middle" className="fill-foreground text-xs">
          Medium Risk
        </text>
        <text x="75" y="120" textAnchor="middle" className="fill-muted-foreground text-xs">
          ⚠️ Hackable
        </text>

        {/* Convenience */}
        <rect x="0" y="160" width="150" height="50" className="fill-green-100 dark:fill-green-900/30 stroke-border" rx="4" />
        <text x="75" y="190" textAnchor="middle" className="fill-foreground text-xs">
          Very Easy ★★★
        </text>

        {/* Best For */}
        <rect x="0" y="240" width="150" height="70" className="fill-muted stroke-border" rx="4" />
        <text x="75" y="265" textAnchor="middle" className="fill-foreground text-xs">
          Daily spending
        </text>
        <text x="75" y="280" textAnchor="middle" className="fill-foreground text-xs">
          Small amounts
        </text>
        <text x="75" y="295" textAnchor="middle" className="fill-foreground text-xs">
          Trading
        </text>
      </g>

      {/* Cold Wallet Column */}
      <g transform="translate(450, 130)">
        {/* Internet */}
        <rect x="0" y="0" width="150" height="50" className="fill-green-100 dark:fill-green-900/30 stroke-border" rx="4" />
        <text x="75" y="30" textAnchor="middle" className="fill-foreground text-xs">
          Offline / Air-gapped
        </text>

        {/* Security */}
        <rect x="0" y="80" width="150" height="50" className="fill-green-100 dark:fill-green-900/30 stroke-border" rx="4" />
        <text x="75" y="105" textAnchor="middle" className="fill-foreground text-xs">
          Very High
        </text>
        <text x="75" y="120" textAnchor="middle" className="fill-muted-foreground text-xs">
          ✓ Secure
        </text>

        {/* Convenience */}
        <rect x="0" y="160" width="150" height="50" className="fill-yellow-100 dark:fill-yellow-900/30 stroke-border" rx="4" />
        <text x="75" y="190" textAnchor="middle" className="fill-foreground text-xs">
          Less Easy ★☆☆
        </text>

        {/* Best For */}
        <rect x="0" y="240" width="150" height="70" className="fill-muted stroke-border" rx="4" />
        <text x="75" y="265" textAnchor="middle" className="fill-foreground text-xs">
          Long-term savings
        </text>
        <text x="75" y="280" textAnchor="middle" className="fill-foreground text-xs">
          Large amounts
        </text>
        <text x="75" y="295" textAnchor="middle" className="fill-foreground text-xs">
          Inheritance
        </text>
      </g>

      {/* Examples section */}
      <g transform="translate(200, 440)">
        <text x="75" y="0" textAnchor="middle" className="fill-muted-foreground text-xs">
          Examples: Mobile apps,
        </text>
        <text x="75" y="15" textAnchor="middle" className="fill-muted-foreground text-xs">
          Desktop wallets, Web wallets
        </text>
      </g>

      <g transform="translate(450, 440)">
        <text x="75" y="0" textAnchor="middle" className="fill-muted-foreground text-xs">
          Examples: Hardware wallets,
        </text>
        <text x="75" y="15" textAnchor="middle" className="fill-muted-foreground text-xs">
          Paper wallets, Steel backups
        </text>
      </g>

      {/* Key insight box */}
      <g transform="translate(620, 130)">
        <rect x="0" y="0" width="160" height="180" rx="8" className="fill-accent stroke-bitcoin" strokeWidth="2" />
        <text x="80" y="30" textAnchor="middle" className="fill-bitcoin text-sm font-bold">
          💡 Pro Tip
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

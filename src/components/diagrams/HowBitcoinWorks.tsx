'use client';

import { DiagramComponentProps } from './index';

export function HowBitcoinWorks({ className = '' }: DiagramComponentProps) {
  return (
    <svg
      viewBox="0 0 800 400"
      className={`w-full h-auto ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background */}
      <rect width="800" height="400" className="fill-card" />

      {/* Title */}
      <text x="400" y="40" textAnchor="middle" className="fill-foreground text-xl font-bold">
        How Bitcoin Works
      </text>

      {/* Sender */}
      <g transform="translate(80, 120)">
        <circle cx="50" cy="50" r="45" className="fill-primary/20 stroke-primary" strokeWidth="2" />
        <text x="50" y="45" textAnchor="middle" className="fill-foreground text-sm font-semibold">
          Alice
        </text>
        <text x="50" y="65" textAnchor="middle" className="fill-muted-foreground text-xs">
          (Sender)
        </text>
      </g>

      {/* Arrow 1 */}
      <g transform="translate(180, 150)">
        <line x1="0" y1="20" x2="80" y2="20" className="stroke-bitcoin" strokeWidth="3" />
        <polygon points="80,20 70,12 70,28" className="fill-bitcoin" />
        <text x="40" y="10" textAnchor="middle" className="fill-muted-foreground text-xs">
          Signs TX
        </text>
      </g>

      {/* Transaction */}
      <g transform="translate(270, 100)">
        <rect x="0" y="0" width="100" height="90" rx="8" className="fill-accent stroke-bitcoin" strokeWidth="2" />
        <text x="50" y="35" textAnchor="middle" className="fill-foreground text-sm font-semibold">
          Transaction
        </text>
        <text x="50" y="55" textAnchor="middle" className="fill-muted-foreground text-xs">
          0.5 BTC
        </text>
        <text x="50" y="75" textAnchor="middle" className="fill-muted-foreground text-xs">
          + Fee
        </text>
      </g>

      {/* Arrow 2 */}
      <g transform="translate(380, 150)">
        <line x1="0" y1="20" x2="80" y2="20" className="stroke-bitcoin" strokeWidth="3" />
        <polygon points="80,20 70,12 70,28" className="fill-bitcoin" />
        <text x="40" y="10" textAnchor="middle" className="fill-muted-foreground text-xs">
          Broadcast
        </text>
      </g>

      {/* Network */}
      <g transform="translate(470, 100)">
        <rect x="0" y="0" width="100" height="90" rx="8" className="fill-muted stroke-border" strokeWidth="2" />
        <text x="50" y="35" textAnchor="middle" className="fill-foreground text-sm font-semibold">
          Bitcoin
        </text>
        <text x="50" y="55" textAnchor="middle" className="fill-foreground text-sm font-semibold">
          Network
        </text>
        <text x="50" y="75" textAnchor="middle" className="fill-muted-foreground text-xs">
          (Miners)
        </text>
      </g>

      {/* Arrow 3 */}
      <g transform="translate(580, 150)">
        <line x1="0" y1="20" x2="80" y2="20" className="stroke-bitcoin" strokeWidth="3" />
        <polygon points="80,20 70,12 70,28" className="fill-bitcoin" />
        <text x="40" y="10" textAnchor="middle" className="fill-muted-foreground text-xs">
          Confirmed
        </text>
      </g>

      {/* Receiver */}
      <g transform="translate(670, 120)">
        <circle cx="50" cy="50" r="45" className="fill-secondary/20 stroke-secondary" strokeWidth="2" />
        <text x="50" y="45" textAnchor="middle" className="fill-foreground text-sm font-semibold">
          Bob
        </text>
        <text x="50" y="65" textAnchor="middle" className="fill-muted-foreground text-xs">
          (Receiver)
        </text>
      </g>

      {/* Bottom explanation boxes */}
      <g transform="translate(80, 260)">
        <rect x="0" y="0" width="180" height="80" rx="6" className="fill-muted/50 stroke-border" strokeWidth="1" />
        <text x="90" y="25" textAnchor="middle" className="fill-foreground text-xs font-semibold">
          1. Create & Sign
        </text>
        <text x="90" y="45" textAnchor="middle" className="fill-muted-foreground text-xs">
          Alice creates a transaction
        </text>
        <text x="90" y="60" textAnchor="middle" className="fill-muted-foreground text-xs">
          and signs with private key
        </text>
      </g>

      <g transform="translate(310, 260)">
        <rect x="0" y="0" width="180" height="80" rx="6" className="fill-muted/50 stroke-border" strokeWidth="1" />
        <text x="90" y="25" textAnchor="middle" className="fill-foreground text-xs font-semibold">
          2. Verify & Mine
        </text>
        <text x="90" y="45" textAnchor="middle" className="fill-muted-foreground text-xs">
          Network verifies signature
        </text>
        <text x="90" y="60" textAnchor="middle" className="fill-muted-foreground text-xs">
          Miners add to blockchain
        </text>
      </g>

      <g transform="translate(540, 260)">
        <rect x="0" y="0" width="180" height="80" rx="6" className="fill-muted/50 stroke-border" strokeWidth="1" />
        <text x="90" y="25" textAnchor="middle" className="fill-foreground text-xs font-semibold">
          3. Receive
        </text>
        <text x="90" y="45" textAnchor="middle" className="fill-muted-foreground text-xs">
          Bob receives Bitcoin
        </text>
        <text x="90" y="60" textAnchor="middle" className="fill-muted-foreground text-xs">
          after confirmations
        </text>
      </g>
    </svg>
  );
}

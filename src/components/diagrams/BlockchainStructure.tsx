'use client';

import { DiagramComponentProps } from './index';

export function BlockchainStructure({ className = '' }: DiagramComponentProps) {
  return (
    <svg
      viewBox="0 0 800 450"
      className={`w-full h-auto ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background */}
      <rect width="800" height="450" className="fill-card" />

      {/* Title */}
      <text x="400" y="40" textAnchor="middle" className="fill-foreground text-xl font-bold">
        Blockchain Structure
      </text>

      {/* Block 1 */}
      <g transform="translate(10, 80)">
        <rect x="0" y="0" width="160" height="200" rx="8" className="fill-muted stroke-border" strokeWidth="2" />
        <rect x="0" y="0" width="160" height="40" rx="8" className="fill-primary" />
        <rect x="0" y="32" width="160" height="8" className="fill-primary" />
        <text x="80" y="26" textAnchor="middle" className="fill-primary-foreground text-sm font-bold">
          Block #1
        </text>

        <text x="12" y="65" className="fill-muted-foreground text-xs">Hash:</text>
        <text x="12" y="80" fill="#e67e22" className="text-xs font-mono font-bold">00000000839a8e...</text>

        <text x="12" y="105" className="fill-muted-foreground text-xs">Prev Hash:</text>
        <text x="12" y="120" className="fill-foreground text-xs font-mono">000000000019d6...</text>
        <text x="12" y="135" className="fill-muted-foreground text-xs">(Genesis)</text>

        <line x1="12" y1="150" x2="148" y2="150" className="stroke-border" strokeWidth="1" />

        <text x="12" y="170" className="fill-muted-foreground text-xs">Transactions:</text>
        <text x="12" y="188" className="fill-foreground text-xs">TX1, TX2, TX3...</text>
      </g>

      {/* Chain link 1-2 */}
      <g transform="translate(170, 170)">
        <line x1="0" y1="0" x2="18" y2="0" className="stroke-bitcoin" strokeWidth="3" />
        <polygon points="26,0 18,-6 18,6" className="fill-bitcoin" />
      </g>

      {/* Block 2 */}
      <g transform="translate(200, 80)">
        <rect x="0" y="0" width="160" height="200" rx="8" className="fill-muted stroke-border" strokeWidth="2" />
        <rect x="0" y="0" width="160" height="40" rx="8" className="fill-primary" />
        <rect x="0" y="32" width="160" height="8" className="fill-primary" />
        <text x="80" y="26" textAnchor="middle" className="fill-primary-foreground text-sm font-bold">
          Block #2
        </text>

        <text x="12" y="65" className="fill-muted-foreground text-xs">Hash:</text>
        <text x="12" y="80" fill="#3b82f6" className="text-xs font-mono font-bold">000000006a625f...</text>

        <text x="12" y="105" className="fill-muted-foreground text-xs">Prev Hash:</text>
        <text x="12" y="120" fill="#e67e22" className="text-xs font-mono font-bold">00000000839a8e...</text>
        <text x="12" y="135" className="fill-muted-foreground text-xs">(Links to #1)</text>

        <line x1="12" y1="150" x2="148" y2="150" className="stroke-border" strokeWidth="1" />

        <text x="12" y="170" className="fill-muted-foreground text-xs">Transactions:</text>
        <text x="12" y="188" className="fill-foreground text-xs">TX4, TX5, TX6...</text>
      </g>

      {/* Chain link 2-3 */}
      <g transform="translate(360, 170)">
        <line x1="0" y1="0" x2="18" y2="0" className="stroke-bitcoin" strokeWidth="3" />
        <polygon points="26,0 18,-6 18,6" className="fill-bitcoin" />
      </g>

      {/* Block 3 */}
      <g transform="translate(390, 80)">
        <rect x="0" y="0" width="160" height="200" rx="8" className="fill-muted stroke-border" strokeWidth="2" />
        <rect x="0" y="0" width="160" height="40" rx="8" className="fill-primary" />
        <rect x="0" y="32" width="160" height="8" className="fill-primary" />
        <text x="80" y="26" textAnchor="middle" className="fill-primary-foreground text-sm font-bold">
          Block #3
        </text>

        <text x="12" y="65" className="fill-muted-foreground text-xs">Hash:</text>
        <text x="12" y="80" fill="#22c55e" className="text-xs font-mono font-bold">0000000082b501...</text>

        <text x="12" y="105" className="fill-muted-foreground text-xs">Prev Hash:</text>
        <text x="12" y="120" fill="#3b82f6" className="text-xs font-mono font-bold">000000006a625f...</text>
        <text x="12" y="135" className="fill-muted-foreground text-xs">(Links to #2)</text>

        <line x1="12" y1="150" x2="148" y2="150" className="stroke-border" strokeWidth="1" />

        <text x="12" y="170" className="fill-muted-foreground text-xs">Transactions:</text>
        <text x="12" y="188" className="fill-foreground text-xs">TX7, TX8, TX9...</text>
      </g>

      {/* Chain link 3-4 */}
      <g transform="translate(550, 170)">
        <line x1="0" y1="0" x2="18" y2="0" className="stroke-bitcoin" strokeWidth="3" />
        <polygon points="26,0 18,-6 18,6" className="fill-bitcoin" />
      </g>

      {/* Block 4 */}
      <g transform="translate(580, 80)">
        <rect x="0" y="0" width="160" height="200" rx="8" className="fill-muted stroke-border" strokeWidth="2" />
        <rect x="0" y="0" width="160" height="40" rx="8" className="fill-primary" />
        <rect x="0" y="32" width="160" height="8" className="fill-primary" />
        <text x="80" y="26" textAnchor="middle" className="fill-primary-foreground text-sm font-bold">
          Block #4
        </text>

        <text x="12" y="65" className="fill-muted-foreground text-xs">Hash:</text>
        <text x="12" y="80" className="fill-foreground text-xs font-mono">000000004ebadb...</text>

        <text x="12" y="105" className="fill-muted-foreground text-xs">Prev Hash:</text>
        <text x="12" y="120" fill="#22c55e" className="text-xs font-mono font-bold">0000000082b501...</text>
        <text x="12" y="135" className="fill-muted-foreground text-xs">(Links to #3)</text>

        <line x1="12" y1="150" x2="148" y2="150" className="stroke-border" strokeWidth="1" />

        <text x="12" y="170" className="fill-muted-foreground text-xs">Transactions:</text>
        <text x="12" y="188" className="fill-foreground text-xs">TX10, TX11, TX12...</text>
      </g>

      {/* Explanation boxes */}
      <g transform="translate(10, 310)">
        <rect x="0" y="0" width="160" height="100" rx="6" className="fill-accent stroke-bitcoin" strokeWidth="2" />
        {/* Icon centered above title */}
        <text x="80" y="21" textAnchor="middle" className="fill-bitcoin text-sm font-bold">#</text>
        <text x="80" y="37" textAnchor="middle" className="fill-bitcoin text-sm font-bold">
          Hashing
        </text>
        <text x="80" y="57" textAnchor="middle" className="fill-foreground text-xs">
          A unique fingerprint
        </text>
        <text x="80" y="71" textAnchor="middle" className="fill-foreground text-xs">
          of all block data.
        </text>
        <text x="80" y="85" textAnchor="middle" className="fill-foreground text-xs">
          Any change = new hash.
        </text>
      </g>

      <g transform="translate(200, 310)">
        <rect x="0" y="0" width="160" height="100" rx="6" className="fill-muted stroke-border" strokeWidth="2" />
        {/* Chain link icon centered above title */}
        <g transform="translate(75, 11)">
          <path d="M4 3H2C0.9 3 0 3.9 0 5s.9 2 2 2h2M6 3h2c1.1 0 2 .9 2 2s-.9 2-2 2H6M3 5h4" className="stroke-foreground" fill="none" strokeWidth="1.5" strokeLinecap="round" />
        </g>
        <text x="80" y="37" textAnchor="middle" className="fill-foreground text-sm font-bold">
          The Chain
        </text>
        <text x="80" y="57" textAnchor="middle" className="fill-foreground text-xs">
          Each block contains the
        </text>
        <text x="80" y="71" textAnchor="middle" className="fill-foreground text-xs">
          hash of the previous block,
        </text>
        <text x="80" y="85" textAnchor="middle" className="fill-foreground text-xs">
          linking them together.
        </text>
      </g>

      <g transform="translate(390, 310)">
        <rect x="0" y="0" width="160" height="100" rx="6" fill="rgba(59,130,246,0.1)" stroke="#3b82f6" strokeWidth="2" />
        {/* Lock icon centered above title */}
        <g transform="translate(75, 9)">
          <rect x="1" y="4" width="8" height="6" rx="1" stroke="#3b82f6" fill="none" strokeWidth="1.2" />
          <path d="M3 4V2.5C3 1.1 4 0 5 0s2 1.1 2 2.5V4" stroke="#3b82f6" fill="none" strokeWidth="1.2" strokeLinecap="round" />
        </g>
        <text x="80" y="37" textAnchor="middle" fill="#3b82f6" className="text-sm font-bold">
          Immutability
        </text>
        <text x="80" y="57" textAnchor="middle" className="fill-foreground text-xs">
          Changing any block would
        </text>
        <text x="80" y="71" textAnchor="middle" className="fill-foreground text-xs">
          change its hash, breaking
        </text>
        <text x="80" y="85" textAnchor="middle" className="fill-foreground text-xs">
          the link to the next block.
        </text>
      </g>

      <g transform="translate(580, 310)">
        <rect x="0" y="0" width="160" height="100" rx="6" fill="rgba(34,197,94,0.1)" stroke="#22c55e" strokeWidth="2" />
        {/* Chip icon centered above title */}
        <g transform="translate(75, 9)">
          <rect x="2" y="2" width="7" height="7" rx="1" stroke="#22c55e" fill="none" strokeWidth="1.2" />
          <line x1="4" y1="0" x2="4" y2="2" stroke="#22c55e" strokeWidth="1.2" strokeLinecap="round" />
          <line x1="7" y1="0" x2="7" y2="2" stroke="#22c55e" strokeWidth="1.2" strokeLinecap="round" />
          <line x1="4" y1="9" x2="4" y2="11" stroke="#22c55e" strokeWidth="1.2" strokeLinecap="round" />
          <line x1="7" y1="9" x2="7" y2="11" stroke="#22c55e" strokeWidth="1.2" strokeLinecap="round" />
          <line x1="0" y1="4" x2="2" y2="4" stroke="#22c55e" strokeWidth="1.2" strokeLinecap="round" />
          <line x1="0" y1="7" x2="2" y2="7" stroke="#22c55e" strokeWidth="1.2" strokeLinecap="round" />
          <line x1="9" y1="4" x2="11" y2="4" stroke="#22c55e" strokeWidth="1.2" strokeLinecap="round" />
          <line x1="9" y1="7" x2="11" y2="7" stroke="#22c55e" strokeWidth="1.2" strokeLinecap="round" />
        </g>
        <text x="80" y="37" textAnchor="middle" fill="#22c55e" className="text-sm font-bold">
          Mining
        </text>
        <text x="80" y="57" textAnchor="middle" className="fill-foreground text-xs">
          Miners compete to find a
        </text>
        <text x="80" y="71" textAnchor="middle" className="fill-foreground text-xs">
          valid hash starting with
        </text>
        <text x="80" y="85" textAnchor="middle" className="fill-foreground text-xs">
          zeros (proof of work).
        </text>
      </g>
    </svg>
  );
}

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
      <g transform="translate(50, 80)">
        <rect x="0" y="0" width="180" height="200" rx="8" className="fill-muted stroke-border" strokeWidth="2" />
        <rect x="0" y="0" width="180" height="40" rx="8" className="fill-primary" />
        <rect x="0" y="32" width="180" height="8" className="fill-primary" />
        <text x="90" y="26" textAnchor="middle" className="fill-primary-foreground text-sm font-bold">
          Block #1
        </text>

        <text x="15" y="65" className="fill-muted-foreground text-xs">Hash:</text>
        <text x="15" y="80" className="fill-foreground text-xs font-mono">0000abc...</text>

        <text x="15" y="105" className="fill-muted-foreground text-xs">Prev Hash:</text>
        <text x="15" y="120" className="fill-foreground text-xs font-mono">0000000...</text>
        <text x="15" y="135" className="fill-muted-foreground text-xs">(Genesis)</text>

        <line x1="15" y1="150" x2="165" y2="150" className="stroke-border" strokeWidth="1" />

        <text x="15" y="170" className="fill-muted-foreground text-xs">Transactions:</text>
        <text x="15" y="188" className="fill-foreground text-xs">TX1, TX2, TX3...</text>
      </g>

      {/* Chain link 1-2 */}
      <g transform="translate(230, 170)">
        <line x1="0" y1="0" x2="50" y2="0" className="stroke-bitcoin" strokeWidth="4" />
        <polygon points="50,0 40,-8 40,8" className="fill-bitcoin" />
      </g>

      {/* Block 2 */}
      <g transform="translate(290, 80)">
        <rect x="0" y="0" width="180" height="200" rx="8" className="fill-muted stroke-border" strokeWidth="2" />
        <rect x="0" y="0" width="180" height="40" rx="8" className="fill-primary" />
        <rect x="0" y="32" width="180" height="8" className="fill-primary" />
        <text x="90" y="26" textAnchor="middle" className="fill-primary-foreground text-sm font-bold">
          Block #2
        </text>

        <text x="15" y="65" className="fill-muted-foreground text-xs">Hash:</text>
        <text x="15" y="80" className="fill-foreground text-xs font-mono">0000def...</text>

        <text x="15" y="105" className="fill-muted-foreground text-xs">Prev Hash:</text>
        <text x="15" y="120" className="fill-bitcoin text-xs font-mono font-bold">0000abc...</text>
        <text x="15" y="135" className="fill-muted-foreground text-xs">(Links to #1)</text>

        <line x1="15" y1="150" x2="165" y2="150" className="stroke-border" strokeWidth="1" />

        <text x="15" y="170" className="fill-muted-foreground text-xs">Transactions:</text>
        <text x="15" y="188" className="fill-foreground text-xs">TX4, TX5, TX6...</text>
      </g>

      {/* Chain link 2-3 */}
      <g transform="translate(470, 170)">
        <line x1="0" y1="0" x2="50" y2="0" className="stroke-bitcoin" strokeWidth="4" />
        <polygon points="50,0 40,-8 40,8" className="fill-bitcoin" />
      </g>

      {/* Block 3 */}
      <g transform="translate(530, 80)">
        <rect x="0" y="0" width="180" height="200" rx="8" className="fill-muted stroke-border" strokeWidth="2" />
        <rect x="0" y="0" width="180" height="40" rx="8" className="fill-primary" />
        <rect x="0" y="32" width="180" height="8" className="fill-primary" />
        <text x="90" y="26" textAnchor="middle" className="fill-primary-foreground text-sm font-bold">
          Block #3
        </text>

        <text x="15" y="65" className="fill-muted-foreground text-xs">Hash:</text>
        <text x="15" y="80" className="fill-foreground text-xs font-mono">0000ghi...</text>

        <text x="15" y="105" className="fill-muted-foreground text-xs">Prev Hash:</text>
        <text x="15" y="120" className="fill-bitcoin text-xs font-mono font-bold">0000def...</text>
        <text x="15" y="135" className="fill-muted-foreground text-xs">(Links to #2)</text>

        <line x1="15" y1="150" x2="165" y2="150" className="stroke-border" strokeWidth="1" />

        <text x="15" y="170" className="fill-muted-foreground text-xs">Transactions:</text>
        <text x="15" y="188" className="fill-foreground text-xs">TX7, TX8, TX9...</text>
      </g>

      {/* Dots indicating more blocks */}
      <g transform="translate(730, 170)">
        <circle cx="10" cy="0" r="4" className="fill-muted-foreground" />
        <circle cx="30" cy="0" r="4" className="fill-muted-foreground" />
        <circle cx="50" cy="0" r="4" className="fill-muted-foreground" />
      </g>

      {/* Explanation boxes */}
      <g transform="translate(50, 310)">
        <rect x="0" y="0" width="220" height="100" rx="6" className="fill-accent stroke-bitcoin" strokeWidth="2" />
        <text x="110" y="25" textAnchor="middle" className="fill-bitcoin text-sm font-bold">
          🔗 The Chain
        </text>
        <text x="110" y="50" textAnchor="middle" className="fill-foreground text-xs">
          Each block contains the hash
        </text>
        <text x="110" y="65" textAnchor="middle" className="fill-foreground text-xs">
          of the previous block,
        </text>
        <text x="110" y="80" textAnchor="middle" className="fill-foreground text-xs">
          creating an unbreakable chain.
        </text>
      </g>

      <g transform="translate(290, 310)">
        <rect x="0" y="0" width="220" height="100" rx="6" className="fill-muted stroke-border" strokeWidth="2" />
        <text x="110" y="25" textAnchor="middle" className="fill-foreground text-sm font-bold">
          🔒 Immutability
        </text>
        <text x="110" y="50" textAnchor="middle" className="fill-foreground text-xs">
          Changing any block would
        </text>
        <text x="110" y="65" textAnchor="middle" className="fill-foreground text-xs">
          change its hash, breaking
        </text>
        <text x="110" y="80" textAnchor="middle" className="fill-foreground text-xs">
          the link to the next block.
        </text>
      </g>

      <g transform="translate(530, 310)">
        <rect x="0" y="0" width="220" height="100" rx="6" className="fill-muted stroke-border" strokeWidth="2" />
        <text x="110" y="25" textAnchor="middle" className="fill-foreground text-sm font-bold">
          ⛏️ Mining
        </text>
        <text x="110" y="50" textAnchor="middle" className="fill-foreground text-xs">
          Miners compete to find a
        </text>
        <text x="110" y="65" textAnchor="middle" className="fill-foreground text-xs">
          valid hash starting with
        </text>
        <text x="110" y="80" textAnchor="middle" className="fill-foreground text-xs">
          zeros (proof of work).
        </text>
      </g>
    </svg>
  );
}

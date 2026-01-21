'use client';

import { DiagramComponentProps } from './index';

export function TransactionLifecycle({ className = '' }: DiagramComponentProps) {
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
        Bitcoin Transaction Lifecycle
      </text>

      {/* Step 1: Create */}
      <g transform="translate(70, 80)">
        <circle cx="60" cy="60" r="55" className="fill-primary/20 stroke-primary" strokeWidth="3" />
        <text x="60" y="50" textAnchor="middle" className="fill-primary text-2xl font-bold">1</text>
        <text x="60" y="75" textAnchor="middle" className="fill-foreground text-xs font-semibold">CREATE</text>

        <text x="60" y="140" textAnchor="middle" className="fill-foreground text-xs">User creates</text>
        <text x="60" y="155" textAnchor="middle" className="fill-foreground text-xs">transaction in</text>
        <text x="60" y="170" textAnchor="middle" className="fill-foreground text-xs">wallet app</text>
      </g>

      {/* Arrow 1-2 */}
      <g transform="translate(185, 125)">
        <line x1="0" y1="0" x2="50" y2="0" className="stroke-border" strokeWidth="2" strokeDasharray="5,5" />
        <polygon points="50,0 42,-6 42,6" className="fill-border" />
      </g>

      {/* Step 2: Sign */}
      <g transform="translate(240, 80)">
        <circle cx="60" cy="60" r="55" className="fill-primary/20 stroke-primary" strokeWidth="3" />
        <text x="60" y="50" textAnchor="middle" className="fill-primary text-2xl font-bold">2</text>
        <text x="60" y="75" textAnchor="middle" className="fill-foreground text-xs font-semibold">SIGN</text>

        <text x="60" y="140" textAnchor="middle" className="fill-foreground text-xs">Private key</text>
        <text x="60" y="155" textAnchor="middle" className="fill-foreground text-xs">signs to prove</text>
        <text x="60" y="170" textAnchor="middle" className="fill-foreground text-xs">ownership</text>
      </g>

      {/* Arrow 2-3 */}
      <g transform="translate(355, 125)">
        <line x1="0" y1="0" x2="50" y2="0" className="stroke-border" strokeWidth="2" strokeDasharray="5,5" />
        <polygon points="50,0 42,-6 42,6" className="fill-border" />
      </g>

      {/* Step 3: Broadcast */}
      <g transform="translate(410, 80)">
        <circle cx="60" cy="60" r="55" className="fill-primary/20 stroke-primary" strokeWidth="3" />
        <text x="60" y="50" textAnchor="middle" className="fill-primary text-2xl font-bold">3</text>
        <text x="60" y="75" textAnchor="middle" className="fill-foreground text-xs font-semibold">BROADCAST</text>

        <text x="60" y="140" textAnchor="middle" className="fill-foreground text-xs">TX sent to</text>
        <text x="60" y="155" textAnchor="middle" className="fill-foreground text-xs">Bitcoin network</text>
        <text x="60" y="170" textAnchor="middle" className="fill-foreground text-xs">nodes</text>
      </g>

      {/* Arrow 3-4 */}
      <g transform="translate(525, 125)">
        <line x1="0" y1="0" x2="50" y2="0" className="stroke-border" strokeWidth="2" strokeDasharray="5,5" />
        <polygon points="50,0 42,-6 42,6" className="fill-border" />
      </g>

      {/* Step 4: Mempool */}
      <g transform="translate(580, 80)">
        <circle cx="60" cy="60" r="55" className="fill-yellow-500/20 stroke-yellow-500" strokeWidth="3" />
        <text x="60" y="50" textAnchor="middle" className="fill-yellow-600 dark:fill-yellow-400 text-2xl font-bold">4</text>
        <text x="60" y="75" textAnchor="middle" className="fill-foreground text-xs font-semibold">MEMPOOL</text>

        <text x="60" y="140" textAnchor="middle" className="fill-foreground text-xs">Waits in</text>
        <text x="60" y="155" textAnchor="middle" className="fill-foreground text-xs">pending pool</text>
        <text x="60" y="170" textAnchor="middle" className="fill-foreground text-xs">⏳ Unconfirmed</text>
      </g>

      {/* Arrow down to mining */}
      <g transform="translate(640, 195)">
        <line x1="0" y1="0" x2="0" y2="40" className="stroke-bitcoin" strokeWidth="3" />
        <polygon points="0,40 -8,32 8,32" className="fill-bitcoin" />
      </g>

      {/* Step 5: Mining */}
      <g transform="translate(500, 250)">
        <rect x="0" y="0" width="280" height="90" rx="8" className="fill-bitcoin/20 stroke-bitcoin" strokeWidth="3" />
        <text x="140" y="30" textAnchor="middle" className="fill-bitcoin text-xl font-bold">5. MINING</text>
        <text x="140" y="55" textAnchor="middle" className="fill-foreground text-xs">Miners select TX from mempool</text>
        <text x="140" y="70" textAnchor="middle" className="fill-foreground text-xs">and compete to add to block</text>
      </g>

      {/* Arrow mining to confirmed */}
      <g transform="translate(500, 295)">
        <line x1="0" y1="0" x2="-60" y2="60" className="stroke-bitcoin" strokeWidth="3" />
        <polygon points="-60,60 -52,48 -68,52" className="fill-bitcoin" />
      </g>

      {/* Step 6: 1 Confirmation */}
      <g transform="translate(280, 360)">
        <rect x="0" y="0" width="150" height="80" rx="8" className="fill-green-500/20 stroke-green-500" strokeWidth="3" />
        <text x="75" y="30" textAnchor="middle" className="fill-green-600 dark:fill-green-400 text-lg font-bold">6. CONFIRMED</text>
        <text x="75" y="50" textAnchor="middle" className="fill-foreground text-xs">Added to block</text>
        <text x="75" y="70" textAnchor="middle" className="fill-green-600 dark:fill-green-400 text-sm font-bold">1 confirmation ✓</text>
      </g>

      {/* Arrow to more confirmations */}
      <g transform="translate(280, 400)">
        <line x1="0" y1="0" x2="-60" y2="0" className="stroke-green-500" strokeWidth="2" />
        <polygon points="-60,0 -52,-6 -52,6" className="fill-green-500" />
      </g>

      {/* More confirmations */}
      <g transform="translate(60, 360)">
        <rect x="0" y="0" width="150" height="80" rx="8" className="fill-green-600/20 stroke-green-600" strokeWidth="3" />
        <text x="75" y="30" textAnchor="middle" className="fill-green-600 dark:fill-green-400 text-lg font-bold">7. SETTLED</text>
        <text x="75" y="50" textAnchor="middle" className="fill-foreground text-xs">More blocks added</text>
        <text x="75" y="70" textAnchor="middle" className="fill-green-600 dark:fill-green-400 text-sm font-bold">6+ confirmations ✓✓</text>
      </g>

      {/* Time indicators */}
      <g transform="translate(60, 470)">
        <text x="75" y="0" textAnchor="middle" className="fill-muted-foreground text-xs">
          ~1 hour for 6 confirmations
        </text>
      </g>

      <g transform="translate(280, 470)">
        <text x="75" y="0" textAnchor="middle" className="fill-muted-foreground text-xs">
          ~10 min per block
        </text>
      </g>

      <g transform="translate(500, 470)">
        <text x="140" y="0" textAnchor="middle" className="fill-muted-foreground text-xs">
          Higher fees = faster confirmation
        </text>
      </g>
    </svg>
  );
}

'use client';

import Link from 'next/link';
import { Container } from './Container';
import { ThemeToggle } from '@/components/ui/ThemeToggle';

export function Header() {
  return (
    <header className="border-b border-border bg-card">
      <Container>
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 group">
            <svg
              width="32"
              height="32"
              viewBox="0 0 64 64"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6 6 L6 58 L30 58 Q58 58 58 32 Q58 6 30 6 Z" fill="#F7931A"/>
              <g fill="#fff">
                <path d="M14 12 L14 52 L29 52 Q42 52 42 40 Q42 33 34 31 Q40 29 40 22 Q40 12 27 12 Z M21 18 L27 18 Q33 18 33 22 Q33 27 27 27 L21 27 Z M21 33 L29 33 Q36 33 36 40 Q36 46 29 46 L21 46 Z"/>
              </g>
              <circle cx="48" cy="14" r="5" fill="#fff"/>
            </svg>
            <span className="font-semibold text-lg group-hover:text-bitcoin transition-colors">
              Bitcoin Diagrams
            </span>
            <span className="hidden sm:inline text-sm text-muted-foreground">
              — Bitcoin Explained <span className="text-bitcoin">Visually</span>
            </span>
          </Link>

          <nav className="flex items-center gap-4">
            <Link
              href="/"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Gallery
            </Link>
            <ThemeToggle />
          </nav>
        </div>
      </Container>
    </header>
  );
}

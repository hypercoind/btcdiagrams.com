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
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-bitcoin"
            >
              <circle cx="16" cy="16" r="14" fill="currentColor" />
              <path
                d="M21.5 14.5c.5-2-1-3-3-3.5l.7-2.5-1.5-.4-.6 2.4c-.4-.1-.8-.2-1.2-.3l.6-2.4-1.5-.4-.7 2.5c-.3-.1-.6-.1-1-.2l-2-.5-.5 1.6s1.1.3 1.1.3c.6.1.7.5.7.8l-.8 3c0 0 .1 0 .2 0-.1 0-.1 0-.2 0l-1.1 4.3c-.1.2-.3.5-.8.4 0 0-1.1-.3-1.1-.3l-.7 1.7 1.9.5c.4.1.7.2 1 .3l-.7 2.6 1.5.4.7-2.5c.4.1.8.2 1.2.3l-.7 2.5 1.5.4.7-2.6c2.7.5 4.8.3 5.6-2.1.7-1.9 0-3-1.4-3.7 1-.2 1.8-1 2-2.3zm-3.5 4.9c-.5 1.9-3.8.9-4.9.6l.9-3.5c1.1.3 4.5.8 4 2.9zm.5-5c-.4 1.8-3.2.9-4.1.6l.8-3.1c.9.2 3.8.6 3.3 2.5z"
                fill="white"
              />
            </svg>
            <span className="font-semibold text-lg group-hover:text-bitcoin transition-colors">
              BTCDiagrams
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

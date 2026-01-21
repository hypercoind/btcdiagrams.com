import { Container } from './Container';

export function Footer() {
  return (
    <footer className="border-t border-border bg-card mt-auto">
      <Container>
        <div className="py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            Educational Bitcoin infographics for everyone.
          </p>
          <p className="text-muted-foreground text-sm">
            Made with care for the Bitcoin community.
          </p>
        </div>
      </Container>
    </footer>
  );
}

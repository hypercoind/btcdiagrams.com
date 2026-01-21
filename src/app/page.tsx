import { Container } from '@/components/layout';
import { DiagramGallery } from '@/components/ui/DiagramGallery';
import { DIAGRAMS } from '@/data/diagrams';

export default function HomePage() {
  return (
    <Container className="py-8 sm:py-12">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
          Bitcoin Explained <span className="text-bitcoin">Visually</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Clear, educational infographics that help you understand Bitcoin.
          No jargon, no hype—just simple visual explanations.
        </p>
      </div>

      {/* Gallery */}
      <DiagramGallery diagrams={DIAGRAMS} />
    </Container>
  );
}

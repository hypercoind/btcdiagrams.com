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
      </div>

      {/* Gallery */}
      <DiagramGallery diagrams={DIAGRAMS} />
    </Container>
  );
}

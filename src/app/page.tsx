import { Container } from '@/components/layout';
import { DiagramGallery } from '@/components/ui/DiagramGallery';
import { DIAGRAMS } from '@/data/diagrams';

export default function HomePage() {
  return (
    <Container className="py-8 sm:py-12">
      {/* Gallery */}
      <DiagramGallery diagrams={DIAGRAMS} />
    </Container>
  );
}

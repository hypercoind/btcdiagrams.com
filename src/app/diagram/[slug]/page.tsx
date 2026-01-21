import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Container } from '@/components/layout';
import { DiagramRenderer } from '@/components/ui/DiagramRenderer';
import { DIAGRAMS, getDiagramBySlug, getAllSlugs } from '@/data/diagrams';
import { getCategoryInfo } from '@/lib/types';

interface DiagramPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: DiagramPageProps): Promise<Metadata> {
  const { slug } = await params;
  const diagram = getDiagramBySlug(slug);

  if (!diagram) {
    return {
      title: 'Diagram Not Found - BTCDiagrams',
    };
  }

  return {
    title: `${diagram.title} - BTCDiagrams`,
    description: diagram.description,
    keywords: diagram.keywords,
    openGraph: {
      title: `${diagram.title} - BTCDiagrams`,
      description: diagram.description,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: diagram.title,
      description: diagram.description,
    },
  };
}

export default async function DiagramPage({ params }: DiagramPageProps) {
  const { slug } = await params;
  const diagram = getDiagramBySlug(slug);

  if (!diagram) {
    notFound();
  }

  const categoryInfo = getCategoryInfo(diagram.category);

  // Get prev/next diagrams for navigation
  const currentIndex = DIAGRAMS.findIndex(d => d.slug === slug);
  const prevDiagram = currentIndex > 0 ? DIAGRAMS[currentIndex - 1] : null;
  const nextDiagram = currentIndex < DIAGRAMS.length - 1 ? DIAGRAMS[currentIndex + 1] : null;

  return (
    <Container className="py-8 sm:py-12">
      {/* Breadcrumb */}
      <nav className="mb-6">
        <Link
          href="/"
          className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
          Back to Gallery
        </Link>
      </nav>

      {/* Header */}
      <div className="mb-8">
        <div className="mb-3">
          <span className="inline-block px-3 py-1 text-sm rounded-full bg-accent text-accent-foreground">
            {categoryInfo?.label || diagram.category}
          </span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
          {diagram.title}
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl">
          {diagram.description}
        </p>
      </div>

      {/* Diagram */}
      <div className="mb-12">
        <DiagramRenderer slug={diagram.slug} title={diagram.title} />
      </div>

      {/* Navigation */}
      <div className="flex flex-col sm:flex-row justify-between gap-4 pt-8 border-t border-border">
        {prevDiagram ? (
          <Link
            href={`/diagram/${prevDiagram.slug}`}
            className="group flex items-center gap-3 p-4 rounded-lg bg-muted hover:bg-border transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-muted-foreground group-hover:text-foreground transition-colors"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
            <div>
              <div className="text-xs text-muted-foreground">Previous</div>
              <div className="font-medium text-foreground group-hover:text-bitcoin transition-colors">
                {prevDiagram.title}
              </div>
            </div>
          </Link>
        ) : (
          <div />
        )}

        {nextDiagram ? (
          <Link
            href={`/diagram/${nextDiagram.slug}`}
            className="group flex items-center gap-3 p-4 rounded-lg bg-muted hover:bg-border transition-colors sm:text-right"
          >
            <div>
              <div className="text-xs text-muted-foreground">Next</div>
              <div className="font-medium text-foreground group-hover:text-bitcoin transition-colors">
                {nextDiagram.title}
              </div>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-muted-foreground group-hover:text-foreground transition-colors"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </Link>
        ) : (
          <div />
        )}
      </div>
    </Container>
  );
}

'use client';
import { useState } from 'react';
import Image from 'next/image';
import { PlaceHolderImages, type ImagePlaceholder } from '@/lib/placeholder-images';
import { Card } from '@/components/ui/card';
import { useLanguage } from '@/context/language-context';
import { useMouseSpotlight } from '@/hooks/use-mouse-spotlight';
import { X, ChevronLeft, ChevronRight, Expand } from 'lucide-react';
import PartnersSlider from '@/components/landing/partners-slider';

// Portfolio data — each project has a gallery of images
const portfolioProjects = PlaceHolderImages.slice(0, 4).map((img, index) => {
  const titles = [
    'Analytics Dashboard',
    'Financial Reporting Suite',
    'Invoice Automation',
    'Digital Ledger System',
  ];
  const tags = [
    ['React', 'TypeScript', 'Charts'],
    ['Next.js', 'PDF Export', 'AI'],
    ['Automation', 'REST API', 'Node.js'],
    ['Blockchain', 'Firebase', 'Mobile'],
  ];
  // Generate a gallery: the main image + 3 more from the full list (cycling)
  const galleryImages = [
    img.imageUrl,
    ...PlaceHolderImages.filter((_, i) => i !== index).slice(0, 3).map((x) => x.imageUrl),
  ];
  return {
    ...img,
    title: titles[index],
    tags: tags[index],
    gallery: galleryImages,
  };
});

type Project = (typeof portfolioProjects)[number];

// ─── Lightbox ────────────────────────────────────────────────────────────────
function Lightbox({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const [activeIdx, setActiveIdx] = useState(0);

  const prev = () => setActiveIdx((i) => (i - 1 + project.gallery.length) % project.gallery.length);
  const next = () => setActiveIdx((i) => (i + 1) % project.gallery.length);

  // Close on backdrop click
  const handleBackdrop = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-sm p-4"
      onClick={handleBackdrop}
    >
      <div className="relative flex w-full max-w-5xl flex-col rounded-2xl bg-card border border-border/50 shadow-2xl overflow-hidden animate-fade-in-up">

        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border/40">
          <div>
            <h2 className="font-headline text-xl font-bold">{project.title}</h2>
            <p className="text-sm text-muted-foreground mt-0.5">{project.description}</p>
          </div>
          <button
            onClick={onClose}
            className="rounded-full p-2 hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Main image */}
        <div className="relative w-full aspect-video bg-black">
          <Image
            src={project.gallery[activeIdx]}
            alt={`${project.title} screenshot ${activeIdx + 1}`}
            fill
            className="object-contain"
            priority
          />

          {/* Prev / Next arrows */}
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white hover:bg-black/80 transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white hover:bg-black/80 transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Image counter */}
          <div className="absolute bottom-3 right-4 rounded-full bg-black/60 px-3 py-1 text-xs text-white">
            {activeIdx + 1} / {project.gallery.length}
          </div>
        </div>

        {/* Thumbnails */}
        <div className="flex gap-3 overflow-x-auto px-6 py-4 bg-background/50">
          {project.gallery.map((url, i) => (
            <button
              key={i}
              onClick={() => setActiveIdx(i)}
              className={`relative shrink-0 h-16 w-24 rounded-lg overflow-hidden border-2 transition-colors ${
                i === activeIdx ? 'border-primary' : 'border-transparent hover:border-border'
              }`}
              aria-label={`View image ${i + 1}`}
            >
              <Image src={url} alt={`thumb ${i + 1}`} fill className="object-cover" />
            </button>
          ))}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 px-6 pb-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-primary/10 text-primary border border-primary/20 px-3 py-1 text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Portfolio Section ────────────────────────────────────────────────────────
const PortfolioSection = () => {
  const { t } = useLanguage();
  const spotlightRef = useMouseSpotlight<HTMLElement>();
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <>
      <section ref={spotlightRef} id="portfolio" className="py-20 sm:py-32 spotlight-effect">
        <div className="container">
          <div className="mx-auto text-center mb-12">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              {t('portfolio.title')}
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              {t('portfolio.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 max-w-4xl mx-auto">
            {portfolioProjects.map((project) => (
              <Card
                key={project.id}
                onClick={() => setSelected(project)}
                className="group relative block h-full w-full overflow-hidden rounded-xl cursor-pointer"
              >
                <Image
                  src={project.imageUrl}
                  alt={project.description}
                  width={600}
                  height={400}
                  data-ai-hint={project.imageHint}
                  className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                {/* Hover expand icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="rounded-full bg-white/20 backdrop-blur-sm p-4 border border-white/30">
                    <Expand className="h-7 w-7 text-white" />
                  </div>
                </div>

                <div className="absolute inset-0 flex flex-col items-center justify-end p-6 text-center">
                  <h3 className="font-headline text-2xl font-semibold text-white">{project.title}</h3>
                  <p className="text-sm text-white/80 mb-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-primary/80 text-white px-2 py-0.5 text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Partners slider right below the grid, inside the section */}
        <div className="mt-20">
          <PartnersSlider />
        </div>
      </section>

      {/* Lightbox */}
      {selected && <Lightbox project={selected} onClose={() => setSelected(null)} />}
    </>
  );
};

export default PortfolioSection;

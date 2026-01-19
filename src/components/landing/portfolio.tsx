'use client';
import Image from 'next/image';
import { PlaceHolderImages, type ImagePlaceholder } from '@/lib/placeholder-images';
import { Card } from '@/components/ui/card';
import { useLanguage } from '@/context/language-context';

const portfolioProjects = PlaceHolderImages.slice(0, 4).map((img, index) => ({
  ...img,
  title: `Accounting System ${index + 1}`,
}));

const PortfolioSection = () => {
  const { t } = useLanguage();
  return (
    <section id="portfolio" className="py-20 sm:py-32">
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
          {portfolioProjects.map((project: ImagePlaceholder & { title: string }) => (
            <Card key={project.id} className="group relative block h-full w-full overflow-hidden rounded-xl">
              <Image
                src={project.imageUrl}
                alt={project.description}
                width={600}
                height={400}
                data-ai-hint={project.imageHint}
                className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-end p-6 text-center">
                <h3 className="font-headline text-2xl font-semibold text-white">{project.title}</h3>
                <p className="text-sm text-white/80">{project.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;

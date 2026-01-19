'use client';
import { Code, BrainCircuit } from 'lucide-react';
import { useLanguage } from '@/context/language-context';

const WhyCodeouraSection = () => {
  const { t } = useLanguage();
  
  const features = [
    {
      icon: <Code className="h-8 w-8 text-primary" />,
      title: t('whyUs.engineering.title'),
      description: t('whyUs.engineering.description'),
    },
    {
      icon: <BrainCircuit className="h-8 w-8 text-primary" />,
      title: t('whyUs.ai.title'),
      description: t('whyUs.ai.description'),
    },
  ];

  return (
    <section id="why-us" className="bg-secondary py-20 sm:py-32">
      <div className="container">
        <div className="mx-auto text-center mb-12">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            {t('whyUs.title')}
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            {t('whyUs.subtitle')}
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center gap-4 text-center p-6 rounded-lg">
                <div className="rounded-full bg-primary/10 p-4 mb-2">
                    {feature.icon}
                </div>
                <h3 className="font-headline text-2xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground text-base">
                {feature.description}
                </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyCodeouraSection;

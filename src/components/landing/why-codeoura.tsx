import { Code, BrainCircuit } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const features = [
  {
    icon: <Code className="h-8 w-8 text-primary" />,
    title: 'Engineering-First Approach',
    description: 'We prioritize clean, scalable, and maintainable code. Our solutions are built on solid architectural foundations, ensuring long-term reliability and performance. We don\'t just build features; we engineer products.',
  },
  {
    icon: <BrainCircuit className="h-8 w-8 text-primary" />,
    title: 'AI-Powered Integration',
    description: 'Leverage the power of artificial intelligence to unlock new capabilities. From predictive analytics in financial software to intelligent automation, we integrate cutting-edge AI to give your business a competitive edge.',
  },
];

const WhyCodeouraSection = () => {
  return (
    <section id="why-us" className="bg-secondary py-20 sm:py-32">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            The Codeoura Difference
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            More than just developers. We are your dedicated technology partners.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
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

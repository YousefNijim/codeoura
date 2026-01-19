import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Logo from '@/components/logo';

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative flex min-h-[calc(100vh-3.5rem)] w-full flex-col items-center justify-center bg-background"
    >
      <div className="absolute inset-0 z-0 bg-grid-pattern bg-center [mask-image:linear-gradient(to_bottom,white_20%,transparent_100%)]"></div>
      <div className="container z-10 flex flex-col items-center justify-center gap-8 text-center">
        <div className="animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
          <Logo className="h-auto w-64" />
        </div>
        <h1
          className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl animate-fade-in-up"
          style={{ animationDelay: '0.4s', animationFillMode: 'both' }}
        >
          Smart code. Real growth.
        </h1>
        <p
          className="max-w-[700px] text-lg text-muted-foreground md:text-xl animate-fade-in-up"
          style={{ animationDelay: '0.6s', animationFillMode: 'both' }}
        >
          We build high-performance software solutions that scale your business. From custom web applications to AI-powered accounting systems, we are your engineering partners.
        </p>
        <div
          className="flex gap-4 animate-fade-in-up"
          style={{ animationDelay: '0.8s', animationFillMode: 'both' }}
        >
          <Button asChild size="lg">
            <Link href="#contact">Get Started</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="#portfolio">View Our Work</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

// Add this to your globals.css to define the pattern if not already there
// @tailwind base;
// @tailwind components;
// @tailwind utilities;
//
// @layer base {
//   body.dark {
//     --grid-color: hsl(var(--border) / 0.5);
//     .bg-grid-pattern {
//       background-image: linear-gradient(to right, var(--grid-color) 1px, transparent 1px),
//                         linear-gradient(to bottom, var(--grid-color) 1px, transparent 1px);
//       background-size: 40px 40px;
//     }
//   }
//   body {
//     --grid-color: hsl(var(--border));
//      .bg-grid-pattern {
//       background-image: linear-gradient(to right, var(--grid-color) 1px, transparent 1px),
//                         linear-gradient(to bottom, var(--grid-color) 1px, transparent 1px);
//       background-size: 40px 40px;
//     }
//   }
// }

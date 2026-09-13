import { cn } from '@/lib/utils';

export type AnimName =
  | 'fadeInUp'
  | 'fadeInDown'
  | 'fadeInLeft'
  | 'fadeInRight'
  | 'scaleIn'
  | 'zoomIn'
  | 'fadeInScale'
  | 'rotateIn'
  | 'slideInUp'
  | 'slideInLeft'
  | 'slideInRight'
  | 'bounceIn'
  | 'flipIn';

/**
 * Marks an element for the page-wide reveal observer.
 *
 * Server-rendered: the markup carries the class and the data attributes, and
 * the one client observer picks it up. Nothing about the entrance costs a
 * component boundary.
 */
export function animate(name: AnimName, seq = 0) {
  return {
    className: `animated anim-${name}`,
    'data-anim': name,
    'data-seq': String(seq),
  } as const;
}

export function Animate({
  name,
  seq = 0,
  as: Tag = 'div',
  className,
  children,
}: {
  name: AnimName;
  seq?: number;
  as?: 'div' | 'li' | 'section' | 'article' | 'p' | 'h1' | 'h2' | 'h3' | 'span';
  className?: string;
  children: React.ReactNode;
}) {
  const props = animate(name, seq);
  return (
    <Tag
      className={cn(props.className, className)}
      data-anim={props['data-anim']}
      data-seq={props['data-seq']}
    >
      {children}
    </Tag>
  );
}

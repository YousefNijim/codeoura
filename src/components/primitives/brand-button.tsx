import { cn } from '@/lib/utils';

/**
 * The one filled button on a screen.
 *
 * Carries the brand gradient and a double shadow. Deliberately the only
 * element on the page allowed this treatment: a second one halves the pull of
 * the first.
 */
const shell =
  'inline-flex shrink-0 items-center justify-center gap-2 rounded-full border border-white/15 bg-gradient-brand font-medium text-white transition-transform duration-300 hover:-translate-y-0.5 focus-visible:outline-offset-4';

const sizes = {
  lg: 'h-[52px] px-6 text-base lg:text-lg',
  md: 'h-11 px-5 text-sm',
} as const;

const shadow = {
  boxShadow:
    '0 16px 33px rgba(0, 191, 119, 0.18), 0 38px 33px rgba(39, 205, 39, 0.10)',
};

export function brandButtonClass(size: keyof typeof sizes = 'lg') {
  return cn(shell, sizes[size]);
}

export function BrandButton({
  className,
  size = 'lg',
  children,
  ...props
}: React.ComponentProps<'a'> & { size?: keyof typeof sizes }) {
  return (
    <a className={cn(brandButtonClass(size), className)} style={shadow} {...props}>
      {children}
    </a>
  );
}

export const brandButtonShadow = shadow;

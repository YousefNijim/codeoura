import * as React from 'react';

import { cn } from '@/lib/utils';

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<'textarea'>
>(({ className, ...props }, ref) => (
  <textarea
    ref={ref}
    className={cn(
      'flex min-h-32 w-full resize-y rounded-xl border border-input bg-background/50 px-4 py-3 text-sm',
      'transition-colors placeholder:text-muted-foreground/70',
      'hover:border-foreground/20 focus:border-primary/60 focus:bg-background',
      'disabled:cursor-not-allowed disabled:opacity-50',
      'aria-invalid:border-destructive',
      className,
    )}
    {...props}
  />
));
Textarea.displayName = 'Textarea';

export { Textarea };

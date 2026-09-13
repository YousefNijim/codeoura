import Image from 'next/image';

import { asset } from '@/lib/asset';
import { cn } from '@/lib/utils';
import { company } from '@/content/company';

/** Intrinsic aspect ratio of public/brand/mark-color.png (640 x 358). */
const LOGO_RATIO = 640 / 358;

export function Logo({
  className,
  showWordmark = true,
  size = 32,
  dark = false,
}: {
  className?: string;
  showWordmark?: boolean;
  size?: number;
  /** Forces the wordmark light, for use inside the always-dark nav shell. */
  dark?: boolean;
}) {
  return (
    <span className={cn('inline-flex items-center gap-2.5', className)}>
      <Image
        src={asset('/brand/mark-color.png')}
        alt=""
        width={Math.round(size * LOGO_RATIO)}
        height={size}
        priority
        sizes={`${Math.round(size * LOGO_RATIO)}px`}
      />
      {showWordmark && (
        <span
          className={cn(
            'text-[15px] font-semibold tracking-tight',
            dark && 'text-nav-ink',
          )}
        >
          {company.name}
        </span>
      )}
      <span className="sr-only">{company.name}</span>
    </span>
  );
}

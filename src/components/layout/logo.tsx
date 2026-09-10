import Image from 'next/image';

import { cn } from '@/lib/utils';
import { company } from '@/content/company';

/** Intrinsic aspect ratio of public/logo.png (868 x 748). */
const LOGO_RATIO = 868 / 748;

export function Logo({
  className,
  showWordmark = true,
  size = 32,
}: {
  className?: string;
  showWordmark?: boolean;
  size?: number;
}) {
  return (
    <span className={cn('inline-flex items-center gap-2.5', className)}>
      <Image
        src="/logo.png"
        alt=""
        width={Math.round(size * LOGO_RATIO)}
        height={size}
        priority
        sizes={`${Math.round(size * LOGO_RATIO)}px`}
      />
      {showWordmark && (
        <span className="text-[15px] font-semibold tracking-tight">
          {company.name}
        </span>
      )}
      <span className="sr-only">{company.name}</span>
    </span>
  );
}

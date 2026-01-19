'use client';

import { useLanguage } from '@/context/language-context';
import { Button } from '@/components/ui/button';
import { Languages } from 'lucide-react';

export function LanguageSwitcher() {
  const { toggleLanguage, t } = useLanguage();

  return (
    <Button variant="ghost" size="icon" onClick={toggleLanguage} aria-label={t('header.toggleLanguage')}>
      <Languages className="h-5 w-5" />
    </Button>
  );
}

'use client';

import { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import en from '@/locales/en.json';
import ar from '@/locales/ar.json';

type Language = 'en' | 'ar';

const translations: Record<Language, any> = { en, ar };

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
  dir: 'ltr' | 'rtl';
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const newDir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
    document.documentElement.dir = newDir;
    
    document.body.className = `font-body bg-background text-foreground antialiased ${language === 'ar' ? 'font-arabic' : ''}`;

  }, [language]);
  
  const toggleLanguage = () => {
      setLanguage(prev => prev === 'en' ? 'ar' : 'en');
  }

  const t = (key: string): string => {
    const keys = key.split('.');
    let result = translations[language];
    for (const k of keys) {
      result = result?.[k];
      if (result === undefined) {
        console.warn(`Translation key "${key}" not found for language "${language}"`);
        return key;
      }
    }
    return result as string;
  };

  const value = {
    language,
    toggleLanguage,
    t,
    dir: language === 'ar' ? 'rtl' : 'ltr',
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

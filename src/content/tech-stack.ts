import type { Localized, TechItem } from './types';

export const techCategories: {
  id: TechItem['category'];
  label: Localized;
}[] = [
  { id: 'frontend', label: { en: 'Frontend', ar: 'الواجهة' } },
  { id: 'backend', label: { en: 'Backend', ar: 'الخلفية' } },
  { id: 'mobile', label: { en: 'Mobile', ar: 'الموبايل' } },
  { id: 'data', label: { en: 'Data', ar: 'البيانات' } },
  { id: 'infra', label: { en: 'Infrastructure', ar: 'البنية التحتية' } },
  { id: 'ai', label: { en: 'AI', ar: 'الذكاء الاصطناعي' } },
];

export const techStack: TechItem[] = [
  { name: 'Next.js', category: 'frontend' },
  { name: 'React', category: 'frontend' },
  { name: 'TypeScript', category: 'frontend' },
  { name: 'Tailwind CSS', category: 'frontend' },

  { name: 'NestJS', category: 'backend' },
  { name: 'Node.js', category: 'backend' },
  { name: 'GraphQL', category: 'backend' },
  { name: 'tRPC', category: 'backend' },

  { name: 'React Native', category: 'mobile' },
  { name: 'Flutter', category: 'mobile' },
  { name: 'Expo', category: 'mobile' },

  { name: 'PostgreSQL', category: 'data' },
  { name: 'Prisma', category: 'data' },
  { name: 'Supabase', category: 'data' },
  { name: 'Redis', category: 'data' },

  { name: 'AWS', category: 'infra' },
  { name: 'Docker', category: 'infra' },
  { name: 'Vercel', category: 'infra' },
  { name: 'GitHub Actions', category: 'infra' },

  { name: 'OpenAI', category: 'ai' },
  { name: 'Anthropic', category: 'ai' },
  { name: 'pgvector', category: 'ai' },
];

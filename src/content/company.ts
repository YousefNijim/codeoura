import type { Localized } from './types';

/**
 * Company facts and links.
 *
 * TODO(codeoura): replace the placeholder contact details and social URLs below
 * with the real ones. They are the only invented values in the content layer.
 */
export const company = {
  name: 'Codeoura',
  legalName: 'Codeoura',
  tagline: { en: 'Smart code. Real growth.', ar: 'كود ذكي. نمو حقيقي.' } satisfies Localized,
  url: 'https://codeoura.com',
  email: 'hello@codeoura.com',
  phone: '',
  founded: 2024,
  social: {
    github: 'https://github.com/YousefNijim',
    linkedin: '',
    x: '',
    instagram: '',
  },
} as const;

export const navigation: { href: string; label: Localized }[] = [
  { href: '/#services', label: { en: 'Services', ar: 'الخدمات' } },
  { href: '/work', label: { en: 'Work', ar: 'أعمالنا' } },
  { href: '/#stack', label: { en: 'Stack', ar: 'التقنيات' } },
  { href: '/#about', label: { en: 'About', ar: 'من نحن' } },
  { href: '/#contact', label: { en: 'Contact', ar: 'تواصل' } },
];

export const principles: {
  icon: string;
  title: Localized;
  description: Localized;
}[] = [
  {
    icon: 'Compass',
    title: { en: 'Architecture before code', ar: 'المعمار قبل الكود' },
    description: {
      en: 'We determine how data flows through the system and where its boundaries lie before development begins. A sound architectural foundation is what allows a platform to evolve over years without accumulating cost with every change.',
      ar: 'نحدّد كيف تتدفق البيانات داخل النظام وأين تقع حدوده قبل أن يبدأ التطوير. الأساس المعماري السليم هو ما يتيح للمنصة أن تتطوّر على مدى سنوات دون أن تتراكم كلفتها مع كل تغيير.',
    },
  },
  {
    icon: 'Gauge',
    title: { en: 'Performance as a standing commitment', ar: 'الأداء التزام دائم' },
    description: {
      en: 'Performance targets are defined at the start of the engagement and enforced automatically on every change, so the system remains as responsive in its third year as it was on the day it launched.',
      ar: 'تُحدَّد أهداف الأداء مع بداية المشروع وتُفرَض آلياً عند كل تغيير، ليبقى النظام في عامه الثالث بالاستجابة نفسها التي كان عليها يوم إطلاقه.',
    },
  },
  {
    icon: 'ShieldCheck',
    title: { en: 'A single source of truth', ar: 'مصدر واحد للحقيقة' },
    description: {
      en: 'One schema governs the database, the API and the interface alike. Any inconsistency is caught by the build before it reaches your users, which is what makes data integrity a property of the system rather than a matter of vigilance.',
      ar: 'سكيما واحدة تحكم قاعدة البيانات وواجهة البرمجة والواجهة الأمامية على حد سواء. يلتقط البناء أي تعارض قبل أن يصل إلى مستخدميكم، وبهذا تصبح سلامة البيانات خاصية في النظام لا مسألة يقظة.',
    },
  },
  {
    icon: 'Repeat',
    title: { en: 'Delivered ready to own', ar: 'تسليم جاهز للتملّك' },
    description: {
      en: 'We deliver readable code, documented technical decisions and reproducible environments, so your team holds full ownership of the system and is free to develop it with us or independently.',
      ar: 'نسلّم كوداً مقروءاً، وقرارات تقنية موثَّقة، وبيئات قابلة لإعادة الإنتاج، بحيث يمتلك فريقكم النظام ملكية كاملة ويبقى حراً في تطويره معنا أو بمفرده.',
    },
  },
];

export const processSteps: {
  title: Localized;
  description: Localized;
}[] = [
  {
    title: { en: 'Discovery', ar: 'الاستكشاف' },
    description: {
      en: 'We study the business domain, its constraints and its priorities, and agree with you on the scope and objectives of the system.',
      ar: 'ندرس مجال العمل وقيوده وأولوياته، ونتفق معكم على نطاق النظام وأهدافه.',
    },
  },
  {
    title: { en: 'Architecture', ar: 'المعمار' },
    description: {
      en: 'The data model, system boundaries and deployment architecture are documented and approved before development begins.',
      ar: 'يُوثَّق نموذج البيانات وحدود النظام ومعمارية النشر ويُعتمد قبل بدء التطوير.',
    },
  },
  {
    title: { en: 'Build', ar: 'البناء' },
    description: {
      en: 'Development proceeds in short iterations against a live environment, with a working version available for your review at every stage.',
      ar: 'يجري التطوير في دورات قصيرة على بيئة حيّة، مع توافر نسخة عاملة لمراجعتكم في كل مرحلة.',
    },
  },
  {
    title: { en: 'Handover', ar: 'التسليم' },
    description: {
      en: 'Complete documentation, reproducible environments and a technical walkthrough with the team that will operate the system.',
      ar: 'توثيق كامل، وبيئات قابلة لإعادة الإنتاج، وجلسة شرح تقنية مع الفريق الذي سيتولّى تشغيل النظام.',
    },
  },
];

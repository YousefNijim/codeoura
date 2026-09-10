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
      en: 'We decide how data flows and where the boundaries sit before writing a component. Most production incidents are architectural decisions arriving late.',
      ar: 'نقرر كيف تتدفق البيانات وأين تقع الحدود قبل كتابة أي مكوّن. معظم حوادث الإنتاج قرارات معمارية وصلت متأخرة.',
    },
  },
  {
    icon: 'Gauge',
    title: { en: 'Performance is a feature', ar: 'الأداء ميزة' },
    description: {
      en: 'Budgets are set at the start and enforced in CI. A page that loses its speed six months in has lost a feature, and nobody filed the ticket.',
      ar: 'نضع ميزانيات الأداء من البداية ونفرضها في التكامل المستمر. الصفحة التي تفقد سرعتها بعد ستة أشهر فقدت ميزة، ولم يفتح أحد تذكرة بذلك.',
    },
  },
  {
    icon: 'ShieldCheck',
    title: { en: 'Typed end to end', ar: 'أنواع من طرف إلى طرف' },
    description: {
      en: 'One schema, shared by the database, the API and the form. If the contract changes, the build fails — long before a user does.',
      ar: 'سكيما واحدة تتشاركها قاعدة البيانات وواجهة البرمجة والنموذج. إذا تغيّر العقد يفشل البناء — قبل أن يفشل المستخدم بوقت طويل.',
    },
  },
  {
    icon: 'Repeat',
    title: { en: 'Built to be handed over', ar: 'مبني ليُسلَّم' },
    description: {
      en: 'Readable code, documented decisions and reproducible environments. You should never be locked in by the shape of your own codebase.',
      ar: 'كود مقروء، وقرارات موثَّقة، وبيئات قابلة لإعادة الإنتاج. يجب ألا تكون أسير شكل قاعدة الكود الخاصة بك.',
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
      en: 'We map the domain, the constraints and the actual bottleneck — which is rarely the one described in the brief.',
      ar: 'نرسم المجال والقيود والاختناق الحقيقي — الذي نادراً ما يكون المذكور في الطلب.',
    },
  },
  {
    title: { en: 'Architecture', ar: 'المعمار' },
    description: {
      en: 'Data model, boundaries and the deployment shape are agreed before implementation starts.',
      ar: 'يُتَّفق على نموذج البيانات والحدود وشكل النشر قبل بدء التنفيذ.',
    },
  },
  {
    title: { en: 'Build', ar: 'البناء' },
    description: {
      en: 'Short iterations against a working deployment. You see the real thing, not a slide about it.',
      ar: 'دورات قصيرة على نشر فعلي. ترى الشيء الحقيقي، لا شريحة عنه.',
    },
  },
  {
    title: { en: 'Handover', ar: 'التسليم' },
    description: {
      en: 'Documentation, environment reproducibility and a codebase your next engineer can read.',
      ar: 'توثيق، وبيئات قابلة لإعادة الإنتاج، وقاعدة كود يستطيع مهندسك التالي قراءتها.',
    },
  },
];

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
      en: 'We decide how data flows and where the boundaries sit before anyone writes a component. Almost every production incident we have seen is an architectural decision that arrived late — after the shape was already expensive to change.',
      ar: 'نقرر كيف تتدفق البيانات وأين تقع الحدود قبل أن يكتب أحد أي مكوّن. كل حادثة إنتاج رأيناها تقريباً كانت قراراً معمارياً وصل متأخراً — بعد أن صار تغيير الشكل مكلفاً.',
    },
  },
  {
    icon: 'Gauge',
    title: { en: 'Speed is a feature that expires', ar: 'السرعة ميزة لها تاريخ انتهاء' },
    description: {
      en: 'A page that was fast at launch and slow six months later has lost a feature, and nobody filed a ticket for it. So the budget is set on day one and enforced by the pipeline: a change that crosses it does not merge.',
      ar: 'الصفحة التي كانت سريعة عند الإطلاق وبطيئة بعد ستة أشهر فقدت ميزة، ولم يفتح أحد تذكرة بذلك. لذلك تُحدَّد الميزانية من اليوم الأول ويفرضها خط النشر: التغيير الذي يتجاوزها لا يُدمج.',
    },
  },
  {
    icon: 'ShieldCheck',
    title: { en: 'One contract, checked by the build', ar: 'عقد واحد يفحصه البناء' },
    description: {
      en: 'One schema, shared by the database, the API and the form the customer fills in. Change the contract on one side and the build fails — which is a far better place to find out than a support ticket from someone whose order vanished.',
      ar: 'سكيما واحدة تتشاركها قاعدة البيانات وواجهة البرمجة والنموذج الذي يملؤه العميل. غيّر العقد في طرف فيفشل البناء — وهذا مكان أفضل بكثير لاكتشاف الخطأ من تذكرة دعم من شخص اختفى طلبه.',
    },
  },
  {
    icon: 'Repeat',
    title: { en: 'Built to be handed over', ar: 'مبني ليُسلَّم' },
    description: {
      en: 'Readable code, decisions written down where the next engineer will look for them, and an environment that comes up from a clean machine. You should never be held in place by the shape of your own codebase — including by us.',
      ar: 'كود مقروء، وقرارات مكتوبة حيث سيبحث عنها المهندس التالي، وبيئة تقوم من جهاز نظيف. يجب ألّا يُبقيك شكل قاعدة الكود الخاصة بك في مكانك — ولا نحن أنفسنا.',
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
      en: 'We map the domain, the constraints and the real bottleneck — which is rarely the one described in the brief.',
      ar: 'نرسم المجال والقيود والاختناق الحقيقي — الذي نادراً ما يكون المذكور في الطلب.',
    },
  },
  {
    title: { en: 'Architecture', ar: 'المعمار' },
    description: {
      en: 'The data model, the boundaries and the deployment shape are agreed in writing before a line is written.',
      ar: 'يُتَّفق كتابةً على نموذج البيانات والحدود وشكل النشر قبل كتابة أي سطر.',
    },
  },
  {
    title: { en: 'Build', ar: 'البناء' },
    description: {
      en: 'Short iterations against a live deployment. You click the real thing every week, not a slide about it.',
      ar: 'دورات قصيرة على نشر حيّ. تضغط على الشيء الحقيقي كل أسبوع، لا على شريحة عنه.',
    },
  },
  {
    title: { en: 'Handover', ar: 'التسليم' },
    description: {
      en: 'Documentation, reproducible environments, and a walkthrough with whoever inherits it.',
      ar: 'توثيق، وبيئات قابلة لإعادة الإنتاج، وجولة شرح مع من سيرثه.',
    },
  },
];

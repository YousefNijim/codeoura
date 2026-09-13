import type { Localized } from './types';

/**
 * Statements that run in the two marquee rows.
 *
 * These are outcomes taken from the case studies, attributed to the project
 * that produced them. They are deliberately NOT client testimonials: we hold
 * no signed quotes, and inventing named people to praise the studio would be
 * fabricated evidence on a page a real buyer makes a real decision from.
 *
 * To switch to genuine testimonials later, keep the shape and replace `source`
 * with the person and `role` with their title — the section renders either.
 */
export type Outcome = {
  id: string;
  quote: Localized;
  /** Project name, or a person's name once real quotes exist. */
  source: Localized;
  /** Sector, or a job title once real quotes exist. */
  role: Localized;
  row: 1 | 2;
};

export const outcomes: Outcome[] = [
  {
    id: 'glamora-catalogue',
    quote: {
      en: 'One catalogue behind a store, an app and an admin console. A price is entered once.',
      ar: 'كتالوج واحد خلف متجر وتطبيق ولوحة إدارة. السعر يُدخَل مرة.',
    },
    source: { en: 'Glamora', ar: 'جلامورا' },
    role: { en: 'E-commerce', ar: 'تجارة إلكترونية' },
    row: 1,
  },
  {
    id: 'couponak-stock',
    quote: {
      en: 'Stock and transfers across branches, reconciled to one figure finance can close on.',
      ar: 'مخزون وتحويلات عبر الفروع، مطابَقة إلى رقم واحد تُقفل عليه المالية.',
    },
    source: { en: 'Couponak', ar: 'كوبونك' },
    role: { en: 'Inventory management', ar: 'إدارة مخزون' },
    row: 1,
  },
  {
    id: 'aber-custody',
    quote: {
      en: 'Custody proven by scan, money held in escrow until it is. Trust is no longer required.',
      ar: 'عهدة تُثبَت بالمسح، والمال محجوز حتى تُثبَت. لم تعد الثقة شرطاً.',
    },
    source: { en: 'Aber', ar: 'عابر' },
    role: { en: 'Logistics', ar: 'لوجستيات' },
    row: 1,
  },
  {
    id: 'firuze-floor',
    quote: {
      en: 'Twenty-three models: orders, tables, staff, takings. Money at exact precision throughout.',
      ar: '٢٣ نموذج بيانات: طلبات وطاولات وموظفون وحصيلة. والمال بدقة تامة.',
    },
    source: { en: 'Firuze', ar: 'فيروز' },
    role: { en: 'Hospitality', ar: 'ضيافة' },
    row: 1,
  },
  {
    id: 'cleveland-access',
    quote: {
      en: 'Records, documents and billing separated by role. Each person sees only their work.',
      ar: 'سجلات ومستندات وفوترة مفصولة حسب الدور. كلٌّ يرى عمله فقط.',
    },
    source: { en: 'Cleveland Medicals', ar: 'كليفلاند ميديكالز' },
    role: { en: 'Healthcare', ar: 'رعاية صحية' },
    row: 2,
  },
  {
    id: 'babunec-inventory',
    quote: {
      en: 'Discovery, availability and booking, with a back office that answers what is left.',
      ar: 'اكتشاف وتوفّر وحجز، مع مكتب خلفي يجيب عمّا تبقّى.',
    },
    source: { en: 'Babunec Travel', ar: 'بابونيك للسفر' },
    role: { en: 'Travel', ar: 'سفر' },
    row: 2,
  },
  {
    id: 'cafe-speed',
    quote: {
      en: 'Bilingual, instant on a weak connection, updated without touching code.',
      ar: 'واجهة طلبات ثنائية اللغة، فورية على اتصال ضعيف، تُحدَّث دون لمس الكود.',
    },
    source: { en: 'Cafe Albaraa', ar: 'كافيه البراء' },
    role: { en: 'Food service', ar: 'خدمات غذائية' },
    row: 2,
  },
  {
    id: 'demos-open',
    quote: {
      en: 'Every system here has an open demonstration. Use one before you speak to us.',
      ar: 'كل نظام هنا له نسخة مفتوحة. استخدم واحدة قبل أن تكلّمنا.',
    },
    source: { en: 'Codeoura', ar: 'كوديورا' },
    role: { en: 'Seven live demonstrations', ar: 'سبع نسخ تجريبية' },
    row: 2,
  },
];

export const outcomeRows = {
  first: outcomes.filter((outcome) => outcome.row === 1),
  second: outcomes.filter((outcome) => outcome.row === 2),
};

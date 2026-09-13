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
      en: 'One catalogue behind a storefront, a mobile app and an admin console. A price is entered once and is correct in all three.',
      ar: 'كتالوج واحد خلف متجر وتطبيق موبايل ولوحة إدارة. يُدخَل السعر مرة ويكون صحيحاً في الثلاثة.',
    },
    source: { en: 'Glamora', ar: 'جلامورا' },
    role: { en: 'E-commerce', ar: 'تجارة إلكترونية' },
    row: 1,
  },
  {
    id: 'couponak-stock',
    quote: {
      en: 'Stock, transfers and purchase orders across branches, reconciled to a single figure the finance side can close on.',
      ar: 'مخزون وتحويلات وأوامر شراء عبر الفروع، مطابَقة إلى رقم واحد تستطيع المالية الإقفال عليه.',
    },
    source: { en: 'Couponak', ar: 'كوبونك' },
    role: { en: 'Inventory management', ar: 'إدارة مخزون' },
    row: 1,
  },
  {
    id: 'aber-custody',
    quote: {
      en: 'Custody proven by scan at handover and release, with the money held in escrow until it is. Trust became a property of the system.',
      ar: 'عهدة تُثبَت بالمسح عند التسليم والاستلام، والمال محجوز حتى تُثبَت. صارت الثقة خاصية في النظام.',
    },
    source: { en: 'Aber', ar: 'عابر' },
    role: { en: 'Logistics', ar: 'لوجستيات' },
    row: 1,
  },
  {
    id: 'firuze-floor',
    quote: {
      en: 'Twenty-three data models covering orders, tables, staff and daily takings, with money handled at exact precision throughout.',
      ar: 'ثلاثة وعشرون نموذج بيانات تغطي الطلبات والطاولات والموظفين والحصيلة اليومية، والمال بدقة تامة في كل المسارات.',
    },
    source: { en: 'Firuze', ar: 'فيروز' },
    role: { en: 'Hospitality', ar: 'ضيافة' },
    row: 1,
  },
  {
    id: 'cleveland-access',
    quote: {
      en: 'Clinical records, document storage and billing, separated by role so each member of staff sees only what their work requires.',
      ar: 'سجلات سريرية وتخزين مستندات وفوترة، مفصولة حسب الدور فلا يرى الموظف إلا ما يقتضيه عمله.',
    },
    source: { en: 'Cleveland Medicals', ar: 'كليفلاند ميديكالز' },
    role: { en: 'Healthcare', ar: 'رعاية صحية' },
    row: 2,
  },
  {
    id: 'babunec-inventory',
    quote: {
      en: 'Package discovery, availability and booking, with an operator back office that answers what is left and at what price.',
      ar: 'اكتشاف الباقات والتوفّر والحجز، مع مكتب خلفي يجيب عمّا تبقّى وبأي سعر.',
    },
    source: { en: 'Babunec Travel', ar: 'بابونيك للسفر' },
    role: { en: 'Travel', ar: 'سفر' },
    row: 2,
  },
  {
    id: 'cafe-speed',
    quote: {
      en: 'A bilingual ordering front that opens instantly on a weak mobile connection and is updated without touching code.',
      ar: 'واجهة طلبات ثنائية اللغة تفتح فوراً على اتصال موبايل ضعيف وتُحدَّث دون لمس الكود.',
    },
    source: { en: 'Cafe Albaraa', ar: 'كافيه البراء' },
    role: { en: 'Food service', ar: 'خدمات غذائية' },
    row: 2,
  },
  {
    id: 'demos-open',
    quote: {
      en: 'Every system on this page has a running demonstration on illustrative data. Open one and use it before you speak to us.',
      ar: 'كل نظام في هذه الصفحة له نسخة تجريبية تعمل على بيانات توضيحية. افتح واحدة واستخدمها قبل أن تكلّمنا.',
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

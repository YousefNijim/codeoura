import type { Localized } from './types';

/**
 * Audience routes.
 *
 * The catalogue asks the visitor to work out which of seven systems resembles
 * their problem. These tracks do that for them. A system appears on both
 * routes where it genuinely serves both, framed each time for its reader.
 */
export type PathStep = {
  /** The question the visitor is asking themselves at this stage. */
  eyebrow: Localized;
  /** Slug from `projects`, so a step can never name a system we do not have. */
  projectSlug: string;
  description: Localized;
};

export type PathTrack = {
  id: string;
  persona: Localized;
  title: Localized;
  intro: Localized;
  steps: PathStep[];
};

export const pathTracks: PathTrack[] = [
  {
    id: 'merchant',
    persona: { en: 'Do you sell to customers?', ar: 'تبيع لعملاء؟' },
    title: {
      en: 'From a storefront to an operation',
      ar: 'من متجر إلى عملية متكاملة',
    },
    intro: {
      en: 'Retail, food and hospitality. The needs arrive in this order.',
      ar: 'تجزئة وأغذية وضيافة. الحاجات تصل بهذا الترتيب.',
    },
    steps: [
      {
        eyebrow: { en: 'Sell online', ar: 'تبيع أونلاين' },
        projectSlug: 'glamora',
        description: {
          en: 'Store, app and admin over one catalogue. A price is entered once.',
          ar: 'متجر وتطبيق ولوحة إدارة فوق كتالوج واحد. السعر يُدخَل مرة.',
        },
      },
      {
        eyebrow: { en: 'More than one branch', ar: 'أكثر من فرع' },
        projectSlug: 'couponak',
        description: {
          en: 'Stock, transfers and purchase orders. One figure you can trust.',
          ar: 'مخزون وتحويلات وأوامر شراء. رقم واحد موثوق.',
        },
      },
      {
        eyebrow: { en: 'Customers on site', ar: 'زبائن في المكان' },
        projectSlug: 'firuze',
        description: {
          en: 'Orders, tables, staff and the day’s takings in one system.',
          ar: 'طلبات وطاولات وموظفون وحصيلة اليوم في نظام واحد.',
        },
      },
      {
        eyebrow: { en: 'Deliveries to handle', ar: 'طلبات تحتاج توصيلاً' },
        projectSlug: 'aber',
        description: {
          en: 'Escrow and scan-verified custody. Nothing rides on trust.',
          ar: 'ضمان مالي وعهدة موثّقة بالمسح. لا شيء يقوم على الثقة.',
        },
      },
    ],
  },
  {
    id: 'operator',
    persona: { en: 'Do you run an institution?', ar: 'تدير مؤسسة؟' },
    title: {
      en: 'From scattered records to one picture',
      ar: 'من سجلات متفرّقة إلى صورة واحدة',
    },
    intro: {
      en: 'Clinics, agencies, service operations. The data exists. It does not agree.',
      ar: 'عيادات ووكالات وعمليات خدمية. البيانات موجودة. لكنها لا تتّفق.',
    },
    steps: [
      {
        eyebrow: { en: 'Sensitive records', ar: 'سجلات حسّاسة' },
        projectSlug: 'cleveland-medicals',
        description: {
          en: 'Files, documents and billing, separated by role.',
          ar: 'ملفات ومستندات وفوترة، مفصولة حسب الدور.',
        },
      },
      {
        eyebrow: { en: 'An inventory of dates', ar: 'مخزون من المواعيد' },
        projectSlug: 'babunec',
        description: {
          en: 'Availability, pricing windows, reservations. What is left, at what price.',
          ar: 'التوفّر ونوافذ التسعير والحجوزات. ما تبقّى، وبأي سعر.',
        },
      },
      {
        eyebrow: { en: 'Numbers that must reconcile', ar: 'أرقام يجب أن تتطابق' },
        projectSlug: 'couponak',
        description: {
          en: 'The same engine from the finance side. Movements, valuation, closing.',
          ar: 'المحرّك نفسه من جهة المالية. حركات وتقييم وإقفال.',
        },
      },
      {
        eyebrow: { en: 'A presence that loads', ar: 'حضور يفتح بسرعة' },
        projectSlug: 'cafe-albaraa',
        description: {
          en: 'Bilingual, instant on a weak connection, updated without a developer.',
          ar: 'ثنائي اللغة، فوري على اتصال ضعيف، يُحدَّث دون مطوّر.',
        },
      },
    ],
  },
];

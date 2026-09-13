import type { Localized } from './types';

/**
 * Audience routes.
 *
 * The catalogue on its own asks the visitor to work out which of seven systems
 * resembles their problem. These tracks do that work for them: pick the
 * description that matches you, and read down a sequence that ends where you
 * should start. The same project appears on both tracks where it genuinely
 * serves both, framed each time for the reader it is addressing.
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
    persona: {
      en: 'Are you selling to customers?',
      ar: 'هل تبيع لعملائك؟',
    },
    title: {
      en: 'From a storefront to a business that runs itself',
      ar: 'من متجر إلى عمل يُدار بنفسه',
    },
    intro: {
      en: 'Retail, hospitality and food businesses usually start with one need — a place to sell — and discover the rest as they grow. This is the order in which those needs actually arrive.',
      ar: 'أعمال التجزئة والضيافة والأغذية تبدأ عادةً بحاجة واحدة — مكان للبيع — ثم تكتشف البقية مع النمو. هذا هو الترتيب الذي تصل به تلك الحاجات فعلاً.',
    },
    steps: [
      {
        eyebrow: { en: 'You need to sell online', ar: 'تحتاج أن تبيع أونلاين' },
        projectSlug: 'glamora',
        description: {
          en: 'A storefront, a mobile app and an admin console over one catalogue, so a price is entered once and is correct everywhere.',
          ar: 'متجر وتطبيق موبايل ولوحة إدارة فوق كتالوج واحد، فيُدخَل السعر مرة ويكون صحيحاً في كل مكان.',
        },
      },
      {
        eyebrow: { en: 'You have more than one branch', ar: 'صار عندك أكثر من فرع' },
        projectSlug: 'couponak',
        description: {
          en: 'Stock, transfers and purchase orders across branches, with a single figure you can trust for what you actually hold.',
          ar: 'مخزون وتحويلات وأوامر شراء عبر الفروع، برقم واحد موثوق لما تملكه فعلاً.',
        },
      },
      {
        eyebrow: { en: 'You serve people on site', ar: 'تخدم زبائن في المكان' },
        projectSlug: 'firuze',
        description: {
          en: 'Orders, tables, staff and daily takings in one operational system built for a floor that never stops.',
          ar: 'طلبات وطاولات وموظفون وحصيلة يومية في نظام تشغيلي مبني لصالة لا تتوقف.',
        },
      },
      {
        eyebrow: { en: 'You need deliveries handled', ar: 'تحتاج من يوصل طلباتك' },
        projectSlug: 'aber',
        description: {
          en: 'A delivery marketplace with escrow and scan-verified custody, so a parcel is never simply trusted to a stranger.',
          ar: 'سوق توصيل بضمان مالي وعهدة موثّقة بالمسح، فلا يُسلَّم طرد لغريب على الثقة وحدها.',
        },
      },
    ],
  },
  {
    id: 'operator',
    persona: {
      en: 'Are you running an institution?',
      ar: 'هل تدير مؤسسة؟',
    },
    title: {
      en: 'From scattered records to one operating picture',
      ar: 'من سجلات متفرّقة إلى صورة تشغيلية واحدة',
    },
    intro: {
      en: 'Clinics, agencies and service operations rarely lack data. They lack one place where it agrees with itself, and controls over who may see which part of it.',
      ar: 'العيادات والوكالات والعمليات الخدمية نادراً ما تنقصها البيانات. ينقصها مكان واحد تتّفق فيه مع نفسها، وضوابط تحدّد من يرى أيّ جزء منها.',
    },
    steps: [
      {
        eyebrow: { en: 'You hold sensitive records', ar: 'تحتفظ بسجلات حسّاسة' },
        projectSlug: 'cleveland-medicals',
        description: {
          en: 'Patient files, documents and billing under access controls appropriate to health data.',
          ar: 'ملفات المراجعين والمستندات والفوترة تحت ضوابط وصول تليق ببيانات صحية.',
        },
      },
      {
        eyebrow: { en: 'You sell an inventory of dates', ar: 'تبيع مخزوناً من المواعيد' },
        projectSlug: 'babunec',
        description: {
          en: 'Availability, pricing windows and reservations, with a back office that answers what is left and at what price.',
          ar: 'التوفّر ونوافذ التسعير والحجوزات، مع مكتب خلفي يجيب عمّا تبقّى وبأي سعر.',
        },
      },
      {
        eyebrow: { en: 'You need the numbers to reconcile', ar: 'تحتاج أن تتطابق الأرقام' },
        projectSlug: 'couponak',
        description: {
          en: 'The same inventory engine, read from the finance side: movements, valuation and a closing figure that holds.',
          ar: 'محرّك المخزون نفسه، مقروءاً من جهة المالية: حركات وتقييم ورصيد إقفال يثبت.',
        },
      },
      {
        eyebrow: { en: 'You want a presence that loads', ar: 'تريد حضوراً يفتح بسرعة' },
        projectSlug: 'cafe-albaraa',
        description: {
          en: 'A light bilingual front that opens instantly on a weak connection and can be updated without a developer.',
          ar: 'واجهة خفيفة ثنائية اللغة تفتح فوراً على اتصال ضعيف ويمكن تحديثها دون مطوّر.',
        },
      },
    ],
  },
];

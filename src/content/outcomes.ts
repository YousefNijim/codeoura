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
      tr: 'Bir mağaza, bir uygulama ve bir yönetim panelinin arkasında tek katalog. Fiyat bir kez girilir.',
    },
    source: { en: 'Glamora', ar: 'جلامورا', tr: 'Glamora' },
    role: { en: 'E-commerce', ar: 'تجارة إلكترونية', tr: 'E-ticaret' },
    row: 1,
  },
  {
    id: 'couponak-stock',
    quote: {
      en: 'Stock and transfers across branches, reconciled to one figure finance can close on.',
      ar: 'مخزون وتحويلات عبر الفروع، مطابَقة إلى رقم واحد تُقفل عليه المالية.',
      tr: 'Şubeler arası stok ve transferler, finansın üzerine kapanış yapabileceği tek bir rakamda mutabık.',
    },
    source: { en: 'Couponak', ar: 'كوبونك', tr: 'Couponak' },
    role: { en: 'Inventory management', ar: 'إدارة مخزون', tr: 'Stok yönetimi' },
    row: 1,
  },
  {
    id: 'aber-custody',
    quote: {
      en: 'Custody proven by scan, money held in escrow until it is. Trust is no longer required.',
      ar: 'عهدة تُثبَت بالمسح، والمال محجوز حتى تُثبَت. لم تعد الثقة شرطاً.',
      tr: 'Zimmet taramayla kanıtlanır, kanıtlanana dek para emanette tutulur. Güven artık bir koşul değil.',
    },
    source: { en: 'Aber', ar: 'عابر', tr: 'Aber' },
    role: { en: 'Logistics', ar: 'لوجستيات', tr: 'Lojistik' },
    row: 1,
  },
  {
    id: 'firuze-floor',
    quote: {
      en: 'Twenty-three models: orders, tables, staff, takings. Money at exact precision throughout.',
      ar: '٢٣ نموذج بيانات: طلبات وطاولات وموظفون وحصيلة. والمال بدقة تامة.',
      tr: 'Yirmi üç veri modeli: siparişler, masalar, personel, hasılat. Para her aşamada tam hassasiyetle.',
    },
    source: { en: 'Firuze', ar: 'فيروز', tr: 'Firuze' },
    role: { en: 'Hospitality', ar: 'ضيافة', tr: 'Konaklama' },
    row: 1,
  },
  {
    id: 'cleveland-access',
    quote: {
      en: 'Records, documents and billing separated by role. Each person sees only their work.',
      ar: 'سجلات ومستندات وفوترة مفصولة حسب الدور. كلٌّ يرى عمله فقط.',
      tr: 'Kayıtlar, belgeler ve faturalama role göre ayrılmış. Herkes yalnızca kendi işini görür.',
    },
    source: { en: 'Cleveland Medicals', ar: 'كليفلاند ميديكالز', tr: 'Cleveland Medicals' },
    role: { en: 'Healthcare', ar: 'رعاية صحية', tr: 'Sağlık' },
    row: 2,
  },
  {
    id: 'babunec-inventory',
    quote: {
      en: 'Discovery, availability and booking, with a back office that answers what is left.',
      ar: 'اكتشاف وتوفّر وحجز، مع مكتب خلفي يجيب عمّا تبقّى.',
      tr: 'Keşif, müsaitlik ve rezervasyon; geriye ne kaldığını yanıtlayan bir arka ofisle.',
    },
    source: { en: 'Babunec Travel', ar: 'بابونيك للسفر', tr: 'Babunec Travel' },
    role: { en: 'Travel', ar: 'سفر', tr: 'Seyahat' },
    row: 2,
  },
  {
    id: 'cafe-speed',
    quote: {
      en: 'Bilingual, instant on a weak connection, updated without touching code.',
      ar: 'واجهة طلبات ثنائية اللغة، فورية على اتصال ضعيف، تُحدَّث دون لمس الكود.',
      tr: 'İki dilli, zayıf bağlantıda anında açılan, koda dokunmadan güncellenen.',
    },
    source: { en: 'Cafe Albaraa', ar: 'كافيه البراء', tr: 'Cafe Albaraa' },
    role: { en: 'Food service', ar: 'خدمات غذائية', tr: 'Yeme içme' },
    row: 2,
  },
  {
    id: 'demos-open',
    quote: {
      en: 'Every system here has an open demonstration. Use one before you speak to us.',
      ar: 'كل نظام هنا له نسخة مفتوحة. استخدم واحدة قبل أن تكلّمنا.',
      tr: 'Buradaki her sistemin açık bir demosu var. Bizimle konuşmadan önce birini kullanın.',
    },
    source: { en: 'Codeoura', ar: 'كوديورا', tr: 'Codeoura' },
    role: { en: 'Seven live demonstrations', ar: 'سبع نسخ تجريبية', tr: 'Yedi canlı demo' },
    row: 2,
  },
];

export const outcomeRows = {
  first: outcomes.filter((outcome) => outcome.row === 1),
  second: outcomes.filter((outcome) => outcome.row === 2),
};

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
    source: { en: 'Glamora', ar: 'Glamora', tr: 'Glamora' },
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
    source: { en: 'Couponak', ar: 'Couponak', tr: 'Couponak' },
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
    source: { en: 'Aber', ar: 'Aber', tr: 'Aber' },
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
    source: { en: 'Firuze', ar: 'Firuze', tr: 'Firuze' },
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
    source: { en: 'Cleveland Medicals', ar: 'Cleveland Medicals', tr: 'Cleveland Medicals' },
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
    source: { en: 'Babunec Travel', ar: 'Babunec Travel', tr: 'Babunec Travel' },
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
    source: { en: 'Cafe Albaraa', ar: 'Cafe Albaraa', tr: 'Cafe Albaraa' },
    role: { en: 'Food service', ar: 'خدمات غذائية', tr: 'Yeme içme' },
    row: 2,
  },
  {
    id: 'sho-abalak-state',
    quote: {
      en: 'Four apps agree on one order at every moment, over unreliable mobile connections.',
      ar: 'أربعة تطبيقات تتّفق على طلب واحد في كل لحظة، عبر اتصالات موبايل غير مستقرة.',
      tr: 'Dört uygulama, güvenilmez mobil bağlantılar üzerinden her an tek bir sipariş üzerinde hemfikir.',
    },
    source: { en: 'Sho Abalak', ar: 'Sho Abalak', tr: 'Sho Abalak' },
    role: { en: 'Delivery', ar: 'توصيل', tr: 'Teslimat' },
    row: 1,
  },
  {
    id: 'al-goat-loyalty',
    quote: {
      en: 'Points earned by playing, not by spending. The reward costs attention, not margin.',
      ar: 'نقاط تُكسب باللعب لا بالإنفاق. الحافز يكلّف انتباهاً لا هامش ربح.',
      tr: 'Puanlar harcayarak değil oynayarak kazanılır. Ödül kâr marjına değil dikkate mal olur.',
    },
    source: { en: 'AL GOAT SPORTS', ar: 'AL GOAT SPORTS', tr: 'AL GOAT SPORTS' },
    role: { en: 'E-commerce', ar: 'تجارة إلكترونية', tr: 'E-ticaret' },
    row: 1,
  },
  {
    id: 'focusoura-ledger',
    quote: {
      en: 'Every coin earned or spent is a row, so the wallet can be audited instead of guessed at.',
      ar: 'كل عملة تُكسب أو تُنفق صفٌّ مستقل، فالمحفظة تُدقَّق لا تُخمَّن.',
      tr: 'Kazanılan ya da harcanan her jeton ayrı bir satır; cüzdan tahmin edilmez, denetlenir.',
    },
    source: { en: 'FocusOura', ar: 'FocusOura', tr: 'FocusOura' },
    role: { en: 'Productivity', ar: 'إنتاجية', tr: 'Üretkenlik' },
    row: 2,
  },
  {
    id: 'rufoof-checkout',
    quote: {
      en: 'A Saudi card charged through a licensed gateway, with VAT already in the price on the shelf.',
      ar: 'بطاقة سعودية تُحصَّل عبر بوابة مرخّصة، والضريبة داخلة في السعر المعروض على الرف.',
      tr: 'Lisanslı bir altyapıdan tahsil edilen Suudi kartı; KDV raftaki fiyata zaten dâhil.',
    },
    source: { en: 'Rufoof', ar: 'Rufoof', tr: 'Rufoof' },
    role: { en: 'E-commerce', ar: 'تجارة إلكترونية', tr: 'E-ticaret' },
    row: 2,
  },
  {
    id: 'domi-languages',
    quote: {
      en: 'Three languages over one catalogue, and orders arriving as a ready WhatsApp message.',
      ar: 'ثلاث لغات فوق كتالوج واحد، والطلبات تصل رسالة واتساب جاهزة.',
      tr: 'Tek katalog üzerinde üç dil ve hazır bir WhatsApp mesajı olarak gelen siparişler.',
    },
    source: { en: 'DOMI BRAND', ar: 'DOMI BRAND', tr: 'DOMI BRAND' },
    role: { en: 'E-commerce', ar: 'تجارة إلكترونية', tr: 'E-ticaret' },
    row: 2,
  },
  {
    id: 'demos-open',
    quote: {
      en: 'Every system here is open to try, as a demonstration or the live product. Use one before you speak to us.',
      ar: 'كل نظام هنا مفتوح للتجربة، نسخةً تجريبية أو المنتج الحيّ نفسه. جرّب واحداً قبل أن تكلّمنا.',
      tr: 'Buradaki her sistem denemeye açık; bir demo ya da canlı ürünün kendisi olarak. Bizimle konuşmadan önce birini kullanın.',
    },
    source: { en: 'Codeoura', ar: 'Codeoura', tr: 'Codeoura' },
    role: { en: 'Seven demos, five live sites', ar: 'سبع نسخ تجريبية وخمسة مواقع حيّة', tr: 'Yedi demo, beş canlı site' },
    row: 2,
  },
];

export const outcomeRows = {
  first: outcomes.filter((outcome) => outcome.row === 1),
  second: outcomes.filter((outcome) => outcome.row === 2),
};

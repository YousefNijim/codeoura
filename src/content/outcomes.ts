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
      en: 'Store, app and admin panel run from one product list: a price is changed once, everywhere.',
      ar: 'المتجر والتطبيق ولوحة الإدارة تعمل من قائمة منتجات واحدة: تعديل السعر مرة واحدة يكفي.',
      tr: 'Mağaza, uygulama ve yönetim paneli tek ürün listesinden çalışır: fiyat bir kez, her yerde değişir.',
    },
    source: { en: 'Glamora', ar: 'Glamora', tr: 'Glamora' },
    role: { en: 'E-commerce', ar: 'تجارة إلكترونية', tr: 'E-ticaret' },
    row: 1,
  },
  {
    id: 'couponak-stock',
    quote: {
      en: 'Stock and transfers across every branch, in one figure the finance team can rely on.',
      ar: 'مخزون كل الفروع والتحويلات بينها في رقم واحد تعتمد عليه الإدارة المالية.',
      tr: 'Tüm şubelerin stok ve transferleri, finans ekibinin güvenebileceği tek bir rakamda.',
    },
    source: { en: 'Couponak', ar: 'Couponak', tr: 'Couponak' },
    role: { en: 'Inventory management', ar: 'إدارة مخزون', tr: 'Stok yönetimi' },
    row: 1,
  },
  {
    id: 'aber-custody',
    quote: {
      en: 'Payment is released only once delivery is confirmed by scan, so neither sender nor traveller loses out.',
      ar: 'المال لا يُفرَج عنه إلا بعد تأكيد التسليم بالمسح، فلا يخسر المرسِل ولا المسافر.',
      tr: 'Ödeme ancak teslimat taramayla onaylandığında serbest kalır; ne gönderen ne yolcu kaybeder.',
    },
    source: { en: 'Aber', ar: 'Aber', tr: 'Aber' },
    role: { en: 'Logistics', ar: 'لوجستيات', tr: 'Lojistik' },
    row: 1,
  },
  {
    id: 'firuze-floor',
    quote: {
      en: 'A menu that opens from the table in a moment, and one system for orders, tables, staff and the day’s takings.',
      ar: 'منيو يفتح من الطاولة في لحظة، ونظام واحد للطلبات والطاولات والموظفين وحصيلة اليوم.',
      tr: 'Masadan bir anda açılan menü; siparişler, masalar, personel ve günün hasılatı için tek sistem.',
    },
    source: { en: 'Firuze', ar: 'Firuze', tr: 'Firuze' },
    role: { en: 'Hospitality', ar: 'ضيافة', tr: 'Konaklama' },
    row: 1,
  },
  {
    id: 'cleveland-access',
    quote: {
      en: 'Patient files and billing kept secure, with each employee seeing only what concerns them.',
      ar: 'ملفات المرضى والفوترة محفوظة بأمان، وكل موظف يرى ما يخصه فقط.',
      tr: 'Hasta dosyaları ve faturalama güvenle saklanır; her çalışan yalnızca kendini ilgilendireni görür.',
    },
    source: { en: 'Cleveland Medicals', ar: 'Cleveland Medicals', tr: 'Cleveland Medicals' },
    role: { en: 'Healthcare', ar: 'رعاية صحية', tr: 'Sağlık' },
    row: 2,
  },
  {
    id: 'babunec-inventory',
    quote: {
      en: 'Trips booked online against real availability, with a panel showing the operator which seats are left, and at what price.',
      ar: 'حجز الرحلات أونلاين حسب التوفّر الفعلي، ولوحة تُظهر للمشغّل ما تبقّى من مقاعد وبأي سعر.',
      tr: 'Gerçek müsaitliğe göre çevrimiçi tur rezervasyonu; operatöre kalan koltukları ve fiyatlarını gösteren bir panel.',
    },
    source: { en: 'Babunec Travel', ar: 'Babunec Travel', tr: 'Babunec Travel' },
    role: { en: 'Travel', ar: 'سفر', tr: 'Seyahat' },
    row: 2,
  },
  {
    id: 'cafe-speed',
    quote: {
      en: 'A two-language site that opens fast on any connection, and that the owner updates directly.',
      ar: 'موقع بلغتين يفتح بسرعة على أي اتصال، ويحدّثه صاحب المكان بنفسه.',
      tr: 'Her bağlantıda hızlı açılan iki dilli bir site; işletme sahibi kendisi günceller.',
    },
    source: { en: 'Cafe Albaraa', ar: 'Cafe Albaraa', tr: 'Cafe Albaraa' },
    role: { en: 'Food service', ar: 'خدمات غذائية', tr: 'Yeme içme' },
    row: 2,
  },
  {
    id: 'sho-abalak-state',
    quote: {
      en: 'Customer, shop, driver and management see the same order status at every moment, even on a weak connection.',
      ar: 'الزبون والمحل والسائق والإدارة يرون حالة الطلب نفسها لحظة بلحظة، حتى مع ضعف الإنترنت.',
      tr: 'Müşteri, işletme, sürücü ve yönetim; zayıf bağlantıda bile siparişin aynı durumunu an be an görür.',
    },
    source: { en: 'Sho Abalak', ar: 'Sho Abalak', tr: 'Sho Abalak' },
    role: { en: 'Delivery', ar: 'توصيل', tr: 'Teslimat' },
    row: 1,
  },
  {
    id: 'al-goat-loyalty',
    quote: {
      en: 'A game inside the store earns customers discount points, a reason to come back that does not cut the store’s margin.',
      ar: 'لعبة داخل المتجر يكسب منها الزبون نقاط خصم، فيعود ليشتري دون أن يخسر المتجر من هامش ربحه.',
      tr: 'Mağaza içindeki bir oyunla müşteri indirim puanı kazanır; mağazanın kâr marjından kısmadan geri gelmesi için bir neden.',
    },
    source: { en: 'AL GOAT SPORTS', ar: 'AL GOAT SPORTS', tr: 'AL GOAT SPORTS' },
    role: { en: 'E-commerce', ar: 'تجارة إلكترونية', tr: 'E-ticaret' },
    row: 1,
  },
  {
    id: 'focusoura-ledger',
    quote: {
      en: 'Study sessions turn into precisely tracked rewards, with AI insights drawn from the student’s own history.',
      ar: 'جلسات الدراسة تتحوّل إلى مكافآت محسوبة بدقة، مع نصائح بالذكاء الاصطناعي من سجل الطالب نفسه.',
      tr: 'Çalışma seansları titizlikle hesaplanan ödüllere dönüşür; öğrencinin kendi geçmişinden yapay zekâ önerileriyle.',
    },
    source: { en: 'FocusOura', ar: 'FocusOura', tr: 'FocusOura' },
    role: { en: 'Productivity', ar: 'إنتاجية', tr: 'Üretkenlik' },
    row: 2,
  },
  {
    id: 'rufoof-checkout',
    quote: {
      en: 'Card payment through a licensed Saudi gateway (mada, Visa, Apple Pay), with VAT already in the displayed price.',
      ar: 'دفع بالبطاقة عبر بوابة مرخّصة في السعودية (مدى وفيزا وآبل باي)، والضريبة داخلة في السعر المعروض.',
      tr: 'Suudi Arabistan’da lisanslı bir altyapıyla kartla ödeme (mada, Visa, Apple Pay); KDV gösterilen fiyata dahil.',
    },
    source: { en: 'Rufoof', ar: 'Rufoof', tr: 'Rufoof' },
    role: { en: 'E-commerce', ar: 'تجارة إلكترونية', tr: 'E-ticaret' },
    row: 2,
  },
  {
    id: 'domi-languages',
    quote: {
      en: 'A store in three languages, with each order reaching the owner as a ready WhatsApp message: items, total and address.',
      ar: 'متجر بثلاث لغات، والطلب يصل لصاحبة المتجر رسالة واتساب جاهزة بالأصناف والمجموع والعنوان.',
      tr: 'Üç dilli bir mağaza; her sipariş ürünler, toplam ve adresle hazır bir WhatsApp mesajı olarak sahibine ulaşır.',
    },
    source: { en: 'DOMI BRAND', ar: 'DOMI BRAND', tr: 'DOMI BRAND' },
    role: { en: 'E-commerce', ar: 'تجارة إلكترونية', tr: 'E-ticaret' },
    row: 2,
  },
  {
    id: 'demos-open',
    quote: {
      en: 'Try our work before you talk to us: open demos and live sites, running now.',
      ar: 'جرّب أعمالنا قبل أن تتواصل معنا: نسخ تجريبية مفتوحة ومواقع حيّة تعمل الآن.',
      tr: 'Bizimle konuşmadan önce çalışmalarımızı deneyin: açık demolar ve şu an çalışan canlı siteler.',
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

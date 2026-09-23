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
    persona: { en: 'Do you sell to customers?', ar: 'تبيع لعملاء؟', tr: 'Müşterilere satış mı yapıyorsunuz?' },
    title: {
      en: 'From a storefront to an operation',
      ar: 'من متجر إلى عملية متكاملة',
      tr: 'Bir vitrinden işleyen bir düzene',
    },
    intro: {
      en: 'Retail, food and hospitality. The needs arrive in this order.',
      ar: 'تجزئة وأغذية وضيافة. الحاجات تصل بهذا الترتيب.',
      tr: 'Perakende, gıda ve konaklama. İhtiyaçlar bu sırayla gelir.',
    },
    steps: [
      {
        eyebrow: { en: 'Sell online', ar: 'تبيع أونلاين', tr: 'Çevrimiçi satış' },
        projectSlug: 'glamora',
        description: {
          en: 'Store, app and admin over one catalogue. A price is entered once.',
          ar: 'متجر وتطبيق ولوحة إدارة فوق كتالوج واحد. السعر يُدخَل مرة.',
          tr: 'Tek bir katalog üzerinde mağaza, uygulama ve yönetim paneli. Fiyat bir kez girilir.',
        },
      },
      {
        eyebrow: { en: 'More than one branch', ar: 'أكثر من فرع', tr: 'Birden fazla şube' },
        projectSlug: 'couponak',
        description: {
          en: 'Stock, transfers and purchase orders. One figure you can trust.',
          ar: 'مخزون وتحويلات وأوامر شراء. رقم واحد موثوق.',
          tr: 'Stok, transferler ve satın alma siparişleri. Güvenebileceğiniz tek bir rakam.',
        },
      },
      {
        eyebrow: { en: 'Customers on site', ar: 'زبائن في المكان', tr: 'Yerinde müşteriler' },
        projectSlug: 'firuze',
        description: {
          en: 'Orders, tables, staff and the day’s takings in one system.',
          ar: 'طلبات وطاولات وموظفون وحصيلة اليوم في نظام واحد.',
          tr: 'Siparişler, masalar, personel ve günün hasılatı tek sistemde.',
        },
      },
      {
        eyebrow: { en: 'Deliveries to handle', ar: 'طلبات تحتاج توصيلاً', tr: 'Teslim edilecek siparişler' },
        projectSlug: 'aber',
        description: {
          en: 'Escrow and scan-verified custody. Nothing rides on trust.',
          ar: 'ضمان مالي وعهدة موثّقة بالمسح. لا شيء يقوم على الثقة.',
          tr: 'Emanet hesabı ve taramayla doğrulanan zimmet. Hiçbir şey güvene bırakılmaz.',
        },
      },
    ],
  },
  {
    id: 'operator',
    persona: { en: 'Do you run an institution?', ar: 'تدير مؤسسة؟', tr: 'Bir kurum mu yönetiyorsunuz?' },
    title: {
      en: 'From scattered records to one picture',
      ar: 'من سجلات متفرّقة إلى صورة واحدة',
      tr: 'Dağınık kayıtlardan tek bir tabloya',
    },
    intro: {
      en: 'Clinics, agencies, service operations. The data exists. It does not agree.',
      ar: 'عيادات ووكالات وعمليات خدمية. البيانات موجودة. لكنها لا تتّفق.',
      tr: 'Klinikler, acenteler, hizmet operasyonları. Veri zaten var. Ama kendi içinde tutmuyor.',
    },
    steps: [
      {
        eyebrow: { en: 'Sensitive records', ar: 'سجلات حسّاسة', tr: 'Hassas kayıtlar' },
        projectSlug: 'cleveland-medicals',
        description: {
          en: 'Files, documents and billing, separated by role.',
          ar: 'ملفات ومستندات وفوترة، مفصولة حسب الدور.',
          tr: 'Dosyalar, belgeler ve faturalama, role göre ayrılmış.',
        },
      },
      {
        eyebrow: { en: 'An inventory of dates', ar: 'مخزون من المواعيد', tr: 'Tarihlerden oluşan bir stok' },
        projectSlug: 'babunec',
        description: {
          en: 'Availability, pricing windows, reservations. What is left, at what price.',
          ar: 'التوفّر ونوافذ التسعير والحجوزات. ما تبقّى، وبأي سعر.',
          tr: 'Müsaitlik, fiyat pencereleri, rezervasyonlar. Ne kaldı, hangi fiyata.',
        },
      },
      {
        eyebrow: { en: 'Numbers that must reconcile', ar: 'أرقام يجب أن تتطابق', tr: 'Tutması gereken rakamlar' },
        projectSlug: 'couponak',
        description: {
          en: 'The same engine from the finance side. Movements, valuation, closing.',
          ar: 'المحرّك نفسه من جهة المالية. حركات وتقييم وإقفال.',
          tr: 'Aynı motor, finans tarafından okunduğunda. Hareketler, değerleme, kapanış.',
        },
      },
      {
        eyebrow: { en: 'A presence that loads', ar: 'حضور يفتح بسرعة', tr: 'Hızlı açılan bir varlık' },
        projectSlug: 'cafe-albaraa',
        description: {
          en: 'Bilingual, instant on a weak connection, updated without a developer.',
          ar: 'ثنائي اللغة، فوري على اتصال ضعيف، يُحدَّث دون مطوّر.',
          tr: 'İki dilli, zayıf bağlantıda anında açılan, geliştirici olmadan güncellenen.',
        },
      },
    ],
  },
];

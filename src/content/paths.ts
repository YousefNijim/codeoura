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
    persona: {
      en: 'Do you sell to customers?',
      ar: 'تبيع منتجات أو خدمات للزبائن؟',
      tr: 'Müşterilere satış mı yapıyorsunuz?',
    },
    title: {
      en: 'Systems that sell, and run your sales',
      ar: 'أنظمة تبيع لك وتدير مبيعاتك',
      tr: 'Satış yapan ve satışlarınızı yöneten sistemler',
    },
    intro: {
      en: 'For shops, restaurants, cafés and brands: from selling online to running branches and deliveries.',
      ar: 'للمتاجر والمطاعم والمقاهي وأصحاب العلامات التجارية: من البيع أونلاين إلى إدارة الفروع والتوصيل.',
      tr: 'Mağazalar, restoranlar, kafeler ve markalar için: çevrimiçi satıştan şube ve teslimat yönetimine.',
    },
    steps: [
      {
        eyebrow: { en: 'You want to sell online', ar: 'تريد البيع أونلاين', tr: 'Çevrimiçi satmak istiyorsanız' },
        projectSlug: 'glamora',
        description: {
          en: 'An online store, a mobile app and one admin panel. Change a price once and it updates everywhere.',
          ar: 'متجر إلكتروني وتطبيق موبايل ولوحة إدارة واحدة. تعدّل السعر مرة واحدة فيتغيّر في كل مكان.',
          tr: 'Bir e-ticaret sitesi, bir mobil uygulama ve tek yönetim paneli. Fiyatı bir kez değiştirin, her yerde güncellensin.',
        },
      },
      {
        eyebrow: { en: 'You have more than one branch', ar: 'عندك أكثر من فرع', tr: 'Birden fazla şubeniz varsa' },
        projectSlug: 'couponak',
        description: {
          en: 'Every branch’s stock in front of you as it changes, with transfers and purchase orders, without every branch editing the master catalogue.',
          ar: 'مخزون كل فرع أمامك لحظة بلحظة، مع التحويلات بين الفروع وأوامر الشراء، دون أن يعدّل كل فرع على الكتالوج الرئيسي.',
          tr: 'Her şubenin stoğu anlık olarak önünüzde; transferler ve satın alma siparişleriyle, üstelik her şube ana kataloğu değiştiremeden.',
        },
      },
      {
        eyebrow: { en: 'You serve guests on site', ar: 'تستقبل زبائن في مطعمك أو مقهاك', tr: 'Mekânınızda misafir ağırlıyorsanız' },
        projectSlug: 'firuze',
        description: {
          en: 'A digital menu that opens from a QR code on the table, and one system for items, prices, orders, tables, staff and the day’s takings.',
          ar: 'منيو رقمي يفتح بمسح رمز QR على الطاولة، ونظام واحد للأصناف والأسعار والطلبات والطاولات والموظفين وحصيلة اليوم.',
          tr: 'Masadaki QR kodla açılan dijital menü; ürünler, fiyatlar, siparişler, masalar, personel ve günün hasılatı için tek sistem.',
        },
      },
      {
        eyebrow: { en: 'You deliver orders', ar: 'توصّل الطلبات لزبائنك', tr: 'Sipariş teslim ediyorsanız' },
        projectSlug: 'sho-abalak',
        description: {
          en: 'An app your customers order from, an app for your shop to receive orders, an app for drivers to deliver them, and a panel that follows it all.',
          ar: 'تطبيق يطلب منه زبائنك، وتطبيق يستقبل فيه محلك الطلبات، وتطبيق يوصلها به السائق، ولوحة إدارة تتابع كل ذلك.',
          tr: 'Müşterilerinizin sipariş verdiği bir uygulama, işletmenizin siparişleri aldığı bir uygulama, sürücülerin teslim ettiği bir uygulama ve hepsini izleyen bir panel.',
        },
      },
    ],
  },
  {
    id: 'operator',
    persona: {
      en: 'Do you run a company or a service organisation?',
      ar: 'تدير شركة أو مؤسسة خدمية؟',
      tr: 'Bir şirket ya da hizmet kurumu mu yönetiyorsunuz?',
    },
    title: {
      en: 'All your business data in one system',
      ar: 'كل بيانات عملك في نظام واحد',
      tr: 'İşinizin tüm verisi tek sistemde',
    },
    intro: {
      en: 'For clinics, travel agencies and service companies: instead of scattered files and spreadsheets, one system that shows you the full picture.',
      ar: 'للعيادات ووكالات السفر والشركات الخدمية: بدل الملفات والجداول المتفرّقة، نظام واحد يعطيك الصورة كاملة.',
      tr: 'Klinikler, seyahat acenteleri ve hizmet şirketleri için: dağınık dosya ve tablolar yerine size tüm tabloyu gösteren tek bir sistem.',
    },
    steps: [
      {
        eyebrow: { en: 'You handle sensitive records', ar: 'تتعامل مع ملفات حسّاسة', tr: 'Hassas kayıtlarla çalışıyorsanız' },
        projectSlug: 'cleveland-medicals',
        description: {
          en: 'Patient records, medical files, receipts and billing, with each employee seeing only what their job needs.',
          ar: 'سجلات المراجعين والملفات الطبية والإيصالات والفوترة، وكل موظف يرى ما يخص عمله فقط.',
          tr: 'Hasta kayıtları, tıbbi dosyalar, makbuzlar ve faturalama; her çalışan yalnızca işinin gerektirdiğini görür.',
        },
      },
      {
        eyebrow: { en: 'You sell trips and bookings', ar: 'تبيع رحلات وحجوزات', tr: 'Tur ve rezervasyon satıyorsanız' },
        projectSlug: 'babunec',
        description: {
          en: 'Packages, availability and booking, with a back office for seasonal prices and seats, so the same seat is never sold twice.',
          ar: 'عرض الباقات والتوفّر والحجز، مع لوحة تدير الأسعار الموسمية والمقاعد، فلا يُباع المقعد نفسه مرتين.',
          tr: 'Paketler, müsaitlik ve rezervasyon; sezonluk fiyatları ve koltukları yöneten bir arka ofisle, aynı koltuk iki kez satılmaz.',
        },
      },
      {
        eyebrow: { en: 'You need numbers that add up', ar: 'تريد أرقاماً مضبوطة', tr: 'Tutan rakamlara ihtiyacınız varsa' },
        projectSlug: 'couponak',
        description: {
          en: 'A record of every stock movement that can never be edited or deleted, so finance can reconcile and close with confidence.',
          ar: 'سجل لكل حركة مخزون لا يُعدَّل ولا يُحذف، فتطابق الإدارة المالية أرقامها وتقفل حساباتها بثقة.',
          tr: 'Her stok hareketinin değiştirilemeyen ve silinemeyen kaydı; finans ekibi rakamları gönül rahatlığıyla karşılaştırıp kapanış yapar.',
        },
      },
      {
        eyebrow: { en: 'You need a website for your business', ar: 'تحتاج موقعاً لنشاطك', tr: 'İşiniz için bir web sitesi gerekiyorsa' },
        projectSlug: 'cafe-albaraa',
        description: {
          en: 'A two-language site that opens fast even on a weak connection, where you update items and prices yourself without a developer.',
          ar: 'موقع بلغتين يفتح بسرعة حتى على إنترنت ضعيف، وتعدّل فيه الأصناف والأسعار بنفسك دون الرجوع لمبرمج.',
          tr: 'Zayıf bağlantıda bile hızlı açılan iki dilli bir site; ürün ve fiyatları geliştiriciye gerek kalmadan kendiniz güncellersiniz.',
        },
      },
    ],
  },
];

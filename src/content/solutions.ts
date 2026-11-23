import type { Solution } from './types';

/**
 * Products Codeoura owns and offers to many companies.
 *
 * Only systems that exist and run belong here. A solution that is still an
 * idea is not listed: a page for a product nobody can try promises something
 * the first serious buyer will find missing.
 */
export const solutions: Solution[] = [
  {
    slug: 'rota',
    name: 'Rota',
    audience: {
      en: 'For transfer and tourism transport companies',
      ar: 'لشركات النقل والتوصيل السياحي',
      tr: 'Transfer ve turizm taşımacılığı şirketleri için',
    },
    tagline: {
      en: 'Your transfer operation, from the office to the driver, in one system.',
      ar: 'عمليات التوصيل كلها، من المكتب إلى السائق، في نظام واحد.',
      tr: 'Transfer operasyonunuz, ofisten sürücüye tek sistemde.',
    },
    summary: {
      en: 'An office panel and a driver app for companies running airport pickups, hotel transfers, point-to-point rides and tours. Bookings arrive from agencies, hotels and customers; operations assigns a driver and vehicle; the panel follows the trip live; and cash, expenses and agency accounts settle themselves day by day.',
      ar: 'لوحة مكتب وتطبيق سائق للشركات التي تدير الاستقبال من المطار، والتوصيل إلى الفنادق، والرحلات بين نقطتين، والجولات. تصل الحجوزات من الوكالات والفنادق والعملاء، ويعيّن قسم التشغيل السائق والسيارة، وتتابع اللوحة الرحلة لحظة بلحظة، وتُقفل حسابات النقد والمصاريف والوكالات يوماً بيوم.',
      tr: 'Havalimanı karşılama, otel transferi, noktadan noktaya yolculuk ve tur yapan şirketler için bir ofis paneli ve bir sürücü uygulaması. Rezervasyonlar acentelerden, otellerden ve müşterilerden gelir; operasyon sürücüyü ve aracı atar; panel yolculuğu canlı izler; nakit, masraflar ve acente hesapları gün gün kendiliğinden kapanır.',
    },
    platforms: ['admin', 'web', 'mobile'],
    url: 'https://rota.codeoura.com',
    email: 'rota@codeoura.com',
    modules: [
      {
        title: { en: 'Operations', ar: 'التشغيل', tr: 'Operasyon' },
        items: {
          en: [
            'Operations board for today, tomorrow and the week',
            'Bookings from the panel, the partner portal, QR form links, pasted WhatsApp messages and Excel import',
            'Assign an internal driver and vehicle, or hand over to an external driver or agency for a fee',
            'Live map of vehicles on a trip',
            'Flight tracking and 28 built-in automation rules',
          ],
          ar: [
            'لوحة تشغيل لليوم والغد والأسبوع',
            'حجوزات من اللوحة، وبوابة الشركاء، وروابط نماذج QR، ولصق رسائل واتساب، واستيراد Excel',
            'إسناد الرحلة لسائق وسيارة من الشركة، أو تحويلها لسائق أو وكالة خارجية مقابل أجر',
            'خريطة حيّة للسيارات أثناء الرحلات',
            'متابعة الرحلات الجوية، و٢٨ قاعدة أتمتة جاهزة',
          ],
          tr: [
            'Bugün, yarın ve hafta için operasyon panosu',
            'Panelden, iş ortağı portalından, QR form bağlantılarından, yapıştırılan WhatsApp mesajlarından ve Excel içe aktarımından rezervasyon',
            'İç sürücü ve araç atama ya da ücret karşılığı dış sürücüye veya acenteye devretme',
            'Yolculuktaki araçların canlı haritası',
            'Uçuş takibi ve 28 hazır otomasyon kuralı',
          ],
        },
      },
      {
        title: { en: 'Accounting', ar: 'المحاسبة', tr: 'Muhasebe' },
        items: {
          en: [
            'Weekly driver cash settlement: collected, expenses, handed to the office',
            'Current accounts and statements for agencies and customers',
            'Commissions: none, percentage or fixed, in either direction',
            'Expenses with an approval queue, and fuel and mileage checks',
            'Cash in several currencies, checked against official exchange rates',
          ],
          ar: [
            'تسوية نقدية أسبوعية للسائق: ما حصّله، ومصاريفه، وما سلّمه للمكتب',
            'حسابات جارية وكشوف للوكالات والعملاء',
            'العمولات: بلا عمولة، أو نسبة، أو مبلغ ثابت، وفي الاتجاهين',
            'مصاريف بطابور موافقة، ومراقبة الوقود والكيلومترات',
            'نقد بأكثر من عملة، يُطابَق مع أسعار الصرف الرسمية',
          ],
          tr: [
            'Haftalık sürücü kasa mutabakatı: tahsilat, masraf, ofise teslim',
            'Acente ve müşteriler için cari hesaplar ve ekstreler',
            'Komisyon: yok, yüzde veya sabit, iki yönde de',
            'Onay kuyruklu masraflar, yakıt ve kilometre kontrolü',
            'Resmi kurlarla karşılaştırılan çok dövizli nakit',
          ],
        },
      },
      {
        title: { en: 'Management', ar: 'الإدارة', tr: 'Yönetim' },
        items: {
          en: [
            'Agencies, hotels and their own price lists',
            'Fleet, vehicle documents and drivers, with expiry warnings',
            'Profit reports per agency, driver and vehicle, with Excel export',
            'Staff permissions by section and action, and an audit log',
            'API keys and signed webhooks for other systems',
          ],
          ar: [
            'الوكالات والفنادق وقوائم أسعار خاصة لكل منها',
            'الأسطول ووثائق السيارات والسائقون، مع تنبيه قبل انتهاء الصلاحية',
            'تقارير الربح لكل وكالة وسائق وسيارة، مع التصدير إلى Excel',
            'صلاحيات الموظفين حسب القسم والإجراء، وسجل تدقيق',
            'مفاتيح API وWebhooks موقّعة للربط مع الأنظمة الأخرى',
          ],
          tr: [
            'Acenteler, oteller ve kendilerine özel fiyat listeleri',
            'Filo, araç belgeleri ve sürücüler, süresi dolmadan uyarı',
            'Acente, sürücü ve araç bazında kâr raporları, Excel dışa aktarımı',
            'Bölüm ve işlem bazında personel yetkileri ve denetim kaydı',
            'Diğer sistemler için API anahtarları ve imzalı webhook\'lar',
          ],
        },
      },
      {
        title: { en: 'Driver app', ar: 'تطبيق السائق', tr: 'Sürücü uygulaması' },
        items: {
          en: [
            'Assigned trips in time order, with a notification for new work',
            'Flight, meeting point and a name board screen for the guest',
            'GPS only while a trip runs; it stops when the trip ends',
            'Cash collected, fuel and expenses, with receipt photos',
            'Keeps working with a weak signal and syncs when back online',
          ],
          ar: [
            'الرحلات المسندة مرتّبة بالوقت، مع إشعار عند وصول عمل جديد',
            'الرحلة الجوية ونقطة اللقاء وشاشة لوحة الاستقبال باسم الضيف',
            'الموقع يُؤخذ أثناء الرحلة فقط ويتوقف عند انتهائها',
            'النقد المحصَّل والوقود والمصاريف، مع صور الإيصالات',
            'يعمل مع ضعف الإشارة ويزامن عند عودة الاتصال',
          ],
          tr: [
            'Atanan yolculuklar saat sırasıyla, yeni iş için bildirim',
            'Uçuş, buluşma noktası ve misafir için isim tabelası ekranı',
            'Konum yalnızca yolculuk sırasında alınır, bitince durur',
            'Tahsil edilen nakit, yakıt ve masraflar, fiş fotoğraflarıyla',
            'Zayıf sinyalde çalışır, bağlantı gelince eşitlenir',
          ],
        },
      },
    ],
    flow: [
      {
        title: { en: 'Booking', ar: 'الحجز', tr: 'Rezervasyon' },
        description: {
          en: 'A transfer arrives from an agency, a hotel, a customer form or the panel. Missing details are completed through a link sent to the guest.',
          ar: 'يصل الحجز من وكالة أو فندق أو نموذج عميل أو من اللوحة، وتُستكمل البيانات الناقصة برابط يُرسل للضيف.',
          tr: 'Transfer bir acenteden, otelden, müşteri formundan ya da panelden gelir. Eksik bilgiler misafire gönderilen bağlantıyla tamamlanır.',
        },
      },
      {
        title: { en: 'Assignment', ar: 'الإسناد', tr: 'Atama' },
        description: {
          en: 'Operations picks the driver and vehicle. The driver is notified and accepts the trip from the app.',
          ar: 'يختار قسم التشغيل السائق والسيارة، فيصل الإشعار للسائق ويقبل الرحلة من التطبيق.',
          tr: 'Operasyon sürücüyü ve aracı seçer. Sürücüye bildirim gider ve yolculuğu uygulamadan kabul eder.',
        },
      },
      {
        title: { en: 'The ride', ar: 'الرحلة', tr: 'Yolculuk' },
        description: {
          en: 'The driver starts the trip at pickup and the vehicle appears on the panel map until drop-off.',
          ar: 'يبدأ السائق الرحلة عند الاستلام، وتظهر السيارة على خريطة اللوحة حتى التسليم.',
          tr: 'Sürücü yolcuyu alınca yolculuğu başlatır; araç bırakışa kadar panel haritasında görünür.',
        },
      },
      {
        title: { en: 'Cash', ar: 'الحساب', tr: 'Kasa' },
        description: {
          en: 'The cash taken is entered at the end. Driver settlement and agency accounts update on their own.',
          ar: 'يُسجَّل النقد المحصَّل عند النهاية، فتتحدّث تسوية السائق وحسابات الوكالات تلقائياً.',
          tr: 'Alınan nakit sonunda girilir. Sürücü mutabakatı ve acente hesapları kendiliğinden güncellenir.',
        },
      },
    ],
    highlights: [
      {
        title: {
          en: 'Each company sealed from the next',
          ar: 'كل شركة معزولة عن غيرها',
          tr: 'Her şirket diğerinden ayrı',
        },
        description: {
          en: 'Isolation between companies is enforced by the database itself, not only by application code, and is covered by its own tests.',
          ar: 'العزل بين الشركات تفرضه قاعدة البيانات نفسها لا كود التطبيق وحده، وله اختباراته الخاصة.',
          tr: 'Şirketler arası ayrım yalnızca uygulama koduyla değil, veritabanının kendisiyle sağlanır ve kendi testleriyle doğrulanır.',
        },
      },
      {
        title: {
          en: 'Money that adds up',
          ar: 'أرقام مالية لا تختلف',
          tr: 'Tutan rakamlar',
        },
        description: {
          en: 'Every completed trip writes ledger lines that can never be edited, one per currency, so any balance can be traced line by line.',
          ar: 'كل رحلة منتهية تكتب قيوداً في دفتر لا يُعدَّل، قيداً لكل عملة، فيمكن تتبّع أي رصيد سطراً بسطر.',
          tr: 'Tamamlanan her yolculuk, değiştirilemeyen ve döviz başına ayrı defter satırları yazar; her bakiye satır satır izlenebilir.',
        },
      },
      {
        title: {
          en: 'Guests in their own language',
          ar: 'الضيف بلغته',
          tr: 'Misafir kendi dilinde',
        },
        description: {
          en: 'Customer booking forms run in eight languages, including Arabic and Persian right to left.',
          ar: 'نماذج حجز العملاء بثماني لغات، منها العربية والفارسية من اليمين إلى اليسار.',
          tr: 'Müşteri rezervasyon formları, sağdan sola Arapça ve Farsça dahil sekiz dilde çalışır.',
        },
      },
      {
        title: {
          en: 'Passport data that does not linger',
          ar: 'بيانات الجوازات لا تبقى',
          tr: 'Pasaport verisi kalıcı değil',
        },
        description: {
          en: 'Passport details are encrypted at rest and deleted automatically after three days.',
          ar: 'بيانات الجوازات مشفّرة عند التخزين، وتُحذف تلقائياً بعد ثلاثة أيام.',
          tr: 'Pasaport bilgileri şifreli saklanır ve üç gün sonra otomatik silinir.',
        },
      },
    ],
  },
];

export function getSolution(slug: string): Solution | undefined {
  return solutions.find((solution) => solution.slug === slug);
}

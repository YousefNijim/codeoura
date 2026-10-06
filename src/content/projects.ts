import type { Localized, Project, ProjectCategory } from './types';

export const projects: Project[] = [
  {
    slug: 'glamora',
    name: { en: 'Glamora', ar: 'جلامورا', tr: 'Glamora' },
    tagline: {
      en: 'Beauty commerce, storefront to doorstep',
      ar: 'تجارة التجميل، من المتجر إلى باب البيت',
      tr: 'Güzellik ticareti, vitrinden kapıya',
    },
    summary: {
      en: 'A beauty and cosmetics commerce ecosystem led by its app: browse the categories, search a catalogue of hundreds, fill a cart and check out on the phone. Behind it a web storefront and an operations console keep catalogue, stock and orders in a single source of truth.',
      ar: 'منظومة تجارة إلكترونية لمستحضرات التجميل يتصدّرها تطبيقها: تصفَّح التصنيفات، وابحث في كتالوج بالمئات، واملأ السلة وأتمّ الشراء من الهاتف. وخلفه متجر على الويب ولوحة تشغيل تُبقي الكتالوج والمخزون والطلبات في مصدر حقيقة واحد.',
      tr: 'Uygulamasının öncülük ettiği bir güzellik ve kozmetik ticaret ekosistemi: kategorilere göz atın, yüzlerce ürünlük bir katalogda arama yapın, sepeti doldurup ödemeyi telefondan tamamlayın. Arkasında bir web vitrini ve bir operasyon paneli, kataloğu, stoku ve siparişleri tek bir doğruluk kaynağında tutar.',
    },
    year: 2025,
    category: 'ecommerce',
    services: ['web', 'mobile', 'cloud'],
    platforms: ['web', 'mobile', 'admin'],
    stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Tailwind CSS', 'Vercel'],
    cover: {
      from: 'oklch(0.62 0.19 340)',
      to: 'oklch(0.52 0.16 300)',
      image: '/work/glamora/home.png',
    },
    logo: '/brand/systems/glamora.png',
    shots: {
      shape: 'portrait',
      featured: [
        '/work/glamora/home.png',
        '/work/glamora/cart.png',
        '/work/glamora/order-confirmed.png',
      ],
      gallery: [],
    },
    featured: true,
    demo: {
      href: 'https://ysweety666-crypto.github.io/codeoura-demos/glamora/',
      // The demonstration opens the console, not the app. Naming it for what
      // it is keeps the label honest now that the app leads the page: a
      // visitor who taps it should know they are going behind the counter.
      surface: {
        en: 'The console behind the app',
        ar: 'اللوحة خلف التطبيق',
        tr: 'Uygulamanın arkasındaki panel',
      },
    },
    caseStudy: {
      challenge: {
        en: 'Catalogue, stock and fulfilment lived in disconnected tools. Every price change had to be repeated three times, and overselling was routine.',
        ar: 'كان الكتالوج والمخزون والتنفيذ في أدوات منفصلة. كل تغيير سعر يجب أن يتكرر ثلاث مرات، والبيع الزائد أمر معتاد.',
        tr: 'Katalog, stok ve sipariş karşılama birbirinden kopuk araçlarda duruyordu. Her fiyat değişikliği üç kez tekrarlanmak zorundaydı ve stoktan fazla satış olağan hâle gelmişti.',
      },
      solution: {
        en: 'We modelled the catalogue once and projected it onto every surface. Stock reservations are transactional, so a cart hold and a warehouse pick can never disagree. The mobile app consumes the same typed API as the web storefront.',
        ar: 'نمذجنا الكتالوج مرة واحدة وعرضناه على كل الواجهات. حجز المخزون معامَلاتي، فلا يمكن أن يختلف الحجز في السلة عن السحب من المستودع. وتطبيق الموبايل يستهلك نفس واجهة البرمجة المكتوبة بالأنواع التي يستهلكها المتجر.',
        tr: 'Kataloğu bir kez modelleyip her yüzeye yansıttık. Stok rezervasyonları işlemsel olduğundan bir sepet tutmasıyla bir depo toplaması asla çelişemez. Mobil uygulama, web vitrininin kullandığı tiplenmiş API\'nin aynısını tüketir.',
      },
      outcome: {
        en: 'One catalogue, three surfaces, no duplicated data entry, and a storefront rendered at the edge.',
        ar: 'كتالوج واحد، وثلاث واجهات، دون إدخال بيانات مكرر، ومتجر يُعرَض من حافة الشبكة.',
        tr: 'Tek katalog, üç yüzey, tekrarlanan veri girişi yok ve uç noktadan sunulan bir vitrin.',
      },
    },
  },
  {
    slug: 'couponak',
    name: { en: 'Couponak', ar: 'كوبونك', tr: 'Couponak' },
    tagline: {
      en: 'Inventory and merchant operations at scale',
      ar: 'إدارة مخزون وعمليات تجّار على نطاق واسع',
      tr: 'Ölçekte stok ve satıcı operasyonları',
    },
    summary: {
      en: 'An inventory and merchant management platform pairing a real-time stock engine with a manager console for onboarding, catalogue control and reconciliation across multiple outlets.',
      ar: 'منصة إدارة مخزون وتجّار تجمع محرّك مخزون لحظي مع لوحة إدارة للتسجيل والتحكم بالكتالوج والتسوية عبر عدة فروع.',
      tr: 'Gerçek zamanlı bir stok motorunu; kayıt, katalog denetimi ve birden çok şube arasında mutabakat için bir yönetici paneliyle birleştiren stok ve satıcı yönetim platformu.',
    },
    year: 2025,
    category: 'erp',
    services: ['web', 'saas', 'cloud'],
    platforms: ['web', 'admin'],
    stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Supabase', 'Redis', 'Tailwind CSS'],
    cover: { from: 'oklch(0.7 0.15 165)', to: 'oklch(0.55 0.13 210)', image: '/work/couponak.webp' },
    logo: '/brand/systems/couponak.png',
    featured: true,
    demo: {
      href: 'https://ysweety666-crypto.github.io/codeoura-demos/couponak-inventory/dashboard/',
      surface: { en: 'Warehouse system', ar: 'نظام المستودعات', tr: 'Depo sistemi' },
    },
    caseStudy: {
      challenge: {
        en: 'Multi-outlet merchants needed live stock accuracy without giving every branch write access to the master catalogue.',
        ar: 'التجّار متعددو الفروع يحتاجون دقة مخزون لحظية دون منح كل فرع صلاحية الكتابة على الكتالوج الأساسي.',
        tr: 'Çok şubeli satıcıların, her şubeye ana katalogda yazma yetkisi vermeden canlı stok doğruluğuna ihtiyacı vardı.',
      },
      solution: {
        en: 'A role-scoped permission model with row-level security, an append-only stock ledger that stays auditable, and cached read models so dashboards remain instant under load.',
        ar: 'نموذج صلاحيات محدَّد بالأدوار مع أمان على مستوى الصف، ودفتر مخزون يُضاف إليه فقط ويبقى قابلاً للتدقيق، ونماذج قراءة مخبَّأة تُبقي اللوحات فورية تحت الحمل.',
        tr: 'Satır düzeyinde güvenlikle rol kapsamlı bir yetki modeli, denetlenebilir kalan yalnızca-ekleme yapılan bir stok defteri ve yük altında panellerin anında açılmasını sağlayan önbelleklenmiş okuma modelleri.',
      },
      outcome: {
        en: 'Every stock movement is traceable to an actor and a timestamp, and reconciliation stopped being a monthly fire drill.',
        ar: 'كل حركة مخزون قابلة للتتبّع إلى فاعل ووقت، والتسوية لم تعد تمرين إطفاء حريق شهري.',
        tr: 'Her stok hareketi bir kişiye ve bir zaman damgasına kadar izlenebilir; mutabakat aylık bir yangın tatbikatı olmaktan çıktı.',
      },
    },
  },
  {
    slug: 'aber',
    name: { en: 'Aber', ar: 'عابر', tr: 'Aber' },
    tagline: {
      en: 'Strangers carry each other’s parcels, safely',
      ar: 'طرود يحملها المسافرون، بأمان',
      tr: 'Yabancılar birbirinin kolisini güvenle taşır',
    },
    summary: {
      en: 'A peer-to-peer delivery marketplace: senders post a parcel, travelling strangers bid to carry it, and escrow plus scan-verified custody make the handover safe between two people who have never met. Web, mobile and an operations panel over one shared database.',
      ar: 'سوق توصيل بين الأفراد: المُرسِل ينشر طرداً، ومسافرون على الطريق نفسه يزايدون لحمله، ويضمن الحجز المالي ومسح الباركود سلامة التسليم بين شخصين لم يلتقيا. ويب وموبايل ولوحة تشغيل على قاعدة بيانات واحدة.',
      tr: 'Kişiden kişiye bir teslimat pazarı: gönderen bir koli ilan eder, yolculuk eden yabancılar taşımak için teklif verir; emanet hesabı ve taramayla doğrulanan zimmet, hiç tanışmamış iki kişi arasındaki teslimi güvenli kılar. Web, mobil ve tek bir ortak veritabanı üzerinde bir operasyon paneli.',
    },
    year: 2025,
    category: 'logistics',
    services: ['web', 'mobile', 'cloud'],
    platforms: ['web', 'mobile', 'admin'],
    stack: ['Next.js', 'React Native', 'TypeScript', 'PostgreSQL', 'Prisma', 'Turborepo'],
    cover: { from: 'oklch(0.72 0.16 62)', to: 'oklch(0.55 0.14 30)', image: '/work/aber.webp' },
    featured: true,
    demo: {
      href: 'https://ysweety666-crypto.github.io/codeoura-demos/aber/admin/',
      surface: { en: 'Operations panel', ar: 'لوحة التشغيل', tr: 'Operasyon paneli' },
    },
    caseStudy: {
      challenge: {
        en: 'The whole model rests on a stranger holding something valuable that is not theirs. Trust cannot be asked for. It has to be built into how money and custody move, and it has to survive the day someone claims a parcel never arrived.',
        ar: 'النموذج كله قائم على أن يحمل غريبٌ شيئاً ثميناً ليس له. الثقة لا تُطلب. تُبنى في طريقة انتقال المال والعهدة، ويجب أن تصمد يوم يقول أحدهم إن الطرد لم يصل.',
        tr: 'Modelin tamamı, bir yabancının kendisine ait olmayan değerli bir şeyi taşımasına dayanıyor. Güven istenmez. Paranın ve zimmetin nasıl el değiştirdiğinin içine kurulması ve birinin kolinin hiç ulaşmadığını iddia ettiği güne dayanması gerekir.',
      },
      solution: {
        en: 'Money is held in escrow and only released when a delivery barcode is scanned, so neither side can move first and lose. Every handover is a scan, which turns custody into a timestamped chain rather than a claim. Disputes freeze the parcel in its prior state and go to a human, and cash payments leave the commission as a tracked debt so the platform is never out of pocket.',
        ar: 'المال محجوز ولا يُفرَج عنه إلا بمسح باركود التسليم، فلا يُضطر أي طرف أن يتقدّم أولاً ويخسر. وكل تسليم عملية مسح، فتصير العهدة سلسلة موثّقة بالوقت لا ادّعاءً. والنزاع يجمّد الطرد على حالته السابقة ويُحال إلى قرار بشري، والدفع نقداً يترك العمولة ديناً متتبَّعاً فلا تخسر المنصة شيئاً.',
        tr: 'Para emanette tutulur ve yalnızca teslimat barkodu tarandığında serbest bırakılır; böylece hiçbir taraf önce adım atıp kaybetmez. Her el değiştirme bir taramadır; bu da zimmeti bir iddia olmaktan çıkarıp zaman damgalı bir zincire dönüştürür. Anlaşmazlıklar koliyi bir önceki durumunda dondurup bir insana gider ve nakit ödemeler komisyonu izlenen bir borç olarak bırakır; böylece platform hiçbir zaman zarara girmez.',
      },
      outcome: {
        en: 'A marketplace where the safe move is also the easy one, and where every disputed delivery has a scan history to decide it.',
        ar: 'سوق يصير فيه التصرّف الآمن هو الأسهل، وكل تسليم متنازَع عليه له سجل مسح يحسمه.',
        tr: 'Güvenli hamlenin aynı zamanda kolay hamle olduğu ve anlaşmazlığa düşen her teslimatın kararını verecek bir tarama geçmişinin bulunduğu bir pazar.',
      },
    },
  },
  {
    slug: 'babunec',
    name: { en: 'Babunec Travel', ar: 'بابونيك للسفر', tr: 'Babunec Travel' },
    tagline: {
      en: 'Trip discovery to confirmed booking',
      ar: 'من اكتشاف الرحلة إلى حجز مؤكَّد',
      tr: 'Tur keşfinden onaylı rezervasyona',
    },
    summary: {
      en: 'A travel platform covering package discovery, availability and booking, with an operator back office for inventory, pricing windows and reservation management.',
      ar: 'منصة سفر تغطي اكتشاف الباقات والتوفّر والحجز، مع مكتب خلفي للمشغّل لإدارة المخزون ونوافذ التسعير والحجوزات.',
      tr: 'Paket keşfini, müsaitliği ve rezervasyonu kapsayan bir seyahat platformu; stok, fiyat pencereleri ve rezervasyon yönetimi için bir operatör arka ofisiyle birlikte.',
    },
    year: 2024,
    category: 'travel',
    services: ['web', 'saas'],
    platforms: ['web', 'admin'],
    stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Tailwind CSS'],
    cover: { from: 'oklch(0.72 0.145 230)', to: 'oklch(0.5 0.15 265)', image: '/work/babunec.webp' },
    featured: true,
    demo: {
      href: 'https://ysweety666-crypto.github.io/codeoura-demos/babunec/tr/dashboard/',
      surface: { en: 'Agency back office', ar: 'مكتب الوكالة الخلفي', tr: 'Acente arka ofisi' },
    },
    caseStudy: {
      challenge: {
        en: 'Seasonal pricing and finite seat inventory made naive booking flows prone to double-selling under concurrent load.',
        ar: 'التسعير الموسمي والمقاعد المحدودة جعلا تدفّقات الحجز الساذجة عرضة للبيع المزدوج تحت الحمل المتزامن.',
        tr: 'Mevsimsel fiyatlandırma ve sınırlı koltuk stoku, saf rezervasyon akışlarını eşzamanlı yük altında iki kez satmaya açık hâle getiriyordu.',
      },
      solution: {
        en: 'Availability resolves inside a transaction with a short-lived hold, and pricing windows are evaluated server-side so a stale client can never lock in an expired rate.',
        ar: 'التوفّر يُحسَم داخل معاملة مع حجز قصير الأجل، ونوافذ التسعير تُقيَّم على الخادم حتى لا يستطيع عميل قديم تثبيت سعر منتهٍ.',
        tr: 'Müsaitlik, kısa ömürlü bir tutmayla bir işlem içinde çözülür; fiyat pencereleri sunucu tarafında değerlendirilir, böylece güncelliğini yitirmiş bir istemci süresi dolmuş bir fiyatı asla kilitleyemez.',
      },
      outcome: {
        en: 'Bookings that hold up under concurrency, and an operator console that does not need a developer to change a price.',
        ar: 'حجوزات تصمد تحت التزامن، ولوحة مشغّل لا تحتاج مبرمجاً لتغيير سعر.',
        tr: 'Eşzamanlılık altında ayakta kalan rezervasyonlar ve fiyat değiştirmek için geliştirici gerektirmeyen bir operatör paneli.',
      },
    },
  },
  {
    slug: 'firuze',
    name: { en: 'Firuze', ar: 'فيروز', tr: 'Firuze' },
    tagline: {
      en: 'Hospitality operations and digital menu',
      ar: 'عمليات ضيافة ومنيو رقمي',
      tr: 'Konaklama operasyonları ve dijital menü',
    },
    summary: {
      en: 'A two-part hospitality system: a QR-served digital menu built for sub-second loads on venue Wi-Fi, and a management system covering items, categories, pricing and daily operations.',
      ar: 'نظام ضيافة من جزأين: منيو رقمي يُقدَّم عبر رمز QR ومبني ليُحمَّل في أقل من ثانية على شبكة المكان، ونظام إدارة يغطي الأصناف والفئات والتسعير والعمليات اليومية.',
      tr: 'İki parçalı bir konaklama sistemi: mekân Wi-Fi\'ında saniyenin altında açılmak üzere kurulmuş, QR ile sunulan bir dijital menü ve ürünleri, kategorileri, fiyatlandırmayı ve günlük işleyişi kapsayan bir yönetim sistemi.',
    },
    year: 2025,
    category: 'hospitality',
    services: ['web', 'saas'],
    platforms: ['web', 'admin'],
    stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Tailwind CSS'],
    cover: { from: 'oklch(0.72 0.13 195)', to: 'oklch(0.58 0.12 250)', image: '/work/firuze-system.webp' },
    logo: '/brand/systems/firuze.png',
    featured: true,
    demo: {
      href: 'https://ysweety666-crypto.github.io/codeoura-demos/firuze-system/',
      surface: { en: 'Operations system', ar: 'نظام التشغيل', tr: 'Operasyon sistemi' },
    },
    caseStudy: {
      challenge: {
        en: 'A guest scanning a QR code at a table will abandon a menu that takes three seconds to appear on congested venue Wi-Fi.',
        ar: 'الضيف الذي يمسح رمز QR على الطاولة سيترك منيو يستغرق ثلاث ثوانٍ ليظهر على شبكة مزدحمة.',
        tr: 'Masada QR kod okutan bir misafir, kalabalık mekân Wi-Fi\'ında üç saniyede açılan bir menüyü terk eder.',
      },
      solution: {
        en: 'The menu is statically generated and revalidated on change, images are served as AVIF at exact display sizes, and the critical path ships almost no JavaScript.',
        ar: 'المنيو مولَّد بشكل ساكن ويُحدَّث عند التغيير، والصور تُقدَّم بصيغة AVIF بمقاسات العرض تماماً، والمسار الحرج لا يشحن جافاسكربت تقريباً.',
        tr: 'Menü statik olarak üretilir ve değişiklikte yeniden doğrulanır, görseller tam görüntüleme boyutunda AVIF olarak sunulur ve kritik yol neredeyse hiç JavaScript taşımaz.',
      },
      outcome: {
        en: 'A menu that opens before the guest puts their phone down.',
        ar: 'منيو يفتح قبل أن يضع الضيف هاتفه.',
        tr: 'Misafir telefonunu masaya bırakmadan açılan bir menü.',
      },
    },
  },
  {
    slug: 'cleveland-medicals',
    name: { en: 'Cleveland Medicals', ar: 'كليفلاند ميديكالز', tr: 'Cleveland Medicals' },
    tagline: {
      en: 'Patient records, files and billing',
      ar: 'سجلات المرضى والملفات والفوترة',
      tr: 'Hasta kayıtları, dosyalar ve faturalama',
    },
    summary: {
      en: 'A clinical management platform handling patient records, medical file storage, receipts and billing, with access controls appropriate to health data.',
      ar: 'منصة إدارة عيادات تتعامل مع سجلات المرضى وتخزين الملفات الطبية والإيصالات والفوترة، مع ضوابط وصول تليق ببيانات صحية.',
      tr: 'Hasta kayıtlarını, tıbbi dosya saklamayı, makbuzları ve faturalamayı yürüten; sağlık verisine uygun erişim denetimleriyle donatılmış bir klinik yönetim platformu.',
    },
    year: 2025,
    category: 'healthcare',
    services: ['web', 'cloud', 'saas'],
    platforms: ['web', 'admin'],
    stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Supabase Storage'],
    cover: { from: 'oklch(0.7 0.14 190)', to: 'oklch(0.5 0.12 240)', image: '/work/cleveland-medicals.webp' },
    featured: false,
    demo: {
      href: 'https://ysweety666-crypto.github.io/codeoura-demos/cleveland/ar/',
      surface: { en: 'Patient-facing platform', ar: 'واجهة المرضى', tr: 'Hastaya dönük platform' },
    },
    caseStudy: {
      challenge: {
        en: 'Medical files and receipts are sensitive, often large, and must stay retrievable for years without bloating the application database.',
        ar: 'الملفات الطبية والإيصالات حسّاسة وغالباً كبيرة، ويجب أن تبقى قابلة للاسترجاع لسنوات دون أن تُثقل قاعدة بيانات التطبيق.',
        tr: 'Tıbbi dosyalar ve makbuzlar hassastır, çoğu zaman büyüktür ve uygulama veritabanını şişirmeden yıllarca erişilebilir kalmalıdır.',
      },
      solution: {
        en: 'Binary assets moved to object storage behind signed, expiring URLs; the database keeps only metadata and relationships, so queries stay fast as the archive grows.',
        ar: 'نُقلت الأصول الثنائية إلى تخزين كائنات خلف روابط موقَّعة تنتهي صلاحيتها؛ وتحتفظ قاعدة البيانات بالبيانات الوصفية والعلاقات فقط، فتبقى الاستعلامات سريعة مع نمو الأرشيف.',
        tr: 'İkili dosyalar, imzalı ve süresi dolan bağlantıların arkasındaki nesne depolamasına taşındı; veritabanında yalnızca üst veri ve ilişkiler kaldı, böylece arşiv büyüdükçe sorgular hızlı kalıyor.',
      },
      outcome: {
        en: 'Storage scales independently of the database, and no file is reachable without an authorised, time-boxed link.',
        ar: 'يتوسّع التخزين باستقلال عن قاعدة البيانات، ولا يمكن الوصول إلى أي ملف دون رابط مصرَّح ومحدَّد بوقت.',
        tr: 'Depolama veritabanından bağımsız ölçekleniyor ve hiçbir dosya yetkili, süresi sınırlı bir bağlantı olmadan erişilebilir değil.',
      },
    },
  },
  {
    slug: 'cafe-albaraa',
    name: { en: 'Cafe Albaraa', ar: 'كافيه البراء', tr: 'Cafe Albaraa' },
    tagline: {
      en: 'Café presence and ordering',
      ar: 'حضور رقمي وطلبات للكافيه',
      tr: 'Kafe varlığı ve sipariş',
    },
    summary: {
      en: 'A lightweight digital presence and ordering surface for a café. Fast on mobile networks, simple to update, and bilingual from the first screen.',
      ar: 'حضور رقمي خفيف وواجهة طلبات لكافيه. سريعة على شبكات الموبايل، سهلة التحديث، وثنائية اللغة من الشاشة الأولى.',
      tr: 'Bir kafe için hafif bir dijital varlık ve sipariş yüzeyi. Mobil şebekelerde hızlı, güncellemesi kolay ve ilk ekrandan itibaren iki dilli.',
    },
    year: 2025,
    category: 'hospitality',
    services: ['web'],
    platforms: ['web'],
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    cover: { from: 'oklch(0.68 0.12 75)', to: 'oklch(0.45 0.1 40)', image: '/work/cafe-albaraa.webp' },
    featured: false,
    demo: {
      href: 'https://ysweety666-crypto.github.io/codeoura-demos/cafe-albaraa/',
      surface: { en: 'Management system', ar: 'نظام الإدارة', tr: 'Yönetim sistemi' },
    },
    caseStudy: {
      challenge: {
        en: 'The owner needed to change items and prices without calling a developer, and the site had to work on a phone in a low-signal basement.',
        ar: 'أراد صاحب المحل تغيير الأصناف والأسعار دون الاتصال بمبرمج، وكان على الموقع أن يعمل على هاتف في قبو ضعيف الإشارة.',
        tr: 'Sahibinin ürünleri ve fiyatları bir geliştiriciyi aramadan değiştirebilmesi, sitenin de sinyalin zayıf olduğu bir bodrumda telefonda çalışması gerekiyordu.',
      },
      solution: {
        en: 'Content-driven pages regenerated on publish, aggressive image optimisation, and a build that ships no client-side framework on the critical path.',
        ar: 'صفحات مبنية على المحتوى تُولَّد عند النشر، وتحسين صور صارم، وبناء لا يشحن أي إطار عمل على المسار الحرج.',
        tr: 'Yayınla birlikte yeniden üretilen içerik odaklı sayfalar, agresif görsel optimizasyonu ve kritik yolda hiçbir istemci tarafı çatı taşımayan bir derleme.',
      },
      outcome: {
        en: 'A site that loads on a weak connection and is updated in seconds.',
        ar: 'موقع يُحمَّل على اتصال ضعيف ويُحدَّث في ثوانٍ.',
        tr: 'Zayıf bağlantıda açılan ve saniyeler içinde güncellenen bir site.',
      },
    },
  },
  {
    slug: 'sho-abalak',
    name: { en: 'Sho Abalak', ar: 'شو عبالك؟', tr: 'Sho Abalak' },
    tagline: {
      en: 'Four apps, one order, one truth',
      ar: 'أربعة تطبيقات، طلب واحد، حقيقة واحدة',
      tr: 'Dört uygulama, tek sipariş, tek doğru',
    },
    summary: {
      en: 'A delivery marketplace for the West Bank: customers order from local restaurants and stores, business owners run their menus and incoming orders, and drivers claim and fulfil deliveries — three mobile apps and an operations console coordinated in real time over one API.',
      ar: 'سوق توصيل في الضفة الغربية: الزبون يطلب من مطاعم ومتاجر منطقته، وصاحب المتجر يدير قائمته وطلباته الواردة، والسائق يلتقط الطلب وينفّذه — ثلاثة تطبيقات موبايل ولوحة تشغيل تتناسق لحظياً عبر واجهة برمجة واحدة.',
      tr: 'Batı Şeria için bir teslimat pazarı: müşteriler yerel restoran ve mağazalardan sipariş verir, işletme sahipleri menülerini ve gelen siparişleri yönetir, kuryeler teslimatları üstlenir ve tamamlar — üç mobil uygulama ve bir operasyon paneli, tek bir API üzerinden gerçek zamanlı eşgüdümle.',
    },
    year: 2026,
    category: 'logistics',
    services: ['web', 'mobile', 'cloud'],
    platforms: ['web', 'mobile', 'admin'],
    stack: ['NestJS', 'PostgreSQL', 'Prisma', 'Redis', 'Socket.IO', 'React Native', 'Expo', 'Next.js', 'Nx'],
    // The customer home screen stands as the cover. It is one of the shots
    // below, uncropped on disk: the card crops it to its own ratio at render
    // time, so there is no second, flattened copy to keep in step with it.
    cover: {
      from: 'oklch(0.72 0.17 45)',
      to: 'oklch(0.45 0.11 155)',
      image: '/work/sho-abalak/customer-home.jpg',
    },
    logo: '/brand/systems/sho-abalak.png',
    shots: {
      shape: 'portrait',
      featured: [
        '/work/sho-abalak/customer-home.jpg',
        '/work/sho-abalak/business-menu.png',
        '/work/sho-abalak/driver-home.png',
      ],
      gallery: [
        '/work/sho-abalak/customer-food.jpg',
        '/work/sho-abalak/customer-stores.jpg',
        '/work/sho-abalak/customer-orders.png',
        '/work/sho-abalak/business-orders.jpg',
        '/work/sho-abalak/business-profile.jpg',
        '/work/sho-abalak/driver-earnings.png',
        '/work/sho-abalak/driver-profile.png',
      ],
    },
    featured: true,
    url: 'https://shoabalak.com',
    caseStudy: {
      challenge: {
        en: 'The hard part is not any single app. It is that four clients and one API must agree on the state of an order at every moment, over unreliable mobile connections, without ever showing two people a different truth.',
        ar: 'الصعوبة ليست في أي تطبيق بمفرده. الصعوبة أن أربعة عملاء وواجهة برمجة واحدة يجب أن يتفقوا على حالة الطلب في كل لحظة، فوق اتصالات موبايل غير موثوقة، دون أن يرى شخصان حقيقتين مختلفتين.',
        tr: 'Zor olan tek bir uygulama değil. Dört istemci ile tek bir API\'nin, güvenilmez mobil bağlantılar üzerinden, her an bir siparişin durumu konusunda hemfikir olması ve iki kişiye asla farklı bir doğru göstermemesi gerekiyor.',
      },
      solution: {
        en: 'Order transitions are validated server-side against an explicit allowed-transitions map, so a driver cannot mark delivered an order that was never picked up. One role-based identity model serves all four clients rather than four auth systems. Live state travels over WebSockets while an app is open; push notifications exist only to bring the user back, never as the source of truth.',
        ar: 'انتقالات حالة الطلب تُتحقَّق على الخادم مقابل خريطة انتقالات مسموحة صريحة، فلا يستطيع سائق أن يعلّم طلباً بأنه سُلِّم ولم يُستلم أصلاً. ونموذج هوية واحد قائم على الأدوار يخدم العملاء الأربعة بدل أربعة أنظمة مصادقة. والحالة اللحظية تنتقل عبر WebSockets ما دام التطبيق مفتوحاً؛ أما الإشعارات فوظيفتها إعادة المستخدم فقط، لا أن تكون مصدر الحقيقة.',
        tr: 'Sipariş geçişleri sunucu tarafında açık bir izinli-geçişler haritasına göre doğrulanır; böylece bir kurye, hiç teslim alınmamış bir siparişi teslim edildi olarak işaretleyemez. Dört ayrı kimlik sistemi yerine rol tabanlı tek bir kimlik modeli dört istemciye birden hizmet eder. Canlı durum, uygulama açıkken WebSocket üzerinden akar; anlık bildirimler yalnızca kullanıcıyı geri getirmek için vardır, asla doğrunun kaynağı olarak değil.',
      },
      outcome: {
        en: 'One monorepo where types flow from the database schema out to every client, and an operations console built for someone actually running the business — live order oversight, business approvals, areas, commissions and financial reports.',
        ar: 'مستودع واحد تتدفّق فيه الأنواع من مخطط قاعدة البيانات إلى كل عميل، ولوحة تشغيل مبنية لمن يدير العملية فعلاً — مراقبة طلبات لحظية، واعتماد متاجر، ومناطق وعمولات وتقارير مالية.',
        tr: 'Tiplerin veritabanı şemasından her istemciye aktığı tek bir monorepo ve işi fiilen yürüten biri için kurulmuş bir operasyon paneli — canlı sipariş gözetimi, işletme onayları, bölgeler, komisyonlar ve finansal raporlar.',
      },
    },
  },
  {
    slug: 'focusoura',
    name: { en: 'FocusOura', ar: 'فوكس أورا', tr: 'FocusOura' },
    tagline: {
      en: 'Study time, turned into progression',
      ar: 'وقت الدراسة، يتحوّل إلى تقدّم',
      tr: 'Çalışma süresini ilerlemeye çeviren',
    },
    summary: {
      en: 'A gamified productivity app that wraps focus sessions in a game loop: you grow a virtual plant, earn currency, spend it on cosmetics, and challenge friends — with AI-generated insights drawn from your own session history.',
      ar: 'تطبيق إنتاجية مُلعَّب يضع جلسات التركيز داخل حلقة لعب: تُنمّي نبتة افتراضية، وتكسب عملة، وتنفقها على مقتنيات، وتتحدّى أصدقاءك — مع رؤى يولّدها الذكاء الاصطناعي من سجل جلساتك أنت.',
      tr: 'Odaklanma seanslarını bir oyun döngüsüyle saran oyunlaştırılmış bir üretkenlik uygulaması: sanal bir bitki büyütür, para kazanır, bunu görsel öğelere harcar ve arkadaşlarınıza meydan okursunuz — kendi seans geçmişinizden çıkarılan yapay zekâ içgörüleriyle.',
    },
    year: 2026,
    category: 'productivity',
    services: ['web', 'saas', 'ai'],
    platforms: ['web', 'mobile'],
    stack: ['React', 'Vite', 'TypeScript', 'Express', 'Drizzle ORM', 'PostgreSQL', 'Google Gemini'],
    cover: {
      from: 'oklch(0.72 0.14 160)',
      to: 'oklch(0.3 0.06 165)',
      image: '/work/focusoura/home.jpg',
    },
    logo: '/brand/systems/focusoura.png',
    shots: {
      shape: 'portrait',
      featured: [
        '/work/focusoura/home.jpg',
        '/work/focusoura/focus-session.jpg',
        '/work/focusoura/garden.jpg',
      ],
      gallery: ['/work/focusoura/profile.jpg', '/work/focusoura/arena.jpg'],
    },
    featured: false,
    url: 'https://focusoura.vercel.app',
    caseStudy: {
      challenge: {
        en: 'Timers do not make people study. Progression does. But a reward only motivates while it feels earned, which means the session data has to be trustworthy and the feedback has to be about the user’s actual behaviour.',
        ar: 'المؤقّتات لا تجعل الناس يدرسون، التقدّم هو ما يفعل. لكن المكافأة لا تحفّز إلا ما دامت تبدو مستحقّة، وهذا يعني أن بيانات الجلسة يجب أن تكون جديرة بالثقة، وأن تكون التغذية الراجعة عن سلوك المستخدم الفعلي.',
        tr: 'İnsanları çalıştıran zamanlayıcılar değil, ilerleme duygusudur. Ama bir ödül yalnızca hak edilmiş hissettirdiği sürece motive eder; bu da seans verisinin güvenilir, geri bildirimin ise kullanıcının gerçek davranışına dair olmasını gerektirir.',
      },
      solution: {
        en: 'A twelve-table schema models users, sessions, plant progression, wallet, cosmetics ownership and friend challenges. Every coin earned or spent is a row rather than a column on the user, so the wallet is auditable and a bug can be traced instead of guessed at. Gemini receives server-side aggregates, not raw rows, which keeps the prompt stable as the dataset grows.',
        ar: 'مخطط من اثني عشر جدولاً ينمذج المستخدمين والجلسات ونمو النبتة والمحفظة وملكية المقتنيات وتحديات الأصدقاء. وكل عملة تُكسب أو تُنفق هي صف لا عمود على المستخدم، فتبقى المحفظة قابلة للتدقيق ويُتتبَّع الخلل بدل تخمينه. ويستقبل Gemini تجميعات مُحضَّرة على الخادم لا صفوفاً خاماً، فيبقى الطلب ثابتاً مهما كبرت البيانات.',
        tr: 'On iki tablolu bir şema kullanıcıları, seansları, bitki ilerlemesini, cüzdanı, görsel öğe sahipliğini ve arkadaş meydan okumalarını modeller. Kazanılan ya da harcanan her jeton, kullanıcı üzerinde bir sütun değil ayrı bir satırdır; böylece cüzdan denetlenebilir olur ve bir hata tahmin edilmek yerine izlenebilir. Gemini ham satırları değil sunucu tarafında toplanmış özetleri alır; bu da veri kümesi büyüdükçe istemi kararlı tutar.',
      },
      outcome: {
        en: 'A reward loop backed by an auditable ledger, and study insights a user can act on rather than a log they have to read.',
        ar: 'حلقة مكافأة يسندها دفتر قابل للتدقيق، ورؤى دراسية يتصرّف المستخدم بناءً عليها بدل سجل عليه أن يقرأه.',
        tr: 'Denetlenebilir bir deftere dayanan bir ödül döngüsü ve kullanıcının okumak zorunda kaldığı bir kayıt değil, üzerine harekete geçebileceği çalışma içgörüleri.',
      },
    },
  },
  {
    slug: 'domi-brand',
    name: { en: 'DOMI BRAND', ar: 'دومي براند', tr: 'DOMI BRAND' },
    tagline: {
      en: 'A boutique that sells in three languages',
      ar: 'بوتيك يبيع بثلاث لغات',
      tr: 'Üç dilde satış yapan bir butik',
    },
    summary: {
      en: 'A storefront for bags, accessories, make-up and skincare, running in Arabic, English and Hebrew with the whole interface mirroring for the two right-to-left ones. Orders are placed without an online payment step: the customer picks a delivery region and the order arrives as a prepared WhatsApp message, paid on delivery.',
      ar: 'متجر للحقائب والإكسسوارات والمكياج والعناية بالبشرة، يعمل بالعربية والإنجليزية والعبرية مع انعكاس الواجهة بالكامل في اللغتين من اليمين إلى اليسار. يُرسَل الطلب دون خطوة دفع إلكتروني: تختار الزبونة منطقة التوصيل فيصل الطلب رسالة واتساب جاهزة، والدفع عند الاستلام.',
      tr: 'Çanta, aksesuar, makyaj ve cilt bakımı için bir vitrin; Arapça, İngilizce ve İbranice çalışıyor ve sağdan sola olan iki dilde arayüzün tamamı yön değiştiriyor. Siparişler çevrimiçi ödeme adımı olmadan veriliyor: müşteri teslimat bölgesini seçiyor, sipariş hazır bir WhatsApp mesajı olarak ulaşıyor ve ödeme teslimatta yapılıyor.',
    },
    year: 2026,
    category: 'ecommerce',
    services: ['web', 'cloud'],
    platforms: ['web', 'admin'],
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    cover: { from: 'oklch(0.48 0.13 330)', to: 'oklch(0.34 0.09 315)', image: '/work/domi-brand.webp' },
    featured: true,
    url: 'https://domi-brand.vercel.app',
    caseStudy: {
      challenge: {
        en: 'Three languages, two of which run right to left, over one catalogue — every product name, description and colour exists three times and has to stay in step. And the shop had to take orders without a payment gateway, which is a real constraint here rather than a missing feature: the customer pays on delivery, so the order has to reach the owner in a form she can act on immediately.',
        ar: 'ثلاث لغات، اثنتان منها من اليمين إلى اليسار، فوق كتالوج واحد — كل اسم منتج ووصف ولون موجود ثلاث مرات ويجب أن يبقى متطابقاً. وكان على المتجر أن يستقبل الطلبات دون بوابة دفع، وهذا قيد حقيقي هنا لا ميزة ناقصة: الدفع عند الاستلام، فيجب أن يصل الطلب إلى صاحبة المتجر بصيغة تستطيع التصرّف بها فوراً.',
        tr: 'Tek bir katalog üzerinde üç dil, ikisi sağdan sola — her ürün adı, açıklaması ve rengi üç kez var ve birbiriyle uyumlu kalmak zorunda. Dükkânın ayrıca ödeme altyapısı olmadan sipariş alması gerekiyordu; bu eksik bir özellik değil, buradaki gerçek bir kısıt: müşteri teslimatta ödüyor, dolayısıyla siparişin sahibine hemen harekete geçebileceği bir biçimde ulaşması gerekiyor.',
      },
      solution: {
        en: 'The product record carries all three languages together, so a product is written once in the admin console and never drifts between them; direction is a property of the page, not a stylesheet fork. Checkout and basket sit on one screen, the delivery fee follows the region chosen, and submitting composes a WhatsApp message that already contains the items, the total and the address. The console is entirely in Arabic: products, orders and their status, coupons, delivery rates, banners and contact details.',
        ar: 'سجل المنتج يحمل اللغات الثلاث معاً، فيُكتب المنتج مرة واحدة في لوحة التحكم ولا يتفرّق بينها؛ والاتجاه خاصية في الصفحة لا نسخة ثانية من التنسيقات. السلة والدفع في شاشة واحدة، ورسوم التوصيل تتبع المنطقة المختارة، والإرسال يبني رسالة واتساب تحتوي الأصناف والمجموع والعنوان. ولوحة التحكم بالعربية بالكامل: المنتجات والطلبات وحالاتها والكوبونات ورسوم التوصيل والبانرات وبيانات التواصل.',
        tr: 'Ürün kaydı üç dili birlikte taşır; böylece ürün yönetim panelinde bir kez yazılır ve diller arasında asla ayrışmaz; yön, ikinci bir stil dosyası değil sayfanın bir özelliğidir. Sepet ve ödeme tek ekranda durur, teslimat ücreti seçilen bölgeyi izler ve gönderim, ürünleri, toplamı ve adresi hâlihazırda içeren bir WhatsApp mesajı oluşturur. Panel tümüyle Arapçadır: ürünler, siparişler ve durumları, kuponlar, teslimat ücretleri, bannerlar ve iletişim bilgileri.',
      },
      outcome: {
        en: 'A live boutique its owner runs herself, in three languages, with orders arriving where she already answers her customers.',
        ar: 'بوتيك يعمل وتديره صاحبته بنفسها، بثلاث لغات، والطلبات تصلها حيث تردّ على زبوناتها أصلاً.',
        tr: 'Sahibinin kendi yönettiği, üç dilde çalışan ve siparişlerin zaten müşterilerine yanıt verdiği yere düştüğü canlı bir butik.',
      },
    },
  },
  {
    slug: 'al-goat',
    name: { en: 'AL GOAT SPORTS', ar: 'آل جوت سبورتس', tr: 'AL GOAT SPORTS' },
    tagline: {
      en: 'Football shirts, and a game that pays for them',
      ar: 'قمصان كرة قدم، ولعبة تدفع ثمنها',
      tr: 'Futbol formaları ve onların parasını ödeyen bir oyun',
    },
    summary: {
      en: 'A football shirt store in Arabic and English: player and fan versions, national teams, retro reproductions, kids and shorts. Built around a loyalty idea rather than a coupon code — an arcade game on the storefront earns points that come off the next order.',
      ar: 'متجر قمصان كرة قدم بالعربية والإنجليزية: نسخ اللاعبين والجمهور، والمنتخبات، وإعادة إنتاج الكلاسيكيات، والأطفال والشورتات. مبني حول فكرة ولاء لا حول كود خصم — لعبة داخل المتجر تكسب نقاطاً تُخصم من الطلب التالي.',
      tr: 'Arapça ve İngilizce bir futbol forması mağazası: oyuncu ve taraftar versiyonları, milli takımlar, retro üretimler, çocuk ürünleri ve şortlar. Bir indirim kodu yerine bir sadakat fikri etrafında kurulu — mağazadaki bir oyun, bir sonraki siparişten düşülen puanlar kazandırıyor.',
    },
    year: 2026,
    category: 'ecommerce',
    services: ['web', 'cloud'],
    platforms: ['web', 'admin'],
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    cover: { from: 'oklch(0.55 0.15 150)', to: 'oklch(0.32 0.08 160)', image: '/work/al-goat.webp' },
    featured: true,
    url: 'https://goat-sports.vercel.app',
    caseStudy: {
      challenge: {
        en: 'A shirt store competes with every other shirt store on price, and discounting to win that fight costs margin on every order. The question was how to give a customer a reason to come back that does not simply cost the shop money, on a catalogue where the same shirt exists as a player cut, a fan cut, a retro reproduction and a kids size.',
        ar: 'متجر القمصان ينافس كل متجر قمصان آخر على السعر، والخصم للفوز بهذه المعركة يكلّف هامشاً في كل طلب. والسؤال كان: كيف نعطي الزبون سبباً للعودة لا يكلّف المتجر مالاً ببساطة، فوق كتالوج يوجد فيه القميص نفسه كنسخة لاعب ونسخة جمهور وإعادة إنتاج كلاسيكية ومقاس أطفال.',
        tr: 'Bir forma mağazası fiyat üzerinden diğer tüm forma mağazalarıyla yarışır ve bu yarışı indirimle kazanmak her siparişte kâr marjına mal olur. Soru şuydu: aynı formanın oyuncu kesimi, taraftar kesimi, retro üretimi ve çocuk bedeni olarak var olduğu bir katalogda, müşteriye mağazaya doğrudan para kaybettirmeyen bir geri dönüş nedeni nasıl verilir.',
      },
      solution: {
        en: 'Points are earned by playing rather than by spending, so the reward costs attention instead of margin, and the balance is a ledger the shop can audit rather than a discount rule nobody can trace. The catalogue models a shirt once and its versions as variants, so a club added for one cut appears in all of them. The account area carries points, favourites, orders and tracking in one place, and the storefront runs in Arabic and English with the layout mirroring for Arabic.',
        ar: 'النقاط تُكتسب باللعب لا بالإنفاق، فيكلّف الحافز انتباهاً لا هامشاً، ويبقى الرصيد دفتراً يستطيع المتجر تدقيقه لا قاعدة خصم لا يتتبّعها أحد. والكتالوج يمثّل القميص مرة واحدة ونسخه كمتغيّرات، فالنادي الذي يُضاف لقَصّة واحدة يظهر فيها كلها. وصفحة الحساب تجمع النقاط والمفضلة والطلبات والتتبّع في مكان واحد، والمتجر يعمل بالعربية والإنجليزية مع انعكاس التخطيط في العربية.',
        tr: 'Puanlar harcayarak değil oynayarak kazanılır; böylece ödül kâr marjına değil dikkate mal olur ve bakiye, kimsenin izleyemediği bir indirim kuralı değil mağazanın denetleyebileceği bir defter olarak kalır. Katalog bir formayı bir kez, versiyonlarını ise varyant olarak modeller; tek bir kesim için eklenen bir kulüp hepsinde görünür. Hesap alanı puanları, favorileri, siparişleri ve takibi tek yerde toplar; mağaza Arapça ve İngilizce çalışır ve Arapçada düzen yön değiştirir.',
      },
      outcome: {
        en: 'A store with a reason to return built into it, sixty-three products live, and a points balance the shop can account for line by line.',
        ar: 'متجر فيه سبب للعودة مبني في صلبه، وثلاثة وستون منتجاً تعمل، ورصيد نقاط يستطيع المتجر محاسبته سطراً سطراً.',
        tr: 'İçine geri dönmek için bir neden kurulmuş bir mağaza, yayında altmış üç ürün ve mağazanın satır satır hesabını verebileceği bir puan bakiyesi.',
      },
    },
  },
  {
    slug: 'rufoof',
    name: { en: 'Rufoof', ar: 'رُفوف', tr: 'Rufoof' },
    tagline: {
      en: 'A Saudi store that takes card payments',
      ar: 'متجر سعودي يقبل الدفع بالبطاقة',
      tr: 'Kartla ödeme alan bir Suudi mağazası',
    },
    summary: {
      en: 'A general store for the Saudi market: skincare, home tools, children’s toys, perfume and incense, electronics and accessories. Unlike the other storefronts here it settles the payment online, through a licensed gateway, with prices quoted inclusive of VAT.',
      ar: 'متجر عام للسوق السعودي: عناية بالبشرة، وأدوات منزلية، وألعاب أطفال، وعطور وبخور، وإلكترونيات وإكسسوارات. وبخلاف بقية المتاجر هنا، يُتمّ الدفع إلكترونياً عبر بوابة مرخّصة، والأسعار معروضة شاملة ضريبة القيمة المضافة.',
      tr: 'Suudi pazarı için genel bir mağaza: cilt bakımı, ev gereçleri, çocuk oyuncakları, parfüm ve buhur, elektronik ve aksesuar. Buradaki diğer vitrinlerden farklı olarak ödemeyi çevrimiçi, lisanslı bir altyapı üzerinden tahsil eder ve fiyatları KDV dâhil gösterir.',
    },
    year: 2026,
    category: 'ecommerce',
    services: ['web', 'cloud'],
    platforms: ['web', 'admin'],
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    cover: { from: 'oklch(0.42 0.08 160)', to: 'oklch(0.28 0.05 155)', image: '/work/rufoof.webp' },
    featured: true,
    url: 'https://rufoof-three.vercel.app',
    caseStudy: {
      challenge: {
        en: 'Selling into Saudi Arabia is not the same as taking an order on WhatsApp. The price a customer sees has to include VAT, the shipping charge has to appear before payment rather than after it, and the money has to move through a licensed gateway — which means the checkout is bound by rules the shop does not get to choose.',
        ar: 'البيع في السوق السعودي ليس كاستقبال طلب على واتساب. السعر الذي يراه الزبون يجب أن يشمل الضريبة، ورسوم الشحن يجب أن تظهر قبل الدفع لا بعده، والمال يجب أن يمرّ عبر بوابة مرخّصة — أي أن صفحة الدفع محكومة بقواعد لا يختارها المتجر.',
        tr: 'Suudi Arabistan’a satış yapmak, WhatsApp’tan sipariş almakla aynı şey değil. Müşterinin gördüğü fiyat KDV’yi içermeli, kargo ücreti ödemeden sonra değil önce görünmeli ve para lisanslı bir altyapı üzerinden geçmeli — yani ödeme adımı, mağazanın seçemeyeceği kurallarla bağlı.',
      },
      solution: {
        en: 'Prices are stored and displayed inclusive of VAT rather than adding it at the last step, so the figure on the card is the figure that was promised on the shelf. Payment runs through Moyasar, which carries Mada, Visa, Mastercard and Apple Pay behind one integration instead of four. Five departments are modelled as one catalogue rather than five mini-stores, so search and basket work across them.',
        ar: 'الأسعار تُخزَّن وتُعرض شاملة الضريبة بدل إضافتها في الخطوة الأخيرة، فيكون الرقم على البطاقة هو الرقم الموعود على الرف. والدفع يمرّ عبر ميسر، التي تحمل مدى وفيزا وماستركارد وآبل باي خلف تكامل واحد لا أربعة. والأقسام الخمسة ممثَّلة ككتالوج واحد لا كخمسة متاجر صغيرة، فيعمل البحث والسلة عبرها جميعاً.',
        tr: 'Fiyatlar son adımda eklenmek yerine KDV dâhil saklanır ve gösterilir; böylece karttan çekilen tutar rafta vaat edilen tutardır. Ödeme, dört ayrı entegrasyon yerine Mada, Visa, Mastercard ve Apple Pay’i tek bir entegrasyonun arkasında taşıyan Moyasar üzerinden geçer. Beş bölüm, beş mini mağaza olarak değil tek bir katalog olarak modellenir; böylece arama ve sepet hepsinde birlikte çalışır.',
      },
      outcome: {
        en: 'A store that can charge a Saudi card, quote a final price before checkout, and carry five unrelated departments without feeling like five sites.',
        ar: 'متجر يستطيع تحصيل بطاقة سعودية، ويعرض السعر النهائي قبل الدفع، ويحمل خمسة أقسام غير مترابطة دون أن يبدو خمسة مواقع.',
        tr: 'Suudi bir kartı tahsil edebilen, ödeme öncesinde nihai fiyatı gösteren ve birbiriyle ilgisiz beş bölümü beş ayrı site gibi hissettirmeden taşıyan bir mağaza.',
      },
    },
  },
];

export const projectCategories: {
  id: ProjectCategory | 'all';
  label: Localized;
}[] = [
  { id: 'all', label: { en: 'All work', ar: 'كل الأعمال', tr: 'Tüm çalışmalar' } },
  { id: 'ecommerce', label: { en: 'E-commerce', ar: 'تجارة إلكترونية', tr: 'E-ticaret' } },
  { id: 'erp', label: { en: 'ERP & Inventory', ar: 'مخزون و ERP', tr: 'ERP ve stok' } },
  { id: 'logistics', label: { en: 'Logistics', ar: 'لوجستيات', tr: 'Lojistik' } },
  { id: 'travel', label: { en: 'Travel', ar: 'سفر', tr: 'Seyahat' } },
  { id: 'hospitality', label: { en: 'Hospitality', ar: 'ضيافة', tr: 'Konaklama' } },
  { id: 'healthcare', label: { en: 'Healthcare', ar: 'صحة', tr: 'Sağlık' } },
  { id: 'productivity', label: { en: 'Productivity', ar: 'إنتاجية', tr: 'Üretkenlik' } },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export const featuredProjects = projects.filter((project) => project.featured);

/** Projects with a public demo a visitor can open right now. */
export const demoProjects = projects.filter((project) => project.demo);

import type { Localized, Project, ProjectCategory } from './types';

export const projects: Project[] = [
  {
    slug: 'glamora',
    name: { en: 'Glamora', ar: 'جلامورا' },
    tagline: {
      en: 'Beauty commerce, storefront to doorstep',
      ar: 'تجارة التجميل، من المتجر إلى باب البيت',
    },
    summary: {
      en: 'A complete beauty and cosmetics commerce ecosystem: a conversion-tuned storefront, a companion mobile app, and an operations console that keeps catalogue, stock and orders in a single source of truth.',
      ar: 'منظومة تجارة إلكترونية متكاملة لمستحضرات التجميل: متجر مُحسَّن للتحويل، وتطبيق موبايل مرافق، ولوحة تشغيل تُبقي الكتالوج والمخزون والطلبات في مصدر حقيقة واحد.',
    },
    year: 2025,
    category: 'ecommerce',
    services: ['web', 'mobile', 'cloud'],
    platforms: ['web', 'mobile', 'admin'],
    stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Tailwind CSS', 'Vercel'],
    cover: { from: 'oklch(0.62 0.19 340)', to: 'oklch(0.52 0.16 300)', image: '/work/glamora.webp' },
    logo: '/brand/systems/glamora.png',
    featured: true,
    demo: {
      href: 'https://ysweety666-crypto.github.io/codeoura-demos/glamora/',
      surface: { en: 'Operations console', ar: 'لوحة التشغيل' },
    },
    caseStudy: {
      challenge: {
        en: 'Catalogue, stock and fulfilment lived in disconnected tools. Every price change had to be repeated three times, and overselling was routine.',
        ar: 'كان الكتالوج والمخزون والتنفيذ في أدوات منفصلة. كل تغيير سعر يجب أن يتكرر ثلاث مرات، والبيع الزائد أمر معتاد.',
      },
      solution: {
        en: 'We modelled the catalogue once and projected it onto every surface. Stock reservations are transactional, so a cart hold and a warehouse pick can never disagree. The mobile app consumes the same typed API as the web storefront.',
        ar: 'نمذجنا الكتالوج مرة واحدة وعرضناه على كل الواجهات. حجز المخزون معامَلاتي، فلا يمكن أن يختلف الحجز في السلة عن السحب من المستودع. وتطبيق الموبايل يستهلك نفس واجهة البرمجة المكتوبة بالأنواع التي يستهلكها المتجر.',
      },
      outcome: {
        en: 'One catalogue, three surfaces, no duplicated data entry, and a storefront rendered at the edge.',
        ar: 'كتالوج واحد، وثلاث واجهات، دون إدخال بيانات مكرر، ومتجر يُعرَض من حافة الشبكة.',
      },
    },
  },
  {
    slug: 'couponak',
    name: { en: 'Couponak', ar: 'كوبونك' },
    tagline: {
      en: 'Inventory and merchant operations at scale',
      ar: 'إدارة مخزون وعمليات تجّار على نطاق واسع',
    },
    summary: {
      en: 'An inventory and merchant management platform pairing a real-time stock engine with a manager console for onboarding, catalogue control and reconciliation across multiple outlets.',
      ar: 'منصة إدارة مخزون وتجّار تجمع محرّك مخزون لحظي مع لوحة إدارة للتسجيل والتحكم بالكتالوج والتسوية عبر عدة فروع.',
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
      surface: { en: 'Warehouse system', ar: 'نظام المستودعات' },
    },
    caseStudy: {
      challenge: {
        en: 'Multi-outlet merchants needed live stock accuracy without giving every branch write access to the master catalogue.',
        ar: 'التجّار متعددو الفروع يحتاجون دقة مخزون لحظية دون منح كل فرع صلاحية الكتابة على الكتالوج الأساسي.',
      },
      solution: {
        en: 'A role-scoped permission model with row-level security, an append-only stock ledger that stays auditable, and cached read models so dashboards remain instant under load.',
        ar: 'نموذج صلاحيات محدَّد بالأدوار مع أمان على مستوى الصف، ودفتر مخزون يُضاف إليه فقط ويبقى قابلاً للتدقيق، ونماذج قراءة مخبَّأة تُبقي اللوحات فورية تحت الحمل.',
      },
      outcome: {
        en: 'Every stock movement is traceable to an actor and a timestamp, and reconciliation stopped being a monthly fire drill.',
        ar: 'كل حركة مخزون قابلة للتتبّع إلى فاعل ووقت، والتسوية لم تعد تمرين إطفاء حريق شهري.',
      },
    },
  },
  {
    slug: 'aber',
    name: { en: 'Aber', ar: 'عابر' },
    tagline: {
      en: 'Strangers carry each other’s parcels, safely',
      ar: 'طرود يحملها المسافرون، بأمان',
    },
    summary: {
      en: 'A peer-to-peer delivery marketplace: senders post a parcel, travelling strangers bid to carry it, and escrow plus scan-verified custody make the handover safe between two people who have never met. Web, mobile and an operations panel over one shared database.',
      ar: 'سوق توصيل بين الأفراد: المُرسِل ينشر طرداً، ومسافرون على الطريق نفسه يزايدون لحمله، ويضمن الحجز المالي ومسح الباركود سلامة التسليم بين شخصين لم يلتقيا. ويب وموبايل ولوحة تشغيل على قاعدة بيانات واحدة.',
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
      surface: { en: 'Operations panel', ar: 'لوحة التشغيل' },
    },
    caseStudy: {
      challenge: {
        en: 'The whole model rests on a stranger holding something valuable that is not theirs. Trust cannot be asked for. It has to be built into how money and custody move, and it has to survive the day someone claims a parcel never arrived.',
        ar: 'النموذج كله قائم على أن يحمل غريبٌ شيئاً ثميناً ليس له. الثقة لا تُطلب. تُبنى في طريقة انتقال المال والعهدة، ويجب أن تصمد يوم يقول أحدهم إن الطرد لم يصل.',
      },
      solution: {
        en: 'Money is held in escrow and only released when a delivery barcode is scanned, so neither side can move first and lose. Every handover is a scan, which turns custody into a timestamped chain rather than a claim. Disputes freeze the parcel in its prior state and go to a human, and cash payments leave the commission as a tracked debt so the platform is never out of pocket.',
        ar: 'المال محجوز ولا يُفرَج عنه إلا بمسح باركود التسليم، فلا يُضطر أي طرف أن يتقدّم أولاً ويخسر. وكل تسليم عملية مسح، فتصير العهدة سلسلة موثّقة بالوقت لا ادّعاءً. والنزاع يجمّد الطرد على حالته السابقة ويُحال إلى قرار بشري، والدفع نقداً يترك العمولة ديناً متتبَّعاً فلا تخسر المنصة شيئاً.',
      },
      outcome: {
        en: 'A marketplace where the safe move is also the easy one, and where every disputed delivery has a scan history to decide it.',
        ar: 'سوق يصير فيه التصرّف الآمن هو الأسهل، وكل تسليم متنازَع عليه له سجل مسح يحسمه.',
      },
    },
  },
  {
    slug: 'babunec',
    name: { en: 'Babunec Travel', ar: 'بابونيك للسفر' },
    tagline: {
      en: 'Trip discovery to confirmed booking',
      ar: 'من اكتشاف الرحلة إلى حجز مؤكَّد',
    },
    summary: {
      en: 'A travel platform covering package discovery, availability and booking, with an operator back office for inventory, pricing windows and reservation management.',
      ar: 'منصة سفر تغطي اكتشاف الباقات والتوفّر والحجز، مع مكتب خلفي للمشغّل لإدارة المخزون ونوافذ التسعير والحجوزات.',
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
      surface: { en: 'Agency back office', ar: 'مكتب الوكالة الخلفي' },
    },
    caseStudy: {
      challenge: {
        en: 'Seasonal pricing and finite seat inventory made naive booking flows prone to double-selling under concurrent load.',
        ar: 'التسعير الموسمي والمقاعد المحدودة جعلا تدفّقات الحجز الساذجة عرضة للبيع المزدوج تحت الحمل المتزامن.',
      },
      solution: {
        en: 'Availability resolves inside a transaction with a short-lived hold, and pricing windows are evaluated server-side so a stale client can never lock in an expired rate.',
        ar: 'التوفّر يُحسَم داخل معاملة مع حجز قصير الأجل، ونوافذ التسعير تُقيَّم على الخادم حتى لا يستطيع عميل قديم تثبيت سعر منتهٍ.',
      },
      outcome: {
        en: 'Bookings that hold up under concurrency, and an operator console that does not need a developer to change a price.',
        ar: 'حجوزات تصمد تحت التزامن، ولوحة مشغّل لا تحتاج مبرمجاً لتغيير سعر.',
      },
    },
  },
  {
    slug: 'firuze',
    name: { en: 'Firuze', ar: 'فيروز' },
    tagline: {
      en: 'Hospitality operations and digital menu',
      ar: 'عمليات ضيافة ومنيو رقمي',
    },
    summary: {
      en: 'A two-part hospitality system: a QR-served digital menu built for sub-second loads on venue Wi-Fi, and a management system covering items, categories, pricing and daily operations.',
      ar: 'نظام ضيافة من جزأين: منيو رقمي يُقدَّم عبر رمز QR ومبني ليُحمَّل في أقل من ثانية على شبكة المكان، ونظام إدارة يغطي الأصناف والفئات والتسعير والعمليات اليومية.',
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
      surface: { en: 'Operations system', ar: 'نظام التشغيل' },
    },
    caseStudy: {
      challenge: {
        en: 'A guest scanning a QR code at a table will abandon a menu that takes three seconds to appear on congested venue Wi-Fi.',
        ar: 'الضيف الذي يمسح رمز QR على الطاولة سيترك منيو يستغرق ثلاث ثوانٍ ليظهر على شبكة مزدحمة.',
      },
      solution: {
        en: 'The menu is statically generated and revalidated on change, images are served as AVIF at exact display sizes, and the critical path ships almost no JavaScript.',
        ar: 'المنيو مولَّد بشكل ساكن ويُحدَّث عند التغيير، والصور تُقدَّم بصيغة AVIF بمقاسات العرض تماماً، والمسار الحرج لا يشحن جافاسكربت تقريباً.',
      },
      outcome: {
        en: 'A menu that opens before the guest puts their phone down.',
        ar: 'منيو يفتح قبل أن يضع الضيف هاتفه.',
      },
    },
  },
  {
    slug: 'cleveland-medicals',
    name: { en: 'Cleveland Medicals', ar: 'كليفلاند ميديكالز' },
    tagline: {
      en: 'Patient records, files and billing',
      ar: 'سجلات المرضى والملفات والفوترة',
    },
    summary: {
      en: 'A clinical management platform handling patient records, medical file storage, receipts and billing, with access controls appropriate to health data.',
      ar: 'منصة إدارة عيادات تتعامل مع سجلات المرضى وتخزين الملفات الطبية والإيصالات والفوترة، مع ضوابط وصول تليق ببيانات صحية.',
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
      surface: { en: 'Patient-facing platform', ar: 'واجهة المرضى' },
    },
    caseStudy: {
      challenge: {
        en: 'Medical files and receipts are sensitive, often large, and must stay retrievable for years without bloating the application database.',
        ar: 'الملفات الطبية والإيصالات حسّاسة وغالباً كبيرة، ويجب أن تبقى قابلة للاسترجاع لسنوات دون أن تُثقل قاعدة بيانات التطبيق.',
      },
      solution: {
        en: 'Binary assets moved to object storage behind signed, expiring URLs; the database keeps only metadata and relationships, so queries stay fast as the archive grows.',
        ar: 'نُقلت الأصول الثنائية إلى تخزين كائنات خلف روابط موقَّعة تنتهي صلاحيتها؛ وتحتفظ قاعدة البيانات بالبيانات الوصفية والعلاقات فقط، فتبقى الاستعلامات سريعة مع نمو الأرشيف.',
      },
      outcome: {
        en: 'Storage scales independently of the database, and no file is reachable without an authorised, time-boxed link.',
        ar: 'يتوسّع التخزين باستقلال عن قاعدة البيانات، ولا يمكن الوصول إلى أي ملف دون رابط مصرَّح ومحدَّد بوقت.',
      },
    },
  },
  {
    slug: 'cafe-albaraa',
    name: { en: 'Cafe Albaraa', ar: 'كافيه البراء' },
    tagline: {
      en: 'Café presence and ordering',
      ar: 'حضور رقمي وطلبات للكافيه',
    },
    summary: {
      en: 'A lightweight digital presence and ordering surface for a café. Fast on mobile networks, simple to update, and bilingual from the first screen.',
      ar: 'حضور رقمي خفيف وواجهة طلبات لكافيه. سريعة على شبكات الموبايل، سهلة التحديث، وثنائية اللغة من الشاشة الأولى.',
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
      surface: { en: 'Management system', ar: 'نظام الإدارة' },
    },
    caseStudy: {
      challenge: {
        en: 'The owner needed to change items and prices without calling a developer, and the site had to work on a phone in a low-signal basement.',
        ar: 'أراد صاحب المحل تغيير الأصناف والأسعار دون الاتصال بمبرمج، وكان على الموقع أن يعمل على هاتف في قبو ضعيف الإشارة.',
      },
      solution: {
        en: 'Content-driven pages regenerated on publish, aggressive image optimisation, and a build that ships no client-side framework on the critical path.',
        ar: 'صفحات مبنية على المحتوى تُولَّد عند النشر، وتحسين صور صارم، وبناء لا يشحن أي إطار عمل على المسار الحرج.',
      },
      outcome: {
        en: 'A site that loads on a weak connection and is updated in seconds.',
        ar: 'موقع يُحمَّل على اتصال ضعيف ويُحدَّث في ثوانٍ.',
      },
    },
  },
  {
    slug: 'sho-abalak',
    name: { en: 'Sho Abalak', ar: 'شو عبالك؟' },
    tagline: {
      en: 'Four apps, one order, one truth',
      ar: 'أربعة تطبيقات، طلب واحد، حقيقة واحدة',
    },
    summary: {
      en: 'A delivery marketplace for the West Bank: customers order from local restaurants and stores, business owners run their menus and incoming orders, and drivers claim and fulfil deliveries — three mobile apps and an operations console coordinated in real time over one API.',
      ar: 'سوق توصيل في الضفة الغربية: الزبون يطلب من مطاعم ومتاجر منطقته، وصاحب المتجر يدير قائمته وطلباته الواردة، والسائق يلتقط الطلب وينفّذه — ثلاثة تطبيقات موبايل ولوحة تشغيل تتناسق لحظياً عبر واجهة برمجة واحدة.',
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
      },
      solution: {
        en: 'Order transitions are validated server-side against an explicit allowed-transitions map, so a driver cannot mark delivered an order that was never picked up. One role-based identity model serves all four clients rather than four auth systems. Live state travels over WebSockets while an app is open; push notifications exist only to bring the user back, never as the source of truth.',
        ar: 'انتقالات حالة الطلب تُتحقَّق على الخادم مقابل خريطة انتقالات مسموحة صريحة، فلا يستطيع سائق أن يعلّم طلباً بأنه سُلِّم ولم يُستلم أصلاً. ونموذج هوية واحد قائم على الأدوار يخدم العملاء الأربعة بدل أربعة أنظمة مصادقة. والحالة اللحظية تنتقل عبر WebSockets ما دام التطبيق مفتوحاً؛ أما الإشعارات فوظيفتها إعادة المستخدم فقط، لا أن تكون مصدر الحقيقة.',
      },
      outcome: {
        en: 'One monorepo where types flow from the database schema out to every client, and an operations console built for someone actually running the business — live order oversight, business approvals, areas, commissions and financial reports.',
        ar: 'مستودع واحد تتدفّق فيه الأنواع من مخطط قاعدة البيانات إلى كل عميل، ولوحة تشغيل مبنية لمن يدير العملية فعلاً — مراقبة طلبات لحظية، واعتماد متاجر، ومناطق وعمولات وتقارير مالية.',
      },
    },
  },
  {
    slug: 'focusoura',
    name: { en: 'FocusOura', ar: 'فوكس أورا' },
    tagline: {
      en: 'Study time, turned into progression',
      ar: 'وقت الدراسة، يتحوّل إلى تقدّم',
    },
    summary: {
      en: 'A gamified productivity app that wraps focus sessions in a game loop: you grow a virtual plant, earn currency, spend it on cosmetics, and challenge friends — with AI-generated insights drawn from your own session history.',
      ar: 'تطبيق إنتاجية مُلعَّب يضع جلسات التركيز داخل حلقة لعب: تُنمّي نبتة افتراضية، وتكسب عملة، وتنفقها على مقتنيات، وتتحدّى أصدقاءك — مع رؤى يولّدها الذكاء الاصطناعي من سجل جلساتك أنت.',
    },
    year: 2026,
    category: 'productivity',
    services: ['web', 'saas', 'ai'],
    platforms: ['web'],
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
      },
      solution: {
        en: 'A twelve-table schema models users, sessions, plant progression, wallet, cosmetics ownership and friend challenges. Every coin earned or spent is a row rather than a column on the user, so the wallet is auditable and a bug can be traced instead of guessed at. Gemini receives server-side aggregates, not raw rows, which keeps the prompt stable as the dataset grows.',
        ar: 'مخطط من اثني عشر جدولاً ينمذج المستخدمين والجلسات ونمو النبتة والمحفظة وملكية المقتنيات وتحديات الأصدقاء. وكل عملة تُكسب أو تُنفق هي صف لا عمود على المستخدم، فتبقى المحفظة قابلة للتدقيق ويُتتبَّع الخلل بدل تخمينه. ويستقبل Gemini تجميعات مُحضَّرة على الخادم لا صفوفاً خاماً، فيبقى الطلب ثابتاً مهما كبرت البيانات.',
      },
      outcome: {
        en: 'A reward loop backed by an auditable ledger, and study insights a user can act on rather than a log they have to read.',
        ar: 'حلقة مكافأة يسندها دفتر قابل للتدقيق، ورؤى دراسية يتصرّف المستخدم بناءً عليها بدل سجل عليه أن يقرأه.',
      },
    },
  },
  {
    slug: 'arjwan-istanbul',
    name: { en: 'Arjwan Istanbul', ar: 'أرجوان إسطنبول' },
    tagline: {
      en: 'A perfume house that takes real orders',
      ar: 'دار عطور تستقبل طلبات حقيقية',
    },
    summary: {
      en: 'A commercial storefront for a perfume brand — catalogue, product pages and checkout — designed mobile-first for traffic arriving from social links, and pre-rendered so the store stays fast and cheap to run.',
      ar: 'متجر تجاري لعلامة عطور — كتالوج وصفحات منتج وإتمام شراء — مصمَّم للهاتف أولاً لأن الزيارات تأتي من روابط التواصل، ومُولَّد مسبقاً ليبقى المتجر سريعاً وقليل الكلفة.',
    },
    year: 2026,
    category: 'ecommerce',
    services: ['web', 'cloud'],
    platforms: ['web'],
    stack: ['Next.js', 'Tailwind CSS', 'JavaScript', 'Vercel'],
    cover: {
      from: 'oklch(0.55 0.18 15)',
      to: 'oklch(0.38 0.12 330)',
      image: '/work/arjwan-istanbul/catalog.jpg',
    },
    logo: '/brand/systems/arjwan-istanbul.png',
    shots: {
      shape: 'landscape',
      featured: [
        '/work/arjwan-istanbul/catalog.jpg',
        '/work/arjwan-istanbul/product.jpg',
      ],
      gallery: [
        '/work/arjwan-istanbul/best-sellers.jpg',
        '/work/arjwan-istanbul/cart.jpg',
      ],
    },
    featured: false,
    url: 'https://arjwan.store',
    caseStudy: {
      challenge: {
        en: 'This is a working business, not a portfolio mockup. The site takes real orders, which changes the priorities: the catalogue has to stay editable by a non-developer, checkout has to work on a phone held in one hand, and the brand has to look expensive without a photographer’s budget.',
        ar: 'هذا نشاط تجاري قائم لا نموذج لمعرض أعمال. الموقع يستقبل طلبات حقيقية، وهذا يغيّر الأولويات: الكتالوج يجب أن يبقى قابلاً للتعديل من غير مبرمج، وإتمام الشراء يجب أن يعمل على هاتف بيد واحدة، والعلامة يجب أن تبدو فاخرة دون ميزانية مصوّر.',
      },
      solution: {
        en: 'The phone layout was designed first and the desktop layout derived from it, because the majority of traffic is phones arriving from social links. Catalogue pages are pre-rendered, so the store stays fast at low traffic and costs almost nothing to keep online.',
        ar: 'صُمِّم تخطيط الهاتف أولاً واشتُقّ منه تخطيط سطح المكتب، لأن أغلب الزيارات هواتف قادمة من روابط التواصل. وصفحات الكتالوج مُولَّدة مسبقاً، فيبقى المتجر سريعاً عند الزيارات القليلة ولا يكاد يكلّف شيئاً ليبقى متاحاً.',
      },
      outcome: {
        en: 'A storefront selling under its own domain, with a catalogue the owner updates and a checkout that holds up on a phone.',
        ar: 'متجر يبيع تحت نطاقه الخاص، بكتالوج يحدّثه صاحبه وإتمام شراء يصمد على الهاتف.',
      },
    },
  },
  {
    slug: 'domi-brand',
    name: { en: 'DOMI BRAND', ar: 'دومي براند' },
    tagline: {
      en: 'A boutique that sells in three languages',
      ar: 'بوتيك يبيع بثلاث لغات',
    },
    summary: {
      en: 'A storefront for bags, accessories, make-up and skincare, running in Arabic, English and Hebrew with the whole interface mirroring for the two right-to-left ones. Orders are placed without an online payment step: the customer picks a delivery region and the order arrives as a prepared WhatsApp message, paid on delivery.',
      ar: 'متجر للحقائب والإكسسوارات والمكياج والعناية بالبشرة، يعمل بالعربية والإنجليزية والعبرية مع انعكاس الواجهة بالكامل في اللغتين من اليمين إلى اليسار. يُرسَل الطلب دون خطوة دفع إلكتروني: تختار الزبونة منطقة التوصيل فيصل الطلب رسالة واتساب جاهزة، والدفع عند الاستلام.',
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
      },
      solution: {
        en: 'The product record carries all three languages together, so a product is written once in the admin console and never drifts between them; direction is a property of the page, not a stylesheet fork. Checkout and basket sit on one screen, the delivery fee follows the region chosen, and submitting composes a WhatsApp message that already contains the items, the total and the address. The console is entirely in Arabic: products, orders and their status, coupons, delivery rates, banners and contact details.',
        ar: 'سجل المنتج يحمل اللغات الثلاث معاً، فيُكتب المنتج مرة واحدة في لوحة التحكم ولا يتفرّق بينها؛ والاتجاه خاصية في الصفحة لا نسخة ثانية من التنسيقات. السلة والدفع في شاشة واحدة، ورسوم التوصيل تتبع المنطقة المختارة، والإرسال يبني رسالة واتساب تحتوي الأصناف والمجموع والعنوان. ولوحة التحكم بالعربية بالكامل: المنتجات والطلبات وحالاتها والكوبونات ورسوم التوصيل والبانرات وبيانات التواصل.',
      },
      outcome: {
        en: 'A live boutique its owner runs herself, in three languages, with orders arriving where she already answers her customers.',
        ar: 'بوتيك يعمل وتديره صاحبته بنفسها، بثلاث لغات، والطلبات تصلها حيث تردّ على زبوناتها أصلاً.',
      },
    },
  },
];

export const projectCategories: {
  id: ProjectCategory | 'all';
  label: Localized;
}[] = [
  { id: 'all', label: { en: 'All work', ar: 'كل الأعمال' } },
  { id: 'ecommerce', label: { en: 'E-commerce', ar: 'تجارة إلكترونية' } },
  { id: 'erp', label: { en: 'ERP & Inventory', ar: 'مخزون و ERP' } },
  { id: 'logistics', label: { en: 'Logistics', ar: 'لوجستيات' } },
  { id: 'travel', label: { en: 'Travel', ar: 'سفر' } },
  { id: 'hospitality', label: { en: 'Hospitality', ar: 'ضيافة' } },
  { id: 'healthcare', label: { en: 'Healthcare', ar: 'صحة' } },
  { id: 'productivity', label: { en: 'Productivity', ar: 'إنتاجية' } },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export const featuredProjects = projects.filter((project) => project.featured);

/** Projects with a public demo a visitor can open right now. */
export const demoProjects = projects.filter((project) => project.demo);

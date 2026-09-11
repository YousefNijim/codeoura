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
        en: 'One catalogue, three surfaces, zero duplicated data entry — and a storefront rendered at the edge.',
        ar: 'كتالوج واحد، وثلاث واجهات، وصفر إدخال بيانات مكرر — ومتجر يُعرَض من حافة الشبكة.',
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
      en: 'Logistics built Arabic-first',
      ar: 'لوجستيات مبنية بالعربية أولاً',
    },
    summary: {
      en: 'A shipment and delivery platform designed RTL-natively rather than mirrored after the fact — Arabic typography, numerals and directional flow are first-class throughout.',
      ar: 'منصة شحن وتوصيل مصمَّمة بنيوياً من اليمين إلى اليسار، لا مقلوبة لاحقاً — الطباعة العربية والأرقام واتجاه التدفّق كلها من الدرجة الأولى.',
    },
    year: 2025,
    category: 'logistics',
    services: ['web', 'mobile', 'cloud'],
    platforms: ['web', 'mobile', 'admin'],
    stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Tailwind CSS'],
    cover: { from: 'oklch(0.72 0.16 62)', to: 'oklch(0.55 0.14 30)' },
    featured: true,
    caseStudy: {
      challenge: {
        en: 'Most logistics software treats Arabic as a translation layer. Direction, numeral systems and address formats break the moment real data arrives.',
        ar: 'معظم برمجيات اللوجستيات تتعامل مع العربية كطبقة ترجمة. الاتجاه وأنظمة الأرقام وصيغ العناوين تنكسر فور وصول بيانات حقيقية.',
      },
      solution: {
        en: 'Logical CSS properties everywhere, locale-aware number and date formatting at the boundary, and an address model built around how addresses are actually written locally.',
        ar: 'خصائص CSS منطقية في كل مكان، وتنسيق أرقام وتواريخ واعٍ باللغة عند الحدود، ونموذج عناوين مبني على الطريقة التي تُكتب بها العناوين محلياً فعلاً.',
      },
      outcome: {
        en: 'An interface that reads as though it was designed in Arabic — because it was.',
        ar: 'واجهة تُقرأ وكأنها صُمِّمت بالعربية — لأنها كذلك فعلاً.',
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
      en: 'A travel platform covering package discovery, availability and booking — with an operator back office for inventory, pricing windows and reservation management.',
      ar: 'منصة سفر تغطي اكتشاف الباقات والتوفّر والحجز — مع مكتب خلفي للمشغّل لإدارة المخزون ونوافذ التسعير والحجوزات.',
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
      en: 'A clinical management platform handling patient records, medical file storage, receipts and billing — with access controls appropriate to health data.',
      ar: 'منصة إدارة عيادات تتعامل مع سجلات المرضى وتخزين الملفات الطبية والإيصالات والفوترة — مع ضوابط وصول تليق ببيانات صحية.',
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
      en: 'A lightweight digital presence and ordering surface for a café — fast on mobile networks, effortless to update, and bilingual from the first screen.',
      ar: 'حضور رقمي خفيف وواجهة طلبات لكافيه — سريعة على شبكات الموبايل، سهلة التحديث، وثنائية اللغة من الشاشة الأولى.',
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
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export const featuredProjects = projects.filter((project) => project.featured);

/** Projects with a public demo a visitor can open right now. */
export const demoProjects = projects.filter((project) => project.demo);

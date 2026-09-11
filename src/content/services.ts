import type { Service, ServiceId } from './types';

export const services: Service[] = [
  {
    id: 'web',
    slug: 'web-development',
    title: { en: 'Full-Stack Web Development', ar: 'تطوير ويب متكامل' },
    tagline: {
      en: 'Web platforms engineered for growth and longevity',
      ar: 'منصات ويب مهندسة للنمو والاستمرارية',
    },
    description: {
      en: 'We treat a web application as core business infrastructure and build it accordingly: fully typed from the database through to the interface, tested at every integration point, and structured so that each additional capability is delivered with the same efficiency as the first. Server-side rendering is our default, and interactivity is introduced where it adds genuine value to the user experience.',
      ar: 'نتعامل مع تطبيق الويب بوصفه بنية تحتية أساسية للعمل، ونبنيه على هذا الأساس: موصَّف بالأنواع بالكامل من قاعدة البيانات حتى الواجهة، ومُختبَر عند كل نقطة تكامل، ومُهيكَل بحيث تُنجَز كل قدرة إضافية بالكفاءة نفسها التي أُنجزت بها الأولى. نعتمد العرض من الخادم افتراضياً، ونُدخل التفاعلية حيث تضيف قيمة حقيقية لتجربة المستخدم.',
    },
    capabilities: {
      en: [
        'Server-first architecture with React Server Components',
        'Design systems and component libraries',
        'Third-party and payment gateway integration',
        'Performance budgets enforced in CI',
      ],
      ar: [
        'بنية تعتمد الخادم أولاً مع React Server Components',
        'أنظمة تصميم ومكتبات مكوّنات',
        'تكامل مع الخدمات الخارجية وبوابات الدفع',
        'ميزانيات أداء مفروضة في خط التكامل المستمر',
      ],
    },
    stack: ['Next.js', 'React', 'TypeScript', 'NestJS', 'PostgreSQL', 'Prisma'],
  },
  {
    id: 'mobile',
    slug: 'mobile-engineering',
    title: { en: 'Mobile App Engineering', ar: 'هندسة تطبيقات الموبايل' },
    tagline: {
      en: 'A single codebase with a native experience on both platforms',
      ar: 'قاعدة كود واحدة بتجربة أصيلة على المنصتين',
    },
    description: {
      en: 'We develop cross-platform applications that deliver a genuinely native experience by respecting the conventions of each platform rather than compromising between them. Our applications remain responsive under weak connectivity, navigate correctly from external links, and reach the application stores through an automated release pipeline.',
      ar: 'نطوّر تطبيقات متعددة المنصات تقدّم تجربة أصيلة فعلاً، إذ تلتزم بأعراف كل منصة بدل المساومة بينهما. تبقى تطبيقاتنا مستجيبة عند ضعف الاتصال، وتنتقل إلى الوجهة الصحيحة من الروابط الخارجية، وتصل إلى المتاجر عبر خط إصدار مؤتمت.',
    },
    capabilities: {
      en: [
        'React Native and Flutter application development',
        'Offline-first sync and local persistence',
        'Push notifications and deep linking',
        'App Store and Play Store release automation',
      ],
      ar: [
        'تطوير تطبيقات React Native و Flutter',
        'مزامنة تعمل دون اتصال وتخزين محلي',
        'إشعارات فورية وروابط عميقة',
        'أتمتة الإصدار على App Store و Play Store',
      ],
    },
    stack: ['React Native', 'Flutter', 'TypeScript', 'Dart', 'Expo'],
  },
  {
    id: 'cloud',
    slug: 'cloud-devops',
    title: { en: 'Cloud Infrastructure & DevOps', ar: 'بنية سحابية و DevOps' },
    tagline: {
      en: 'Reliable infrastructure and predictable deployments',
      ar: 'بنية تحتية موثوقة ونشر يمكن التنبؤ به',
    },
    description: {
      en: 'We define infrastructure as code, so environments can be reproduced reliably by any engineer and releases follow a controlled, reversible process. Monitoring, structured logging and alerting are established with the first deployment, giving your team full visibility over the system from the moment it goes live.',
      ar: 'نعرّف البنية التحتية ككود، بحيث يمكن لأي مهندس إعادة إنتاج البيئات بموثوقية، وتجري الإصدارات وفق عملية منضبطة قابلة للتراجع. نرسي المراقبة والسجلات المنظَّمة والتنبيهات مع أول عملية نشر، لتتوافر لفريقكم رؤية كاملة على النظام منذ لحظة تشغيله.',
    },
    capabilities: {
      en: [
        'CI/CD pipelines with automated quality gates',
        'Containerisation and infrastructure as code',
        'Caching, queues and background processing',
        'Monitoring, structured logging and alerting',
      ],
      ar: [
        'خطوط CI/CD مع بوابات جودة مؤتمتة',
        'الحاويات والبنية التحتية ككود',
        'التخزين المؤقت والطوابير والمعالجة الخلفية',
        'المراقبة والسجلات المنظَّمة والتنبيهات',
      ],
    },
    stack: ['AWS', 'Docker', 'GitHub Actions', 'Redis', 'Vercel', 'Supabase'],
  },
  {
    id: 'saas',
    slug: 'custom-saas',
    title: { en: 'Custom SaaS Platforms', ar: 'منصات SaaS مخصصة' },
    tagline: {
      en: 'Multi-tenant architecture designed in from the outset',
      ar: 'بنية متعددة المستأجرين مصمَّمة منذ البداية',
    },
    description: {
      en: 'Tenancy, roles, billing and audit trails are architectural decisions that shape the entire system, and introducing them later is among the most costly undertakings a platform can face. We design the data model around tenant isolation from the outset, so that onboarding your hundredth customer is a routine operation rather than an engineering project.',
      ar: 'الفصل بين المستأجرين والأدوار والفوترة ومسارات التدقيق قرارات معمارية تشكّل النظام بأكمله، وإدخالها لاحقاً من أكثر ما قد تواجهه منصة كلفةً. نصمّم نموذج البيانات حول عزل المستأجرين منذ البداية، ليصبح تسجيل عميلكم المئة عمليةً روتينية لا مشروعاً هندسياً.',
    },
    capabilities: {
      en: [
        'Multi-tenant data modelling and row-level isolation',
        'Role-based access control and audit logging',
        'Subscription billing and usage metering',
        'Admin consoles and tenant self-service',
      ],
      ar: [
        'نمذجة بيانات متعددة المستأجرين وعزل على مستوى الصف',
        'تحكم بالوصول حسب الأدوار وسجلات تدقيق',
        'فوترة اشتراكات وقياس استهلاك',
        'لوحات إدارة وخدمة ذاتية للمستأجرين',
      ],
    },
    stack: ['Next.js', 'NestJS', 'PostgreSQL', 'Prisma', 'Redis', 'Stripe'],
  },
  {
    id: 'ai',
    slug: 'ai-integrations',
    title: { en: 'AI-Powered Integrations', ar: 'تكاملات مدعومة بالذكاء الاصطناعي' },
    tagline: {
      en: 'Applied where it delivers measurable operational value',
      ar: 'تُطبَّق حيث تحقّق قيمة تشغيلية قابلة للقياس',
    },
    description: {
      en: 'We integrate language models where they create measurable operational value: document processing, classification, search across your own data, and drafting work that a member of your team then reviews and approves. Every integration is evaluated against a defined test set, governed by clear cost controls, and designed with appropriate human oversight.',
      ar: 'ندمج نماذج اللغة حيث تحقّق قيمة تشغيلية قابلة للقياس: معالجة المستندات، والتصنيف، والبحث في بياناتكم، وصياغة أعمال يراجعها ويعتمدها أحد أفراد فريقكم. يخضع كل تكامل للتقييم على مجموعة اختبار محدَّدة، ولضوابط تكلفة واضحة، ويُصمَّم بإشراف بشري مناسب.',
    },
    capabilities: {
      en: [
        'Retrieval over your own documents and data',
        'Document extraction and structured classification',
        'Assisted workflows with human review steps',
        'Evaluation harnesses and cost controls',
      ],
      ar: [
        'استرجاع من مستنداتكم وبياناتكم',
        'استخراج المستندات والتصنيف المنظَّم',
        'سير عمل مُعان بخطوات مراجعة بشرية',
        'أدوات تقييم وضوابط تكلفة',
      ],
    },
    stack: ['OpenAI', 'Anthropic', 'pgvector', 'TypeScript', 'Python'],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

export function getServiceById(id: ServiceId): Service | undefined {
  return services.find((service) => service.id === id);
}

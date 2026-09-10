import type { Service, ServiceId } from './types';

export const services: Service[] = [
  {
    id: 'web',
    slug: 'web-development',
    icon: 'Globe',
    title: { en: 'Full-Stack Web Development', ar: 'تطوير ويب متكامل' },
    tagline: {
      en: 'Enterprise applications that survive their third year',
      ar: 'تطبيقات مؤسسية تصمد في سنتها الثالثة',
    },
    description: {
      en: 'We build web applications the way infrastructure is built: typed end to end, tested at the boundaries, and shaped so the tenth feature costs no more than the second. Server-rendered by default, interactive only where interaction earns its weight.',
      ar: 'نبني تطبيقات الويب كما تُبنى البنية التحتية: مكتوبة بالأنواع من طرف إلى طرف، ومُختبَرة عند الحدود، ومُهيكَلة بحيث لا تكلّف الميزة العاشرة أكثر من الثانية. تُعرَض من الخادم افتراضياً، وتفاعلية فقط حيث يستحق التفاعل وزنه.',
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
        'تكامل مع خدمات خارجية وبوابات دفع',
        'ميزانيات أداء مفروضة في خط التكامل المستمر',
      ],
    },
    stack: ['Next.js', 'React', 'TypeScript', 'NestJS', 'PostgreSQL', 'Prisma'],
  },
  {
    id: 'mobile',
    slug: 'mobile-engineering',
    icon: 'Smartphone',
    title: { en: 'Mobile App Engineering', ar: 'هندسة تطبيقات الموبايل' },
    tagline: {
      en: 'One codebase, two platforms, no compromise',
      ar: 'قاعدة كود واحدة، منصتان، بلا تنازلات',
    },
    description: {
      en: 'Cross-platform apps in React Native and Flutter that feel native because they respect each platform’s conventions rather than averaging them. Offline-capable, deep-linked, and shipped through automated release pipelines.',
      ar: 'تطبيقات متعددة المنصات بـ React Native و Flutter تبدو أصيلة لأنها تحترم أعراف كل منصة بدل أن توسّط بينها. تعمل دون اتصال، وتدعم الروابط العميقة، وتُنشر عبر خطوط إصدار مؤتمتة.',
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
    icon: 'Server',
    title: { en: 'Cloud Infrastructure & DevOps', ar: 'بنية سحابية و DevOps' },
    tagline: {
      en: 'Deploys that are boring, on purpose',
      ar: 'عمليات نشر مملّة، عن قصد',
    },
    description: {
      en: 'Infrastructure defined in code, environments that are reproducible from a clean machine, and pipelines that make a rollback a one-line operation. Observability is part of the build, not something added after the first outage.',
      ar: 'بنية تحتية معرَّفة بالكود، وبيئات قابلة لإعادة الإنتاج من جهاز نظيف، وخطوط نشر تجعل التراجع عملية بسطر واحد. المراقبة جزء من البناء، لا شيء يُضاف بعد أول انقطاع.',
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
    icon: 'Layers',
    title: { en: 'Custom SaaS Platforms', ar: 'منصات SaaS مخصصة' },
    tagline: {
      en: 'Multi-tenant from the first migration',
      ar: 'متعددة المستأجرين من أول ترحيل',
    },
    description: {
      en: 'Tenancy, roles, billing and audit trails are architectural decisions, not features to retrofit. We design the data model around isolation from day one, so onboarding a hundredth customer is a form submission rather than a deployment.',
      ar: 'الفصل بين المستأجرين والأدوار والفوترة ومسارات التدقيق قرارات معمارية، لا ميزات تُضاف لاحقاً. نصمم نموذج البيانات حول العزل من اليوم الأول، فيصبح تسجيل العميل المئة إرسال نموذج لا عملية نشر.',
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
    icon: 'BrainCircuit',
    title: { en: 'AI-Powered Integrations', ar: 'تكاملات مدعومة بالذكاء الاصطناعي' },
    tagline: {
      en: 'Applied where it changes the outcome',
      ar: 'تُطبَّق حيث تغيّر النتيجة فعلاً',
    },
    description: {
      en: 'We integrate language models where they measurably reduce work: document extraction, classification, search over your own data, and assisted workflows. Every integration is evaluated, cost-bounded, and built to degrade gracefully when the model is wrong.',
      ar: 'ندمج نماذج اللغة حيث تقلّل العمل بشكل قابل للقياس: استخراج المستندات، والتصنيف، والبحث في بياناتك، وسير العمل المُعان. كل تكامل مُقيَّم ومحدود التكلفة ومبني ليتراجع بسلاسة حين يخطئ النموذج.',
    },
    capabilities: {
      en: [
        'Retrieval over your own documents and data',
        'Document extraction and structured classification',
        'Assisted workflows with human review steps',
        'Evaluation harnesses and cost controls',
      ],
      ar: [
        'استرجاع من مستنداتك وبياناتك',
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

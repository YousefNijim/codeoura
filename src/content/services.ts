import type { Service, ServiceId } from './types';

export const services: Service[] = [
  {
    id: 'web',
    slug: 'web-development',
    icon: 'Globe',
    title: { en: 'Full-Stack Web Development', ar: 'تطوير ويب متكامل' },
    tagline: {
      en: 'Applications that are still easy to change in year three',
      ar: 'تطبيقات يسهل تغييرها في سنتها الثالثة',
    },
    description: {
      en: 'A web application is infrastructure, and we build it that way: typed from the database to the form, tested where systems meet, and shaped so the tenth feature costs no more than the second. Server-rendered by default; interactive only where interaction earns its weight in loading time.',
      ar: 'تطبيق الويب بنية تحتية، ونبنيه على هذا الأساس: مكتوب بالأنواع من قاعدة البيانات حتى النموذج، ومُختبَر حيث تلتقي الأنظمة، ومُهيكَل بحيث لا تكلّف الميزة العاشرة أكثر من الثانية. يُعرَض من الخادم افتراضياً، ولا يصير تفاعلياً إلا حيث يستحق التفاعل ثمنه من زمن التحميل.',
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
      en: 'One codebase that still feels native on both',
      ar: 'قاعدة كود واحدة تبقى أصيلة على المنصتين',
    },
    description: {
      en: 'Cross-platform apps that feel native because they follow each platform’s conventions instead of averaging them into something that belongs to neither. They keep working on a weak signal, open to the right screen from a link, and reach the stores through a pipeline rather than someone’s laptop.',
      ar: 'تطبيقات متعددة المنصات تبدو أصيلة لأنها تتبع أعراف كل منصة بدل أن توسّط بينها فتخرج بشيء لا ينتمي لأيّهما. تظل تعمل على إشارة ضعيفة، وتفتح على الشاشة الصحيحة من الرابط، وتصل إلى المتاجر عبر خط نشر لا عبر جهاز أحدهم.',
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
      en: 'Deployments boring enough to do on a Friday',
      ar: 'نشرٌ مملّ بما يكفي ليُنفَّذ يوم خميس',
    },
    description: {
      en: 'Infrastructure defined in code, environments any engineer can reproduce from a clean machine, and a rollback that is one command rather than an incident. Monitoring goes in with the first deploy — adding it after the first outage means you were blind for the one that mattered.',
      ar: 'بنية تحتية معرَّفة بالكود، وبيئات يستطيع أي مهندس إعادة إنتاجها من جهاز نظيف، وتراجعٌ بأمر واحد لا بحادثة. المراقبة تدخل مع أول نشر — إضافتها بعد أول انقطاع تعني أنك كنت أعمى في المرة التي كانت تهم.',
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
      en: 'Multi-tenant from the first migration, not the first crisis',
      ar: 'متعددة المستأجرين من أول ترحيل، لا من أول أزمة',
    },
    description: {
      en: 'Tenancy, roles, billing and audit trails are architectural decisions. Retrofitting them is the most expensive rewrite in this industry, because by then real customers depend on the shape you have to change. We design the data model around isolation on day one, so onboarding the hundredth customer is a form submission rather than a deployment.',
      ar: 'الفصل بين المستأجرين والأدوار والفوترة ومسارات التدقيق قرارات معمارية. إضافتها لاحقاً أغلى إعادة كتابة في هذه الصناعة، لأن عملاء حقيقيين يكونون قد صاروا يعتمدون على الشكل الذي عليك تغييره. نصمم نموذج البيانات حول العزل من اليوم الأول، فيصير تسجيل العميل المئة إرسالَ نموذج لا عملية نشر.',
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
      en: 'Used where it removes work, not where it impresses',
      ar: 'تُستخدم حيث تُلغي عملاً، لا حيث تُبهر',
    },
    description: {
      en: 'We add language models where they measurably remove hours from someone’s week: reading documents, classifying, searching your own data, drafting what a person then approves. Every integration is measured against a test set, bounded in cost, and designed around the assumption that the model will sometimes be wrong.',
      ar: 'ندمج نماذج اللغة حيث تُلغي ساعات فعلية من أسبوع أحدهم: قراءة المستندات، والتصنيف، والبحث في بياناتك، وصياغة ما يعتمده إنسان بعدها. كل تكامل يُقاس على مجموعة اختبار، ومحدود التكلفة، ومصمَّم على افتراض أن النموذج سيخطئ أحياناً.',
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

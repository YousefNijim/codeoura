import type { Localized } from './types';

/**
 * Company facts and links.
 *
 * TODO(codeoura): the domain and the social URLs are still placeholders.
 */
export const company = {
  name: 'Codeoura',
  legalName: 'Codeoura',
  tagline: { en: 'Smart code. Real growth.', ar: 'كود ذكي. نمو حقيقي.', tr: 'Akıllı kod. Gerçek büyüme.' } satisfies Localized,
  url: 'https://codeoura.com',
  email: 'ysweety666@gmail.com',
  /** Digits only, no plus and no separators: the form wa.me expects. */
  whatsapp: '905446984235',
  phone: '+90 544 698 42 35',
  founded: 2024,
  social: {
    github: 'https://github.com/YousefNijim',
    linkedin: '',
    x: '',
    instagram: '',
  },
} as const;

export const navigation: {
  href: string;
  label: Localized;
  /** Rendered as a plain anchor that opens in a new tab. */
  external?: boolean;
}[] = [
  { href: '/#about', label: { en: 'About us', ar: 'من نحن', tr: 'Hakkımızda' } },
  { href: '/#products', label: { en: 'Our systems', ar: 'تعرّف على أنظمتنا', tr: 'Sistemlerimiz' } },
  { href: '/#path', label: { en: 'Choose your route', ar: 'اختر مسارك', tr: 'Yolunuzu seçin' } },
  { href: '/#outcomes', label: { en: 'Results', ar: 'النتائج', tr: 'Sonuçlar' } },
  { href: 'whatsapp', label: { en: 'Contact us', ar: 'تواصل معنا', tr: 'Bize ulaşın' }, external: true },
];

export const principles: {
  title: Localized;
  description: Localized;
}[] = [
  {
    title: { en: 'Architecture before code', ar: 'المعمار قبل الكود', tr: 'Koddan önce mimari' },
    description: {
      en: 'We determine how data flows through the system and where its boundaries lie before development begins. A sound architectural foundation is what allows a platform to evolve over years without accumulating cost with every change.',
      ar: 'نحدّد كيف تتدفق البيانات داخل النظام وأين تقع حدوده قبل أن يبدأ التطوير. الأساس المعماري السليم هو ما يتيح للمنصة أن تتطوّر على مدى سنوات دون أن تتراكم كلفتها مع كل تغيير.',
      tr: 'Geliştirme başlamadan önce verinin sistem içinde nasıl aktığını ve sınırlarının nerede olduğunu belirleriz. Sağlam bir mimari temel, bir platformun her değişiklikle maliyet biriktirmeden yıllar boyunca gelişebilmesini sağlayan şeydir.',
    },
  },
  {
    title: { en: 'Performance as a standing commitment', ar: 'الأداء التزام دائم', tr: 'Sürekli bir taahhüt olarak performans' },
    description: {
      en: 'Performance targets are defined at the start of the engagement and enforced automatically on every change, so the system remains as responsive in its third year as it was on the day it launched.',
      ar: 'تُحدَّد أهداف الأداء مع بداية المشروع وتُفرَض آلياً عند كل تغيير، ليبقى النظام في عامه الثالث بالاستجابة نفسها التي كان عليها يوم إطلاقه.',
      tr: 'Performans hedefleri işin başında tanımlanır ve her değişiklikte otomatik olarak denetlenir; böylece sistem üçüncü yılında da ilk gün olduğu kadar hızlı kalır.',
    },
  },
  {
    title: { en: 'A single source of truth', ar: 'مصدر واحد للحقيقة', tr: 'Tek bir doğruluk kaynağı' },
    description: {
      en: 'One schema governs the database, the API and the interface alike. Any inconsistency is caught by the build before it reaches your users, which is what makes data integrity a property of the system rather than a matter of vigilance.',
      ar: 'سكيما واحدة تحكم قاعدة البيانات وواجهة البرمجة والواجهة الأمامية على حد سواء. يلتقط البناء أي تعارض قبل أن يصل إلى مستخدميكم، وبهذا تصبح سلامة البيانات خاصية في النظام لا مسألة يقظة.',
      tr: 'Tek bir şema veritabanını, API\'yi ve arayüzü birlikte yönetir. Herhangi bir tutarsızlık kullanıcılarınıza ulaşmadan derleme sırasında yakalanır; veri bütünlüğünü bir dikkat meselesi olmaktan çıkarıp sistemin bir özelliği hâline getiren de budur.',
    },
  },
  {
    title: { en: 'Delivered ready to own', ar: 'تسليم جاهز للتملّك', tr: 'Sahiplenmeye hazır teslim' },
    description: {
      en: 'We deliver readable code, documented technical decisions and reproducible environments, so your team holds full ownership of the system and is free to develop it with us or independently.',
      ar: 'نسلّم كوداً مقروءاً، وقرارات تقنية موثَّقة، وبيئات قابلة لإعادة الإنتاج، بحيث يمتلك فريقكم النظام ملكية كاملة ويبقى حراً في تطويره معنا أو بمفرده.',
      tr: 'Okunabilir kod, belgelenmiş teknik kararlar ve yeniden kurulabilir ortamlar teslim ederiz; böylece ekibiniz sistemin tam sahibi olur ve onu bizimle ya da kendi başına geliştirmekte özgür kalır.',
    },
  },
];

export const processSteps: {
  title: Localized;
  description: Localized;
}[] = [
  {
    title: { en: 'Discovery', ar: 'الاستكشاف', tr: 'Keşif' },
    description: {
      en: 'We study the business domain, its constraints and its priorities, and agree with you on the scope and objectives of the system.',
      ar: 'ندرس مجال العمل وقيوده وأولوياته، ونتفق معكم على نطاق النظام وأهدافه.',
      tr: 'İş alanını, kısıtlarını ve önceliklerini inceler; sistemin kapsamı ve hedefleri üzerinde sizinle mutabık kalırız.',
    },
  },
  {
    title: { en: 'Architecture', ar: 'المعمار', tr: 'Mimari' },
    description: {
      en: 'The data model, system boundaries and deployment architecture are documented and approved before development begins.',
      ar: 'يُوثَّق نموذج البيانات وحدود النظام ومعمارية النشر ويُعتمد قبل بدء التطوير.',
      tr: 'Veri modeli, sistem sınırları ve dağıtım mimarisi geliştirme başlamadan önce belgelenir ve onaylanır.',
    },
  },
  {
    title: { en: 'Build', ar: 'البناء', tr: 'Geliştirme' },
    description: {
      en: 'Development proceeds in short iterations against a live environment, with a working version available for your review at every stage.',
      ar: 'يجري التطوير في دورات قصيرة على بيئة حيّة، مع توافر نسخة عاملة لمراجعتكم في كل مرحلة.',
      tr: 'Geliştirme, canlı bir ortam üzerinde kısa turlarla ilerler; her aşamada incelemenize açık çalışan bir sürüm bulunur.',
    },
  },
  {
    title: { en: 'Handover', ar: 'التسليم', tr: 'Teslim' },
    description: {
      en: 'Complete documentation, reproducible environments and a technical walkthrough with the team that will operate the system.',
      ar: 'توثيق كامل، وبيئات قابلة لإعادة الإنتاج، وجلسة شرح تقنية مع الفريق الذي سيتولّى تشغيل النظام.',
      tr: 'Eksiksiz dokümantasyon, yeniden kurulabilir ortamlar ve sistemi işletecek ekiple teknik bir devir oturumu.',
    },
  },
];

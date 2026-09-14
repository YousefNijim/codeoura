import type { Locale } from '@/i18n/routing';

/** A string that exists in every supported locale. Adding a locale breaks the build — by design. */
export type Localized<T = string> = Record<Locale, T>;

export type ServiceId =
  | 'web'
  | 'mobile'
  | 'cloud'
  | 'saas'
  | 'ai';

export type ProjectCategory =
  | 'ecommerce'
  | 'erp'
  | 'logistics'
  | 'travel'
  | 'hospitality'
  | 'healthcare'
  | 'productivity';

export type Platform = 'web' | 'mobile' | 'admin';

export interface Metric {
  value: string;
  label: Localized;
}

export interface Project {
  slug: string;
  name: Localized;
  tagline: Localized;
  summary: Localized;
  year: number;
  category: ProjectCategory;
  services: ServiceId[];
  platforms: Platform[];
  stack: string[];
  /**
   * Cover art. `image` is a real screenshot of the running product and is
   * always preferred: a card showing a name on a colour tells a visitor
   * nothing about what was built. The gradient stops remain as the fallback
   * for projects with no demo to photograph yet.
   */
  cover: { from: string; to: string; image?: string };
  /** The system's own mark, where one exists. A monogram stands in otherwise. */
  logo?: string;
  /**
   * Screens from the product itself, shipped at the resolution they were
   * captured at rather than flattened into one composite. A composite is a
   * re-encode: it throws away the detail that makes a screenshot worth
   * showing, and it cannot be re-cropped later without the originals.
   *
   * `featured` leads the case study at full width; `gallery` follows it
   * smaller, for the screens that add depth rather than carry the story.
   */
  shots?: { featured: string[]; gallery: string[] };
  featured: boolean;
  url?: string;
  /**
   * Public demo running on fabricated data. Deliberately separate from `url`:
   * a demo is not the client's live site, and labelling it as one promises the
   * visitor something they will not find.
   */
  demo?: {
    href: string;
    /** What the visitor actually opens — the whole product is rarely on show. */
    surface: Localized;
  };
  caseStudy: {
    challenge: Localized;
    solution: Localized;
    outcome: Localized;
  };
  /**
   * Real, verifiable figures only — leave empty until you have them.
   * Invented metrics on a corporate site are a liability, not a selling point.
   */
  metrics?: Metric[];
}

export interface Service {
  id: ServiceId;
  slug: string;
  title: Localized;
  tagline: Localized;
  description: Localized;
  capabilities: Localized<string[]>;
  stack: string[];
}

export interface TechItem {
  name: string;
  category: 'frontend' | 'backend' | 'mobile' | 'data' | 'infra' | 'ai';
}

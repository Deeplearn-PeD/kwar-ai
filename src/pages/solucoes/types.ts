import type { ComponentType } from 'react';

export type Locale = 'pt-BR' | 'en' | 'es';

export type Icon = ComponentType<{ className?: string }>;

export type StatItem = {
  value: string;
  label: string;
  note?: string;
};

export type CardItem = {
  icon: Icon;
  title: string;
  text: string;
};

export type SolutionContent = {
  seo: {
    title: string;
    description: string;
  };
  hero: {
    badge: string;
    titleLine1: string;
    titleGradient: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    /** Route or path the secondary hero CTA points to */
    secondaryTo: string;
    note: string;
  };
  stats: StatItem[];
  statsFootnote: string;
  challenges: {
    title: string;
    subtitle: string;
    items: CardItem[];
  };
  capabilities: {
    title: string;
    subtitle: string;
    items: CardItem[];
  };
  workflow: {
    title: string;
    subtitle: string;
    stepLabel: string;
    steps: Array<{ title: string; text: string }>;
  };
  outcomes: {
    title: string;
    subtitle: string;
    items: Array<{ title: string; text: string }>;
  };
  faq: {
    title: string;
    items: Array<{ q: string; a: string }>;
  };
  related: {
    title: string;
    items: Array<{ label: string; to: string; text: string }>;
  };
  cta: {
    title: string;
    text: string;
    primary: string;
    secondary: string;
  };
};

export type SolutionContentByLocale = Record<Locale, SolutionContent>;

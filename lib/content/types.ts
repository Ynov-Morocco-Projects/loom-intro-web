export type IconName =
  | "people" | "recruit" | "onboard" | "leave" | "attendance" | "payroll"
  | "perf" | "learn" | "analytics" | "workflow" | "docs"
  | "check" | "arrow" | "send" | "bolt" | "trend" | "chat" | "mail" | "phone" | "plus";

export interface ChatMessage {
  who: "user" | "bot";
  text: string;
  pill?: string;
}

export interface Content {
  meta: {
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
  };
  nav: {
    links: { href: string; label: string }[];
    cta: string;
    menuAria: string;
  };
  hero: {
    badge: string;
    pillPre: string;
    pillBold: string;
    headline: [string, string, string];
    sub: string;
    primaryCta: string;
    secondaryCta: string;
    trust: [string, string, string];
    floatA: { k: string; v: string };
    floatB: { k: string; v: string };
  };
  features: {
    eyebrow: string;
    heading: [string, string];
    lead: string;
    items: { icon: IconName; title: string; desc: string }[];
  };
  ai: {
    eyebrow: string;
    heading: [string, string];
    lead: string;
    capabilities: string[];
  };
  chat: {
    name: string;
    status: string;
    inputPlaceholder: string;
    script: ChatMessage[];
  };
  why: {
    eyebrow: string;
    heading: [string, string];
    items: { title: string; desc: string }[];
  };
  stats: { count: number; suffix: string; decimals: number; label: string }[];
  timeline: {
    eyebrow: string;
    heading: string;
    lead: string;
    steps: { icon: IconName; tag: string; title: string; desc: string }[];
  };
  testimonials: {
    eyebrow: string;
    heading: string;
    items: {
      initials: string;
      color: string;
      textColor: string;
      quote: string;
      name: string;
      role: string;
    }[];
  };
  pricing: {
    eyebrow: string;
    heading: [string, string];
    lead: string;
    plans: {
      tier: string;
      amount: string;
      unit?: string;
      desc: string;
      features: string[];
      cta: string;
      ctaClass: string;
      featured?: boolean;
      badge?: string;
    }[];
  };
  faq: {
    eyebrow: string;
    heading: string;
    items: { q: string; a: string }[];
  };
  forms: {
    eyebrow: string;
    heading: [string, string];
    lead: string;
    points: { title: string; desc: string }[];
    email: string;
    phone: string;
    tabs: { demo: string; contact: string };
    demoForm: {
      firstName: string;
      lastName: string;
      workEmail: string;
      company: string;
      companySize: string;
      companySizeOptions: string[];
      role: string;
      roleOptions: string[];
      whatToSee: string;
      whatToSeePlaceholder: string;
      submit: string;
      consentPre: string;
      consentLink: string;
      consentPost: string;
      placeholders: { firstName: string; lastName: string; email: string; company: string };
    };
    contactForm: {
      fullName: string;
      workEmail: string;
      topic: string;
      topicOptions: string[];
      howCanWeHelp: string;
      howCanWeHelpPlaceholder: string;
      submit: string;
      consent: string;
      placeholders: { fullName: string; email: string };
    };
    success: { title: string; text: string };
  };
  cta: {
    heading: [string, string];
    text: string;
    primary: string;
    secondary: string;
  };
  footer: {
    description: string;
    columns: { header: string; links: { label: string; href: string }[] }[];
    copyright: string;
  };
  showcase: {
    eyebrow: string;
    heading: [string, string];
    lead: string;
    points: { title: string; desc: string }[];
    cta: string;
    phone: {
      greeting: string;
      dayLabel: string;
      approvalsTag: string;
      approvalsText: string;
      paydayTag: string;
      paydayText: string;
      askAi: string;
    };
  };
  dashboardMock: {
    url: string;
    nav: string[];
    greeting: string;
    quarter: string;
    kpis: { label: string; value: string; trend: string }[];
    hiringVelocity: string;
    timeOffRequests: string;
    people: {
      initials: string;
      color: string;
      textColor?: string;
      name: string;
      sub: string;
      badge: string;
      badgeClass: string;
    }[];
  };
  langSwitcher: { fr: string; en: string };
}

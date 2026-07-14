// Central content for the LOOM marketing site.

export type IconName =
  | "people" | "recruit" | "onboard" | "leave" | "attendance" | "payroll"
  | "perf" | "learn" | "analytics" | "workflow" | "docs"
  | "check" | "arrow" | "send" | "bolt" | "trend" | "chat" | "mail" | "phone" | "plus";

export interface Feature { icon: IconName; title: string; desc: string; }
export interface WhyItem { title: string; desc: string; }
export interface TimelineStep { icon: IconName; tag: string; title: string; desc: string; }
export interface Faq { q: string; a: string; }
export interface ChatMessage { who: "user" | "bot"; text: string; pill?: string; }

export const features: Feature[] = [
  { icon: "people", title: "Employee Management", desc: "A living directory, org charts and profiles that stay current automatically." },
  { icon: "recruit", title: "Recruitment", desc: "Source, track and collaborate on candidates with an AI-assisted pipeline." },
  { icon: "onboard", title: "Smart Onboarding", desc: "Personalized, automated onboarding journeys that run end to end." },
  { icon: "leave", title: "Leave Management", desc: "Self-serve requests, balances and approvals — no spreadsheets." },
  { icon: "attendance", title: "Attendance Tracking", desc: "Accurate time, shifts and presence across remote and on-site teams." },
  { icon: "payroll", title: "Payroll", desc: "Run accurate, compliant payroll with everything connected in one place." },
  { icon: "perf", title: "Performance Evaluation", desc: "Fair, data-informed reviews, goals and continuous feedback loops." },
  { icon: "learn", title: "Learning Management", desc: "Build skills with courses, paths and AI-recommended growth." },
  { icon: "analytics", title: "Analytics Dashboard", desc: "Real-time people metrics that turn data into clear decisions." },
  { icon: "workflow", title: "Workflow Automation", desc: "Trigger approvals, reminders and tasks across teams automatically." },
  { icon: "docs", title: "Document Management", desc: "Generate, sign and store every HR document securely." },
];

export const whyItems: WhyItem[] = [
  { title: "Productivity", desc: "Free your HR team from busywork so they can focus on people, not paperwork." },
  { title: "Automation", desc: "Repetitive workflows run themselves — approvals, reminders, documents and more." },
  { title: "Employee experience", desc: "A delightful self-serve portal and AI copilot your whole team will actually use." },
  { title: "Smarter decisions", desc: "Predictive analytics surface risks and opportunities before they happen." },
  { title: "Security & trust", desc: "Enterprise-grade encryption, SSO, audit logs and SOC 2 / GDPR readiness." },
  { title: "Scalability", desc: "From 20 to 20,000 employees — LOOM grows with you, AI-first by design." },
];

export const timeline: TimelineStep[] = [
  { icon: "recruit", tag: "HIRE", title: "Recruit", desc: "AI-assisted sourcing and structured interviews." },
  { icon: "onboard", tag: "START", title: "Onboard", desc: "Automated, personalized first-day journeys." },
  { icon: "perf", tag: "GROW", title: "Develop", desc: "Goals, feedback and learning paths." },
  { icon: "analytics", tag: "ENGAGE", title: "Retain", desc: "Pulse surveys and attrition signals." },
  { icon: "payroll", tag: "REWARD", title: "Reward", desc: "Payroll, benefits and recognition." },
  { icon: "docs", tag: "MOVE ON", title: "Offboard", desc: "Smooth, compliant transitions." },
];

export const faqs: Faq[] = [
  { q: "How does the LOOM AI copilot work?", a: "The copilot is built on large language models that securely understand your company policies, documents and people data. It answers questions, drafts HR documents, summarizes meetings and recommends actions — all in natural conversation, with your data never used to train public models." },
  { q: "How long does it take to get started?", a: "Most teams are live within days. LOOM imports your existing employee data, and our smart onboarding flows configure the core modules automatically. Enterprise rollouts with custom integrations typically take 2–4 weeks." },
  { q: "Is my employee data secure?", a: "Yes. LOOM uses enterprise-grade encryption in transit and at rest, role-based access controls, SSO, audit logging, and is SOC 2 and GDPR ready. You control data residency on Enterprise plans." },
  { q: "Can LOOM replace our current HR tools?", a: "LOOM consolidates employee management, recruitment, onboarding, leave, attendance, payroll, performance, learning, analytics, workflows and documents into one platform — replacing most point solutions while integrating with the tools you keep." },
  { q: "Do you integrate with our existing stack?", a: "LOOM connects with Slack, Google Workspace, Microsoft 365, common payroll providers, ATS tools and more via native integrations and an open API." },
  { q: "What does pricing look like for larger teams?", a: "Growth is billed per employee per month. For organizations over 500 employees we offer custom Enterprise pricing with volume discounts, dedicated support and advanced security — talk to our team for a quote." },
];

export const aiCapabilities: string[] = [
  "Answers any HR question instantly",
  "Generates contracts & HR documents",
  "Writes job descriptions in seconds",
  "Summarizes meetings & 1:1s",
  "Analyzes employee & team data",
  "Recommends next-best actions",
  "Evaluates performance fairly",
  "Automates repetitive workflows",
];

export const chatScript: ChatMessage[] = [
  { who: "user", text: "Draft a job description for a Senior Product Designer, remote in EU." },
  { who: "bot", text: "Done \u2726 I've drafted a full JD with responsibilities, requirements and a salary band benchmarked to your market. Want me to post it to your careers page?", pill: "Generated in 2.4s" },
  { who: "user", text: "Also, who's at risk of churn on the engineering team?" },
  { who: "bot", text: "Three engineers show rising attrition signals based on engagement, tenure and 1:1 sentiment. I'd recommend a check-in with each — shall I draft talking points?", pill: "Analysis \u00b7 1,284 employees" },
];

export const showcasePoints = [
  { title: "Live employee directory", desc: "Org charts, profiles and documents that update themselves." },
  { title: "Self-serve for everyone", desc: "Employees request leave, update details and find answers without a ticket." },
  { title: "Workflows on autopilot", desc: "Trigger approvals, e-signatures and reminders across teams instantly." },
  { title: "Mobile-first by design", desc: "Approve, review and chat with the AI copilot from your pocket." },
];

export const testimonials = [
  { initials: "EM", color: "#7C3AED", textColor: "#fff", quote: "LOOM gave our 12-person HR team the leverage of 40. The AI copilot answers 80% of employee questions before they ever reach us.", name: "Elena Moreau", role: "VP People · Northwind" },
  { initials: "RC", color: "#2DD4BF", textColor: "#fff", quote: "Onboarding used to take two weeks of coordination. Now it's a single automated thread that runs itself. It feels like magic.", name: "Raj Chauhan", role: "Head of HR · Vertex" },
  { initials: "AB", color: "#FBBF24", textColor: "#3a2600", quote: "The analytics caught an attrition risk in one team weeks early. We acted, and kept three brilliant engineers. That paid for LOOM many times over.", name: "Amara Bello", role: "CHRO · Lumen" },
];

export const stats = [
  { count: 92, suffix: "%", decimals: 0, label: "Less time on HR admin" },
  { count: 3.4, suffix: "x", decimals: 1, label: "Faster onboarding" },
  { count: 18, suffix: "%", decimals: 0, label: "Higher retention" },
  { count: 24, suffix: "/7", decimals: 0, label: "AI copilot availability" },
];

export const navLinks = [
  { href: "#features", label: "Platform" },
  { href: "#ai", label: "AI Assistant" },
  { href: "#why", label: "Why LOOM" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

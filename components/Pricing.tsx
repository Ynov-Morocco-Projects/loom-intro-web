import Icon from "./Icon";

interface Plan {
  tier: string;
  amount: string;
  unit?: string;
  desc: string;
  features: string[];
  cta: string;
  ctaClass: string;
  featured?: boolean;
  badge?: string;
}

const plans: Plan[] = [
  {
    tier: "Starter",
    amount: "$6",
    unit: "/employee/mo",
    desc: "For growing teams putting HR on autopilot.",
    features: [
      "Employee management & directory",
      "Leave & attendance tracking",
      "Smart onboarding flows",
      "Basic AI copilot",
    ],
    cta: "Start free trial",
    ctaClass: "btn-glass",
  },
  {
    tier: "Growth",
    amount: "$12",
    unit: "/employee/mo",
    desc: "For companies scaling people operations with AI.",
    features: [
      "Everything in Starter",
      "Full LLM copilot & document generation",
      "Payroll & performance evaluation",
      "Advanced analytics & workflows",
      "Learning management",
    ],
    cta: "Request a demo",
    ctaClass: "btn-primary",
    featured: true,
    badge: "Most popular",
  },
  {
    tier: "Enterprise",
    amount: "Custom",
    desc: "For global organizations with advanced needs.",
    features: [
      "Everything in Growth",
      "SSO, SCIM & advanced security",
      "Custom AI models & data residency",
      "Dedicated success manager",
    ],
    cta: "Talk to sales",
    ctaClass: "btn-glass",
  },
];

export default function Pricing() {
  return (
    <section className="section-pad" id="pricing">
      <div className="wrap">
        <div className="section-head center reveal">
          <span className="eyebrow"><span className="dot" /> Pricing</span>
          <h2 className="h-1" style={{ marginTop: 16 }}>
            Simple plans that scale
            <br />
            with your team.
          </h2>
          <p className="lead">Per employee, per month. No hidden fees. Cancel anytime.</p>
        </div>
        <div className="price-grid">
          {plans.map((p, i) => (
            <div className={`price reveal${p.featured ? " featured" : ""}${i ? " d" + i : ""}`} key={p.tier}>
              {p.badge && <span className="badge-top">{p.badge}</span>}
              <div className="tier">{p.tier}</div>
              <div className="amt">
                {p.amount}
                {p.unit && <small>{p.unit}</small>}
              </div>
              <p className="pdesc">{p.desc}</p>
              <ul>
                {p.features.map((f) => (
                  <li key={f}>
                    <span className="pk"><Icon name="check" size={11} stroke={3} /></span> {f}
                  </li>
                ))}
              </ul>
              <a className={`btn ${p.ctaClass} btn-lg`} href="#contact">{p.cta}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import Icon from "./Icon";
import { useLang } from "@/lib/LanguageContext";

export default function Pricing() {
  const { t } = useLang();
  const p = t.pricing;
  return (
    <section className="section-pad" id="pricing">
      <div className="wrap">
        <div className="section-head center reveal">
          <span className="eyebrow"><span className="dot" /> {p.eyebrow}</span>
          <h2 className="h-1" style={{ marginTop: 16 }}>
            {p.heading[0]}
            <br />
            {p.heading[1]}
          </h2>
          <p className="lead">{p.lead}</p>
        </div>
        <div className="price-grid">
          {p.plans.map((plan, i) => (
            <div className={`price reveal${plan.featured ? " featured" : ""}${i ? " d" + i : ""}`} key={plan.tier}>
              {plan.badge && <span className="badge-top">{plan.badge}</span>}
              <div className="tier">{plan.tier}</div>
              <div className="amt">
                {plan.amount}
                {plan.unit && <small>{plan.unit}</small>}
              </div>
              <p className="pdesc">{plan.desc}</p>
              <ul>
                {plan.features.map((f) => (
                  <li key={f}>
                    <span className="pk"><Icon name="check" size={11} stroke={3} /></span> {f}
                  </li>
                ))}
              </ul>
              <a className={`btn ${plan.ctaClass} btn-lg`} href="#contact">{plan.cta}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

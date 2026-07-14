"use client";

import Icon from "./Icon";
import { useLang } from "@/lib/LanguageContext";

export default function CTA() {
  const { t } = useLang();
  const c = t.cta;
  return (
    <section className="section-pad cta-final">
      <div className="wrap">
        <div className="cta-box reveal">
          <div className="inner">
            <h2 className="h-1">
              {c.heading[0]}
              <br />
              {c.heading[1]}
            </h2>
            <p>{c.text}</p>
            <div className="hero-actions">
              <a className="btn btn-primary btn-lg" href="#contact">
                {c.primary} <Icon name="arrow" size={17} stroke={2.2} />
              </a>
              <a className="btn btn-glass btn-lg" href="#contact">{c.secondary}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

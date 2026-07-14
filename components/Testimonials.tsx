"use client";

import { useLang } from "@/lib/LanguageContext";

export default function Testimonials() {
  const { t } = useLang();
  const ts = t.testimonials;
  return (
    <section className="section-pad">
      <div className="wrap">
        <div className="section-head center reveal">
          <span className="eyebrow"><span className="dot" /> {ts.eyebrow}</span>
          <h2 className="h-1" style={{ marginTop: 16 }}>
            {ts.heading}
          </h2>
        </div>
        <div className="testi-grid">
          {ts.items.map((item, i) => (
            <div className={`testi reveal${i ? " d" + i : ""}`} key={item.name}>
              <div className="stars">★★★★★</div>
              <p>&ldquo;{item.quote}&rdquo;</p>
              <div className="who">
                <span className="av" style={{ background: item.color, color: item.textColor }}>{item.initials}</span>
                <div>
                  <b>{item.name}</b>
                  <span>{item.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

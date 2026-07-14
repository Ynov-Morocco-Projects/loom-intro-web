"use client";

import { useLang } from "@/lib/LanguageContext";

export default function Why() {
  const { t } = useLang();
  const w = t.why;
  return (
    <section className="section-pad" id="why">
      <div className="wrap">
        <div className="section-head center reveal">
          <span className="eyebrow"><span className="dot" /> {w.eyebrow}</span>
          <h2 className="h-1" style={{ marginTop: 16 }}>
            {w.heading[0]}
            <br />
            {w.heading[1]}
          </h2>
        </div>
        <div className="why-grid">
          {w.items.map((item, i) => (
            <div className={`why-card reveal${i % 3 ? " d" + (i % 3) : ""}`} key={item.title}>
              <div className="wn">0{i + 1}</div>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

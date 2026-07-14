"use client";

import Icon from "./Icon";
import { useLang } from "@/lib/LanguageContext";

export default function Features() {
  const { t } = useLang();
  const f = t.features;
  return (
    <section className="section-pad" id="features">
      <div className="wrap">
        <div className="section-head center reveal">
          <span className="eyebrow"><span className="dot" /> {f.eyebrow}</span>
          <h2 className="h-1" style={{ marginTop: 16 }}>
            {f.heading[0]}
            <br />
            {f.heading[1]}
          </h2>
          <p className="lead">{f.lead}</p>
        </div>
        <div className="features-grid">
          {f.items.map((item, i) => (
            <div className={`fcard reveal${i % 4 ? " d" + (i % 4) : ""}`} key={item.title}>
              <div className="fi"><Icon name={item.icon} size={21} /></div>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

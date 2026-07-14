"use client";

import Icon from "./Icon";
import { useLang } from "@/lib/LanguageContext";

export default function Timeline() {
  const { t } = useLang();
  const tl = t.timeline;
  return (
    <section className="section-pad" id="lifecycle">
      <div className="wrap">
        <div className="section-head center reveal">
          <span className="eyebrow"><span className="dot" /> {tl.eyebrow}</span>
          <h2 className="h-1" style={{ marginTop: 16 }}>
            {tl.heading}
          </h2>
          <p className="lead">{tl.lead}</p>
        </div>
        <div className="timeline reveal">
          <div className="tl-track">
            <div className="tl-line" />
            {tl.steps.map((s) => (
              <div className="tl-step" key={s.title}>
                <div className="tl-dot"><Icon name={s.icon} size={20} /></div>
                <div className="tn">{s.tag}</div>
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

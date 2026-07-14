"use client";

import Icon from "./Icon";
import DashboardMock from "./DashboardMock";
import { useLang } from "@/lib/LanguageContext";
import type { Content } from "@/lib/content";

function PhoneMock({ phone }: { phone: Content["showcase"]["phone"] }) {
  return (
    <div className="phone">
      <div className="phone-screen">
        <div className="phone-notch" />
        <div style={{ padding: "14px 12px 18px" }}>
          <div style={{ fontSize: 11, color: "var(--faint)", fontWeight: 600 }}>{phone.greeting}</div>
          <div style={{ fontSize: 15, fontWeight: 700, margin: "2px 0 12px", color: "#fff" }}>{phone.dayLabel}</div>
          <div style={{ background: "rgba(124,58,237,.2)", border: "1px solid var(--panel-border)", borderRadius: 12, padding: 11, marginBottom: 9 }}>
            <div style={{ fontSize: 10, color: "var(--purple-200)", fontWeight: 700 }}>{phone.approvalsTag}</div>
            <div style={{ fontSize: 12, fontWeight: 600, color: "#fff" }}>{phone.approvalsText}</div>
          </div>
          <div style={{ background: "rgba(255,255,255,.05)", borderRadius: 12, padding: 11, marginBottom: 9 }}>
            <div style={{ fontSize: 10, color: "var(--faint)", fontWeight: 700 }}>{phone.paydayTag}</div>
            <div style={{ fontSize: 12, fontWeight: 600, color: "#fff" }}>{phone.paydayText}</div>
          </div>
          <div style={{ background: "var(--grad-violet)", borderRadius: 12, padding: 11, color: "#fff", display: "flex", alignItems: "center", gap: 8 }}>
            <Icon name="onboard" size={15} />
            <div style={{ fontSize: 11.5 }}>{phone.askAi}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Showcase() {
  const { t } = useLang();
  const s = t.showcase;
  return (
    <section className="section-pad" id="product">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="eyebrow"><span className="dot" /> {s.eyebrow}</span>
          <h2 className="h-1" style={{ marginTop: 16 }}>
            {s.heading[0]}
            <br />
            {s.heading[1]}
          </h2>
          <p className="lead">{s.lead}</p>
        </div>
        <div className="showcase-grid">
          <div className="reveal">
            <div className="feat-list">
              {s.points.map((p) => (
                <div className="feat-li" key={p.title}>
                  <span className="ck"><Icon name="check" size={15} stroke={2.5} /></span>
                  <div>
                    <b>{p.title}</b>
                    <p>{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <a className="btn btn-glass btn-lg" href="#features" style={{ marginTop: 12 }}>
              {s.cta} <Icon name="arrow" size={17} stroke={2.2} />
            </a>
          </div>
          <div className="mock-stack reveal d1">
            <DashboardMock />
            <PhoneMock phone={s.phone} />
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import Icon from "./Icon";
import Chat from "./Chat";
import { useLang } from "@/lib/LanguageContext";

export default function AIAssistant() {
  const { t, lang } = useLang();
  const a = t.ai;
  return (
    <section className="section-pad" id="ai">
      <div className="wrap">
        <div className="ai-grid">
          <div className="reveal">
            <span className="eyebrow"><span className="dot" /> {a.eyebrow}</span>
            <h2 className="h-1" style={{ marginTop: 16 }}>
              {a.heading[0]}
              <br />
              {a.heading[1]}
            </h2>
            <p className="lead">{a.lead}</p>
            <div className="ai-caps">
              {a.capabilities.map((c) => (
                <div className="ai-cap" key={c}>
                  <span className="cdot"><Icon name="check" size={13} stroke={2.5} /></span> {c}
                </div>
              ))}
            </div>
          </div>
          <div className="reveal d1">
            <Chat key={lang} />
          </div>
        </div>
      </div>
    </section>
  );
}

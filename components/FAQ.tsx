"use client";

import { useState } from "react";
import Icon from "./Icon";
import { useLang } from "@/lib/LanguageContext";

export default function FAQ() {
  const { t } = useLang();
  const faq = t.faq;
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="section-pad" id="faq">
      <div className="wrap">
        <div className="section-head center reveal">
          <span className="eyebrow"><span className="dot" /> {faq.eyebrow}</span>
          <h2 className="h-1" style={{ marginTop: 16 }}>{faq.heading}</h2>
        </div>
        <div className="faq-wrap reveal">
          {faq.items.map((f, i) => {
            const isOpen = open === i;
            return (
              <div className={`faq-item${isOpen ? " open" : ""}`} key={f.q}>
                <button
                  className="faq-q"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span>{f.q}</span>
                  <span className="ic"><Icon name="plus" size={14} stroke={2.4} /></span>
                </button>
                <div
                  className="faq-a"
                  style={{ maxHeight: isOpen ? 320 : 0 }}
                >
                  <p>{f.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

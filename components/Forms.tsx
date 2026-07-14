"use client";

import { useState } from "react";
import Icon from "./Icon";
import { useLang } from "@/lib/LanguageContext";

type Tab = "demo" | "contact";

export default function Forms() {
  const { t } = useLang();
  const f = t.forms;
  const [tab, setTab] = useState<Tab>("demo");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    let ok = true;
    form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>("[required]").forEach((inp) => {
      const valid =
        inp.value.trim() !== "" &&
        (inp.type !== "email" || /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(inp.value));
      inp.style.borderColor = valid ? "" : "#FF7A93";
      inp.style.boxShadow = valid ? "" : "0 0 0 4px rgba(255,122,147,.18)";
      if (!valid) ok = false;
    });
    if (ok) setSubmitted(true);
  };

  const clearError = (e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.currentTarget.style.borderColor = "";
    e.currentTarget.style.boxShadow = "";
  };

  const demo = f.demoForm;
  const contact = f.contactForm;

  return (
    <section className="section-pad" id="contact">
      <div className="wrap">
        <div className="forms-grid">
          <div className="forms-aside reveal">
            <span className="eyebrow"><span className="dot" /> {f.eyebrow}</span>
            <h2 className="h-1" style={{ marginTop: 16 }}>
              {f.heading[0]}
              <br />
              {f.heading[1]}
            </h2>
            <p className="lead">{f.lead}</p>
            <div className="forms-points">
              {f.points.map((p, i) => (
                <div className="forms-point" key={p.title}>
                  <span className="fp-ico"><Icon name={i === 0 ? "onboard" : i === 1 ? "trend" : "mail"} size={20} /></span>
                  <div><b>{p.title}</b><p>{p.desc}</p></div>
                </div>
              ))}
            </div>
            <div className="forms-contact">
              <a href={`mailto:${f.email}`}><span className="ci2"><Icon name="mail" size={16} /></span> {f.email}</a>
              <a href={`tel:${f.phone.replace(/[^+\d]/g, "")}`}><span className="ci2"><Icon name="phone" size={16} /></span> {f.phone}</a>
            </div>
          </div>

          <div className="form-card reveal d1">
            {!submitted && (
              <div className="form-tabs">
                <button className={`form-tab${tab === "demo" ? " active" : ""}`} onClick={() => setTab("demo")}>{f.tabs.demo}</button>
                <button className={`form-tab${tab === "contact" ? " active" : ""}`} onClick={() => setTab("contact")}>{f.tabs.contact}</button>
              </div>
            )}

            {!submitted && tab === "demo" && (
              <form className="form-panel active" onSubmit={handleSubmit} noValidate>
                <div className="field-row">
                  <div className="field"><label>{demo.firstName} <span className="req">*</span></label><input type="text" placeholder={demo.placeholders.firstName} required onInput={clearError} /></div>
                  <div className="field"><label>{demo.lastName} <span className="req">*</span></label><input type="text" placeholder={demo.placeholders.lastName} required onInput={clearError} /></div>
                </div>
                <div className="field"><label>{demo.workEmail} <span className="req">*</span></label><input type="email" placeholder={demo.placeholders.email} required onInput={clearError} /></div>
                <div className="field"><label>{demo.company} <span className="req">*</span></label><input type="text" placeholder={demo.placeholders.company} required onInput={clearError} /></div>
                <div className="field-row">
                  <div className="field"><label>{demo.companySize}</label>
                    <select>{demo.companySizeOptions.map((o) => <option key={o}>{o}</option>)}</select>
                  </div>
                  <div className="field"><label>{demo.role}</label>
                    <select>{demo.roleOptions.map((o) => <option key={o}>{o}</option>)}</select>
                  </div>
                </div>
                <div className="field"><label>{demo.whatToSee}</label><textarea rows={3} placeholder={demo.whatToSeePlaceholder} /></div>
                <button type="submit" className="btn btn-primary btn-lg">{demo.submit} <Icon name="arrow" size={17} stroke={2.2} /></button>
                <p className="form-consent">{demo.consentPre}<a href="#">{demo.consentLink}</a>{demo.consentPost}</p>
              </form>
            )}

            {!submitted && tab === "contact" && (
              <form className="form-panel active" onSubmit={handleSubmit} noValidate>
                <div className="field"><label>{contact.fullName} <span className="req">*</span></label><input type="text" placeholder={contact.placeholders.fullName} required onInput={clearError} /></div>
                <div className="field"><label>{contact.workEmail} <span className="req">*</span></label><input type="email" placeholder={contact.placeholders.email} required onInput={clearError} /></div>
                <div className="field"><label>{contact.topic}</label>
                  <select>{contact.topicOptions.map((o) => <option key={o}>{o}</option>)}</select>
                </div>
                <div className="field"><label>{contact.howCanWeHelp} <span className="req">*</span></label><textarea rows={4} placeholder={contact.howCanWeHelpPlaceholder} required onInput={clearError} /></div>
                <button type="submit" className="btn btn-primary btn-lg">{contact.submit} <Icon name="send" size={17} stroke={2.2} /></button>
                <p className="form-consent">{contact.consent}</p>
              </form>
            )}

            {submitted && (
              <div className="form-success show">
                <div className="fs-ico"><Icon name="check" size={30} stroke={2.5} /></div>
                <h3>{f.success.title}</h3>
                <p>{f.success.text}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

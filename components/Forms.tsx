"use client";

import { useState } from "react";
import Icon from "./Icon";

type Tab = "demo" | "contact";

export default function Forms() {
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

  return (
    <section className="section-pad" id="contact">
      <div className="wrap">
        <div className="forms-grid">
          <div className="forms-aside reveal">
            <span className="eyebrow"><span className="dot" /> Get started</span>
            <h2 className="h-1" style={{ marginTop: 16 }}>
              Let&apos;s weave LOOM
              <br />
              into your team.
            </h2>
            <p className="lead">
              Tell us a little about your company and we&apos;ll tailor a
              walkthrough — or just drop us a line. A real human (backed by AI,
              of course) replies within one business day.
            </p>
            <div className="forms-points">
              <div className="forms-point">
                <span className="fp-ico"><Icon name="onboard" size={20} /></span>
                <div><b>Personalized 20-min demo</b><p>See LOOM and the AI copilot on your real use cases.</p></div>
              </div>
              <div className="forms-point">
                <span className="fp-ico"><Icon name="trend" size={20} /></span>
                <div><b>Custom ROI estimate</b><p>We&apos;ll model the hours and cost LOOM saves your team.</p></div>
              </div>
              <div className="forms-point">
                <span className="fp-ico"><Icon name="mail" size={20} /></span>
                <div><b>No pressure, no spam</b><p>Just helpful answers about whether LOOM fits.</p></div>
              </div>
            </div>
            <div className="forms-contact">
              <a href="mailto:hello@loom.hr"><span className="ci2"><Icon name="mail" size={16} /></span> hello@loom.hr</a>
              <a href="tel:+18005666000"><span className="ci2"><Icon name="phone" size={16} /></span> +1 (800) 566-6000</a>
            </div>
          </div>

          <div className="form-card reveal d1">
            {!submitted && (
              <div className="form-tabs">
                <button className={`form-tab${tab === "demo" ? " active" : ""}`} onClick={() => setTab("demo")}>Request a demo</button>
                <button className={`form-tab${tab === "contact" ? " active" : ""}`} onClick={() => setTab("contact")}>Contact sales</button>
              </div>
            )}

            {!submitted && tab === "demo" && (
              <form className="form-panel active" onSubmit={handleSubmit} noValidate>
                <div className="field-row">
                  <div className="field"><label>First name <span className="req">*</span></label><input type="text" placeholder="Maya" required onInput={clearError} /></div>
                  <div className="field"><label>Last name <span className="req">*</span></label><input type="text" placeholder="Anders" required onInput={clearError} /></div>
                </div>
                <div className="field"><label>Work email <span className="req">*</span></label><input type="email" placeholder="maya@company.com" required onInput={clearError} /></div>
                <div className="field"><label>Company <span className="req">*</span></label><input type="text" placeholder="Company name" required onInput={clearError} /></div>
                <div className="field-row">
                  <div className="field"><label>Company size</label>
                    <select><option>1–50</option><option>51–200</option><option>201–500</option><option>501–1,000</option><option>1,000+</option></select>
                  </div>
                  <div className="field"><label>Role</label>
                    <select><option>HR / People</option><option>Founder / CEO</option><option>Operations</option><option>IT / Security</option><option>Other</option></select>
                  </div>
                </div>
                <div className="field"><label>What would you like to see?</label><textarea rows={3} placeholder="e.g. AI onboarding, payroll, analytics…" /></div>
                <button type="submit" className="btn btn-primary btn-lg">Book my demo <Icon name="arrow" size={17} stroke={2.2} /></button>
                <p className="form-consent">By submitting, you agree to LOOM&apos;s <a href="#">Privacy Policy</a>. We&apos;ll never share your data.</p>
              </form>
            )}

            {!submitted && tab === "contact" && (
              <form className="form-panel active" onSubmit={handleSubmit} noValidate>
                <div className="field"><label>Full name <span className="req">*</span></label><input type="text" placeholder="Maya Anders" required onInput={clearError} /></div>
                <div className="field"><label>Work email <span className="req">*</span></label><input type="email" placeholder="maya@company.com" required onInput={clearError} /></div>
                <div className="field"><label>Topic</label>
                  <select><option>Enterprise pricing</option><option>Security &amp; compliance</option><option>Integrations</option><option>Partnerships</option><option>Something else</option></select>
                </div>
                <div className="field"><label>How can we help? <span className="req">*</span></label><textarea rows={4} placeholder="Tell us what you're looking for…" required onInput={clearError} /></div>
                <button type="submit" className="btn btn-primary btn-lg">Send message <Icon name="send" size={17} stroke={2.2} /></button>
                <p className="form-consent">We typically reply within one business day.</p>
              </form>
            )}

            {submitted && (
              <div className="form-success show">
                <div className="fs-ico"><Icon name="check" size={30} stroke={2.5} /></div>
                <h3>Thank you — you&apos;re all set.</h3>
                <p>We&apos;ve received your request. A LOOM specialist will reach out within one business day.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

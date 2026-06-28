import Icon from "./Icon";
import DashboardMock from "./DashboardMock";
import { showcasePoints } from "@/lib/data";

function PhoneMock() {
  return (
    <div className="phone">
      <div className="phone-screen">
        <div className="phone-notch" />
        <div style={{ padding: "14px 12px 18px" }}>
          <div style={{ fontSize: 11, color: "var(--faint)", fontWeight: 600 }}>Hi Maya 👋</div>
          <div style={{ fontSize: 15, fontWeight: 700, margin: "2px 0 12px", color: "#fff" }}>Your day</div>
          <div style={{ background: "rgba(127,0,255,.2)", border: "1px solid var(--panel-border)", borderRadius: 12, padding: 11, marginBottom: 9 }}>
            <div style={{ fontSize: 10, color: "var(--purple-200)", fontWeight: 700 }}>3 APPROVALS</div>
            <div style={{ fontSize: 12, fontWeight: 600, color: "#fff" }}>Awaiting your review</div>
          </div>
          <div style={{ background: "rgba(255,255,255,.05)", borderRadius: 12, padding: 11, marginBottom: 9 }}>
            <div style={{ fontSize: 10, color: "var(--faint)", fontWeight: 700 }}>PAYDAY</div>
            <div style={{ fontSize: 12, fontWeight: 600, color: "#fff" }}>In 4 days</div>
          </div>
          <div style={{ background: "var(--grad-violet)", borderRadius: 12, padding: 11, color: "#fff", display: "flex", alignItems: "center", gap: 8 }}>
            <Icon name="onboard" size={15} />
            <div style={{ fontSize: 11.5 }}>Ask the AI copilot…</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Showcase() {
  return (
    <section className="section-pad" id="product">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="eyebrow"><span className="dot" /> One platform</span>
          <h2 className="h-1" style={{ marginTop: 16 }}>
            Mission control for
            <br />
            your entire workforce.
          </h2>
          <p className="lead">
            From the first interview to the farewell, LOOM keeps every record,
            workflow and conversation woven together — on any device.
          </p>
        </div>
        <div className="showcase-grid">
          <div className="reveal">
            <div className="feat-list">
              {showcasePoints.map((p) => (
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
              Explore the platform <Icon name="arrow" size={17} stroke={2.2} />
            </a>
          </div>
          <div className="mock-stack reveal d1">
            <DashboardMock />
            <PhoneMock />
          </div>
        </div>
      </div>
    </section>
  );
}

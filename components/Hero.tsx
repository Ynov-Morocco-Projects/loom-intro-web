import Icon from "./Icon";

function FloatCard({
  className,
  iconBg,
  icon,
  k,
  v,
}: {
  className: string;
  iconBg: string;
  icon: React.ReactNode;
  k: string;
  v: string;
}) {
  return (
    <div className={`float-card ${className}`}>
      <div className="fc-ico" style={{ background: iconBg }}>{icon}</div>
      <div>
        <div className="fc-k">{k}</div>
        <div className="fc-v">{v}</div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-glow" />
      <div className="wrap">
        <div className="hero-grid">
          <div className="hero-copy">
            <div className="hero-pill reveal">
              <span className="tag">New</span>
              <span>
                Conversational HR copilot powered by <b>LLMs</b>
              </span>
            </div>
            <h1 className="h-display reveal d1">
              HR, woven
              <br />
              across the
              <br />
              <span className="grad-text">universe of work.</span>
            </h1>
            <p className="hero-sub reveal d2">
              LOOM unites Human Resources and Artificial Intelligence into one
              intelligent ecosystem — automating the repetitive, surfacing the
              meaningful, and connecting every thread of your workforce.
            </p>
            <div className="hero-actions reveal d3">
              <a className="btn btn-primary btn-lg" href="#contact">
                Request a demo <Icon name="arrow" size={17} stroke={2.2} />
              </a>
              <a className="btn btn-glass btn-lg" href="#ai">
                Meet the AI assistant
              </a>
            </div>
            <div className="hero-trust reveal d3">
              <span><Icon name="check" size={15} stroke={2.5} className="ok" /> No credit card</span>
              <span><Icon name="check" size={15} stroke={2.5} className="ok" /> SOC 2 &amp; GDPR ready</span>
              <span><Icon name="check" size={15} stroke={2.5} className="ok" /> Setup in days</span>
            </div>
          </div>

          <div className="orb-wrap reveal d2">
            <div className="orb-ring" />
            <div className="orb-ring r2" />
            <div className="orb">
              <div className="orb-threads">
                <svg viewBox="0 0 100 100" fill="none" stroke="#fff" strokeWidth="0.7" opacity="0.55">
                  <ellipse cx="50" cy="50" rx="40" ry="16" />
                  <ellipse cx="50" cy="50" rx="40" ry="16" transform="rotate(45 50 50)" />
                  <ellipse cx="50" cy="50" rx="40" ry="16" transform="rotate(90 50 50)" />
                  <ellipse cx="50" cy="50" rx="40" ry="16" transform="rotate(135 50 50)" />
                  <ellipse cx="50" cy="50" rx="40" ry="30" transform="rotate(20 50 50)" />
                </svg>
              </div>
            </div>
            <div className="orb-sat" />
            <FloatCard
              className="fc-a"
              iconBg="linear-gradient(135deg,#8B5CF6,#6D28D9)"
              icon={<Icon name="plus" size={18} />}
              k="Onboarding"
              v="Automated ✦"
            />
            <FloatCard
              className="fc-b"
              iconBg="linear-gradient(135deg,#2DD4BF,#0F766E)"
              icon={<Icon name="trend" size={18} />}
              k="Retention"
              v="+18.4%"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

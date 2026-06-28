import Icon from "./Icon";

export default function CTA() {
  return (
    <section className="section-pad cta-final">
      <div className="wrap">
        <div className="cta-box reveal">
          <div className="inner">
            <h2 className="h-1">
              Ready to weave AI
              <br />
              into your people team?
            </h2>
            <p>
              Join the companies building a smarter, more human workplace with
              LOOM. See it live in a 20-minute demo.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary btn-lg" href="#contact">
                Request a demo <Icon name="arrow" size={17} stroke={2.2} />
              </a>
              <a className="btn btn-glass btn-lg" href="#contact">Start free trial</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

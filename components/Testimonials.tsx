import { testimonials } from "@/lib/data";

export default function Testimonials() {
  return (
    <section className="section-pad">
      <div className="wrap">
        <div className="section-head center reveal">
          <span className="eyebrow"><span className="dot" /> Loved by people teams</span>
          <h2 className="h-1" style={{ marginTop: 16 }}>
            What HR leaders say about LOOM.
          </h2>
        </div>
        <div className="testi-grid">
          {testimonials.map((t, i) => (
            <div className={`testi reveal${i ? " d" + i : ""}`} key={t.name}>
              <div className="stars">★★★★★</div>
              <p>&ldquo;{t.quote}&rdquo;</p>
              <div className="who">
                <span className="av" style={{ background: t.color, color: t.textColor }}>{t.initials}</span>
                <div>
                  <b>{t.name}</b>
                  <span>{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

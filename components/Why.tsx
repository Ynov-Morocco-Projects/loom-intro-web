import { whyItems } from "@/lib/data";

export default function Why() {
  return (
    <section className="section-pad" id="why">
      <div className="wrap">
        <div className="section-head center reveal">
          <span className="eyebrow"><span className="dot" /> Why LOOM</span>
          <h2 className="h-1" style={{ marginTop: 16 }}>
            Built for the way
            <br />
            modern teams actually work.
          </h2>
        </div>
        <div className="why-grid">
          {whyItems.map((w, i) => (
            <div className={`why-card reveal${i % 3 ? " d" + (i % 3) : ""}`} key={w.title}>
              <div className="wn">0{i + 1}</div>
              <h4>{w.title}</h4>
              <p>{w.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import Counter from "./Counter";
import { stats } from "@/lib/data";

export default function Stats() {
  return (
    <section className="section-pad">
      <div className="wrap">
        <div
          className="glass section-pad"
          style={{ paddingLeft: "clamp(28px,5vw,64px)", paddingRight: "clamp(28px,5vw,64px)" }}
        >
          <div className="stats-grid">
            {stats.map((s, i) => (
              <div className={`stat reveal${i ? " d" + i : ""}`} key={s.label}>
                <div className="num">
                  <Counter count={s.count} decimals={s.decimals} suffix={s.suffix} />
                </div>
                <div className="lbl">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

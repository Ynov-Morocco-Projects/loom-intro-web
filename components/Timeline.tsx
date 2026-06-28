import Icon from "./Icon";
import { timeline } from "@/lib/data";

export default function Timeline() {
  return (
    <section className="section-pad" id="lifecycle">
      <div className="wrap">
        <div className="section-head center reveal">
          <span className="eyebrow"><span className="dot" /> Employee lifecycle</span>
          <h2 className="h-1" style={{ marginTop: 16 }}>
            Every thread, from hello to farewell.
          </h2>
          <p className="lead">
            LOOM follows each employee through their whole journey — and quietly
            handles the work at every step.
          </p>
        </div>
        <div className="timeline reveal">
          <div className="tl-track">
            <div className="tl-line" />
            {timeline.map((s) => (
              <div className="tl-step" key={s.title}>
                <div className="tl-dot"><Icon name={s.icon} size={20} /></div>
                <div className="tn">{s.tag}</div>
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

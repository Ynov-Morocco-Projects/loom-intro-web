import Icon from "./Icon";
import { features } from "@/lib/data";

export default function Features() {
  return (
    <section className="section-pad" id="features">
      <div className="wrap">
        <div className="section-head center reveal">
          <span className="eyebrow"><span className="dot" /> The full suite</span>
          <h2 className="h-1" style={{ marginTop: 16 }}>
            Eleven modules.
            <br />
            One woven constellation.
          </h2>
          <p className="lead">
            Each piece of the employee experience, intelligently connected — so
            nothing falls through the cracks.
          </p>
        </div>
        <div className="features-grid">
          {features.map((f, i) => (
            <div className={`fcard reveal${i % 4 ? " d" + (i % 4) : ""}`} key={f.title}>
              <div className="fi"><Icon name={f.icon} size={21} /></div>
              <h4>{f.title}</h4>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

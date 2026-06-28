const logos = ["◆ Northwind", "Vertex", "⬡ Lumen", "Quanta", "✶ Helio", "Drift&Co"];

export default function Logos() {
  return (
    <section className="logos">
      <div className="wrap reveal">
        <p>Trusted by people teams at fast-moving companies</p>
        <div className="logo-row">
          {logos.map((l) => (
            <span className="lg" key={l}>{l}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

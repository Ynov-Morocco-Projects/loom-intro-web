import Icon from "./Icon";
import Chat from "./Chat";
import { aiCapabilities } from "@/lib/data";

export default function AIAssistant() {
  return (
    <section className="section-pad" id="ai">
      <div className="wrap">
        <div className="ai-grid">
          <div className="reveal">
            <span className="eyebrow"><span className="dot" /> LOOM Copilot</span>
            <h2 className="h-1" style={{ marginTop: 16 }}>
              An HR expert that
              <br />
              never sleeps.
            </h2>
            <p className="lead">
              Powered by large language models, the LOOM assistant understands
              your policies, your data and your people — and acts on them in
              plain conversation.
            </p>
            <div className="ai-caps">
              {aiCapabilities.map((c) => (
                <div className="ai-cap" key={c}>
                  <span className="cdot"><Icon name="check" size={13} stroke={2.5} /></span> {c}
                </div>
              ))}
            </div>
          </div>
          <div className="reveal d1">
            <Chat />
          </div>
        </div>
      </div>
    </section>
  );
}

import LoomMark from "./LoomMark";
import Icon from "./Icon";

function Bar({ h, alt }: { h: number; alt?: boolean }) {
  return <div className={`bar${alt ? " alt" : ""}`} style={{ height: `${h}%` }} />;
}

function Person({
  initials, color, textColor, name, sub, badge, badgeClass,
}: {
  initials: string; color: string; textColor?: string; name: string; sub: string; badge: string; badgeClass: string;
}) {
  return (
    <div className="person">
      <span className="av" style={{ background: color, color: textColor }}>{initials}</span>
      <div>
        <div className="pn">{name}</div>
        <div className="pr">{sub}</div>
      </div>
      <span className={`badge ${badgeClass}`}>{badge}</span>
    </div>
  );
}

export default function DashboardMock() {
  return (
    <div className="window">
      <div className="window-bar">
        <div className="dots">
          <i style={{ background: "#FF5F57" }} />
          <i style={{ background: "#FEBC2E" }} />
          <i style={{ background: "#28C840" }} />
        </div>
        <div className="url">app.loom.hr / dashboard</div>
      </div>
      <div className="dash">
        <aside className="dash-side">
          <div className="ds-brand">
            <LoomMark className="mark" /> LOOM
          </div>
          <nav className="ds-nav">
            <a className="active"><Icon name="analytics" size={16} className="gi" /> Dashboard</a>
            <a><Icon name="people" size={16} className="gi" /> People</a>
            <a><Icon name="payroll" size={16} className="gi" /> Payroll</a>
            <a><Icon name="trend" size={16} className="gi" /> Analytics</a>
            <a><Icon name="onboard" size={16} className="gi" /> AI Copilot</a>
          </nav>
        </aside>
        <main className="dash-main">
          <div className="dm-head">
            <h4>Good morning, Maya 👋</h4>
            <span className="pill">This quarter ▾</span>
          </div>
          <div className="kpi-row">
            <div className="kpi"><div className="k">Headcount</div><div className="v">1,284</div><div className="t up">▲ 4.1% MoM</div></div>
            <div className="kpi"><div className="k">eNPS</div><div className="v">72</div><div className="t up">▲ 9 pts</div></div>
            <div className="kpi"><div className="k">Open roles</div><div className="v">37</div><div className="t dn">▼ 6 vs last wk</div></div>
          </div>
          <div className="dash-cols">
            <div className="panel">
              <h5>Hiring velocity</h5>
              <div className="bars">
                <Bar h={52} /><Bar h={70} alt /><Bar h={44} /><Bar h={84} alt /><Bar h={62} /><Bar h={96} alt /><Bar h={74} />
              </div>
            </div>
            <div className="panel">
              <h5>Time-off requests</h5>
              <div className="people">
                <Person initials="AK" color="#7C3AED" name="Aria Khan" sub="Vacation · 3d" badge="Approved" badgeClass="green" />
                <Person initials="JL" color="#2DD4BF" name="Jon Lee" sub="Sick · 1d" badge="Approved" badgeClass="green" />
                <Person initials="RP" color="#FBBF24" textColor="#3a2600" name="Ravi Patel" sub="Parental · 12w" badge="Pending" badgeClass="amber" />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

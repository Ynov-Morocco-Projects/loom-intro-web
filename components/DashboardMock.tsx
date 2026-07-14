"use client";

import LoomMark from "./LoomMark";
import Icon from "./Icon";
import { useLang } from "@/lib/LanguageContext";

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
  const { t } = useLang();
  const d = t.dashboardMock;
  const navIcons = ["analytics", "people", "payroll", "trend", "onboard"] as const;
  return (
    <div className="window">
      <div className="window-bar">
        <div className="dots">
          <i style={{ background: "#FF5F57" }} />
          <i style={{ background: "#FEBC2E" }} />
          <i style={{ background: "#28C840" }} />
        </div>
        <div className="url">{d.url}</div>
      </div>
      <div className="dash">
        <aside className="dash-side">
          <div className="ds-brand">
            <LoomMark className="mark" /> LOOM
          </div>
          <nav className="ds-nav">
            {d.nav.map((label, i) => (
              <a className={i === 0 ? "active" : ""} key={label}>
                <Icon name={navIcons[i]} size={16} className="gi" /> {label}
              </a>
            ))}
          </nav>
        </aside>
        <main className="dash-main">
          <div className="dm-head">
            <h4>{d.greeting}</h4>
            <span className="pill">{d.quarter}</span>
          </div>
          <div className="kpi-row">
            {d.kpis.map((kpi, i) => (
              <div className="kpi" key={kpi.label}>
                <div className="k">{kpi.label}</div>
                <div className="v">{kpi.value}</div>
                <div className={`t ${i === 2 ? "dn" : "up"}`}>{kpi.trend}</div>
              </div>
            ))}
          </div>
          <div className="dash-cols">
            <div className="panel">
              <h5>{d.hiringVelocity}</h5>
              <div className="bars">
                <Bar h={52} /><Bar h={70} alt /><Bar h={44} /><Bar h={84} alt /><Bar h={62} /><Bar h={96} alt /><Bar h={74} />
              </div>
            </div>
            <div className="panel">
              <h5>{d.timeOffRequests}</h5>
              <div className="people">
                {d.people.map((p) => (
                  <Person key={p.initials} {...p} />
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

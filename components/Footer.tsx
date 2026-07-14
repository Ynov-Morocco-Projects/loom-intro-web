"use client";

import LoomMark from "./LoomMark";
import { useLang } from "@/lib/LanguageContext";

export default function Footer() {
  const { t } = useLang();
  const f = t.footer;
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-brand">
            <a className="brand" href="#top"><LoomMark className="mark" /> LOOM</a>
            <p>{f.description}</p>
          </div>
          {f.columns.map((c) => (
            <div className="foot-col" key={c.header}>
              <h5>{c.header}</h5>
              {c.links.map((l) => (
                <a href={l.href} key={l.label}>{l.label}</a>
              ))}
            </div>
          ))}
        </div>
        <div className="foot-bottom">
          <span>{f.copyright}</span>
          <div className="foot-social">
            <a href="#" aria-label="X">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 2H22l-7.6 8.7L23 22h-6.8l-5.3-7-6.1 7H1.6l8.2-9.4L1 2h6.9l4.8 6.4L18.9 2z" /></svg>
            </a>
            <a href="#" aria-label="LinkedIn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5A2.5 2.5 0 112.5 6 2.5 2.5 0 014.98 3.5zM3 8.98h4V21H3zM9 8.98h3.8v1.64h.05A4.17 4.17 0 0116.5 8.7c4 0 4.5 2.6 4.5 6V21h-4v-5.3c0-1.26 0-2.9-1.8-2.9s-2 1.4-2 2.8V21H9z" /></svg>
            </a>
            <a href="#" aria-label="GitHub">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 00-3.2 19.5c.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.3-3.4-1.3-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.6.3-1.1.6-1.4-2.2-.2-4.6-1.1-4.6-5a4 4 0 011-2.7c-.1-.3-.4-1.3.1-2.6 0 0 .8-.3 2.7 1a9.3 9.3 0 015 0c1.9-1.3 2.7-1 2.7-1 .5 1.3.2 2.3.1 2.6a4 4 0 011 2.7c0 3.9-2.3 4.8-4.6 5 .4.3.7.9.7 1.8v2.6c0 .3.2.6.7.5A10 10 0 0012 2z" /></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

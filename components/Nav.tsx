"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import LoomMark from "./LoomMark";
import Icon from "./Icon";
import { useLang } from "@/lib/LanguageContext";

export default function Nav() {
  const { lang, setLang, t } = useLang();
  const navLinks = t.nav.links;
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className={`nav${scrolled ? " scrolled" : ""}`} id="nav">
        <div className="wrap nav-inner">
          <Link className="brand" href="#top">
            <LoomMark className="mark" /> LOOM
          </Link>
          <nav className="nav-links">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href}>{l.label}</a>
            ))}
          </nav>
          <div className="nav-cta">
            <div className="lang-switch" role="group" aria-label="Language">
              <button
                type="button"
                className={lang === "fr" ? "active" : ""}
                onClick={() => setLang("fr")}
                aria-pressed={lang === "fr"}
              >
                {t.langSwitcher.fr}
              </button>
              <button
                type="button"
                className={lang === "en" ? "active" : ""}
                onClick={() => setLang("en")}
                aria-pressed={lang === "en"}
              >
                {t.langSwitcher.en}
              </button>
            </div>
            <a className="btn btn-primary" href="#contact">{t.nav.cta}</a>
          </div>
          <button
            className="nav-burger"
            aria-label={t.nav.menuAria}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
          </button>
        </div>
      </header>

      <div className={`mobile-menu${open ? " open" : ""}`}>
        {navLinks.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
        ))}
        <a className="btn btn-primary" href="#contact" onClick={() => setOpen(false)}>
          {t.nav.cta} <Icon name="arrow" size={17} stroke={2.2} />
        </a>
      </div>
    </>
  );
}

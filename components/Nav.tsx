"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import LoomMark from "./LoomMark";
import Icon from "./Icon";
import { navLinks } from "@/lib/data";

export default function Nav() {
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
            <a className="link-quiet" href="#">Sign in</a>
            <a className="btn btn-primary" href="#contact">Request a demo</a>
          </div>
          <button
            className="nav-burger"
            aria-label="Menu"
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
          Request a demo <Icon name="arrow" size={17} stroke={2.2} />
        </a>
      </div>
    </>
  );
}

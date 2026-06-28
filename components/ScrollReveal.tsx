"use client";

import { useEffect } from "react";

/**
 * Observes every `.reveal` element on the page and adds `.in` when it scrolls
 * into view. Includes a fail-safe so content is never permanently hidden in
 * environments where IntersectionObserver does not fire.
 */
export default function ScrollReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    const revealAll = () => els.forEach((el) => el.classList.add("in"));

    if (!("IntersectionObserver" in window)) {
      revealAll();
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add("in");
            io.unobserve(en.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -6% 0px" }
    );

    els.forEach((el) => io.observe(el));

    // Fail-safe guards.
    const t1 = window.setTimeout(() => {
      if (document.querySelectorAll(".reveal.in").length === 0) revealAll();
    }, 1000);
    const t2 = window.setTimeout(revealAll, 2600);

    return () => {
      io.disconnect();
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, []);

  return null;
}

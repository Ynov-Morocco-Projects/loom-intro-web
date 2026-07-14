"use client";

import { useEffect, useRef } from "react";

export default function Starfield() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const layer = ref.current;
    if (!layer || layer.childElementCount > 0) return;

    const n = window.innerWidth < 760 ? 70 : 150;
    const frag = document.createDocumentFragment();
    for (let i = 0; i < n; i++) {
      const s = document.createElement("div");
      s.className = "star";
      const size = Math.random() * 2 + 0.6;
      s.style.width = size + "px";
      s.style.height = size + "px";
      s.style.left = Math.random() * 100 + "%";
      s.style.top = Math.random() * 100 + "%";
      s.style.opacity = (Math.random() * 0.6 + 0.2).toFixed(2);
      s.style.animationDelay = (Math.random() * 4).toFixed(2) + "s";
      s.style.animationDuration = (Math.random() * 4 + 3).toFixed(2) + "s";
      if (Math.random() > 0.85) s.style.boxShadow = "0 0 6px rgba(183,156,255,.9)";
      frag.appendChild(s);
    }
    layer.appendChild(frag);
  }, []);

  return <div id="stars" ref={ref} aria-hidden="true" />;
}

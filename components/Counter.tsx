"use client";

import { useEffect, useRef, useState } from "react";

export default function Counter({
  count,
  decimals = 0,
  suffix = "",
}: {
  count: number;
  decimals?: number;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [val, setVal] = useState(0);
  const done = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const animate = () => {
      if (done.current) return;
      done.current = true;
      const dur = 1600;
      let start: number | null = null;
      const step = (ts: number) => {
        if (start === null) start = ts;
        const p = Math.min((ts - start) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        setVal(eased * count);
        if (p < 1) requestAnimationFrame(step);
        else setVal(count);
      };
      requestAnimationFrame(step);
    };

    if (!("IntersectionObserver" in window)) {
      animate();
      return;
    }
    const io = new IntersectionObserver(
      (entries) => entries.forEach((en) => en.isIntersecting && animate()),
      { threshold: 0.5 }
    );
    io.observe(el);
    const fallback = window.setTimeout(animate, 2600);
    return () => {
      io.disconnect();
      window.clearTimeout(fallback);
    };
  }, [count]);

  return (
    <span ref={ref}>
      {val.toFixed(decimals)}
      {suffix}
    </span>
  );
}

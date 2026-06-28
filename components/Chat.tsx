"use client";

import { useEffect, useRef, useState } from "react";
import Icon from "./Icon";
import { chatScript, type ChatMessage } from "@/lib/data";

interface Rendered extends ChatMessage { typing?: boolean; }

export default function Chat() {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState<Rendered[]>([]);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const run = () => {
      if (started.current) return;
      started.current = true;

      let i = 0;
      const timers: number[] = [];
      const next = () => {
        if (i >= chatScript.length) return;
        const item = chatScript[i];
        if (item.who === "bot") {
          setShown((s) => [...s, { ...item, typing: true }]);
          timers.push(
            window.setTimeout(() => {
              setShown((s) => {
                const copy = s.slice();
                copy[copy.length - 1] = { ...item };
                return copy;
              });
              i++;
              timers.push(window.setTimeout(next, 900));
            }, 1100)
          );
        } else {
          setShown((s) => [...s, { ...item }]);
          i++;
          timers.push(window.setTimeout(next, 700));
        }
      };
      next();
    };

    if (!("IntersectionObserver" in window)) {
      run();
      return;
    }
    const io = new IntersectionObserver(
      (entries) => entries.forEach((en) => en.isIntersecting && run()),
      { threshold: 0.4 }
    );
    io.observe(el);
    const fallback = window.setTimeout(run, 2600);
    return () => {
      io.disconnect();
      window.clearTimeout(fallback);
    };
  }, []);

  return (
    <div className="chat" ref={ref}>
      <div className="chat-head">
        <span className="ava"><Icon name="onboard" size={22} /></span>
        <div className="ci">
          <b>LOOM Copilot</b>
          <span>online · LLM-powered</span>
        </div>
      </div>
      <div className="bubbles">
        {shown.map((m, idx) => (
          <div className={`bubble ${m.who}`} key={idx}>
            {m.typing ? (
              <span className="typing"><i /><i /><i /></span>
            ) : (
              <>
                {m.text}
                {m.pill && (
                  <>
                    <br />
                    <span className="b-pill">{m.pill}</span>
                  </>
                )}
              </>
            )}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <span>Ask anything about your people…</span>
        <span className="send"><Icon name="send" size={16} stroke={2.2} /></span>
      </div>
    </div>
  );
}

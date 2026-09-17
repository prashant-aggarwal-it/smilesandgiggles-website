"use client";

import { useEffect, useRef } from "react";
import { GraduationCap, School, UsersRound, Handshake } from "@/components/ui/LucideIcons";
import type { CsrPageContent } from "@/content/csr";

const icons = [GraduationCap, School, UsersRound, Handshake];

export function CsrProofStrip({ items }: { items: CsrPageContent["proof"]["items"] }) {
  const root = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = root.current;
    if (!element) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    const values = Array.from(element.querySelectorAll<HTMLElement>("[data-counter]"));
    const finish = () => {
      cancelAnimationFrame(frame);
      values.forEach((node) => { node.textContent = node.dataset.counter ?? ""; });
      element.classList.add("is-visible");
    };
    if (reduced.matches || !("IntersectionObserver" in window)) { finish(); return; }
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer?.disconnect();
      element.classList.add("is-visible");
      const start = performance.now();
      const tick = (now: number) => {
        const progress = Math.min((now - start) / 1500, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        values.forEach((node) => {
          const label = node.dataset.counter ?? "";
          const match = label.match(/^([\d,]+)(\+?)$/);
          if (match) node.textContent = Math.round(Number(match[1].replaceAll(",", "")) * eased).toLocaleString("en-IN") + match[2];
        });
        if (progress < 1) frame = requestAnimationFrame(tick);
        else finish();
      };
      frame = requestAnimationFrame(tick);
    }, { threshold: 0.2 });
    observer.observe(element);
    const onPreference = () => { if (reduced.matches) { observer?.disconnect(); finish(); } };
    reduced.addEventListener("change", onPreference);
    return () => { observer?.disconnect(); cancelAnimationFrame(frame); reduced.removeEventListener("change", onPreference); };
  }, []);

  return <div ref={root} className="csr-proof-v3">
    {items.map((item, index) => {
      const Icon = icons[index] ?? Handshake;
      const numeric = /^[\d,]+\+?$/.test(item.value);
      return <article key={item.label} className={`csr-proof-card csr-proof-${item.accent}`}>
        <span className="csr-proof-icon"><Icon size={23} aria-hidden="true" /></span>
        <strong className={numeric ? "csr-proof-number" : "csr-proof-text"}>
          <span className="sr-only">{item.value}</span>
          <span aria-hidden="true" className="counter-layout">
            <span className="counter-reserve">{item.value}</span>
            <span className="counter-value" data-counter={numeric ? item.value : undefined}>{item.value}</span>
          </span>
        </strong>
        <p>{item.label}</p>
      </article>;
    })}
  </div>;
}

"use client";

import { useLayoutEffect } from "react";
import { usePathname } from "next/navigation";

export function MotionBootstrap() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    const root = document.documentElement;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));

    // Progressive enhancement: content is visible without JS. We only enable the
    // hidden pre-reveal state once the observer is ready for the current route.
    root.classList.add("reveal-ready");

    if (reducedMotion || !("IntersectionObserver" in window)) {
      elements.forEach((element) => {
        element.dataset.visible = "true";
      });
      return;
    }

    // Content already in the viewport should never wait for an observer callback.
    const revealIfInView = (element: HTMLElement) => {
      const rect = element.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.94 && rect.bottom > 0) {
        element.dataset.visible = "true";
        return true;
      }
      return false;
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          (entry.target as HTMLElement).dataset.visible = "true";
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -16px" },
    );

    elements.forEach((element) => {
      if (!revealIfInView(element)) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}

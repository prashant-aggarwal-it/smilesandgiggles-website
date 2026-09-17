"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  displayValue: string;
  numericValue?: number;
};

export function AnimatedStat({ displayValue, numericValue }: Props) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [value, setValue] = useState(numericValue ? "0+" : displayValue);

  useEffect(() => {
    if (!numericValue || !ref.current) return;

    const element = ref.current;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let observer: IntersectionObserver | null = null;
    let animationFrame = 0;
    let cancelled = false;

    const updateValue = (nextValue: string) => {
      if (!cancelled) setValue(nextValue);
    };

    const cleanup = () => {
      cancelled = true;
      observer?.disconnect();
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };

    if (reducedMotion || !("IntersectionObserver" in window)) {
      animationFrame = requestAnimationFrame(() => updateValue(displayValue));
      return cleanup;
    }

    const duration = numericValue >= 1000 ? 1750 : numericValue >= 100 ? 1500 : 1200;

    observer = new IntersectionObserver(
      ([entry]) => {
        if (cancelled || !entry?.isIntersecting) return;

        observer?.disconnect();
        const start = performance.now();
        const format = (number: number) => `${Math.round(number).toLocaleString("en-IN")}+`;

        const frame = (now: number) => {
          if (cancelled) return;

          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          updateValue(format(numericValue * eased));

          if (progress < 1) {
            animationFrame = requestAnimationFrame(frame);
          } else {
            updateValue(displayValue);
          }
        };

        animationFrame = requestAnimationFrame(frame);
      },
      { threshold: 0.5 },
    );

    observer.observe(element);
    return cleanup;
  }, [displayValue, numericValue]);

  return <span ref={ref}>{value}</span>;
}

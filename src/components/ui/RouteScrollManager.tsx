"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

/**
 * Keeps App Router navigation predictable: new pages start at the top while
 * hash links land on the intended section after the route has painted.
 */
export function RouteScrollManager() {
  const pathname = usePathname();
  const previousPath = useRef<string | null>(null);

  useEffect(() => {
    const routeChanged = previousPath.current !== null && previousPath.current !== pathname;
    previousPath.current = pathname;

    let frameOne = 0;
    let frameTwo = 0;

    frameOne = window.requestAnimationFrame(() => {
      frameTwo = window.requestAnimationFrame(() => {
        const hash = window.location.hash;
        if (hash) {
          const target = document.getElementById(decodeURIComponent(hash.slice(1)));
          if (target) {
            target.scrollIntoView({ block: "start", behavior: "auto" });
            return;
          }
        }

        if (routeChanged || !hash) {
          window.scrollTo({ top: 0, left: 0, behavior: "auto" });
        }
      });
    });

    return () => {
      window.cancelAnimationFrame(frameOne);
      window.cancelAnimationFrame(frameTwo);
    };
  }, [pathname]);

  return null;
}

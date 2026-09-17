"use client";

import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { ArrowUp, MessageCircle } from "@/components/ui/LucideIcons";
import { siteConfig } from "@/content/site";

const hiddenRoutes = ["/privacy", "/terms", "/donation-refund-policy"];

const pageMessages: Record<string, string> = {
  "/our-work/stem-education": "Hello, I would like to discuss a STEM or robotics programme.",
  "/our-work/youth-ai-digital-skills": "Hello, I would like to discuss a youth digital-upskilling programme.",
  "/our-work/preventive-health-awareness": "Hello, I would like to discuss a preventive-health programme.",
  "/csr-partnerships": "Hello, I would like to explore a CSR partnership with Smiles & Giggles Foundation.",
  "/get-involved": "Hello, I would like to get involved with Smiles & Giggles Foundation.",
  "/donate": "Hello, I need assistance with making a donation.",
  "/contact": "Hello, I would like to connect with Smiles & Giggles Foundation.",
};

export function FloatingActions() {
  const pathname = usePathname();
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 560);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const whatsappHref = useMemo(() => {
    const message = pageMessages[pathname] ?? "Hello, I would like to know more about Smiles & Giggles Foundation's programmes.";
    return `${siteConfig.contact.whatsappHref}?text=${encodeURIComponent(message)}`;
  }, [pathname]);

  if (hiddenRoutes.includes(pathname)) return null;

  return (
    <div className="fixed bottom-5 right-4 z-[70] flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      {showTop ? (
        <button
          type="button"
          aria-label="Back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" })}
          className="grid size-11 place-items-center rounded-full border border-white/20 bg-brand-navy text-white shadow-[0_12px_35px_rgba(13,27,61,.24)] transition hover:-translate-y-0.5 hover:bg-brand-purple"
        >
          <ArrowUp size={19} />
        </button>
      ) : null}
      <a
        href={whatsappHref}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with Smiles & Giggles Foundation on WhatsApp"
        className="inline-flex min-h-12 items-center gap-2 rounded-full bg-[#128C7E] px-3.5 text-sm font-extrabold text-white shadow-[0_14px_38px_rgba(18,140,126,.28)] transition hover:-translate-y-0.5 hover:bg-[#0d7a6e] sm:px-5"
      >
        <MessageCircle size={20} />
        <span className="hidden sm:inline">Chat on WhatsApp</span>
      </a>
    </div>
  );
}

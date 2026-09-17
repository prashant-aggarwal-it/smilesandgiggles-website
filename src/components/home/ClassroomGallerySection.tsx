"use client";

import type { HomePageContent } from "@/content/home";
import Image from "next/image";
import { X } from "@/components/ui/LucideIcons";
import { useEffect, useRef, useState } from "react";
import type { MouseEvent } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionAtmosphere } from "@/components/ui/SectionAtmosphere";
import { cn } from "@/lib/cn";

export function ClassroomGallerySection({ content }: { content: HomePageContent["gallery"] }) {
  const [active, setActive] = useState<HomePageContent["gallery"]["items"][number] | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!active) return;
    const previousOverflow = document.body.style.overflow;
    const trigger = triggerRef.current;
    document.body.style.overflow = "hidden";
    const frame = requestAnimationFrame(() => closeButtonRef.current?.focus());
    const onKeyDown = (event: KeyboardEvent) => { if (event.key === "Escape") setActive(null); };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      trigger?.focus();
    };
  }, [active]);

  const openItem = (item: HomePageContent["gallery"]["items"][number], button: HTMLButtonElement) => {
    triggerRef.current = button;
    setActive(item);
  };

  const tile = (item: HomePageContent["gallery"]["items"][number], featured = false) => (
    <button
      key={item.title}
      type="button"
      onClick={(event) => openItem(item, event.currentTarget)}
      data-reveal
      className={cn(
        "group relative aspect-[4/3] w-full overflow-hidden rounded-[24px] text-left shadow-[0_16px_40px_rgba(13,27,61,.09)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-purple/25",
        featured && "lg:rounded-[28px]"
      )}
      aria-label={`Open image: ${item.title}`}
    >
      <Image
        src={item.image.src}
        alt={item.image.alt}
        fill
        sizes={featured ? "(max-width: 1024px) 100vw, 67vw" : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"}
        className="object-cover object-center transition duration-500 group-hover:scale-[1.02]"
      />
      <span className="absolute inset-0 bg-gradient-to-t from-brand-navy/92 via-brand-navy/10 to-transparent" />
      <span className={cn("absolute inset-x-0 bottom-0 z-10 text-white", featured ? "p-6 sm:p-7" : "p-5")}>
        <strong className={cn("block font-extrabold tracking-[-.025em]", featured ? "text-[23px] sm:text-[27px]" : "text-[17px] sm:text-[18px]")}>{item.title}</strong>
        <span className={cn("mt-1.5 block max-w-xl leading-5 text-white/85", featured ? "text-[15px]" : "text-[14px]")}>{item.description}</span>
      </span>
    </button>
  );

  return (
    <section className="home-section home-section--gallery home-gallery-surface relative overflow-hidden border-b border-slate-200">
      <SectionAtmosphere variant="network" className="z-0 opacity-40" />
      <Container className="relative z-10">
        <div data-reveal>
          <SectionHeading eyebrow={content.eyebrow} title={content.title} intro={content.intro} align="center" accent="pink" />
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-[2fr_1fr]">
          {content.items[0] ? tile(content.items[0], true) : null}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {content.items.slice(1, 3).map((item) => tile(item))}
          </div>
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {content.items.slice(3, 6).map((item) => tile(item))}
        </div>

        <div data-reveal className="mt-6 text-center">
          <ButtonLink href="/impact#field-evidence" variant="secondary" showArrow>Explore Our Impact</ButtonLink>
        </div>
      </Container>

      {active ? (
        <div role="dialog" aria-modal="true" aria-label={active.title} className="fixed inset-0 z-[80] grid place-items-center bg-brand-navy/95 p-5" onClick={() => setActive(null)}>
          <button ref={closeButtonRef} type="button" aria-label="Close image" onClick={() => setActive(null)} className="absolute right-5 top-5 grid size-11 place-items-center rounded-full border border-white/20 bg-white/10 text-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/30"><X size={20} /></button>
          <div className="relative h-[80vh] w-full max-w-6xl" onClick={(event: MouseEvent<HTMLDivElement>) => event.stopPropagation()}><Image src={active.image.src} alt={active.image.alt} fill sizes="90vw" className="object-contain" /></div>
        </div>
      ) : null}
    </section>
  );
}

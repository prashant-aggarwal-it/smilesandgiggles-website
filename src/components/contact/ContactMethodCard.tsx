import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type ContactMethodCardProps = {
  icon: ReactNode;
  eyebrow: string;
  title: string;
  description: string;
  href?: string;
  cta?: string;
  accent: "pink" | "teal" | "orange";
};

const styles = {
  pink: { line: "bg-brand-pink", icon: "bg-brand-pink-soft text-brand-pink", link: "text-brand-pink" },
  teal: { line: "bg-brand-teal", icon: "bg-brand-teal-soft text-brand-teal", link: "text-brand-teal" },
  orange: { line: "bg-brand-orange", icon: "bg-brand-orange-soft text-brand-orange", link: "text-brand-orange" },
};

export function ContactMethodCard({ icon, eyebrow, title, description, href, cta, accent }: ContactMethodCardProps) {
  const style = styles[accent];
  return (
    <article data-reveal className="relative overflow-hidden rounded-[24px] border border-slate-100 bg-white p-6 shadow-[0_18px_55px_rgba(13,27,61,.07)]">
      <span aria-hidden="true" className={cn("absolute inset-x-0 top-0 h-1.5", style.line)} />
      <span className={cn("grid size-11 place-items-center rounded-xl", style.icon)}>{icon}</span>
      <p className="mt-5 text-[9px] font-extrabold uppercase tracking-[.14em] text-slate-400">{eyebrow}</p>
      <h2 className="mt-2 text-lg font-extrabold tracking-[-.03em] text-ink">{title}</h2>
      <p className="mt-2 text-xs leading-6 text-muted">{description}</p>
      {href && cta ? <a href={href} className={cn("mt-4 inline-flex text-xs font-extrabold", style.link)}>{cta} →</a> : null}
    </article>
  );
}

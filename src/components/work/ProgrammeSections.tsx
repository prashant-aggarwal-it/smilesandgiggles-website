import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ProgrammeSection({ id, eyebrow, title, intro, children, tint = false }: { id?: string; eyebrow: string; title: string; intro?: string; children: ReactNode; tint?: boolean }) {
  return <section id={id} className={`programme-section scroll-mt-28 ${tint ? "bg-gradient-to-br from-brand-purple-soft via-white to-brand-teal-soft" : "bg-white"}`}><Container><SectionHeading eyebrow={eyebrow} title={title} intro={intro} /><div className="mt-9">{children}</div></Container></section>;
}
export function Steps({ items }: { items: string[][] }) {
  return <ol className={`grid gap-4 sm:grid-cols-2 ${items.length === 5 ? "lg:grid-cols-3 xl:grid-cols-5" : items.length === 3 ? "lg:grid-cols-3" : "lg:grid-cols-4"}`}>{items.map(([title, description], i) => <li key={title} className="rounded-2xl border border-brand-purple/15 bg-white p-5 shadow-sm"><span className="text-sm font-extrabold text-brand-purple">0{i + 1}</span><h3 className="mt-4 text-lg font-bold text-brand-navy">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{description}</p></li>)}</ol>;
}
export function PartnerOptions({ enable, reporting, planned = false }: { enable: string[]; reporting: string[]; planned?: boolean }) {
  return <div className="grid gap-6 md:grid-cols-2">{[["What your partnership can enable", enable], [planned ? "Planned reporting, agreed with partners" : "Reporting agreed for each programme", reporting]].map(([title, items]) => <article key={title as string} className="rounded-3xl border border-brand-purple/15 bg-white p-6 sm:p-8"><h3 className="text-xl font-bold text-brand-navy">{title}</h3><ul className="mt-5 space-y-3">{(items as string[]).map(item => <li key={item} className="flex gap-3 text-sm leading-6 text-slate-600"><span className="text-brand-teal" aria-hidden="true">●</span>{item}</li>)}</ul></article>)}</div>;
}

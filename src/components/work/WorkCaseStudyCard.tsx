import Image from "next/image";
import { Check } from "@/components/ui/LucideIcons";
import type { WorkCaseStudy } from "@/content/work";

const map = {
  purple: { label: "bg-brand-purple text-white", dot: "bg-brand-purple", tint: "bg-brand-purple-soft" },
  pink: { label: "bg-brand-pink text-white", dot: "bg-brand-pink", tint: "bg-brand-pink-soft" },
  teal: { label: "bg-brand-teal text-white", dot: "bg-brand-teal", tint: "bg-brand-teal-soft" },
  orange: { label: "bg-brand-orange text-white", dot: "bg-brand-orange", tint: "bg-brand-orange-soft" },
};

export function WorkCaseStudyCard({ item, reverse = false }: { item: WorkCaseStudy; reverse?: boolean }) {
  const c = map[item.accent];
  return (
    <article data-reveal className="overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-[0_20px_65px_rgba(13,27,61,.07)]">
      <div className={`grid lg:grid-cols-2 ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>
        <div className="relative min-h-[320px] lg:min-h-[470px]">
          <Image src={item.image.src} alt={item.image.alt} fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-brand-navy/45 to-transparent" />
        </div>
        <div className="p-7 sm:p-10 lg:p-12">
          <span className={`inline-flex rounded-full px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[.12em] ${c.label}`}>{item.label}</span>
          <h3 className="mt-5 text-[clamp(2rem,3.4vw,3.2rem)] font-[850] leading-[1.02] tracking-[-.055em] text-brand-navy">{item.title}</h3>
          <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">{item.description}</p>
          <div className="mt-6 grid gap-2 sm:grid-cols-2">
            {item.highlights.map((highlight) => (
              <div key={highlight} className={`flex gap-3 rounded-2xl px-4 py-3 ${c.tint}`}>
                <span className={`mt-0.5 grid size-5 shrink-0 place-items-center rounded-full ${c.label}`}><Check size={12} strokeWidth={3} /></span>
                <span className="text-xs font-bold leading-5 text-brand-navy/75">{highlight}</span>
              </div>
            ))}
          </div>
          {item.footer ? <p className="mt-6 border-l-4 border-brand-orange pl-4 text-sm font-bold leading-6 text-brand-navy/75">{item.footer}</p> : null}
        </div>
      </div>
    </article>
  );
}

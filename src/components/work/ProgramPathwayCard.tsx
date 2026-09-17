import Image from "next/image";
import type { WorkPathway } from "@/content/work";

const map = {
  purple: { border: "border-brand-purple/20", badge: "bg-brand-purple text-white", chip: "bg-brand-purple-soft text-brand-purple", rail: "from-brand-purple via-brand-pink to-brand-orange" },
  pink: { border: "border-brand-pink/20", badge: "bg-brand-pink text-white", chip: "bg-brand-pink-soft text-brand-pink", rail: "from-brand-pink via-brand-orange to-brand-teal" },
  teal: { border: "border-brand-teal/20", badge: "bg-brand-teal text-white", chip: "bg-brand-teal-soft text-brand-teal", rail: "from-brand-teal via-brand-purple to-brand-pink" },
  orange: { border: "border-brand-orange/20", badge: "bg-brand-orange text-white", chip: "bg-brand-orange-soft text-brand-orange", rail: "from-brand-orange via-brand-pink to-brand-purple" },
};

export function ProgramPathwayCard({ pathway }: { pathway: WorkPathway }) {
  const c = map[pathway.accent];
  return (
    <article data-reveal className={`group overflow-hidden rounded-[30px] border bg-white shadow-[0_20px_60px_rgba(13,27,61,.08)] ${c.border}`}>
      <div className={`h-1.5 bg-gradient-to-r ${c.rail}`} />
      <div className="grid lg:grid-cols-[.88fr_1.12fr]">
        <div className="relative min-h-[300px] overflow-hidden lg:min-h-[440px]">
          {pathway.image ? <Image src={pathway.image.src} alt={pathway.image.alt} fill sizes="(max-width:1024px) 100vw, 40vw" className="object-cover transition duration-700 group-hover:scale-[1.03]" /> : <div className="flex h-full min-h-[300px] flex-col justify-center bg-gradient-to-br from-brand-purple-soft via-brand-pink-soft to-brand-teal-soft p-9"><span className="text-sm font-bold uppercase tracking-widest text-brand-purple">Programme pathway</span><p className="mt-5 text-4xl font-extrabold text-brand-navy">{pathway.title}</p><p className="mt-4 text-lg text-brand-purple">{pathway.strapline}</p></div>}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-navy/45 via-transparent to-transparent" />
        </div>
        <div className="p-7 sm:p-9">
          <span className={`inline-flex rounded-full px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[.12em] ${c.badge}`}>{pathway.label}</span>
          <h3 className="mt-5 text-3xl font-[850] tracking-[-.05em] text-brand-navy">{pathway.title}</h3>
          {pathway.strapline && <p className="mt-3 font-bold text-brand-purple">{pathway.strapline}</p>}
          <p className="mt-4 text-sm leading-7 text-slate-600">{pathway.description}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {pathway.topics.map((topic) => <span key={topic} className={`rounded-full px-3 py-1.5 text-[11px] font-extrabold ${c.chip}`}>{topic}</span>)}
          </div>
          {pathway.projects && <p className="mt-5 text-sm leading-7 text-slate-600"><strong className="text-brand-navy">Practical outputs: </strong>{pathway.projects}</p>}
          <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm font-bold leading-6 text-brand-navy/80">
            <span className="mr-2 text-brand-orange">→</span>{pathway.outcome}
          </div>
        </div>
      </div>
    </article>
  );
}

import type { WorkStep } from "@/content/work";

const map = {
  purple: "bg-brand-purple text-white border-brand-purple",
  pink: "bg-brand-pink text-white border-brand-pink",
  teal: "bg-brand-teal text-white border-brand-teal",
  orange: "bg-brand-orange text-white border-brand-orange",
};

export function WorkJourney({ steps }: { steps: WorkStep[] }) {
  return (
    <div className="relative mt-12 grid gap-4 lg:grid-cols-5">
      <div aria-hidden="true" className="absolute left-[8%] right-[8%] top-8 hidden h-[2px] bg-[linear-gradient(90deg,#FF8A00_0%,#14B8A6_33%,#6D3CC9_66%,#E83D8C_100%)] lg:block" />
      {steps.map((step) => (
        <article data-reveal key={step.number} className="relative rounded-[22px] border border-slate-200 bg-white p-5 shadow-[0_14px_40px_rgba(13,27,61,.06)]">
          <div className={`relative z-10 grid size-14 place-items-center rounded-2xl border text-xs font-[850] shadow-md ${map[step.accent]}`}>{step.number}</div>
          <h3 className="mt-5 text-lg font-[850] tracking-[-.035em] text-brand-navy">{step.title}</h3>
          <p className="mt-2 text-xs leading-6 text-slate-600">{step.description}</p>
        </article>
      ))}
    </div>
  );
}

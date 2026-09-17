import { Check } from "@/components/ui/LucideIcons";

export function WorkOutcomeGrid({ outcomes }: { outcomes: string[] }) {
  const accents = ["text-brand-purple bg-brand-purple-soft", "text-brand-teal bg-brand-teal-soft", "text-brand-pink bg-brand-pink-soft", "text-brand-orange bg-brand-orange-soft"];
  return (
    <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
      {outcomes.map((outcome, index) => (
        <div data-reveal key={outcome} className="flex gap-3 rounded-[20px] border border-slate-200 bg-white p-5 shadow-[0_12px_35px_rgba(13,27,61,.05)]">
          <span className={`grid size-9 shrink-0 place-items-center rounded-xl ${accents[index % accents.length]}`}><Check size={18} strokeWidth={2.5} /></span>
          <p className="pt-1 text-sm font-bold leading-6 text-brand-navy/75">{outcome}</p>
        </div>
      ))}
    </div>
  );
}

import { Container } from "@/components/ui/Container";
import type { WorkStat } from "@/content/work";

const theme = {
  purple: "border-brand-purple/20 bg-brand-purple-soft text-brand-purple",
  pink: "border-brand-pink/20 bg-brand-pink-soft text-brand-pink",
  teal: "border-brand-teal/20 bg-brand-teal-soft text-brand-teal",
  orange: "border-brand-orange/20 bg-brand-orange-soft text-brand-orange",
};

export function WorkStatStrip({ stats }: { stats: WorkStat[] }) {
  return (
    <section className="section-surface-stats border-b border-slate-200/70 py-8 sm:py-10">
      <Container>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <article data-reveal key={stat.label} className={`rounded-[22px] border p-5 shadow-[0_12px_35px_rgba(13,27,61,.05)] ${theme[stat.accent]}`}>
              <strong className="block text-2xl font-[850] tracking-[-.04em] sm:text-3xl">{stat.value}</strong>
              <span className="mt-2 block text-xs font-bold leading-5 text-brand-navy/70">{stat.label}</span>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

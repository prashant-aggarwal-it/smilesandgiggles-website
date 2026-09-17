import type { HomePageContent } from "@/content/home";
import { AnimatedStat } from "@/components/ui/AnimatedStat";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { BrandAccentBar } from "@/components/ui/BrandAccentBar";
import { SectionAtmosphere } from "@/components/ui/SectionAtmosphere";

const statStyles = [
  { number: "text-brand-purple", bar: "bg-brand-purple", surface: "from-brand-purple-soft via-white to-white", orb: "bg-brand-purple" },
  { number: "text-brand-teal", bar: "bg-brand-teal", surface: "from-brand-teal-soft via-white to-white", orb: "bg-brand-teal" },
  { number: "text-brand-pink", bar: "bg-brand-pink", surface: "from-brand-pink-soft via-white to-white", orb: "bg-brand-pink" },
  { number: "text-brand-orange", bar: "bg-brand-orange", surface: "from-brand-orange-soft via-white to-white", orb: "bg-brand-orange" },
];

export function ImpactStatsSection({ content }: { content: HomePageContent["impactAtGlance"] }) {
  return (
    <section className="home-section home-section--impact section-surface-stats relative overflow-hidden border-y border-slate-200">
      <SectionAtmosphere variant="spark" className="z-0 opacity-55" />
      <Container className="relative z-10">
        <div data-reveal>
          <p className="home-kicker text-brand-pink">{content.eyebrow}</p>
          <h2 className="home-heading">{content.title}</h2>
          <BrandAccentBar className="mt-4" compact />
        </div>

        <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {content.stats.map((stat, index) => {
            const style = statStyles[index % statStyles.length];
            return (
              <article key={stat.label} data-reveal className={`group relative min-h-36 overflow-hidden rounded-[22px] border border-white/90 bg-gradient-to-br ${style.surface} p-5 shadow-[0_12px_30px_rgba(31,39,74,.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(31,39,74,.10)]`}>
                <span className={`absolute inset-x-0 top-0 h-1.5 ${style.bar}`} />
                <span className={`absolute -right-7 -top-7 size-20 rounded-full ${style.orb} opacity-15 transition duration-300 group-hover:scale-125 group-hover:opacity-20`} />
                <strong className={`relative block font-extrabold tracking-[-.05em] ${style.number} ${stat.numericValue ? "text-4xl" : "mt-1 text-xl"}`}><AnimatedStat displayValue={stat.value} numericValue={stat.numericValue} /></strong>
                <span className="relative mt-3 block text-[14px] font-semibold leading-5 text-slate-700">{stat.label}</span>
              </article>
            );
          })}
        </div>

        <div data-reveal className="mt-6 text-center">
          <ButtonLink href="/impact" variant="secondary" showArrow>Explore Our Impact</ButtonLink>
        </div>
      </Container>
    </section>
  );
}

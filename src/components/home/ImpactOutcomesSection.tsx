import type { HomePageContent } from "@/content/home";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TextLink } from "@/components/ui/TextLink";
import { SectionAtmosphere } from "@/components/ui/SectionAtmosphere";

export function ImpactOutcomesSection({ content }: { content: HomePageContent["impact"] }) {
  return (
    <section id="impact" className="section-pad section-surface-warm relative scroll-mt-24 overflow-hidden">
      <SectionAtmosphere variant="network" className="z-0 opacity-75" />
      <Container className="relative z-10 grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div data-reveal>
          <SectionHeading eyebrow={content.eyebrow} title={content.title} intro={content.intro} accent="orange" />
          <div className="mt-7 border-y border-slate-200">
            {content.outcomes.map((outcome, index) => {
              const colors = ["text-brand-pink", "text-brand-teal", "text-brand-orange", "text-brand-purple", "text-brand-pink"];
              return (
              <div key={outcome.title} className="grid grid-cols-[44px_1fr] gap-3 border-b border-slate-200 py-4 last:border-b-0">
                <span className={`pt-1 text-[10px] font-extrabold ${colors[index % colors.length]}`}>{String(index + 1).padStart(2, "0")}</span>
                <div><strong className="block text-sm font-extrabold text-ink">{outcome.title}</strong><p className="mt-1 text-xs leading-5 text-muted">{outcome.description}</p></div>
              </div>
              );
            })}
          </div>
          <div className="mt-6"><TextLink href="/impact">Explore Our Impact</TextLink></div>
        </div>

        <div data-reveal className="relative min-h-[500px] sm:min-h-[620px]">
          <div className="absolute right-0 top-0 h-[68%] w-[78%] overflow-hidden rounded-[28px] shadow-[0_26px_65px_rgba(31,39,74,.14)]"><Image src={content.images[0].src} alt={content.images[0].alt} fill sizes="(max-width: 1024px) 78vw, 39vw" className="object-cover" /></div>
          <div className="absolute bottom-0 left-0 h-[50%] w-[59%] overflow-hidden rounded-[26px] border-[8px] border-white shadow-[0_24px_60px_rgba(31,39,74,.14)]"><Image src={content.images[1].src} alt={content.images[1].alt} fill sizes="(max-width: 1024px) 59vw, 30vw" className="object-cover" /></div>
          <blockquote className="absolute bottom-[7%] right-0 w-[62%] rounded-2xl bg-gradient-to-r from-brand-purple to-brand-pink p-5 text-sm font-extrabold leading-6 text-white shadow-[0_18px_45px_rgba(109,60,201,.25)]">When students get the opportunity to build, experiment and explain, learning becomes active.</blockquote>
        </div>
      </Container>
    </section>
  );
}

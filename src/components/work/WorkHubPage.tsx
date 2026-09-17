import { ProgrammeSection, Steps } from "@/components/work/ProgrammeSections";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@/components/ui/LucideIcons";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { SectionAtmosphere } from "@/components/ui/SectionAtmosphere";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WorkPartnerCta } from "@/components/work/WorkPartnerCta";
import type { WorkHubContent } from "@/content/work";

const accentMap = {
  teal: "bg-brand-teal text-white border-brand-teal/20",
  pink: "bg-brand-pink text-white border-brand-pink/20",
  orange: "bg-brand-orange text-white border-brand-orange/20",
  purple: "bg-brand-purple text-white border-brand-purple/20",
};

export function WorkHubPage({ content: c }: { content: WorkHubContent }) {
  return (
    <main id="main-content">
      <PageHero eyebrow={c.hero.eyebrow} title={c.hero.title} intro={c.hero.intro} tagline={c.hero.tagline} images={[{ src: "/images/generated/our-work-connected-programmes.webp", alt: "Indian students exploring circuits and mechanics in a practical learning environment" }]} />
      <section className="section-surface-teal-pink relative overflow-hidden py-20 sm:py-24">
        <SectionAtmosphere variant="spark" />
        <Container className="relative">
          <SectionHeading eyebrow="Three Connected Focus Areas" title="Different Pathways. One Purpose: More Opportunity." intro="Each focus area has its own delivery model, but all three are built around practical access, confidence and long-term capability." />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {c.areas.map((area) => (
              <Link data-reveal key={area.href} href={area.href} className="group overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(13,27,61,.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(13,27,61,.13)]">
                <div className="relative h-72 overflow-hidden">
                  <Image src={area.image.src} alt={area.image.alt} fill sizes="(max-width:1024px) 100vw, 33vw" className="object-cover transition duration-700 group-hover:scale-[1.04]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/75 via-brand-navy/5 to-transparent" />
                  <span className={`absolute left-5 top-5 rounded-full px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[.1em] ${accentMap[area.accent]}`}>{area.badge}</span>
                </div>
                <div className="p-6 sm:p-7">
                  <h2 className="text-2xl font-[850] tracking-[-.045em] text-brand-navy">{area.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{area.description}</p>
                  <p className="mt-4 text-sm font-semibold text-brand-navy">Designed for: {area.audience}</p><div className="mt-4 flex flex-wrap gap-2">{area.tags.map(tag => <span key={tag} className="rounded-full bg-brand-purple-soft px-3 py-1 text-xs font-semibold text-brand-purple">{tag}</span>)}</div>
                  <span className="mt-5 inline-flex items-center gap-2 text-xs font-extrabold text-brand-purple">Explore Programme <ArrowRight size={15} /></span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
      <ProgrammeSection eyebrow="Our Shared Approach" title="Different Needs. One Practical Approach." intro="Across every programme, we combine relevant learning, practical participation, inclusive delivery and visible evidence of progress."><Steps items={[["Understand the Need", "Audience, environment and priorities"], ["Design the Programme", "Relevant activities and delivery model"], ["Deliver on the Ground", "Practical, engaging participation"], ["Document the Progress", "Outputs, evidence and partner reporting"]]} /></ProgrammeSection>
      <WorkPartnerCta cta={c.cta} />
    </main>
  );
}

import { Container } from "@/components/ui/Container";
import { SectionAtmosphere } from "@/components/ui/SectionAtmosphere";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WorkCaseStudyCard } from "@/components/work/WorkCaseStudyCard";
import { WorkFeatureGrid } from "@/components/work/WorkFeatureGrid";
import { WorkJourney } from "@/components/work/WorkJourney";
import { WorkOutcomeGrid } from "@/components/work/WorkOutcomeGrid";
import { WorkPageHero } from "@/components/work/WorkPageHero";
import { WorkPartnerCta } from "@/components/work/WorkPartnerCta";
import { WorkSectionNav } from "@/components/work/WorkSectionNav";
import type { PreventiveHealthContent } from "@/content/work";

export function PreventiveHealthPage({ content: c }: { content: PreventiveHealthContent }) {
  return (
    <main id="main-content">
      <WorkPageHero {...c.hero} />
      <WorkSectionNav items={c.quickNav} />

      <section id="focus" className="scroll-mt-36 section-surface-warm relative overflow-hidden py-20 sm:py-24">
        <SectionAtmosphere variant="spark" />
        <Container className="relative">
          <SectionHeading eyebrow="Our Preventive Focus" title="Simple Awareness. Early Action. Better Everyday Habits." intro="We concentrate on areas where clear information, timely screening and better daily choices can prevent avoidable problems and support children’s well-being." accent="orange" />
          <div className="mt-12"><WorkFeatureGrid features={c.focus} /></div>
        </Container>
      </section>

      <section id="oral-health" className="scroll-mt-36 section-surface-teal-pink relative overflow-hidden py-20 sm:py-24">
        <SectionAtmosphere variant="network" />
        <Container className="relative">
          <SectionHeading eyebrow="Oral Healthcare" title="Prevention and Early Awareness Before Pain Affects Learning" intro="Oral-health concerns can remain unnoticed until they begin to affect eating, sleep, concentration or attendance. Our model combines awareness with a practical route toward identification and follow-up." accent="teal" />
          <div className="mt-12"><WorkCaseStudyCard item={c.oralHealth} /></div>
        </Container>
      </section>

      <section id="nutrition" className="scroll-mt-36 section-surface-stories relative overflow-hidden py-20 sm:py-24">
        <SectionAtmosphere variant="orbit" />
        <Container className="relative">
          <SectionHeading eyebrow={c.nutrition.eyebrow} title={c.nutrition.title} intro={c.nutrition.intro} align="center" accent="orange" />
          <div className="mt-12"><WorkFeatureGrid features={c.nutrition.features} columns={2} /></div>
        </Container>
      </section>

      <section id="approach" className="scroll-mt-36 section-surface-grid relative overflow-hidden py-20 sm:py-24">
        <Container className="relative">
          <SectionHeading eyebrow={c.approach.eyebrow} title={c.approach.title} intro={c.approach.intro} align="center" accent="pink" />
          <WorkJourney steps={c.approach.steps} />
        </Container>
      </section>

      <section className="section-surface-government relative overflow-hidden py-20 sm:py-24">
        <SectionAtmosphere variant="circuits" />
        <Container className="relative grid gap-12 lg:grid-cols-[.85fr_1.15fr]">
          <div>
            <SectionHeading eyebrow="Responsible Delivery" title="Health Programs Need Safeguards, Not Just Good Intentions" intro="Where screening or health information is involved, professional scope, consent, referral discipline and privacy matter." accent="purple" />
            <div className="mt-9"><WorkFeatureGrid features={c.safeguards} columns={2} /></div>
          </div>
          <div>
            <SectionHeading eyebrow="What We Aim to Improve" title="Health Awareness That Supports Learning and Confidence" accent="teal" />
            <div className="mt-9"><WorkOutcomeGrid outcomes={c.outcomes} /></div>
          </div>
        </Container>
      </section>

      <WorkPartnerCta cta={c.cta} />
    </main>
  );
}

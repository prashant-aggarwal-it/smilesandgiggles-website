import type { HomePageContent } from "@/content/home";
import { ProgramCard } from "@/components/cards/ProgramCard";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { MakerLoop } from "@/components/ui/MakerLoop";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionAtmosphere } from "@/components/ui/SectionAtmosphere";

export function FlagshipSection({ content }: { content: HomePageContent["flagship"] }) {
  return (
    <section id="work" className="section-pad section-surface-purple relative scroll-mt-24 overflow-hidden">
      <SectionAtmosphere variant="circuits" className="z-0" />
      <Container className="relative z-10">
        <div data-reveal><SectionHeading eyebrow={content.eyebrow} title={content.title} intro={`${content.intro} ${content.emphasis}`} align="center" accent="orange" /></div>
        <div data-reveal><MakerLoop title={content.buildLine} description={content.body} /></div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {content.programs.map((program, index) => <ProgramCard key={program.slug} program={program} index={index} />)}
        </div>
        <div data-reveal className="mt-9 text-center"><ButtonLink href="/our-work/stem-education" showArrow>Explore Our STEM Education Program</ButtonLink></div>
      </Container>
    </section>
  );
}

import type { HomePageContent } from "@/content/home";
import { FocusAreaCard } from "@/components/cards/FocusAreaCard";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionAtmosphere } from "@/components/ui/SectionAtmosphere";

export function FocusAreasSection({ content }: { content: HomePageContent["focus"] }) {
  return (
    <section id="focus" className="home-section home-work-surface relative scroll-mt-24 overflow-hidden border-b border-slate-200">
      <SectionAtmosphere variant="orbit" className="z-0 opacity-45" />
      <Container className="relative z-10">
        <div data-reveal className="max-w-4xl">
          <SectionHeading eyebrow={content.eyebrow} title={content.title} accent="teal" />
          <p className="home-intro mt-4 max-w-3xl">{content.intro}</p>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-[1.12fr_.88fr] lg:grid-rows-2">
          {content.areas.map((area, index) => (
            <FocusAreaCard key={area.title} area={area} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}

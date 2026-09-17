import type { HomePageContent } from "@/content/home";
import { StoryCard } from "@/components/cards/StoryCard";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionAtmosphere } from "@/components/ui/SectionAtmosphere";

export function FieldStoriesSection({ content }: { content: HomePageContent["stories"] }) {
  return (
    <section className="section-pad section-surface-stories relative overflow-hidden">
      <SectionAtmosphere variant="spark" className="z-0" />
      <Container className="relative z-10">
        <div data-reveal className="grid items-end gap-7 lg:grid-cols-[1.25fr_.75fr] lg:gap-20">
          <SectionHeading eyebrow={content.eyebrow} title={content.title} accent="pink" />
          <p className="text-sm leading-7 text-muted sm:text-[15px]">{content.intro}</p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">{content.items.map((story, index) => <StoryCard key={story.title} story={story} index={index} />)}</div>
        <div data-reveal className="mt-9 text-center"><ButtonLink href="/impact#field-evidence" variant="secondary" showArrow>Explore Stories From the Field</ButtonLink></div>
      </Container>
    </section>
  );
}

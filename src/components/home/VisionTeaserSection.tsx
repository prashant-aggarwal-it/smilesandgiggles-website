import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import type { HomePageContent } from "@/content/home";

export function VisionTeaserSection({ content }: { content: HomePageContent["visionTeaser"] }) {
  return (
    <section className="bg-white py-12 sm:py-14">
      <Container>
        <div data-reveal className="grid gap-6 overflow-hidden rounded-[30px] bg-brand-navy px-7 py-8 text-white shadow-[0_22px_65px_rgba(13,27,61,.13)] sm:px-9 sm:py-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="max-w-4xl">
            <p className="text-[12px] font-black uppercase tracking-[.14em] text-brand-teal">{content.eyebrow}</p>
            <h2 className="mt-3 text-[clamp(2rem,3.6vw,3.35rem)] font-black leading-[1.04] tracking-[-.05em] text-white">{content.title}</h2>
            <p className="mt-4 max-w-3xl text-[15px] leading-7 text-white/72 sm:text-[16px]">{content.body}</p>
          </div>
          <div className="lg:pl-6">
            <ButtonLink href={content.cta.href} variant="white" showArrow>{content.cta.label}</ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}

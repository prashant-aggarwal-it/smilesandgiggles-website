import type { HomePageContent } from "@/content/home";
import { PartnerReasonCard } from "@/components/cards/PartnerReasonCard";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function WhyPartnerSection({ content }: { content: HomePageContent["partner"] }) {
  return (
    <section id="csr" className="home-section home-section--csr home-csr-surface scroll-mt-24 text-white">
      <Container>
        <div data-reveal className="max-w-4xl">
          <SectionHeading eyebrow={content.eyebrow} title={content.title} theme="dark" />
          <p className="mt-4 max-w-3xl text-[16px] leading-7 text-white/80">{content.intro}</p>
          <div className="mt-5"><ButtonLink href="/csr-partnerships" variant="white" showArrow>Explore CSR Partnerships</ButtonLink></div>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {content.reasons.map((reason, index) => <PartnerReasonCard key={reason.title} reason={reason} index={index} />)}
        </div>
      </Container>
    </section>
  );
}

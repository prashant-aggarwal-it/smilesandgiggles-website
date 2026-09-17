import type { HomePageContent } from "@/content/home";
import Image from "next/image";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";

export function FinalPartnershipCta({ content }: { content: HomePageContent["finalCta"] }) {
  return (
    <section id="get-involved" className="relative scroll-mt-24 overflow-hidden text-white">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 z-20 flex h-2"><span className="w-1/3 bg-brand-pink" /><span className="w-1/3 bg-brand-teal" /><span className="w-1/3 bg-brand-orange" /></div>
      <Image src={content.image.src} alt={content.image.alt} fill sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/96 via-brand-navy/82 to-brand-navy/32" />
      <Container className="relative z-10 py-14 sm:py-16">
        <div data-reveal className="max-w-3xl">
          <p className="home-kicker !text-brand-orange">{content.eyebrow}</p>
          <h2 className="max-w-3xl text-[clamp(2.4rem,4.4vw,4rem)] font-extrabold leading-[1.02] tracking-[-.045em]">{content.title}</h2>
          <p className="mt-5 max-w-2xl text-[16px] leading-7 text-white/80">{content.body}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <ButtonLink href="/get-involved" variant="white" showArrow>Get Involved</ButtonLink>
            <ButtonLink href="/csr-partnerships" variant="outlineLight">CSR Partnerships</ButtonLink>
            <ButtonLink href="/donate" variant="outlineLight">Donate</ButtonLink>
          </div>
          <small className="mt-6 block text-[13px] font-semibold tracking-[.04em] text-white/70">{content.supportLine}</small>
        </div>
      </Container>
    </section>
  );
}

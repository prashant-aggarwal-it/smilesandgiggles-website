import Link from "next/link";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { SectionAtmosphere } from "@/components/ui/SectionAtmosphere";

export function WorkPartnerCta({ cta }: { cta: { eyebrow: string; title: string; description: string; primary: { label: string; href: string }; secondary: { label: string; href: string } } }) {
  return (
    <section className="relative overflow-hidden bg-brand-navy py-20 text-white sm:py-24">
      <SectionAtmosphere variant="network" dense />
      <Container className="relative grid items-end gap-8 lg:grid-cols-[1.35fr_.65fr]">
        <div data-reveal>
          <p className="text-[11px] font-extrabold uppercase tracking-[.17em] text-brand-teal">{cta.eyebrow}</p>
          <h2 className="mt-4 max-w-4xl text-[clamp(1.8rem,3vw,2.75rem)] font-[850] leading-[.98] tracking-[-.06em]">{cta.title}</h2>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-white/75 sm:text-base">{cta.description}</p>
        </div>
        <div data-reveal className="flex flex-wrap gap-3 lg:justify-end">
          <ButtonLink href={cta.primary.href} variant="white" showArrow>{cta.primary.label}</ButtonLink>
          <ButtonLink href={cta.secondary.href} variant="outlineLight">{cta.secondary.label}</ButtonLink>
          {cta.primary.href !== "/contact" && <Link href="/contact" className="w-full text-sm font-semibold underline underline-offset-4 lg:text-right">Talk to Our Team →</Link>}
        </div>
      </Container>
    </section>
  );
}

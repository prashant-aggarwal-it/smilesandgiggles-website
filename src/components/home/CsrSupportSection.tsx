import type { HomePageContent } from "@/content/home";
import Link from "next/link";
import { ArrowRight } from "@/components/ui/LucideIcons";
import { SupportCard } from "@/components/cards/SupportCard";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionAtmosphere } from "@/components/ui/SectionAtmosphere";

export function CsrSupportSection({ content }: { content: HomePageContent["support"] }) {
  return (
    <section className="section-pad section-surface-csr-light relative overflow-hidden">
      <SectionAtmosphere variant="network" dense className="z-0 opacity-70" />
      <Container className="relative z-10">
        <div data-reveal><SectionHeading eyebrow={content.eyebrow} title={content.title} intro={content.intro} align="center" accent="pink" /></div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {content.options.map((option) => <SupportCard key={option.title} option={option} />)}
        </div>

        <div data-reveal className="relative mt-6 overflow-hidden rounded-[26px] border border-white/90 bg-slate-200 shadow-[0_16px_42px_rgba(29,36,70,.06)] lg:grid lg:grid-cols-3 lg:gap-px">
          <span className="absolute inset-x-0 top-0 z-20 h-1.5 bg-gradient-to-r from-brand-orange via-brand-pink to-brand-teal" />
          <div className="bg-gradient-to-br from-brand-purple-soft to-brand-pink-soft p-7">
            <span className="text-[10px] font-extrabold uppercase tracking-[.12em] text-brand-purple">{content.emergingTitle}</span>
            <h3 className="mt-3 text-xl font-extrabold tracking-[-.03em] text-ink">Help us pilot the next layer of community impact.</h3>
          </div>
          {content.emerging.map((item, index) => (
            <article key={item.title} className={`flex gap-4 bg-gradient-to-br p-7 ${index % 2 === 0 ? "from-brand-pink-soft to-white" : "from-brand-teal-soft to-white"}`}>
              <span className={`grid size-10 shrink-0 place-items-center rounded-xl text-xs font-extrabold text-white shadow-lg ${index % 2 === 0 ? "bg-brand-pink" : "bg-brand-teal"}`}>{item.marker}</span>
              <div><h3 className="text-base font-extrabold tracking-[-.025em] text-ink">{item.title}</h3><p className="mt-2 text-xs leading-5 text-muted">{item.description}</p><Link href={item.href} className="mt-4 inline-flex items-center gap-1.5 text-xs font-extrabold text-brand-purple hover:underline">{item.cta}<ArrowRight size={14} /></Link></div>
            </article>
          ))}
        </div>

        <div data-reveal className="relative mt-6 flex flex-col items-start justify-between gap-5 overflow-hidden rounded-[26px] border border-white/80 bg-gradient-to-r from-brand-orange-soft via-brand-pink-soft to-brand-teal-soft p-7 shadow-[0_16px_40px_rgba(29,36,70,.05)] sm:flex-row sm:items-center">
          <span className="absolute bottom-0 left-0 h-1.5 w-1/3 bg-brand-orange" /><span className="absolute bottom-0 left-1/3 h-1.5 w-1/3 bg-brand-pink" /><span className="absolute bottom-0 right-0 h-1.5 w-1/3 bg-brand-teal" />
          <div><small className="text-xs font-semibold text-muted">Have a CSR priority in mind?</small><strong className="mt-1 block text-xl font-extrabold tracking-[-.03em] text-ink">Let’s Design a Program Together.</strong></div>
          <ButtonLink href="/contact" showArrow>Start a Partnership Conversation</ButtonLink>
        </div>
      </Container>
    </section>
  );
}

import Link from "next/link";
import { CsrProofStrip } from "@/components/csr/CsrProofStrip";
import Image from "next/image";
import {
  BarChart3,
  BriefcaseBusiness,
  Check,
  ClipboardCheck,
  FileCheck2,
  FileText,
  Handshake,
  School,
  ShieldCheck,
  Sparkles,
  UsersRound,
} from "@/components/ui/LucideIcons";
import type { CsrPageContent } from "@/content/csr";
import { PartnershipBuilder } from "@/components/csr/PartnershipBuilder";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { SectionAtmosphere } from "@/components/ui/SectionAtmosphere";
import { SectionHeading } from "@/components/ui/SectionHeading";

const accents = {
  purple: { bg: "bg-brand-purple", soft: "bg-brand-purple-soft", text: "text-brand-purple", border: "border-brand-purple/20" },
  pink: { bg: "bg-brand-pink", soft: "bg-brand-pink-soft", text: "text-brand-pink", border: "border-brand-pink/20" },
  teal: { bg: "bg-brand-teal", soft: "bg-brand-teal-soft", text: "text-brand-teal", border: "border-brand-teal/20" },
  orange: { bg: "bg-brand-orange", soft: "bg-brand-orange-soft", text: "text-brand-orange", border: "border-brand-orange/20" },
};

const fitIcons = [ClipboardCheck, School, Sparkles, FileCheck2] as const;
const phaseIcons = [BriefcaseBusiness, FileCheck2, Handshake, BarChart3, FileText] as const;
const evidenceIcons = [ClipboardCheck, UsersRound, Sparkles, FileText, Handshake, FileCheck2] as const;

export function CsrPage({ content }: { content: CsrPageContent }) {
  return (
    <main id="main-content">
      <section className="site-page-hero hero-csr-v4 relative overflow-hidden bg-[linear-gradient(135deg,#0d1b3d_0%,#162a5f_58%,#0f3951_100%)] pb-14 pt-28 text-white sm:pb-16 sm:pt-32">
        <SectionAtmosphere variant="network" dense className="opacity-42" />
        <Container className="relative z-10 grid items-center gap-9 lg:grid-cols-[.84fr_1.16fr] lg:gap-12">
          <div data-reveal className="max-w-[690px]">
            <p className="eyebrow !text-brand-orange">{content.hero.eyebrow}</p>
            <h1 className="page-hero-heading text-white">
              <span className="hero-line block">{content.hero.titleLine1}</span>
              <span className="hero-line page-hero-gradient-on-dark mt-2 block">{content.hero.titleLine2}</span>
            </h1>
            <p className="page-hero-intro mt-6 max-w-[620px] !text-white/78">{content.hero.intro}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <ButtonLink href="/contact" variant="white" showArrow>Discuss a Partnership</ButtonLink>
              <ButtonLink href="/impact" variant="outlineLight">See Our Impact</ButtonLink>
            </div>
            <div className="mt-7 flex flex-wrap gap-2">
              {content.hero.note.split("•").map((item, index) => (
                <span key={item.trim()} className={`rounded-full border border-white/12 px-3.5 py-2 text-[11px] font-extrabold uppercase tracking-[.08em] text-white/82 ${index % 4 === 0 ? "bg-brand-purple/20" : index % 4 === 1 ? "bg-brand-teal/20" : index % 4 === 2 ? "bg-brand-pink/20" : "bg-brand-orange/20"}`}>
                  {item.trim()}
                </span>
              ))}
            </div>
          </div>

          <div data-reveal className="relative mx-auto min-h-[520px] w-full max-w-[860px] sm:min-h-[600px] lg:min-h-[630px]">
            <div className="absolute inset-0 overflow-hidden rounded-[36px] border border-white/10 shadow-[0_32px_100px_rgba(0,0,0,.30)]">
              <Image src={content.hero.image.src} alt={content.hero.image.alt} fill priority sizes="(max-width:1024px) 94vw,55vw" className="object-cover object-center" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/56 via-brand-navy/5 to-transparent" />
            </div>
            <div className="absolute bottom-5 left-5 right-5 grid gap-3 sm:grid-cols-[1fr_auto] sm:items-end">
              <div className="rounded-[24px] border border-white/15 bg-brand-navy/78 p-5 backdrop-blur-md">
                <strong className="block text-[16px] font-black">Field delivery + partner evidence</strong>
                <span className="mt-1 block max-w-[520px] text-[13px] font-semibold leading-5 text-white/72">A practical path from scoped program to school implementation, documentation and reporting.</span>
              </div>
              <div className="hidden size-[116px] place-items-center rounded-[24px] border border-white/15 bg-white/95 text-brand-purple shadow-[0_18px_45px_rgba(0,0,0,.22)] sm:grid">
                <FileCheck2 size={46} aria-hidden="true" />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="relative bg-white py-8 sm:py-9">
        <Container>
          <CsrProofStrip items={content.proof.items} />
          <nav aria-label="Explore programme areas" className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-slate-200 pt-5 text-sm">
            <span className="font-extrabold text-brand-navy">Explore programme areas:</span>
            <Link href="/our-work/stem-education" className="font-bold text-brand-purple underline-offset-4 hover:underline">STEM, Robotics & Coding</Link>
            <Link href="/our-work/youth-ai-digital-skills" className="font-bold text-brand-purple underline-offset-4 hover:underline">AI Literacy & Digital Skills</Link>
            <Link href="/our-work/preventive-health-awareness" className="font-bold text-brand-purple underline-offset-4 hover:underline">Preventive Health</Link>
          </nav>
        </Container>
      </section>

      <section id="builder" className="relative scroll-mt-24 overflow-hidden bg-[linear-gradient(180deg,#fff8fc_0%,#ffffff_45%,#effffc_100%)] py-14 sm:py-16">
        <SectionAtmosphere variant="circuits" className="opacity-30" />
        <Container className="relative z-10">
          <div data-reveal className="max-w-4xl">
            <p className="eyebrow">{content.builder.eyebrow}</p>
            <h2 className="section-title mt-3">{content.builder.title}</h2>
            <p className="mt-4 max-w-3xl text-[16px] leading-7 text-slate-600">{content.builder.intro}</p>
          </div>
          <div data-reveal className="mt-9"><PartnershipBuilder modules={content.builder.modules} /></div>
        </Container>
      </section>

      <section className="bg-white py-14 sm:py-16">
        <Container>
          <div data-reveal><SectionHeading eyebrow={content.fit.eyebrow} title={content.fit.title} intro={content.fit.intro} accent="teal" /></div>
          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {content.fit.items.map((item, index) => {
              const color = accents[item.accent];
              const Icon = fitIcons[index];
              return (
                <article key={item.title} data-reveal className="flex h-full flex-col rounded-[24px] border border-slate-100 bg-white p-5 shadow-[0_14px_38px_rgba(13,27,61,.055)]">
                  <span className={`grid size-11 place-items-center rounded-2xl ${color.soft} ${color.text}`}><Icon size={19} /></span>
                  <h3 className="mt-5 text-[18px] font-black leading-6 text-brand-navy">{item.title}</h3>
                  <p className="mt-2 text-[14px] leading-6 text-slate-600">{item.description}</p>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#f8f4ff_0%,#ffffff_48%,#eefcf8_100%)] py-14 sm:py-16">
        <SectionAtmosphere variant="network" dense className="opacity-20" />
        <Container className="relative z-10">
          <div data-reveal><SectionHeading eyebrow={content.models.eyebrow} title={content.models.title} intro={content.models.intro} accent="pink" /></div>
          <div className="mt-9 grid gap-5 lg:grid-cols-3">
            {content.models.options.map((option) => {
              const color = accents[option.accent];
              return (
                <article key={option.title} data-reveal className={`flex h-full flex-col rounded-[26px] border bg-white p-6 shadow-[0_16px_45px_rgba(13,27,61,.06)] ${color.border}`}>
                  <span className={`text-[12px] font-black uppercase tracking-[.11em] ${color.text}`}>{option.label}</span>
                  <h3 className="mt-3 text-[22px] font-black tracking-[-.035em] text-brand-navy">{option.title}</h3>
                  <p className="mt-3 text-[14px] leading-6 text-slate-600">{option.description}</p>
                  <div className={`mt-5 rounded-2xl px-3.5 py-3 text-[12px] font-extrabold ${color.soft} ${color.text}`}>
                    Best for: {option.bestFor}
                  </div>
                  <ul className="mt-5 grid gap-2">
                    {option.examples.map((example) => <li key={example} className="flex items-center gap-2 text-[13px] font-bold text-slate-700"><Check size={14} className={color.text} />{example}</li>)}
                  </ul>
                </article>
              );
            })}
          </div>

          <div data-reveal className="mt-6 grid items-center gap-5 overflow-hidden rounded-[28px] border border-brand-purple/12 bg-white p-6 shadow-[0_18px_50px_rgba(13,27,61,.06)] md:grid-cols-[130px_1fr_auto] sm:p-7">
            <div className="mx-auto grid size-[118px] place-items-center rounded-[22px] bg-[linear-gradient(135deg,#fff5fb,#effffc)] text-brand-pink md:mx-0">
              <UsersRound size={44} aria-hidden="true" />
            </div>
            <div>
              <h3 className="text-xl font-black tracking-[-.03em] text-brand-navy">{content.models.employee.title}</h3>
              <p className="mt-2 text-[14px] leading-6 text-slate-600">{content.models.employee.description}</p>
            </div>
            <ButtonLink href="/get-involved#employee-volunteering" variant="outline" showArrow>Employee Volunteering</ButtonLink>
          </div>
        </Container>
      </section>

      <section className="bg-white py-14 sm:py-16">
        <Container>
          <div data-reveal><SectionHeading eyebrow={content.roadmap.eyebrow} title={content.roadmap.title} intro={content.roadmap.intro} accent="orange" /></div>
          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {content.roadmap.phases.map((phase, index) => {
              const color = accents[phase.accent];
              const Icon = phaseIcons[index];
              return (
                <article key={phase.number} data-reveal className="relative rounded-[22px] border border-slate-100 bg-white p-5 shadow-[0_12px_35px_rgba(13,27,61,.05)]">
                  <div className="flex items-center justify-between gap-3">
                    <span className={`text-[12px] font-black ${color.text}`}>{phase.number}</span>
                    <span className={`grid size-10 place-items-center rounded-xl ${color.soft} ${color.text}`}><Icon size={17} /></span>
                  </div>
                  <h3 className="mt-4 text-[17px] font-black text-brand-navy">{phase.title}</h3>
                  <p className="mt-2 text-[13px] leading-5 text-slate-600">{phase.description}</p>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-brand-navy py-14 text-white sm:py-16">
        <SectionAtmosphere variant="network" dense className="opacity-30" />
        <Container className="relative z-10 grid gap-8 lg:grid-cols-[.72fr_1.28fr] lg:items-center">
          <div data-reveal>
            <p className="eyebrow !text-brand-teal">{content.evidence.eyebrow}</p>
            <h2 className="section-title section-title--dark mt-3">{content.evidence.title}</h2>
            <p className="mt-4 max-w-xl text-[16px] leading-7 text-white/72">{content.evidence.intro}</p>
            <div className="mt-7 rounded-[26px] border border-white/10 bg-white/[.055] p-6">
              <div className="mx-auto grid h-[180px] max-w-[280px] place-items-center rounded-[24px] border border-white/10 bg-white/[.04] text-brand-teal">
                <ClipboardCheck size={68} aria-hidden="true" />
              </div>
              <p className="mt-4 text-center text-[13px] font-bold leading-6 text-white/68">Evidence should help a partner understand what was planned, what was delivered and what was learned.</p>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {content.evidence.items.map((item, index) => {
              const color = accents[item.accent];
              const Icon = evidenceIcons[index];
              return (
                <article key={item.title} data-reveal className="rounded-[22px] border border-white/10 bg-white/[.06] p-5">
                  <span className={`grid size-10 place-items-center rounded-xl ${color.bg} text-white`}><Icon size={17} /></span>
                  <h3 className="mt-4 text-[16px] font-black">{item.title}</h3>
                  <p className="mt-2 text-[13px] leading-5 text-white/70">{item.description}</p>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#fff8ef,#ffffff_48%,#effffc)] py-14 sm:py-16">
        <Container>
          <div data-reveal className="grid gap-7 rounded-[30px] border border-white bg-white/90 p-7 shadow-[0_18px_55px_rgba(13,27,61,.06)] lg:grid-cols-[.9fr_1.1fr] lg:items-center sm:p-8">
            <div>
              <p className="eyebrow">{content.dueDiligence.eyebrow}</p>
              <h2 className="mt-3 text-[clamp(2rem,3.2vw,3rem)] font-black leading-[1.03] tracking-[-.045em] text-brand-navy">{content.dueDiligence.title}</h2>
              <p className="mt-4 text-[14px] leading-6 text-slate-600">{content.dueDiligence.intro}</p>
              <div className="mt-5"><ButtonLink href="/governance" variant="secondary" showArrow>Governance & Documents</ButtonLink></div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {content.dueDiligence.registrations.map((item) => {
                const color = accents[item.accent];
                return (
                  <div key={item.label} className={`rounded-[20px] border bg-white p-4 ${color.border}`}>
                    <ShieldCheck size={18} className={color.text} />
                    <strong className="mt-3 block text-[15px] text-brand-navy">{item.label}</strong>
                    <span className="mt-1 block text-[13px] font-semibold text-slate-600">{item.value}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-14 sm:py-16">
        <Container>
          <div data-reveal className="max-w-4xl">
            <p className="eyebrow">{content.faq.eyebrow}</p>
            <h2 className="section-title mt-3">{content.faq.title}</h2>
            <p className="mt-4 max-w-3xl text-[16px] leading-7 text-slate-600">{content.faq.intro}</p>
          </div>
          <div className="mt-8 grid gap-3 lg:grid-cols-2">
            {content.faq.items.map((item) => (
              <details key={item.question} data-reveal className="group rounded-[20px] border border-slate-200 bg-white p-5 shadow-[0_10px_28px_rgba(13,27,61,.04)] open:border-brand-purple/20 open:bg-brand-purple-soft/30">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-[15px] font-black leading-6 text-brand-navy">
                  <span>{item.question}</span><span className="mt-1 text-brand-purple transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 pr-6 text-[14px] leading-6 text-slate-600">{item.answer}</p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#fdebf4,#e9faf7_54%,#fff2e3)] py-14 sm:py-16">
        <Container data-reveal className="relative overflow-hidden rounded-[32px] bg-brand-navy p-8 text-white shadow-[0_26px_75px_rgba(13,27,61,.20)] sm:p-10">
          <span className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-brand-orange via-brand-pink to-brand-teal" />
          <div className="grid items-center gap-7 lg:grid-cols-[1fr_auto]">
            <div className="max-w-3xl">
              <p className="eyebrow !text-brand-orange">{content.cta.eyebrow}</p>
              <h2 className="mt-3 text-[clamp(2rem,3.3vw,3.2rem)] font-black leading-[1.02] tracking-[-.045em]">{content.cta.title}</h2>
              <p className="mt-4 max-w-2xl text-[15px] leading-7 text-white/72">{content.cta.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {content.cta.needs.map((item) => <span key={item} className="rounded-full border border-white/12 bg-white/[.07] px-3 py-1.5 text-[12px] font-bold text-white/82">{item}</span>)}
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <ButtonLink href={content.cta.primary.href} variant="white" showArrow>{content.cta.primary.label}</ButtonLink>
              <ButtonLink href={content.cta.secondary.href} variant="outlineLight">{content.cta.secondary.label}</ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}

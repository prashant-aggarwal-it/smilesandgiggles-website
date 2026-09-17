import Image from "next/image";
import Link from "next/link";
import { Building2, CheckCircle2, ClipboardCheck, FileCheck2, FileText, LockKeyhole, Mail, MessageCircle, ShieldCheck } from "@/components/ui/LucideIcons";
import type { GovernancePageContent } from "@/content/governance";
import { DocumentCard } from "@/components/cards/DocumentCard";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { SectionAtmosphere } from "@/components/ui/SectionAtmosphere";
import { siteConfig } from "@/content/site";
import { cn } from "@/lib/cn";

const accentStyles = {
  purple: { border: "border-brand-purple/25", tile: "bg-brand-purple-soft text-brand-purple", rail: "bg-brand-purple" },
  pink: { border: "border-brand-pink/25", tile: "bg-brand-pink-soft text-brand-pink", rail: "bg-brand-pink" },
  teal: { border: "border-brand-teal/25", tile: "bg-brand-teal-soft text-brand-teal", rail: "bg-brand-teal" },
  orange: { border: "border-brand-orange/25", tile: "bg-brand-orange-soft text-brand-orange", rail: "bg-brand-orange" },
};

const accountabilityIcons = [FileText, ShieldCheck, FileCheck2, ClipboardCheck];

export function GovernancePage({ content }: { content: GovernancePageContent }) {
  return (
    <main id="main-content">
      <section className="site-page-hero relative overflow-hidden bg-[linear-gradient(135deg,#fff8fc_0%,#ffffff_47%,#eefcf9_100%)] pb-14 pt-28 sm:pb-16 sm:pt-32 lg:pb-20">
        <SectionAtmosphere variant="network" className="opacity-24" />
        <Container className="relative z-10 grid gap-10 lg:grid-cols-[.95fr_1.05fr] lg:items-center lg:gap-14">
          <div data-reveal>
            <p className="eyebrow">{content.hero.eyebrow}</p>
            <h1 className="page-hero-heading max-w-[900px]">
              <span className="hero-line block text-brand-navy">Trust Built on Clear Governance.</span>
              <span className="hero-line page-hero-gradient block">Accountability You Can Verify.</span>
            </h1>
            <p className="page-hero-intro mt-6 max-w-2xl">{content.hero.intro}</p>
            <div className="mt-7 flex flex-wrap gap-2.5">
              {["NGO DARPAN", "12A", "80G", "CSR-1"].map((item, index) => {
                const tones = ["bg-brand-purple-soft text-brand-purple", "bg-brand-teal-soft text-brand-teal", "bg-brand-pink-soft text-brand-pink", "bg-brand-orange-soft text-brand-orange"];
                return <span key={item} className={`rounded-full px-3.5 py-2 text-[13px] font-black ${tones[index]}`}>{item}</span>;
              })}
            </div>
          </div>

          <div data-reveal className="relative mx-auto min-h-[430px] w-full max-w-[680px] sm:min-h-[500px]">
            <div className="absolute inset-[4%_4%_8%_8%] rounded-[36px] bg-[radial-gradient(circle_at_22%_20%,rgba(113,56,212,.18),transparent_32%),radial-gradient(circle_at_82%_76%,rgba(22,185,173,.18),transparent_30%),#ffffff] shadow-[0_30px_90px_rgba(13,27,61,.12)]" />
            <div className="absolute left-[12%] top-[10%] h-[72%] w-[64%]">
              <Image src="/images/illustrations/verified-report.webp" alt="Verified governance and reporting illustration" fill priority sizes="(min-width:1024px) 36vw,72vw" className="object-contain" />
            </div>
            <div className="absolute right-[4%] top-[17%] grid gap-3">
              {["DARPAN", "12A", "80G", "CSR-1"].map((label, index) => {
                const tones = ["bg-brand-purple text-white", "bg-brand-teal text-white", "bg-brand-pink text-white", "bg-brand-orange text-white"];
                return <div key={label} className={`flex min-w-[120px] items-center gap-2 rounded-2xl px-3.5 py-3 text-[13px] font-black shadow-lg ${tones[index]}`}><CheckCircle2 size={16} />{label}</div>;
              })}
            </div>
            <div className="absolute bottom-[4%] left-[10%] max-w-[310px] rounded-[20px] bg-brand-navy px-5 py-4 text-white shadow-xl">
              <div className="flex items-center gap-2 text-brand-teal"><ShieldCheck size={19} /><strong className="text-[14px]">Built for due diligence</strong></div>
              <p className="mt-2 text-[13px] leading-5 text-white/72">Registrations, public policies and partner documentation brought together in one place.</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-white py-14 sm:py-16">
        <Container>
          <div data-reveal className="max-w-4xl">
            <p className="eyebrow">{content.registrations.eyebrow}</p>
            <h2 className="section-title mt-3">{content.registrations.title}</h2>
            <p className="mt-4 max-w-3xl text-[16px] leading-7 text-slate-600">{content.registrations.intro}</p>
          </div>
          <div className="mt-9 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {content.registrations.items.map((item) => {
              const style = accentStyles[item.accent];
              return (
                <article key={item.title} data-reveal className={cn("balanced-card relative overflow-hidden rounded-[24px] border bg-white p-6 shadow-[0_16px_44px_rgba(13,27,61,.06)]", style.border)}>
                  <span aria-hidden="true" className={cn("absolute inset-x-0 top-0 h-1.5", style.rail)} />
                  <div className={cn("grid size-12 place-items-center rounded-2xl", style.tile)}><ShieldCheck size={21} /></div>
                  <p className="mt-5 text-[12px] font-black uppercase tracking-[.12em] text-slate-500">{item.status}</p>
                  <h3 className="mt-2 text-xl font-black tracking-[-.035em] text-brand-navy">{item.title}</h3>
                  <p className="mt-3 text-[14px] font-bold leading-6 text-slate-600">{item.detail}</p>
                  <p className="mt-3 text-[14px] leading-6 text-slate-600">{item.description}</p>
                  <div className="balanced-card__footer">
                    {item.href ? <Link href={item.href} target="_blank" rel="noreferrer" className="text-[13px] font-extrabold text-brand-purple hover:underline">View Certificate →</Link> : <span className="inline-flex items-center gap-2 text-[13px] font-bold text-slate-400"><LockKeyhole size={14} />Document available on request</span>}
                  </div>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#f8f4ff_0%,#ffffff_48%,#eefcf8_100%)] py-14 sm:py-16">
        <SectionAtmosphere variant="circuits" dense className="opacity-18" />
        <Container className="relative z-10">
          <div data-reveal className="max-w-4xl">
            <p className="eyebrow">{content.accountability.eyebrow}</p>
            <h2 className="section-title mt-3">{content.accountability.title}</h2>
            <p className="mt-4 max-w-3xl text-[16px] leading-7 text-slate-600">{content.accountability.intro}</p>
          </div>
          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {content.accountability.items.map((item, index) => {
              const Icon = accountabilityIcons[index];
              const style = accentStyles[item.accent];
              return (
                <article key={item.title} data-reveal className="rounded-[24px] border border-white bg-white/94 p-6 shadow-[0_16px_42px_rgba(13,27,61,.06)]">
                  <span className={cn("grid size-12 place-items-center rounded-2xl", style.tile)}><Icon size={21} /></span>
                  <h3 className="mt-5 text-[18px] font-black text-brand-navy">{item.title}</h3>
                  <p className="mt-2.5 text-[14px] leading-6 text-slate-600">{item.description}</p>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      <section id="documents" className="scroll-mt-24 bg-white py-14 sm:py-16">
        <Container>
          <div data-reveal className="max-w-4xl">
            <p className="eyebrow">{content.documents.eyebrow}</p>
            <h2 className="section-title mt-3">{content.documents.title}</h2>
            <p className="mt-4 max-w-3xl text-[16px] leading-7 text-slate-600">{content.documents.intro}</p>
          </div>
          <div className="mt-9 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {content.documents.items.map((item) => <DocumentCard key={item.title} {...item} />)}
          </div>
        </Container>
      </section>

      <section className="bg-[linear-gradient(135deg,#eefcf9_0%,#ffffff_52%,#fff8fc_100%)] py-12 sm:py-14">
        <Container>
          <div data-reveal className="rounded-[30px] border border-white bg-white/88 p-7 shadow-[0_20px_60px_rgba(13,27,61,.07)] sm:p-9">
            <div className="max-w-4xl">
              <p className="eyebrow">{content.partners.eyebrow}</p>
              <h2 className="text-[clamp(2rem,3.5vw,3.15rem)] font-black tracking-[-.05em] text-brand-navy">{content.partners.title}</h2>
            </div>
            <div className="mt-7 grid gap-4 md:grid-cols-3">
              {content.partners.items.map((item, index) => {
                const icons = [Building2, FileCheck2, MessageCircle];
                const Icon = icons[index];
                return <div key={item.title} className="rounded-[20px] bg-slate-50 p-5"><Icon size={20} className="text-brand-teal" /><h3 className="mt-3 text-[17px] font-black text-brand-navy">{item.title}</h3><p className="mt-2 text-[14px] leading-6 text-slate-600">{item.description}</p></div>;
              })}
            </div>
            <div className="mt-7 flex flex-wrap gap-3 border-t border-slate-100 pt-6"><ButtonLink href="/csr-partnerships" variant="secondary" showArrow>Explore CSR Partnerships</ButtonLink><ButtonLink href="/contact" variant="outline">Start a Conversation</ButtonLink></div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-12 sm:py-14">
        <Container>
          <div data-reveal className="grid gap-6 rounded-[28px] bg-brand-navy p-7 text-white shadow-[0_24px_70px_rgba(13,27,61,.16)] sm:p-9 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <div className="flex items-center gap-2 text-brand-orange"><LockKeyhole size={20} /><strong className="text-[14px] uppercase tracking-[.08em]">Need a registration or governance document?</strong></div>
              <h2 className="mt-3 text-2xl font-black tracking-[-.035em]">Ask us directly for due-diligence support.</h2>
              <p className="mt-2 max-w-3xl text-[14px] leading-6 text-white/72">{content.privacyNote.body}</p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end"><a href={siteConfig.contact.emailHref} className="inline-flex min-h-12 items-center gap-2 rounded-full bg-white px-5 py-3 text-[14px] font-extrabold text-brand-navy"><Mail size={16} />Email Us</a><a href={siteConfig.contact.whatsappHref} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center gap-2 rounded-full border border-white/25 px-5 py-3 text-[14px] font-extrabold text-white hover:bg-white/10"><MessageCircle size={16} />WhatsApp</a></div>
          </div>
        </Container>
      </section>
    </main>
  );
}

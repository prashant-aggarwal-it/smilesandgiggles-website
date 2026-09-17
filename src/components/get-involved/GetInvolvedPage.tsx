import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  Camera,
  CheckCircle2,
  Code2,
  GraduationCap,
  HandHeart,
  HeartHandshake,
  Lightbulb,
  MapPin,
  School,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Users,
  Wrench,
} from "@/components/ui/LucideIcons";
import type { GetInvolvedContent } from "@/content/get-involved";
import { GetInvolvedInterestForm } from "@/components/get-involved/GetInvolvedInterestForm";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { SectionAtmosphere } from "@/components/ui/SectionAtmosphere";

const accents = {
  purple: { bg: "bg-brand-purple", soft: "bg-brand-purple-soft", text: "text-brand-purple", border: "border-brand-purple/20" },
  pink: { bg: "bg-brand-pink", soft: "bg-brand-pink-soft", text: "text-brand-pink", border: "border-brand-pink/20" },
  teal: { bg: "bg-brand-teal", soft: "bg-brand-teal-soft", text: "text-brand-teal", border: "border-brand-teal/20" },
  orange: { bg: "bg-brand-orange", soft: "bg-brand-orange-soft", text: "text-brand-orange", border: "border-brand-orange/20" },
};

const pathwayIcons = {
  heart: HandHeart,
  skills: Wrench,
  school: School,
  team: Users,
};

const benefitIcons = {
  impact: CheckCircle2,
  purpose: Sparkles,
  field: MapPin,
  people: HeartHandshake,
};

const skillIcons = {
  technology: Code2,
  stem: Lightbulb,
  education: GraduationCap,
  health: Stethoscope,
  creative: Camera,
  professional: BriefcaseBusiness,
};

export function GetInvolvedPage({ content, submitted = false }: { content: GetInvolvedContent; submitted?: boolean }) {
  return (
    <main id="main-content" className="involved-v3">
      <section className="site-page-hero hero-involved-v4 relative overflow-hidden bg-[linear-gradient(135deg,#fff8fc_0%,#f7f3ff_52%,#eefcf9_100%)] pb-14 pt-28 sm:pb-16 sm:pt-32">
        <SectionAtmosphere variant="orbit" className="opacity-35" />
        <Container className="relative z-10 grid gap-10 lg:grid-cols-[.93fr_1.07fr] lg:items-center">
          <div data-reveal>
            <p className="eyebrow">{content.hero.eyebrow}</p>
            <h1 className="page-hero-heading mt-4 max-w-[920px]">
              <span className="hero-line block text-brand-navy">Your Time.</span>
              <span className="hero-line page-hero-gradient block">Your Skills.</span>
              <span className="hero-line block text-brand-navy">Their Opportunity.</span>
            </h1>
            <p className="page-hero-intro mt-6 max-w-2xl">{content.hero.intro}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <ButtonLink href={content.hero.primary.href} showArrow>{content.hero.primary.label}</ButtonLink>
              <ButtonLink href={content.hero.secondary.href} variant="secondary">{content.hero.secondary.label}</ButtonLink>
            </div>
            <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-bold text-brand-navy/70">
              <span className="inline-flex items-center gap-2"><span className="size-2 rounded-full bg-brand-purple" />Give time</span>
              <span className="inline-flex items-center gap-2"><span className="size-2 rounded-full bg-brand-teal" />Share skills</span>
              <span className="inline-flex items-center gap-2"><span className="size-2 rounded-full bg-brand-orange" />Open doors</span>
              <span className="inline-flex items-center gap-2"><span className="size-2 rounded-full bg-brand-pink" />Volunteer as a team</span>
            </div>
          </div>

          <div data-reveal className="relative mx-auto w-full max-w-[700px]">
            <div className="absolute -left-6 -top-6 size-28 rounded-full bg-brand-purple/12 blur-2xl" />
            <div className="absolute -bottom-8 -right-8 size-40 rounded-full bg-brand-teal/16 blur-3xl" />
            <div className="relative overflow-hidden rounded-[34px] bg-white p-2 shadow-[0_30px_90px_rgba(13,27,61,.14)]">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[28px]">
                <Image src={content.hero.image.src} alt={content.hero.image.alt} fill priority sizes="(min-width:1024px) 52vw, 100vw" className="object-cover object-center" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-navy/72 via-brand-navy/18 to-transparent p-6 pt-20 text-white sm:p-7">
                  <p className="text-sm font-extrabold uppercase tracking-[.12em] text-white/75">Participation with purpose</p>
                  <p className="mt-2 max-w-md text-lg font-black leading-6 sm:text-xl">Share skills. Create opportunity.</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="ways-to-help" className="relative scroll-mt-24 overflow-hidden bg-white py-14 sm:py-16">
        <span id="volunteer" className="absolute -top-24" aria-hidden="true" />
        <Container>
          <div data-reveal className="max-w-4xl">
            <p className="eyebrow">{content.pathways.eyebrow}</p>
            <h2 className="section-title mt-3">{content.pathways.title}</h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">{content.pathways.intro}</p>
          </div>

          <div className="mt-9 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {content.pathways.items.map((item) => {
              const Icon = pathwayIcons[item.icon];
              const style = accents[item.accent];
              return (
                <article key={item.id} data-reveal className={`group rounded-[26px] border ${style.border} bg-white p-6 shadow-[0_18px_50px_rgba(13,27,61,.06)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(13,27,61,.10)]`}>
                  <span className={`grid size-12 place-items-center rounded-[18px] ${style.soft} ${style.text}`}><Icon size={22} strokeWidth={2.2} /></span>
                  <h3 className="mt-5 text-xl font-black tracking-[-.035em] text-brand-navy">{item.title}</h3>
                  <p className="mt-3 text-[15px] leading-7 text-slate-600">{item.description}</p>
                  <a href="#interest-form" className={`mt-5 inline-flex items-center gap-2 text-sm font-extrabold ${style.text}`}>Choose this path <ArrowRight size={15} /></a>
                </article>
              );
            })}
          </div>

          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 border-t border-slate-100 pt-5 text-sm font-bold">
            <Link href={content.pathways.donate.href} className="text-brand-pink hover:underline">{content.pathways.donate.label}</Link>
            <Link href={content.pathways.csr.href} className="text-brand-purple hover:underline">{content.pathways.csr.label}</Link>
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#f8f4ff_0%,#ffffff_45%,#eefcf8_100%)] py-14 sm:py-16">
        <SectionAtmosphere variant="network" className="opacity-25" />
        <Container className="relative z-10">
          <div data-reveal className="max-w-3xl">
            <p className="eyebrow">{content.benefits.eyebrow}</p>
            <h2 className="section-title mt-3">{content.benefits.title}</h2>
            <p className="mt-4 text-base leading-7 text-slate-600">{content.benefits.intro}</p>
          </div>
          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {content.benefits.items.map((item) => {
              const Icon = benefitIcons[item.icon];
              const style = accents[item.accent];
              return (
                <article key={item.title} data-reveal className="rounded-[24px] bg-white p-6 shadow-[0_18px_55px_rgba(13,27,61,.07)]">
                  <span className={`grid size-11 place-items-center rounded-2xl ${style.bg} text-white`}><Icon size={20} /></span>
                  <h3 className="mt-5 text-lg font-black tracking-[-.025em] text-brand-navy">{item.title}</h3>
                  <p className="mt-3 text-[15px] leading-7 text-slate-600">{item.description}</p>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      <section id="skill-mentor" className="scroll-mt-24 bg-white py-14 sm:py-16">
        <Container>
          <div data-reveal className="max-w-4xl">
            <p className="eyebrow">{content.skills.eyebrow}</p>
            <h2 className="section-title mt-3">{content.skills.title}</h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">{content.skills.intro}</p>
          </div>
          <div className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {content.skills.items.map((item) => {
              const Icon = skillIcons[item.icon];
              const style = accents[item.accent];
              return (
                <div key={item.title} data-reveal className={`flex items-start gap-4 rounded-[22px] border ${style.border} ${style.soft} p-5`}>
                  <span className={`grid size-11 shrink-0 place-items-center rounded-2xl bg-white ${style.text} shadow-sm`}><Icon size={20} /></span>
                  <div><h3 className="text-[17px] font-black text-brand-navy">{item.title}</h3><p className="mt-1.5 text-sm leading-6 text-slate-600">{item.description}</p></div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-brand-navy py-14 text-white sm:py-16">
        <SectionAtmosphere variant="circuits" dense className="opacity-25" />
        <Container className="relative z-10">
          <div data-reveal className="max-w-2xl">
            <p className="text-sm font-black uppercase tracking-[.12em] text-brand-teal">{content.journey.eyebrow}</p>
            <h2 className="mt-3 text-3xl font-black tracking-[-.045em] sm:text-4xl">{content.journey.title}</h2>
          </div>
          <div className="relative mt-10 grid gap-3 md:grid-cols-5">
            <div className="absolute left-[10%] right-[10%] top-[24px] hidden h-px bg-white/15 md:block" />
            {content.journey.steps.map((step) => (
              <article key={step.number} data-reveal className="relative rounded-[22px] border border-white/10 bg-white/[.055] p-5 backdrop-blur-sm">
                <span className="relative z-10 grid size-12 place-items-center rounded-full bg-white text-sm font-black text-brand-purple shadow-lg">{step.number}</span>
                <h3 className="mt-5 text-lg font-black">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/72">{step.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="refer-school" className="scroll-mt-24 bg-[linear-gradient(180deg,#fff_0%,#fff8f1_100%)] py-14 sm:py-16">
        <Container>
          <div className="grid gap-5 lg:grid-cols-2">
            <article data-reveal className="relative flex h-full flex-col overflow-hidden rounded-[30px] border border-brand-orange/20 bg-white p-7 shadow-[0_22px_60px_rgba(13,27,61,.07)] sm:p-8">
              <div className="absolute -right-16 -top-16 size-44 rounded-full bg-brand-orange/10" />
              <span className="grid size-12 place-items-center rounded-[18px] bg-brand-orange text-white"><School size={22} /></span>
              <p className="mt-6 text-sm font-black uppercase tracking-[.12em] text-brand-orange">{content.specialPaths.school.eyebrow}</p>
              <h2 className="mt-2 max-w-xl text-2xl font-black tracking-[-.04em] text-brand-navy sm:text-3xl">{content.specialPaths.school.title}</h2>
              <p className="mt-4 max-w-xl text-[15px] leading-7 text-slate-600">{content.specialPaths.school.description}</p>
              <a href={content.specialPaths.school.href} className="mt-auto pt-6 inline-flex items-center gap-2 text-sm font-extrabold text-brand-orange">{content.specialPaths.school.cta}<ArrowRight size={16} /></a>
            </article>

            <article id="employee-volunteering" data-reveal className="relative flex h-full scroll-mt-24 flex-col overflow-hidden rounded-[30px] bg-[linear-gradient(135deg,#6D3CC9_0%,#E83D8C_100%)] p-7 text-white shadow-[0_22px_60px_rgba(109,60,201,.20)] sm:p-8">
              <Building2 className="absolute -right-7 -top-6 size-36 text-white/10" />
              <span className="grid size-12 place-items-center rounded-[18px] bg-white/16 text-white"><Users size={22} /></span>
              <p className="mt-6 text-sm font-black uppercase tracking-[.12em] text-white/75">{content.specialPaths.employee.eyebrow}</p>
              <h2 className="mt-2 max-w-xl text-2xl font-black tracking-[-.04em] sm:text-3xl">{content.specialPaths.employee.title}</h2>
              <p className="mt-4 max-w-xl text-[15px] leading-7 text-white/80">{content.specialPaths.employee.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">{content.specialPaths.employee.chips.map((chip) => <span key={chip} className="rounded-full bg-white/12 px-3 py-1.5 text-sm font-bold">{chip}</span>)}</div>
              <Link href={content.specialPaths.employee.href} className="mt-auto pt-6 inline-flex items-center gap-2 text-sm font-extrabold text-white">{content.specialPaths.employee.cta}<ArrowRight size={16} /></Link>
            </article>
          </div>
        </Container>
      </section>

      <section id="interest-form" className="relative scroll-mt-24 overflow-hidden bg-[linear-gradient(135deg,#f8f4ff_0%,#ffffff_48%,#eefcf8_100%)] py-12 sm:py-14">
        <SectionAtmosphere variant="orbit" className="opacity-20" />
        <Container className="relative z-10">
          <div data-reveal className="max-w-4xl">
            <p className="eyebrow">{content.form.eyebrow}</p>
            <h2 className="text-[clamp(2.25rem,3.8vw,3.65rem)] font-black leading-[1.02] tracking-[-.05em] text-brand-navy">{content.form.title}</h2>
            <p className="mt-4 max-w-3xl text-[16px] leading-7 text-slate-600">{content.form.intro}</p>
          </div>

          <div data-reveal className="mt-6 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["01", "What you can offer", "Skills, time, connections or team participation."],
              ["02", "Where you can help", "Choose the program area and contribution that fits you."],
              ["03", "When & how", "Share city, availability and online/on-ground preference."],
            ].map(([number, title, body]) => (
              <div key={title} className="rounded-[18px] border border-slate-200/80 bg-white/90 p-4 shadow-[0_10px_26px_rgba(13,27,61,.04)]">
                <span className="text-[12px] font-black text-brand-purple">{number}</span>
                <h3 className="mt-2 text-[15px] font-black text-brand-navy">{title}</h3>
                <p className="mt-1 text-[13px] leading-5 text-slate-600">{body}</p>
              </div>
            ))}
            <div className="rounded-[18px] border border-brand-teal/20 bg-brand-teal-soft p-4">
              <ShieldCheck className="text-brand-teal" size={20} />
              <h3 className="mt-2 text-[15px] font-black text-brand-navy">Responsible volunteering</h3>
              <p className="mt-1 text-[13px] leading-5 text-slate-600">Suitability, permissions and safeguarding apply where required.</p>
            </div>
          </div>

          <div data-reveal className="mt-5">
            <GetInvolvedInterestForm submitted={submitted} />
          </div>
        </Container>
      </section>

      <section className="bg-white py-14 sm:py-16">
        <Container>
          <div data-reveal className="relative overflow-hidden rounded-[34px] bg-brand-navy px-6 py-10 text-white sm:px-10 sm:py-12 lg:flex lg:items-center lg:justify-between lg:gap-10">
            <div className="absolute -right-14 -top-16 size-56 rounded-full bg-brand-pink/18 blur-3xl" />
            <div className="relative z-10 max-w-2xl">
              <p className="text-sm font-black uppercase tracking-[.12em] text-brand-teal">{content.closing.eyebrow}</p>
              <h2 className="mt-3 text-3xl font-black tracking-[-.045em] sm:text-4xl">{content.closing.title}</h2>
              <p className="mt-4 text-base leading-7 text-white/75">{content.closing.description}</p>
            </div>
            <div className="relative z-10 mt-7 flex flex-wrap gap-3 lg:mt-0 lg:shrink-0">
              <ButtonLink href={content.closing.primary.href}>{content.closing.primary.label}</ButtonLink>
              <ButtonLink href={content.closing.secondary.href} variant="secondary">{content.closing.secondary.label}</ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}

import Image from "next/image";
import {
  BrainCircuit,
  CheckCircle2,
  Code2,
  Lightbulb,
  ShieldCheck,
  Sparkles,
  Wrench,
} from "@/components/ui/LucideIcons";
import type { AboutPageContent } from "@/content/about";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { SectionAtmosphere } from "@/components/ui/SectionAtmosphere";

const differentiatorIcons = [Wrench, Lightbulb, Code2, BrainCircuit];

const accentStyles = {
  orange: {
    badge: "bg-brand-orange-soft text-brand-orange",
    role: "text-brand-orange",
    avatar: "bg-brand-orange-soft text-brand-orange",
    rail: "bg-brand-orange",
  },
  pink: {
    badge: "bg-brand-pink-soft text-brand-pink",
    role: "text-brand-pink",
    avatar: "bg-brand-pink-soft text-brand-pink",
    rail: "bg-brand-pink",
  },
  purple: {
    badge: "bg-brand-purple-soft text-brand-purple",
    role: "text-brand-purple",
    avatar: "bg-brand-purple-soft text-brand-purple",
    rail: "bg-brand-purple",
  },
  teal: {
    badge: "bg-brand-teal-soft text-brand-teal",
    role: "text-brand-teal",
    avatar: "bg-brand-teal-soft text-brand-teal",
    rail: "bg-brand-teal",
  },
} as const;

type TeamMember = AboutPageContent["team"]["groups"][number]["members"][number];

function TeamCard({ member, portrait = false }: { member: TeamMember; portrait?: boolean }) {
  const style = accentStyles[member.accent];

  if (portrait) {
    return (
      <article data-reveal className="group relative overflow-hidden rounded-[26px] border border-slate-200/80 bg-white shadow-[0_14px_42px_rgba(15,23,42,.06)]">
        <span aria-hidden="true" className={`absolute inset-x-0 top-0 z-20 h-1 ${style.rail}`} />
        <div className="relative aspect-[4/5] overflow-hidden bg-slate-100">
          {member.image ? (
            <Image
              src={member.image}
              alt={`${member.name}, ${member.role}`}
              fill
              sizes="(min-width:1024px) 32vw, (min-width:640px) 48vw, 92vw"
              className="object-cover transition duration-500 group-hover:scale-[1.018]"
            />
          ) : null}
        </div>
        <div className="p-6 sm:p-7">
          <div className="min-h-0 sm:min-h-[34px]">
            {member.credential ? (
              <span className={`inline-flex rounded-full px-3 py-1.5 text-[12px] font-black uppercase tracking-[.06em] ${style.badge}`}>
                {member.credential}
              </span>
            ) : null}
          </div>
          <h3 className="mt-3 text-[23px] font-black tracking-[-.035em] text-brand-navy">{member.name}</h3>
          <p className={`mt-1 text-[15px] font-extrabold ${style.role}`}>{member.role}</p>
          <p className="mt-4 text-[15px] leading-7 text-slate-600">{member.description}</p>
        </div>
      </article>
    );
  }

  return (
    <article data-reveal className="relative overflow-hidden rounded-[22px] border border-slate-200/80 bg-white p-6 shadow-[0_12px_36px_rgba(15,23,42,.05)] sm:p-7">
      <span aria-hidden="true" className={`absolute inset-x-0 top-0 h-1 ${style.rail}`} />
      <div className="flex items-start gap-4">
        <div className={`grid size-16 shrink-0 place-items-center rounded-[20px] text-xl font-black ${style.avatar}`}>
          {"initials" in member && member.initials ? member.initials : member.name.split(" ").map((part) => part[0]).join("").slice(0, 2)}
        </div>
        <div className="min-w-0">
          <h3 className="text-[20px] font-black tracking-[-.03em] text-brand-navy">{member.name}</h3>
          <p className={`mt-1 text-[14px] font-extrabold ${style.role}`}>{member.role}</p>
          <p className="mt-3 text-[14px] leading-6 text-slate-600">{member.description}</p>
        </div>
      </div>
    </article>
  );
}

export function AboutPage({ content }: { content: AboutPageContent }) {
  return (
    <main id="main-content">
      <section className="site-page-hero relative overflow-hidden bg-[linear-gradient(135deg,#fff8fc_0%,#ffffff_45%,#eefcf9_100%)] pb-12 pt-28 sm:pb-14 sm:pt-32 lg:pb-16">
        <SectionAtmosphere variant="network" className="opacity-20" />
        <Container className="relative z-10 grid gap-8 md:grid-cols-[.98fr_1.02fr] md:items-center md:gap-8 lg:gap-12">
          <div data-reveal className="py-2 md:py-5">
            <p className="eyebrow">{content.hero.eyebrow}</p>
            <h1 className="page-hero-heading mt-3 max-w-[780px] text-brand-navy">
              We Believe Learning Should Help Young People{" "}
              <span className="page-hero-gradient">Build, Solve and Create.</span>
            </h1>
            <p className="page-hero-intro mt-5 max-w-[680px]">{content.hero.intro}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <ButtonLink href="/our-work" showArrow>Explore Our Work</ButtonLink>
              <ButtonLink href="/impact" variant="outline">See Our Impact</ButtonLink>
            </div>
          </div>

          <div data-reveal className="about-collage relative mx-auto min-h-[390px] w-full max-w-[720px] sm:min-h-[440px] lg:min-h-[500px]">
            <div className="absolute right-0 top-0 h-[84%] w-[88%] overflow-hidden rounded-[32px] border-[2px] border-white bg-white shadow-[0_28px_78px_rgba(13,27,61,.12)]">
              <Image src={content.hero.image.src} alt={content.hero.image.alt} fill priority sizes="(min-width:768px) 50vw, 92vw" className="object-cover" />
            </div>
            <div className="absolute bottom-0 left-0 h-[42%] w-[52%] overflow-hidden rounded-[24px] border-[2px] border-white bg-white shadow-[0_18px_52px_rgba(13,27,61,.13)]">
              <Image src={content.hero.secondaryImage.src} alt={content.hero.secondaryImage.alt} fill sizes="(min-width:768px) 28vw, 56vw" className="object-cover" />
            </div>
            <div className="absolute bottom-[1%] right-[1%] max-w-[225px] rounded-[18px] bg-brand-navy px-4 py-3.5 text-white shadow-xl">
              <p className="text-[12px] font-black uppercase tracking-[.12em] text-brand-teal">What drives us</p>
              <p className="mt-1.5 text-[14px] font-black leading-5">From curiosity to capability. From skills to opportunity.</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-12 sm:py-14">
        <Container className="grid gap-7 lg:grid-cols-[.72fr_1.28fr] lg:gap-14">
          <div data-reveal>
            <p className="eyebrow">{content.why.eyebrow}</p>
            <h2 className="mt-3 max-w-[540px] text-[clamp(2rem,3.5vw,3.25rem)] font-black leading-[1.06] tracking-[-.045em] text-brand-navy">{content.why.title}</h2>
          </div>
          <div data-reveal className="space-y-4 text-[16px] leading-7 text-slate-600 sm:text-[17px]">
            {content.why.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            <p className="rounded-[18px] border-l-4 border-brand-purple bg-brand-purple-soft/55 px-5 py-4 text-[16px] font-extrabold leading-7 text-brand-navy">{content.why.highlight}</p>
          </div>
        </Container>
      </section>

      <section id="vision" className="relative scroll-mt-24 overflow-hidden bg-[linear-gradient(135deg,#faf9ff_0%,#ffffff_50%,#f4fbfa_100%)] py-12 sm:py-14">
        <SectionAtmosphere variant="circuits" className="opacity-10" />
        <Container className="relative z-10">
          <div data-reveal className="max-w-3xl">
            <p className="eyebrow">OUR DIRECTION</p>
            <h2 className="mt-3 text-[clamp(2rem,3.5vw,3.1rem)] font-black tracking-[-.045em] text-brand-navy">Our Vision &amp; Mission</h2>
          </div>
          <div className="mt-7 grid gap-5 lg:grid-cols-2">
            <article data-reveal className="rounded-[28px] border border-slate-200/80 bg-white p-7 shadow-[0_14px_42px_rgba(15,23,42,.05)] sm:p-8">
              <div className="flex items-center gap-3">
                <div className="grid size-11 place-items-center rounded-2xl bg-brand-purple-soft text-brand-purple"><Sparkles size={20} /></div>
                <p className="text-[12px] font-black uppercase tracking-[.14em] text-brand-purple">{content.vision.eyebrow}</p>
              </div>
              <div className="mt-5 h-1 w-14 rounded-full bg-brand-purple" />
              <h3 className="mt-5 max-w-[620px] text-[clamp(1.75rem,2.6vw,2.45rem)] font-black leading-[1.08] tracking-[-.04em] text-brand-navy">{content.vision.title}</h3>
              <p className="mt-4 max-w-[610px] text-[15px] leading-7 text-slate-600 sm:text-[16px]">{content.vision.body}</p>
            </article>
            <article data-reveal className="rounded-[28px] border border-slate-200/80 bg-white p-7 shadow-[0_14px_42px_rgba(15,23,42,.05)] sm:p-8">
              <div className="flex items-center gap-3">
                <div className="grid size-11 place-items-center rounded-2xl bg-brand-teal-soft text-brand-teal"><CheckCircle2 size={20} /></div>
                <p className="text-[12px] font-black uppercase tracking-[.14em] text-brand-teal">{content.mission.eyebrow}</p>
              </div>
              <div className="mt-5 h-1 w-14 rounded-full bg-brand-teal" />
              <h3 className="mt-5 max-w-[620px] text-[clamp(1.75rem,2.6vw,2.45rem)] font-black leading-[1.08] tracking-[-.04em] text-brand-navy">{content.mission.title}</h3>
              <p className="mt-4 max-w-[610px] text-[15px] leading-7 text-slate-600 sm:text-[16px]">{content.mission.body}</p>
            </article>
          </div>
        </Container>
      </section>

      <section className="bg-white py-12 sm:py-14">
        <Container>
          <div data-reveal className="max-w-3xl">
            <p className="eyebrow">{content.differentiators.eyebrow}</p>
            <h2 className="mt-3 text-[clamp(2rem,3.5vw,3.15rem)] font-black tracking-[-.045em] text-brand-navy">{content.differentiators.title}</h2>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {content.differentiators.items.map((item, index) => {
              const Icon = differentiatorIcons[index];
              const accents = [
                { icon: "text-brand-purple bg-brand-purple-soft", border: "border-brand-purple/15" },
                { icon: "text-brand-orange bg-brand-orange-soft", border: "border-brand-orange/15" },
                { icon: "text-brand-teal bg-brand-teal-soft", border: "border-brand-teal/15" },
                { icon: "text-brand-pink bg-brand-pink-soft", border: "border-brand-pink/15" },
              ];
              return (
                <article key={item.title} data-reveal className={`rounded-[22px] border bg-white p-6 shadow-[0_10px_32px_rgba(13,27,61,.045)] ${accents[index].border}`}>
                  <span className={`grid size-11 place-items-center rounded-2xl ${accents[index].icon}`}><Icon size={20} /></span>
                  <h3 className="mt-5 text-[18px] font-black text-brand-navy">{item.title}</h3>
                  <p className="mt-2.5 text-[14px] leading-6 text-slate-600">{item.description}</p>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-[linear-gradient(135deg,#f8fafc_0%,#ffffff_48%,#f2fbf9_100%)] py-12 sm:py-14">
        <Container>
          <div data-reveal className="max-w-3xl">
            <p className="eyebrow">{content.audiences.eyebrow}</p>
            <h2 className="mt-3 text-[clamp(2rem,3.5vw,3.15rem)] font-black tracking-[-.045em] text-brand-navy">{content.audiences.title}</h2>
          </div>
          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {content.audiences.items.map((item) => (
              <article key={item.title} data-reveal className="group overflow-hidden rounded-[26px] border border-slate-200/80 bg-white shadow-[0_14px_42px_rgba(15,23,42,.05)]">
                <div className="relative aspect-[16/8.5] overflow-hidden">
                  <Image src={item.image} alt="" fill sizes="(min-width:1024px) 48vw,96vw" className="object-cover transition duration-500 group-hover:scale-[1.02]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/42 via-transparent to-transparent" />
                </div>
                <div className="p-6 sm:p-7">
                  <p className="text-[12px] font-black uppercase tracking-[.12em] text-brand-purple">{item.label}</p>
                  <h3 className="mt-2 text-[24px] font-black tracking-[-.035em] text-brand-navy">{item.title}</h3>
                  <p className="mt-3 text-[15px] leading-7 text-slate-600">{item.description}</p>
                </div>
              </article>
            ))}
          </div>

          <div data-reveal className="mt-7 rounded-[24px] border border-slate-200/80 bg-white p-6 sm:p-7">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              {content.audiences.steps.map((step, index) => {
                const stepStyles = [
                  "bg-brand-purple-soft text-brand-purple",
                  "bg-brand-orange-soft text-brand-orange",
                  "bg-brand-teal-soft text-brand-teal",
                  "bg-brand-pink-soft text-brand-pink",
                  "bg-brand-purple-soft text-brand-purple",
                  "bg-brand-teal-soft text-brand-teal",
                ];
                return (
                  <div key={step} className="flex items-center gap-2 sm:gap-3">
                    <span className={`rounded-full px-3.5 py-2 text-[13px] font-extrabold ${stepStyles[index % stepStyles.length]}`}>{step}</span>
                    {index < content.audiences.steps.length - 1 ? <span aria-hidden="true" className="text-brand-teal">→</span> : null}
                  </div>
                );
              })}
            </div>
            <p className="mt-5 text-[16px] font-extrabold leading-7 text-brand-navy">{content.audiences.closing}</p>
            <p className="mt-2 text-[14px] leading-6 text-slate-600">{content.audiences.nationLine}</p>
          </div>
        </Container>
      </section>

      <section id="team" className="scroll-mt-24 bg-white py-12 sm:py-14">
        <Container>
          <div data-reveal className="max-w-3xl">
            <p className="eyebrow">{content.team.eyebrow}</p>
            <h2 className="mt-3 text-[clamp(2rem,3.5vw,3.15rem)] font-black tracking-[-.045em] text-brand-navy">{content.team.title}</h2>
            <p className="mt-4 max-w-2xl text-[16px] leading-7 text-slate-600">{content.team.intro}</p>
          </div>

          <div className="mt-9 space-y-10">
            {content.team.groups.map((group, groupIndex) => (
              <div key={group.title}>
                <h3 data-reveal className="text-[13px] font-black uppercase tracking-[.12em] text-slate-500">{group.title}</h3>
                <div className={`mt-5 grid gap-5 ${groupIndex === 0 ? "sm:grid-cols-2 lg:max-w-[980px]" : "md:grid-cols-2"}`}>
                  {group.members.map((member) => (
                    <TeamCard key={member.name} member={member} portrait={Boolean(member.image)} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[linear-gradient(135deg,#faf9ff,#ffffff_50%,#f3fbf9)] py-12 sm:py-14">
        <Container>
          <div data-reveal className="grid gap-7 rounded-[28px] border border-slate-200/80 bg-white p-7 shadow-[0_14px_42px_rgba(15,23,42,.05)] sm:p-8 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
            <div>
              <p className="eyebrow">{content.governance.eyebrow}</p>
              <h2 className="mt-3 text-[clamp(1.9rem,3.2vw,2.8rem)] font-black tracking-[-.04em] text-brand-navy">{content.governance.title}</h2>
              <p className="mt-4 text-[15px] leading-7 text-slate-600">{content.governance.intro}</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {content.governance.registrations.map((item) => (
                <div key={item.label} className="rounded-[18px] border border-slate-100 bg-slate-50 p-5">
                  <ShieldCheck size={19} className="text-brand-teal" />
                  <strong className="mt-3 block text-[15px] text-brand-navy">{item.label}</strong>
                  <span className="mt-1 block text-[13px] text-slate-600">{item.value}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3 border-t border-slate-100 pt-5 lg:col-span-2">
              <ButtonLink href="/governance" variant="secondary" showArrow>View Governance</ButtonLink>
              <ButtonLink href="/impact" variant="outline">See Our Impact</ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-12 sm:py-14">
        <Container data-reveal className="flex flex-col gap-6 rounded-[26px] bg-brand-navy px-7 py-8 text-white sm:px-9 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-black tracking-[-.035em] sm:text-3xl">{content.cta.title}</h2>
            <p className="mt-3 text-[15px] leading-7 text-white/72">{content.cta.body}</p>
          </div>
          <div className="flex shrink-0 flex-wrap gap-3">
            <ButtonLink href="/our-work" variant="white" showArrow>Explore Our Work</ButtonLink>
            <ButtonLink href="/contact" variant="outlineLight">Start a Conversation</ButtonLink>
          </div>
        </Container>
      </section>
    </main>
  );
}

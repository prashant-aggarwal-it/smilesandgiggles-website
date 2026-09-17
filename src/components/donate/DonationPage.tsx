import Image from "next/image";
import Link from "next/link";
import {
  Blocks,
  BrainCircuit,
  CheckCircle2,
  CircuitBoard,
  FileText,
  GraduationCap,
  HandHeart,
  HeartHandshake,
  Lightbulb,
  School,
  ShieldCheck,
  Sparkles,
  UsersRound,
  Wrench,
} from "@/components/ui/LucideIcons";
import { donationContent } from "@/content/donate";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { SectionAtmosphere } from "@/components/ui/SectionAtmosphere";
import { RazorpayDonationButton } from "@/components/donate/RazorpayDonationButton";
import { siteConfig } from "@/content/site";

const sponsorshipIcons = {
  paper: Sparkles,
  robotics: Wrench,
  arduino: CircuitBoard,
  ai: BrainCircuit,
  mechanics: Blocks,
};

const accentStyles = {
  pink: {
    icon: "bg-brand-pink text-white",
    amount: "text-brand-pink",
    border: "border-brand-pink/18",
    soft: "bg-[#fff6fb]",
  },
  teal: {
    icon: "bg-brand-teal text-white",
    amount: "text-brand-teal",
    border: "border-brand-teal/20",
    soft: "bg-[#f2fffc]",
  },
  purple: {
    icon: "bg-brand-purple text-white",
    amount: "text-brand-purple",
    border: "border-brand-purple/18",
    soft: "bg-[#faf7ff]",
  },
  orange: {
    icon: "bg-brand-orange text-white",
    amount: "text-brand-orange",
    border: "border-brand-orange/25",
    soft: "bg-[#fff9f1]",
  },
  navy: {
    icon: "bg-brand-navy text-white",
    amount: "text-brand-navy",
    border: "border-brand-navy/12",
    soft: "bg-[#f7f9ff]",
  },
};

const reusableIcons = [HeartHandshake, UsersRound, Lightbulb, School];

export function DonationPage() {
  const razorpayButtonId = process.env.NEXT_PUBLIC_RAZORPAY_PAYMENT_BUTTON_ID;

  return (
    <main id="main-content">
      <section className="donate-hero donate-hero--full-bg relative overflow-hidden pt-[80px]">
        <div className="absolute inset-[80px_0_0]" aria-hidden="true">
          <Image
            src={donationContent.hero.image.src}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-[62%_50%]"
          />
          <div className="donate-overlay-v3 absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,.99)_0%,rgba(255,255,255,.97)_26%,rgba(255,255,255,.9)_42%,rgba(255,255,255,.58)_57%,rgba(255,255,255,.18)_72%,rgba(255,255,255,0)_82%),linear-gradient(180deg,rgba(13,27,61,.01)_0%,rgba(13,27,61,.04)_72%,rgba(13,27,61,.16)_100%)]" />
        </div>
        <SectionAtmosphere variant="network" dense className="opacity-18" />
        <Container className="donate-container-v3 relative z-10 flex items-center">
          <div data-reveal className="donate-copy-v3 w-full max-w-[680px] py-10 sm:py-12">
            <p className="eyebrow">{donationContent.hero.eyebrow}</p>
            <h1 className="page-hero-heading mt-3 max-w-[780px]">
              <span className="hero-line block text-brand-navy">{donationContent.hero.titleLine1}</span>
              <span className="hero-line page-hero-gradient block">{donationContent.hero.titleLine2}</span>
            </h1>
            <p className="page-hero-intro mt-6 max-w-[650px]">{donationContent.hero.intro}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <ButtonLink href={donationContent.hero.primary.href} showArrow>{donationContent.hero.primary.label}</ButtonLink>
              <ButtonLink href={donationContent.hero.secondary.href} variant="outline">{donationContent.hero.secondary.label}</ButtonLink>
            </div>
            <div className="donate-badges-v3 mt-6 flex flex-wrap gap-2.5 text-sm font-bold text-brand-navy/75">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/88 px-3.5 py-2 shadow-sm backdrop-blur"><ShieldCheck size={16} className="text-brand-teal" />Secure Payment</span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/88 px-3.5 py-2 shadow-sm backdrop-blur"><FileText size={16} className="text-brand-orange" />80G Support</span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/88 px-3.5 py-2 shadow-sm backdrop-blur"><HandHeart size={16} className="text-brand-pink" />Practical Impact</span>
            </div>
          </div>

          <div className="absolute bottom-8 right-4 hidden max-w-[315px] rounded-[24px] border border-white/45 bg-brand-navy/88 px-5 py-4 text-white shadow-[0_22px_60px_rgba(13,27,61,.22)] backdrop-blur-md lg:block">
            <HeartHandshake size={21} className="text-brand-teal" />
            <p className="mt-2 text-[15px] font-black leading-5">{donationContent.hero.badge}</p>
          </div>
        </Container>
      </section>

      <section id="sponsor" className="scroll-mt-24 bg-white py-14 sm:py-16">
        <Container>
          <div data-reveal className="max-w-4xl">
            <p className="eyebrow">{donationContent.sponsorships.eyebrow}</p>
            <h2 className="mt-3 text-[clamp(2.15rem,3.8vw,3.65rem)] font-black leading-[1.02] tracking-[-.05em] text-brand-navy">{donationContent.sponsorships.title}</h2>
            <p className="mt-4 max-w-3xl text-[16px] leading-7 text-slate-600">{donationContent.sponsorships.intro}</p>
          </div>

          <div className="mt-9 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {donationContent.sponsorships.items.map((item) => {
              const Icon = sponsorshipIcons[item.icon];
              const styles = accentStyles[item.accent];
              return (
                <article
                  key={item.id}
                  data-reveal
                  className={`relative flex h-full flex-col overflow-hidden rounded-[26px] border ${styles.border} ${styles.soft} p-6 shadow-[0_16px_45px_rgba(13,27,61,.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(13,27,61,.10)] sm:p-7 ${item.featured ? "md:ring-2 md:ring-brand-orange/20" : ""}`}
                >
                  {item.featured ? <span className="absolute right-4 top-4 rounded-full bg-brand-orange px-3 py-1.5 text-[10px] font-black uppercase tracking-[.1em] text-white">Youth Skills</span> : null}
                  <span className={`grid size-12 place-items-center rounded-[17px] ${styles.icon}`}><Icon size={22} /></span>
                  <p className="mt-5 text-[11px] font-black uppercase tracking-[.14em] text-slate-500">{item.audience}</p>
                  <p className={`mt-2 text-[2rem] font-black leading-none tracking-[-.05em] ${styles.amount}`}>{item.amount}</p>
                  <h3 className="mt-2 text-[1.35rem] font-black leading-tight tracking-[-.035em] text-brand-navy">{item.title}</h3>
                  <p className="mt-3 text-[14px] leading-6 text-slate-600">{item.description}</p>

                  <div className="mt-5 grid gap-2 text-[12.5px] leading-5 text-slate-600">
                    <p className="flex gap-2"><CheckCircle2 size={16} className="mt-0.5 shrink-0 text-brand-teal" /><span><strong className="text-brand-navy">Best for:</strong> {item.bestFor}</span></p>
                    <p className="flex gap-2"><CheckCircle2 size={16} className="mt-0.5 shrink-0 text-brand-teal" /><span><strong className="text-brand-navy">Develops:</strong> {item.develops}</span></p>
                    <p className="flex gap-2"><CheckCircle2 size={16} className="mt-0.5 shrink-0 text-brand-teal" /><span><strong className="text-brand-navy">Value:</strong> {item.reuse}</span></p>
                  </div>

                  <div className="mt-auto pt-6">
                    <a href="#donate-now" className="inline-flex min-h-11 w-full items-center justify-center rounded-full bg-brand-navy px-5 py-2.5 text-center text-[13px] font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-brand-purple">
                      {item.cta}
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-brand-navy py-12 text-white sm:py-14">
        <Container>
          <div data-reveal className="grid gap-8 lg:grid-cols-[1.05fr_1.4fr] lg:items-center">
            <div>
              <p className="text-[12px] font-black uppercase tracking-[.15em] text-brand-teal">{donationContent.reusableValue.eyebrow}</p>
              <h2 className="mt-3 text-[clamp(2rem,3.2vw,3.15rem)] font-black leading-[1.02] tracking-[-.05em]">{donationContent.reusableValue.title}</h2>
              <p className="mt-4 max-w-xl text-[15px] leading-7 text-white/72">{donationContent.reusableValue.intro}</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {donationContent.reusableValue.points.map((point, index) => {
                const Icon = reusableIcons[index];
                return (
                  <div key={point.title} className="rounded-[20px] border border-white/10 bg-white/[.06] p-5">
                    <Icon size={20} className="text-brand-teal" />
                    <h3 className="mt-3 text-[16px] font-black">{point.title}</h3>
                    <p className="mt-1 text-[13px] leading-5 text-white/66">{point.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[linear-gradient(135deg,#faf7ff_0%,#ffffff_46%,#effffc_100%)] py-14 sm:py-16">
        <Container>
          <div data-reveal className="max-w-4xl">
            <p className="eyebrow">{donationContent.pathways.eyebrow}</p>
            <h2 className="mt-3 text-[clamp(2.05rem,3.6vw,3.45rem)] font-black leading-[1.02] tracking-[-.05em] text-brand-navy">{donationContent.pathways.title}</h2>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            <article data-reveal className="rounded-[26px] border border-brand-purple/12 bg-white p-6 shadow-[0_16px_45px_rgba(13,27,61,.06)] sm:p-7">
              <span className="grid size-12 place-items-center rounded-[17px] bg-brand-purple text-white"><School size={22} /></span>
              <p className="mt-5 text-[11px] font-black uppercase tracking-[.14em] text-brand-purple">{donationContent.pathways.school.label}</p>
              <h3 className="mt-2 text-2xl font-black tracking-[-.04em] text-brand-navy">{donationContent.pathways.school.title}</h3>
              <div className="mt-5 flex flex-wrap items-center gap-2">
                {donationContent.pathways.school.steps.map((step, index) => (
                  <div key={step} className="contents">
                    <span className="rounded-full border border-brand-purple/12 bg-brand-purple-soft px-3 py-2 text-[12px] font-extrabold text-brand-purple">{step}</span>
                    {index < donationContent.pathways.school.steps.length - 1 ? <span aria-hidden="true" className="text-brand-purple/40">→</span> : null}
                  </div>
                ))}
              </div>
              <p className="mt-5 text-[14px] leading-6 text-slate-600">{donationContent.pathways.school.note}</p>
            </article>

            <article data-reveal className="rounded-[26px] border border-brand-teal/15 bg-white p-6 shadow-[0_16px_45px_rgba(13,27,61,.06)] sm:p-7">
              <span className="grid size-12 place-items-center rounded-[17px] bg-brand-teal text-white"><BrainCircuit size={22} /></span>
              <p className="mt-5 text-[11px] font-black uppercase tracking-[.14em] text-brand-teal">{donationContent.pathways.youth.label}</p>
              <h3 className="mt-2 text-2xl font-black tracking-[-.04em] text-brand-navy">{donationContent.pathways.youth.title}</h3>
              <div className="mt-5 flex flex-wrap items-center gap-2">
                {donationContent.pathways.youth.steps.map((step, index) => (
                  <div key={step} className="contents">
                    <span className="rounded-full border border-brand-teal/15 bg-brand-teal-soft px-3 py-2 text-[12px] font-extrabold text-brand-teal">{step}</span>
                    {index < donationContent.pathways.youth.steps.length - 1 ? <span aria-hidden="true" className="text-brand-teal/40">→</span> : null}
                  </div>
                ))}
              </div>
              <p className="mt-5 text-[14px] leading-6 text-slate-600">{donationContent.pathways.youth.note}</p>
            </article>
          </div>

          <div data-reveal className="mt-5 flex flex-col gap-5 rounded-[24px] border border-brand-orange/20 bg-[#fff9f1] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-7">
            <div className="flex max-w-3xl gap-4">
              <span className="grid size-12 shrink-0 place-items-center rounded-[17px] bg-brand-orange text-white"><GraduationCap size={23} /></span>
              <div>
                <h3 className="text-xl font-black tracking-[-.035em] text-brand-navy">{donationContent.pathways.educator.title}</h3>
                <p className="mt-2 text-[14px] leading-6 text-slate-600">{donationContent.pathways.educator.description}</p>
              </div>
            </div>
            <ButtonLink href={donationContent.pathways.educator.cta.href} variant="outline" className="shrink-0">{donationContent.pathways.educator.cta.label}</ButtonLink>
          </div>
        </Container>
      </section>

      <section id="donate-now" className="relative scroll-mt-24 overflow-hidden bg-white py-14 sm:py-16">
        <SectionAtmosphere variant="orbit" className="opacity-14" />
        <Container className="relative z-10">
          <div data-reveal className="mx-auto max-w-5xl text-center">
            <p className="eyebrow">{donationContent.flexible.eyebrow}</p>
            <h2 className="mt-3 text-[clamp(2rem,3.5vw,3.4rem)] font-black leading-[1.02] tracking-[-.05em] text-brand-navy">{donationContent.flexible.title}</h2>
            <p className="mx-auto mt-4 max-w-3xl text-[16px] leading-7 text-slate-600">{donationContent.flexible.intro}</p>
            <div className="mt-6 flex flex-wrap justify-center gap-2.5">
              {donationContent.flexible.amounts.map((amount) => <span key={amount} className="rounded-full border border-brand-purple/15 bg-brand-purple-soft px-5 py-2.5 text-[14px] font-black text-brand-purple">{amount}</span>)}
            </div>
          </div>

          <div data-reveal className="mx-auto mt-7 max-w-5xl">
            <RazorpayDonationButton buttonId={razorpayButtonId} />
            <p className="mx-auto mt-4 max-w-3xl text-center text-[12.5px] leading-6 text-slate-500">{donationContent.flexible.note}</p>
            <p className="mt-2 text-center text-[12.5px] font-bold"><Link href="/donation-refund-policy" className="text-brand-purple hover:underline">Donation &amp; Refund Policy →</Link></p>
          </div>
        </Container>
      </section>

      <section className="bg-[linear-gradient(135deg,#fff8ef_0%,#ffffff_48%,#effffc_100%)] py-11 sm:py-12">
        <Container>
          <div data-reveal className="rounded-[28px] border border-white bg-white/86 p-7 shadow-[0_16px_45px_rgba(13,27,61,.06)] sm:p-8">
            <div className="max-w-3xl">
              <p className="eyebrow">{donationContent.trust.eyebrow}</p>
              <h2 className="mt-2 text-3xl font-black tracking-[-.045em] text-brand-navy sm:text-4xl">{donationContent.trust.title}</h2>
              <p className="mt-3 max-w-2xl text-[15px] leading-7 text-slate-600">{donationContent.trust.intro}</p>
            </div>
            <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {donationContent.trust.items.map((item, index) => {
                const colors = ["text-brand-purple", "text-brand-teal", "text-brand-orange", "text-brand-pink"];
                return <div key={item.title} className="rounded-[18px] bg-slate-50 p-4"><ShieldCheck size={18} className={colors[index]} /><strong className="mt-3 block text-[15px] text-brand-navy">{item.title}</strong><span className="mt-1 block text-[13px] text-slate-600">{item.description}</span></div>;
              })}
            </div>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 border-t border-slate-100 pt-5 text-[14px] font-extrabold">
              {donationContent.trust.links.map((link) => <Link key={link.href} href={link.href} className="text-brand-purple hover:underline">{link.label} →</Link>)}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-10 sm:py-12">
        <Container data-reveal className="flex flex-col gap-5 rounded-[26px] bg-brand-navy px-7 py-8 text-white sm:px-9 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-2xl font-black tracking-[-.035em]">Don&apos;t just fund a need. Help build a capability.</h2>
            <p className="mt-2 max-w-2xl text-[14px] leading-6 text-white/72">Choose a complete sponsorship, give a smaller amount, or speak with us about supporting a school or future STEM educator.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <ButtonLink href="#donate-now" variant="white" showArrow>Donate Now</ButtonLink>
            <a href={siteConfig.contact.whatsappHref} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/30 px-5 py-3 text-[14px] font-extrabold text-white hover:bg-white/10">WhatsApp Us</a>
          </div>
        </Container>
      </section>
    </main>
  );
}

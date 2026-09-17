import Image from "next/image";
import {
  BarChart3,
  CheckCircle2,
  ClipboardCheck,
  FileCheck2,
  MapPin,
  Presentation,
  School,
  Sparkles,
  UsersRound,
  Wrench,
} from "@/components/ui/LucideIcons";
import type { ImpactPageContent } from "@/content/impact";
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

const signalIcons = {
  participation: UsersRound,
  build: Wrench,
  confidence: Presentation,
  continuity: School,
};

export function ImpactPage({ content }: { content: ImpactPageContent }) {
  return (
    <main id="main-content">
      <section className="site-page-hero hero-impact-v4 relative overflow-hidden bg-[linear-gradient(135deg,#0d1b3d_0%,#152552_58%,#0f3150_100%)] pb-16 pt-28 text-white sm:pb-20 sm:pt-32">
        <SectionAtmosphere variant="network" dense className="opacity-50" />
        <Container className="relative z-10 grid items-center gap-10 lg:grid-cols-[.9fr_1.1fr] lg:gap-14">
          <div data-reveal>
            <p className="eyebrow !text-brand-teal">{content.hero.eyebrow}</p>
            <h1 className="hero-title !max-w-[900px] text-white"><span className="hero-line block">Visible Impact.</span><span className="hero-line page-hero-gradient-on-dark block">Clear Evidence.</span></h1>
            <p className="page-hero-intro mt-6 max-w-2xl !text-white/78">{content.hero.intro}</p>
            <div className="mt-7 flex flex-wrap gap-2.5">
              {content.hero.proofLine.split("•").map((item) => (
                <span key={item.trim()} className="rounded-full border border-white/15 bg-white/[.075] px-3.5 py-2 text-[13px] font-extrabold text-white/85 backdrop-blur">
                  {item.trim()}
                </span>
              ))}
            </div>
          </div>

          <div data-reveal className="relative min-h-[430px] sm:min-h-[520px]">
            <div className="absolute left-0 top-[3%] h-[80%] w-[88%] overflow-hidden rounded-[30px] border border-white/10 shadow-[0_30px_90px_rgba(0,0,0,.28)]">
              <Image src={content.hero.images[0].src} alt={content.hero.images[0].alt} fill priority sizes="(max-width: 1024px) 70vw, 38vw" className="object-cover" />
              <span className="absolute inset-x-0 bottom-0 h-1.5 bg-gradient-to-r from-brand-purple via-brand-pink to-brand-orange" />
            </div>
            <div className="absolute bottom-[2%] right-[1%] h-[48%] w-[51%] overflow-hidden rounded-[26px] border-[2px] border-[#152552] shadow-[0_24px_70px_rgba(0,0,0,.28)]">
              <Image src={content.hero.images[2].src} alt={content.hero.images[2].alt} fill sizes="(max-width: 1024px) 52vw, 27vw" className="object-cover" />
            </div>
            <div className="absolute bottom-[8%] left-[5%] flex items-center gap-3 rounded-2xl border border-white/15 bg-[#0d1b3d]/90 px-4 py-3 shadow-[0_16px_45px_rgba(0,0,0,.28)] backdrop-blur">
              <MapPin size={18} className="text-brand-orange" />
              <div><strong className="block text-sm font-black">Delhi field experience</strong><span className="block text-[13px] text-white/72">Schools • classrooms • communities</span></div>
            </div>
          </div>
        </Container>
      </section>

      <section className="relative bg-white py-10 sm:py-12">
        <Container>
          <div className="grid overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_18px_55px_rgba(13,27,61,.07)] sm:grid-cols-2 lg:grid-cols-4">
            {content.stats.map((stat, index) => {
              const color = accents[stat.accent];
              return (
                <article key={stat.label} data-reveal className={`relative p-6 sm:p-7 ${index > 0 ? "border-t border-slate-200 sm:border-t-0 sm:border-l" : ""}`}>
                  <span className={`absolute inset-x-0 top-0 h-1.5 ${color.bg}`} />
                  <strong className={`block text-3xl font-black tracking-[-.05em] ${color.text}`}>{stat.value}</strong>
                  <span className="mt-3 block text-[15px] font-extrabold leading-5 text-ink">{stat.label}</span>
                  <span className="mt-2 block text-[13px] leading-5 text-muted">{stat.note}</span>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      <section id="field-evidence" className="impact-field-evidence relative scroll-mt-24 overflow-hidden bg-[linear-gradient(180deg,#f4f8ff_0%,#f8fbff_46%,#effbf8_100%)] py-14 sm:py-16 lg:py-[4.5rem]">
        <SectionAtmosphere variant="circuits" dense className="opacity-20" />
        <Container className="relative z-10">
          <div data-reveal className="grid gap-7 lg:grid-cols-[minmax(0,1.12fr)_minmax(320px,.68fr)] lg:gap-12">
            <SectionHeading eyebrow={content.field.eyebrow} title={content.field.title} intro={content.field.intro} accent="pink" className="max-w-[720px]" />
            <div className="impact-evidence-principle self-end rounded-[20px] border border-brand-teal/18 bg-white/92 p-4 text-[14px] font-semibold leading-6 text-slate-600 shadow-[0_10px_26px_rgba(13,27,61,.045)] backdrop-blur lg:max-w-[430px] lg:justify-self-end">
              <span className="mb-2 flex items-center gap-2 font-extrabold text-brand-teal"><FileCheck2 size={17} /> Evidence principle</span>
              {content.field.note}
            </div>
          </div>

          <div className="mt-7 grid gap-6 lg:grid-cols-12">
            {content.field.stories.map((story, index) => {
              const color = accents[story.accent];
              const span = index === 0 ? "lg:col-span-7" : index === 1 ? "lg:col-span-5" : "lg:col-span-12";
              return (
                <article key={story.title} data-reveal className={`group overflow-hidden rounded-[30px] border bg-white shadow-[0_20px_60px_rgba(13,27,61,.07)] ${color.border} ${span}`}>
                  <div className={index === 2 ? "grid lg:grid-cols-[.9fr_1.1fr]" : ""}>
                    <div className={`relative overflow-hidden ${index === 0 ? "h-[350px]" : index === 1 ? "h-[350px]" : "h-[320px] lg:h-auto"}`}>
                      <Image src={story.image.src} alt={story.image.alt} fill sizes={index === 2 ? "(max-width: 1024px) 100vw, 46vw" : "(max-width: 1024px) 100vw, 52vw"} className="object-cover transition duration-500 group-hover:scale-[1.025]" />
                      <span className={`absolute left-5 top-5 rounded-full px-3.5 py-2 text-[12px] font-black uppercase tracking-[.08em] text-white shadow-sm ${color.bg}`}>{story.label}</span>
                    </div>
                    <div className="p-6 sm:p-7">
                      <h3 className="text-2xl font-black tracking-[-.04em] text-ink">{story.title}</h3>
                      <p className="mt-3 text-[15px] leading-7 text-muted">{story.description}</p>
                      <div className="mt-5 grid gap-2.5 border-t border-slate-100 pt-5">
                        {story.evidence.map((item) => (
                          <div key={item} className="flex gap-2.5 text-[14px] font-bold leading-6 text-slate-700">
                            <CheckCircle2 size={17} className={`mt-0.5 shrink-0 ${color.text}`} />{item}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="section-pad relative overflow-hidden bg-white">
        <Container>
          <div data-reveal><SectionHeading eyebrow={content.signals.eyebrow} title={content.signals.title} intro={content.signals.intro} accent="teal" /></div>
          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {content.signals.items.map((item) => {
              const color = accents[item.accent];
              const Icon = signalIcons[item.icon];
              return (
                <article key={item.title} data-reveal className={`rounded-[24px] border p-6 ${color.soft} ${color.border}`}>
                  <span className={`grid size-12 place-items-center rounded-2xl text-white shadow-sm ${color.bg}`}><Icon size={21} /></span>
                  <h3 className="mt-5 text-xl font-black tracking-[-.035em] text-ink">{item.title}</h3>
                  <p className="mt-2.5 text-[14px] leading-6 text-slate-600">{item.description}</p>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="section-pad impact-gallery-section relative overflow-hidden bg-[linear-gradient(135deg,#fdf2f8_0%,#f4fbff_45%,#f3fffc_100%)]">
        <Container>
          <div data-reveal className="grid gap-6 lg:grid-cols-[.9fr_1.1fr] lg:items-end">
            <div className="max-w-[620px]"><p className="eyebrow">{content.gallery.eyebrow}</p><h2 className="section-title max-w-[13ch]">{content.gallery.title}</h2></div>
            <p className="max-w-2xl text-[16px] leading-8 text-muted lg:justify-self-end">{content.gallery.intro}</p>
          </div>

          <div className="mt-10 grid auto-rows-[220px] grid-cols-1 gap-4 min-[480px]:auto-rows-[190px] min-[480px]:grid-cols-2 md:auto-rows-[230px] lg:grid-cols-[repeat(14,minmax(0,1fr))] lg:auto-rows-[220px]">
            {content.gallery.items.map((item, index) => {
              const layout = [
                "min-[480px]:col-span-2 min-[480px]:row-span-2 lg:col-span-6",
                "col-span-1 lg:col-span-4",
                "col-span-1 lg:col-span-4",
                "col-span-1 lg:col-span-4",
                "col-span-1 lg:col-span-4",
                "min-[480px]:col-span-2 lg:col-span-6",
                "col-span-1 lg:col-span-4",
                "col-span-1 lg:col-span-4",
              ][index];
              return (
                <figure key={item.label} data-reveal className={`group relative overflow-hidden rounded-[24px] border border-white/70 bg-white shadow-[0_16px_45px_rgba(13,27,61,.08)] ${layout}`}>
                  <Image src={item.src} alt={item.alt} fill sizes="(max-width: 479px) 100vw, (max-width: 768px) 50vw, 33vw" className="object-cover transition duration-500 group-hover:scale-[1.03]" />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0d1b3d]/92 via-[#0d1b3d]/55 to-transparent p-4 pt-12 text-white">
                    <strong className="block text-[15px] font-black">{item.label}</strong>
                    <span className="mt-1 block text-[13px] text-white/76">{item.note}</span>
                  </div>
                </figure>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="section-pad relative overflow-hidden bg-brand-navy text-white">
        <SectionAtmosphere variant="network" dense className="opacity-38" />
        <Container className="relative z-10 grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-start">
          <div data-reveal>
            <p className="eyebrow !text-brand-orange">{content.measurement.eyebrow}</p>
            <h2 className="section-title !text-white">{content.measurement.title}</h2>
            <p className="mt-5 max-w-xl text-[16px] leading-8 text-white/72">{content.measurement.intro}</p>
            <div className="mt-7 rounded-[24px] border border-white/10 bg-white/[.06] p-5">
              <div className="flex items-center gap-2 text-[14px] font-black text-brand-teal"><ClipboardCheck size={18} /> What a partner can see</div>
              <div className="mt-4 grid gap-2.5">
                {content.measurement.partnerEvidence.map((item) => (
                  <div key={item} className="flex gap-2.5 text-[14px] font-semibold leading-6 text-white/78"><CheckCircle2 size={16} className="mt-1 shrink-0 text-brand-teal" />{item}</div>
                ))}
              </div>
            </div>
          </div>

          <div data-reveal className="grid gap-3">
            {content.measurement.steps.map((step, index) => {
              const palette = ["bg-brand-purple", "bg-brand-teal", "bg-brand-orange", "bg-brand-pink"];
              const icons = [BarChart3, Sparkles, Presentation, FileCheck2];
              const Icon = icons[index];
              return (
                <article key={step.title} className="grid grid-cols-[54px_1fr] gap-4 rounded-[22px] border border-white/10 bg-white/[.055] p-5 backdrop-blur sm:grid-cols-[54px_1fr_auto]">
                  <span className={`grid size-12 place-items-center rounded-2xl text-white ${palette[index]}`}><Icon size={20} /></span>
                  <div><strong className="block text-lg font-black text-white">{step.title}</strong><p className="mt-1.5 text-[14px] leading-6 text-white/72">{step.description}</p></div>
                  <span className="hidden self-center text-[13px] font-black tracking-[.12em] text-white/35 sm:block">{String(index + 1).padStart(2, "0")}</span>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#fdf0f7,#effffc_55%,#fff3e6)] py-16 sm:py-20">
        <Container data-reveal className="relative flex flex-col items-start justify-between gap-7 overflow-hidden rounded-[34px] bg-white p-8 shadow-[0_28px_80px_rgba(13,27,61,.14)] sm:p-10 lg:flex-row lg:items-center">
          <span className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-brand-pink via-brand-orange to-brand-teal" />
          <div className="max-w-3xl">
            <p className="eyebrow !text-brand-teal">{content.cta.eyebrow}</p>
            <h2 className="text-3xl font-black tracking-[-.045em] text-ink sm:text-4xl">{content.cta.title}</h2>
            <p className="mt-4 max-w-2xl text-[16px] leading-8 text-muted">{content.cta.description}</p>
          </div>
          <div className="flex shrink-0 flex-wrap gap-3"><ButtonLink href={content.cta.primary.href} variant="primary" showArrow>{content.cta.primary.label}</ButtonLink><ButtonLink href={content.cta.secondary.href} variant="secondary">{content.cta.secondary.label}</ButtonLink></div>
        </Container>
      </section>
    </main>
  );
}

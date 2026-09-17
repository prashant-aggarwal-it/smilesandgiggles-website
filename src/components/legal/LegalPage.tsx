import Link from "next/link";
import { ArrowLeft, CalendarDays, CheckCircle2, Mail, Phone, Scale } from "@/components/ui/LucideIcons";
import type { LegalDocument, LegalNote } from "@/content/legal";
import { Container } from "@/components/ui/Container";
import { BrandAccentBar } from "@/components/ui/BrandAccentBar";
import { SectionAtmosphere } from "@/components/ui/SectionAtmosphere";
import { siteConfig } from "@/content/site";
import { cn } from "@/lib/cn";

const noteClasses: Record<NonNullable<LegalNote["tone"]>, string> = {
  purple: "border-brand-purple/20 bg-brand-purple-soft text-brand-purple",
  teal: "border-brand-teal/20 bg-brand-teal-soft text-brand-teal",
  orange: "border-brand-orange/20 bg-brand-orange-soft text-brand-orange",
  pink: "border-brand-pink/20 bg-brand-pink-soft text-brand-pink",
};

export function LegalPage({ document }: { document: LegalDocument }) {
  return (
    <main id="main-content">
      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#fff7fb_0%,#ffffff_46%,#effffc_78%,#fff6e9_100%)] pb-16 pt-32 sm:pb-20 sm:pt-36">
        <SectionAtmosphere variant="network" dense className="opacity-45" />
        <Container className="relative z-10">
          <Link href="/" className="inline-flex items-center gap-2 text-xs font-extrabold text-brand-purple transition hover:text-brand-pink">
            <ArrowLeft size={15} /> Back to website
          </Link>
          <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_340px] lg:items-end">
            <div data-reveal>
              <p className="eyebrow !mb-3 !text-brand-pink">{document.eyebrow}</p>
              <h1 className="page-hero-heading max-w-4xl text-[clamp(2.75rem,5vw,5rem)] font-[850] leading-[.98] tracking-[-.06em] text-ink">{document.title}</h1>
              <BrandAccentBar className="mt-6" />
              <p className="mt-6 max-w-3xl text-base leading-8 text-muted sm:text-lg">{document.intro}</p>
            </div>
            <div data-reveal className="rounded-[26px] border border-white/80 bg-white/85 p-6 shadow-[0_18px_55px_rgba(13,27,61,.08)] backdrop-blur">
              <div className="flex items-start gap-3">
                <div className="grid size-10 shrink-0 place-items-center rounded-xl bg-brand-navy text-white"><Scale size={18} /></div>
                <div>
                  <strong className="block text-sm font-extrabold text-ink">Policy information</strong>
                  <div className="mt-3 grid gap-2 text-xs leading-5 text-muted">
                    <span className="flex items-center gap-2"><CalendarDays size={14} className="text-brand-teal" /> Effective: {document.effectiveDate}</span>
                    <span className="flex items-center gap-2"><CalendarDays size={14} className="text-brand-orange" /> Updated: {document.lastUpdated}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-slate-200 bg-white py-8">
        <Container>
          <div className="grid gap-3 md:grid-cols-3">
            {document.quickPoints.map((point, index) => {
              const colors = ["text-brand-purple", "text-brand-teal", "text-brand-orange"];
              return (
                <div key={point} data-reveal className="flex gap-3 rounded-2xl border border-slate-200 bg-slate-50/70 p-4 text-xs font-bold leading-5 text-slate-700">
                  <CheckCircle2 size={17} className={cn("mt-0.5 shrink-0", colors[index % colors.length])} />
                  <span>{point}</span>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="section-pad relative overflow-hidden bg-white">
        <Container className="grid gap-10 lg:grid-cols-[260px_1fr] lg:gap-16">
          <aside className="lg:sticky lg:top-28 lg:self-start" data-reveal>
            <div className="rounded-[24px] border border-slate-200 bg-slate-50 p-5">
              <p className="text-[10px] font-black uppercase tracking-[.14em] text-brand-purple">On this page</p>
              <nav className="mt-4 grid gap-1.5" aria-label={`${document.title} sections`}>
                {document.sections.map((section) => (
                  <a key={section.id} href={`#${section.id}`} className="rounded-xl px-3 py-2 text-[11px] font-bold leading-5 text-slate-600 transition hover:bg-white hover:text-brand-purple">
                    {section.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          <div className="min-w-0">
            {document.sections.map((section, index) => (
              <section key={section.id} id={section.id} className={cn("scroll-mt-28 py-8 sm:py-10", index > 0 && "border-t border-slate-200") } data-reveal>
                <h2 className="text-2xl font-black tracking-[-.035em] text-ink sm:text-[2rem]">{section.title}</h2>
                {section.paragraphs?.map((paragraph) => (
                  <p key={paragraph} className="mt-4 max-w-4xl text-sm leading-7 text-slate-600 sm:text-[15px]">{paragraph}</p>
                ))}
                {section.bullets?.length ? (
                  <ul className="mt-5 grid max-w-4xl gap-3">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3 text-sm leading-7 text-slate-600 sm:text-[15px]">
                        <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-brand-teal" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
                {section.note ? (
                  <div className={cn("mt-6 max-w-4xl rounded-[20px] border p-5", noteClasses[section.note.tone ?? "purple"])}>
                    <strong className="block text-xs font-black uppercase tracking-[.08em]">{section.note.title}</strong>
                    <p className="mt-2 text-xs leading-6 text-slate-700">{section.note.text}</p>
                  </div>
                ) : null}
              </section>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#f7f2ff,#effffc_55%,#fff3e5)] py-14 sm:py-16">
        <Container>
          <div data-reveal className="relative overflow-hidden rounded-[30px] bg-brand-navy p-7 text-white shadow-[0_24px_70px_rgba(13,27,61,.18)] sm:p-9">
            <span className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-brand-purple via-brand-pink to-brand-orange" />
            <div className="grid gap-7 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[.14em] text-brand-teal">Questions about this policy?</p>
                <h2 className="mt-2 text-2xl font-black tracking-[-.035em] sm:text-3xl">Contact Smiles &amp; Giggles Foundation</h2>
                <p className="mt-3 max-w-2xl text-xs leading-6 text-white/72">We can help with privacy, website, donation, receipt or policy-related questions.</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a href={siteConfig.contact.emailHref} className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-xs font-extrabold text-brand-navy transition hover:-translate-y-0.5"><Mail size={15} /> Email Us</a>
                <a href={siteConfig.contact.phoneHref} className="inline-flex items-center gap-2 rounded-full border border-white/25 px-5 py-3 text-xs font-extrabold text-white transition hover:bg-white/10"><Phone size={15} /> {siteConfig.contact.phone}</a>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}

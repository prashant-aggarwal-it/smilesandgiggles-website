import Image from "next/image";
import { Mail, MapPin, MessageCircle, Phone, ShieldCheck } from "@/components/ui/LucideIcons";
import { ContactForm } from "@/components/contact/ContactForm";
import { Container } from "@/components/ui/Container";
import { SectionAtmosphere } from "@/components/ui/SectionAtmosphere";
import { contactContent } from "@/content/contact";
import { siteConfig } from "@/content/site";

const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteConfig.contact.address)}`;

const socialLinks = [
  { label: "Facebook", href: siteConfig.social.facebook, handle: "smilesandgigglesfoundation" },
  { label: "Instagram", href: siteConfig.social.instagram, handle: "@smilesandgigglesfoundation" },
  { label: "LinkedIn", href: siteConfig.social.linkedin, handle: "smiles-giggles-foundation" },
];

const methods = [
  {
    label: "WhatsApp",
    value: siteConfig.contact.whatsapp,
    note: "Best for quick questions, follow-ups and direct coordination.",
    href: siteConfig.contact.whatsappHref,
    cta: "Chat on WhatsApp",
    icon: MessageCircle,
    color: "text-brand-teal bg-brand-teal-soft",
    external: true,
  },
  {
    label: "Email",
    value: siteConfig.contact.email,
    note: "Best for CSR proposals, documents and detailed institutional discussions.",
    href: siteConfig.contact.emailHref,
    cta: "Send Email",
    icon: Mail,
    color: "text-brand-purple bg-brand-purple-soft",
  },
  {
    label: "Call",
    value: siteConfig.contact.phone,
    note: "For direct conversations and time-sensitive coordination.",
    href: siteConfig.contact.phoneHref,
    cta: "Call Us",
    icon: Phone,
    color: "text-brand-pink bg-brand-pink-soft",
  },
  {
    label: "Delhi",
    value: "Laxmi Nagar, Delhi",
    note: siteConfig.contact.address,
    href: mapsHref,
    cta: "Get Directions",
    icon: MapPin,
    color: "text-brand-orange bg-brand-orange-soft",
    external: true,
  },
];

export function ContactPage({ submitted = false }: { submitted?: boolean }) {
  return (
    <main id="main-content" className="contact-v3">
      <section className="site-page-hero relative overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#fbfcff_52%,#f8fafc_100%)] pb-12 pt-28 sm:pb-14 sm:pt-32 lg:pb-16">
        <SectionAtmosphere variant="network" className="opacity-22" />
        <Container className="relative z-10">
          <div className="grid gap-6 xl:grid-cols-2 xl:items-stretch">
            <section data-reveal className="flex h-full flex-col rounded-[30px] border border-slate-200 bg-white p-6 shadow-[0_16px_44px_rgba(13,27,61,.06)] sm:p-8 xl:p-9">
              <p className="eyebrow">{contactContent.hero.eyebrow}</p>
              <h1 className="page-hero-heading max-w-[820px]">
                <span className="hero-line block text-brand-navy">Let’s Create</span>
                <span className="hero-line page-hero-gradient block">Impact Together.</span>
              </h1>
              <p className="page-hero-intro mt-5 max-w-2xl">{contactContent.hero.intro}</p>

              <div className="relative mt-6 h-44 overflow-hidden rounded-[22px] border border-white shadow-[0_16px_42px_rgba(13,27,61,.10)] sm:h-48">
                <Image src="/images/generated/contact-programme-discussion.webp" alt="An NGO coordinator and schoolteacher discussing a learning programme in an Indian school" fill priority sizes="(max-width:1280px) 100vw, 45vw" className="object-cover" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-navy/75 to-transparent px-4 pb-3 pt-10 text-xs font-bold text-white">One conversation can begin the right programme.</div>
              </div>

              <div className="mt-5 grid gap-2">
                {methods.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noreferrer" : undefined}
                      className="group grid min-h-[80px] grid-cols-[44px_minmax(0,1fr)] items-center gap-x-3 gap-y-1 rounded-[18px] border border-slate-200 bg-white px-4 py-2.5 transition hover:border-brand-purple/25 hover:shadow-[0_8px_20px_rgba(13,27,61,.055)] sm:grid-cols-[44px_minmax(0,1fr)_auto] xl:grid-cols-[44px_minmax(0,1fr)] 2xl:grid-cols-[44px_minmax(0,1fr)_auto]"
                    >
                      <span className={`grid size-11 place-items-center rounded-xl ${item.color}`}><Icon size={19} /></span>
                      <div className="min-w-0">
                        <p className="text-[12px] font-black uppercase tracking-[.12em] text-slate-500">{item.label}</p>
                        <p className="mt-0.5 text-[14px] font-black leading-6 text-brand-navy [overflow-wrap:anywhere] sm:text-[15px]">{item.value}</p>
                        <p className="mt-1 text-[13px] leading-5 text-slate-600">{item.note}</p>
                      </div>
                      <span className="col-start-2 mt-0.5 whitespace-nowrap text-[13px] font-extrabold text-brand-purple group-hover:underline sm:col-start-auto sm:mt-0 xl:col-start-2 xl:mt-0.5 2xl:col-start-auto 2xl:mt-0">{item.cta} →</span>
                    </a>
                  );
                })}
              </div>

              <div className="mt-4 rounded-[18px] border border-slate-200 bg-slate-50/80 px-4 py-3.5">
                <p className="text-[11px] font-black uppercase tracking-[.13em] text-slate-500">Follow the Foundation</p>
                <div className="mt-2 flex flex-wrap gap-x-4 gap-y-2">
                  {socialLinks.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[13px] font-extrabold text-brand-purple transition hover:underline"
                      aria-label={`${siteConfig.name} on ${item.label}`}
                    >
                      {item.label} <span className="font-semibold text-slate-500">{item.handle}</span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="mt-4 flex items-start gap-3 rounded-[18px] bg-brand-navy px-4 py-3.5 text-white">
                <ShieldCheck size={19} className="mt-0.5 shrink-0 text-brand-teal" />
                <p className="text-[13px] leading-5 text-white/78"><strong className="block text-[14px] text-white">One route to the right conversation</strong>Partnership, school-program, volunteer and donation enquiries all come through one place.</p>
              </div>
            </section>

            <ContactForm submitted={submitted} />
          </div>
        </Container>
      </section>
    </main>
  );
}

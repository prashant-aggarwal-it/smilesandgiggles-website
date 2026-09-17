import Link from "next/link";
import { BrandLogo } from "@/components/layout/BrandLogo";
import { Container } from "@/components/ui/Container";
import { footerNavigation } from "@/content/navigation";
import { siteConfig } from "@/content/site";

function FooterColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h3 className="mb-4 text-xs font-extrabold uppercase tracking-[.12em] text-white/75">{title}</h3>
      <div className="grid gap-2.5">
        {links.map((link) => (
          <Link key={link.label} href={link.href} className="text-sm text-white/75 transition hover:text-white">
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-[19px] fill-current">
      <path d="M6.5 8.2H3.2V21h3.3V8.2ZM4.85 3A1.93 1.93 0 1 0 4.85 6.86 1.93 1.93 0 0 0 4.85 3ZM21 13.66c0-3.85-2.05-5.64-4.79-5.64-2.2 0-3.19 1.21-3.74 2.06V8.2H9.16V21h3.31v-6.34c0-1.67.32-3.29 2.39-3.29 2.04 0 2.07 1.91 2.07 3.4V21H21v-7.34Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5 fill-none stroke-current" strokeWidth="2">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.4" cy="6.7" r="1" className="fill-current stroke-none" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5 fill-current">
      <path d="M13.6 21v-7.75h2.6l.39-3.02H13.6V8.3c0-.88.24-1.47 1.5-1.47h1.6v-2.7A21.5 21.5 0 0 0 14.37 4c-2.3 0-3.88 1.4-3.88 4v2.23H7.9v3.02h2.6V21h3.1Z" />
    </svg>
  );
}

const socialLinks = [
  { href: siteConfig.social.linkedin, icon: LinkedinIcon, label: "LinkedIn" },
  { href: siteConfig.social.instagram, icon: InstagramIcon, label: "Instagram" },
  { href: siteConfig.social.facebook, icon: FacebookIcon, label: "Facebook" },
].flatMap((item) => (item.href ? [{ ...item, href: item.href }] : []));

export function Footer() {
  return (
    <footer id="contact" className="bg-brand-navy pb-7 pt-20 text-white">
      <Container>
        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-[1.55fr_repeat(4,1fr)]">
          <div className="md:col-span-2 xl:col-span-1">
            <BrandLogo variant="full" />
            <p className="mt-5 max-w-sm text-sm leading-6 text-white/75">{siteConfig.description}</p>
          </div>
          <FooterColumn title="Our Work" links={footerNavigation.work} />
          <FooterColumn title="Explore" links={footerNavigation.explore} />
          <FooterColumn title="About" links={footerNavigation.about} />
          <FooterColumn title="Get Involved" links={footerNavigation.involved} />
        </div>

        <div className="mt-12 grid gap-6 border-y border-white/10 py-7 text-sm sm:grid-cols-2 xl:grid-cols-[1fr_1.35fr_1.5fr_auto] xl:items-center">
          <div><span className="block text-[11px] font-extrabold uppercase tracking-[.14em] text-white/55">Call / WhatsApp</span><div className="mt-1 flex flex-wrap gap-x-3 gap-y-1"><a href={siteConfig.contact.phoneHref} className="font-bold text-white/80 transition hover:text-white">{siteConfig.contact.phone}</a><a href={siteConfig.contact.whatsappHref} target="_blank" rel="noreferrer" className="font-bold text-brand-teal transition hover:text-white">WhatsApp</a></div></div>
          <div><span className="block text-[11px] font-extrabold uppercase tracking-[.14em] text-white/55">Email</span><a href={siteConfig.contact.emailHref} className="mt-1 block font-bold text-white/80 transition [overflow-wrap:anywhere] hover:text-white">{siteConfig.contact.email}</a></div>
          <div><span className="block text-[11px] font-extrabold uppercase tracking-[.14em] text-white/55">Address</span><strong className="mt-1 block text-white/80">{siteConfig.contact.address}</strong></div>
          {socialLinks.length ? (
            <div className="flex gap-2">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${siteConfig.name} on ${label}`}
                  className="grid size-11 place-items-center rounded-full border border-white/20 text-white/90 transition hover:-translate-y-0.5 hover:border-white/35 hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                >
                  <Icon />
                </a>
              ))}
            </div>
          ) : null}
        </div>

        <div className="mt-6 flex flex-col gap-4 text-xs text-white/72 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-4">
            <Link href="/privacy" className="transition hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="transition hover:text-white">Terms of Use</Link>
            <Link href="/donation-refund-policy" className="transition hover:text-white">Donation & Refund Policy</Link>
          </div>
          <p>© {new Date().getFullYear()} Smiles &amp; Giggles Foundation. All Rights Reserved.</p>
        </div>
      </Container>
    </footer>
  );
}

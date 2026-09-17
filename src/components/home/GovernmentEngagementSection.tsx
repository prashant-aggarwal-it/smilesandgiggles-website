import type { HomePageContent } from "@/content/home";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TextLink } from "@/components/ui/TextLink";
import { SectionAtmosphere } from "@/components/ui/SectionAtmosphere";

const engagementStyles = [
  { bar: "bg-brand-teal", badge: "bg-brand-teal text-white" },
  { bar: "bg-brand-orange", badge: "bg-brand-orange text-white" },
];

export function GovernmentEngagementSection({ content }: { content: HomePageContent["engagement"] }) {
  return (
    <section className="section-pad section-surface-government relative overflow-hidden">
      <SectionAtmosphere variant="circuits" className="z-0 opacity-85" />
      <Container className="relative z-10">
        <div data-reveal><SectionHeading eyebrow={content.eyebrow} title={content.title} intro={content.intro} align="center" accent="teal" /></div>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {content.items.map((item, index) => {
            const style = engagementStyles[index % engagementStyles.length];
            return (
              <article key={item.label} data-reveal className="relative overflow-hidden rounded-[30px] border border-white/80 bg-white shadow-[0_18px_50px_rgba(29,36,70,.08)]">
                <span className={`absolute inset-x-0 top-0 z-20 h-2 ${style.bar}`} />
                <div className={`relative grid h-[290px] gap-1 bg-slate-100 ${item.images.length > 1 ? "grid-cols-2" : "grid-cols-1"}`}>
                  {item.images.map((image) => <div key={image.src} className="relative overflow-hidden"><Image src={image.src} alt={image.alt} fill sizes="(max-width: 1024px) 100vw, 25vw" className="object-cover transition duration-700 hover:scale-[1.035]" /></div>)}
                </div>
                <div className="p-7">
                  <span className={`rounded-full px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[.1em] shadow-sm ${style.badge}`}>{item.label}</span>
                  <h3 className="mt-4 text-2xl font-extrabold tracking-[-.035em] text-ink">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted">{item.description}</p>
                  <div className="mt-5"><TextLink href={item.href}>View the Story</TextLink></div>
                </div>
              </article>
            );
          })}
        </div>
        <p className="mt-6 text-center text-[11px] leading-5 text-slate-400">Institution names are shown as text labels. Government logos are intentionally not used unless usage permission is confirmed.</p>
      </Container>
    </section>
  );
}

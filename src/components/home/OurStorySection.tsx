import type { HomePageContent } from "@/content/home";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TextLink } from "@/components/ui/TextLink";

export function OurStorySection({ content }: { content: HomePageContent["story"] }) {
  return (
    <section id="about" className="section-pad scroll-mt-24 bg-[linear-gradient(180deg,#fcfaff,#f5fbfa)]">
      <Container className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div data-reveal className="relative min-h-[450px] sm:min-h-[570px]">
          <span aria-hidden="true" className="absolute -left-3 top-[10%] h-28 w-2 rounded-full bg-brand-pink" />
          <span aria-hidden="true" className="absolute left-[8%] -top-3 h-2 w-24 rounded-full bg-brand-teal" />
          <span aria-hidden="true" className="absolute bottom-[9%] right-[-10px] h-20 w-2 rounded-full bg-brand-orange" />
          <div className="absolute left-0 top-0 h-[78%] w-[80%] overflow-hidden rounded-[30px] shadow-[0_26px_65px_rgba(31,39,74,.14)]"><Image src={content.images[0].src} alt={content.images[0].alt} fill sizes="(max-width: 1024px) 80vw, 40vw" className="object-cover" /></div>
          <div className="absolute bottom-0 right-0 h-[51%] w-[55%] overflow-hidden rounded-[26px] border-[8px] border-[#f5fbfa] shadow-[0_24px_60px_rgba(31,39,74,.14)]"><Image src={content.images[1].src} alt={content.images[1].alt} fill sizes="(max-width: 1024px) 55vw, 28vw" className="object-cover" /></div>
          <div className="absolute bottom-[7%] left-[5%] rounded-2xl bg-brand-navy px-5 py-4 text-white shadow-xl"><strong className="block text-xs font-extrabold">Built from action</strong><span className="mt-1 block text-[10px] font-semibold text-white/55">Ready to scale</span></div>
        </div>
        <div data-reveal>
          <SectionHeading eyebrow={content.eyebrow} title={content.title} accent="pink" />
          <div className="mt-6 space-y-4 text-sm leading-7 text-muted">
            {content.paragraphs.slice(0, 2).map((p: string) => <p key={p}>{p}</p>)}
          </div>
          <blockquote className="my-6 rounded-r-2xl border-l-4 border-brand-orange bg-white px-6 py-5 text-xl font-extrabold leading-8 tracking-[-.025em] text-ink shadow-sm">“{content.quote}”</blockquote>
          <div className="space-y-4 text-sm leading-7 text-muted">{content.paragraphs.slice(2).map((p: string) => <p key={p}>{p}</p>)}</div>
          <div className="mt-6"><TextLink href="/about">Know More About Us</TextLink></div>
        </div>
      </Container>
    </section>
  );
}

import Image from "next/image";
import { BrandAccentBar } from "@/components/ui/BrandAccentBar";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { SectionAtmosphere } from "@/components/ui/SectionAtmosphere";
import type { ImageAsset } from "@/types/content";

export type WorkHeroProps = {
  eyebrow: string;
  title: string;
  intro: string;
  tagline: string;
  images: ImageAsset[];
  primaryHref?: string;
};

export function WorkPageHero({ eyebrow, title, intro, tagline, images, primaryHref = "/contact" }: WorkHeroProps) {
  const sentenceLines = title.split(/(?<=\.)\s+/).filter(Boolean);
  return (
    <section className="site-page-hero relative overflow-hidden bg-[linear-gradient(135deg,#fff8fc_0%,#ffffff_37%,#effffc_68%,#fff4e8_100%)] pb-16 pt-32 sm:pb-20 sm:pt-36 lg:pb-24 lg:pt-40">
      <SectionAtmosphere variant="circuits" dense />
      <Container className="relative grid items-center gap-12 lg:grid-cols-[1.1fr_.9fr] lg:gap-16">
        <div data-reveal>
          <p className="eyebrow !mb-4 !text-brand-pink">{eyebrow}</p>
          <h1 className="page-hero-heading max-w-3xl text-brand-navy">
            {sentenceLines.map((line, index) => (
              <span key={line} className={`hero-line block ${index === sentenceLines.length - 1 && sentenceLines.length > 1 ? "page-hero-gradient" : ""}`}>{line}</span>
            ))}
          </h1>
          <BrandAccentBar className="mt-6" />
          <p className="page-hero-intro mt-6 max-w-2xl">{intro}</p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            {tagline.split("•").map((item, index) => {
              const colors = ["bg-brand-pink", "bg-brand-teal", "bg-brand-orange", "bg-brand-purple", "bg-brand-pink"];
              return (
                <span key={item} className="inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/85 px-3 py-2 text-[11px] font-extrabold text-brand-navy shadow-sm backdrop-blur">
                  <span className={`size-2 rounded-full ${colors[index % colors.length]}`} />
                  {item.trim()}
                </span>
              );
            })}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href={primaryHref} showArrow>Partner With Us</ButtonLink>
            <ButtonLink href="/our-work" variant="secondary">Explore All Our Work</ButtonLink>
          </div>
        </div>

        <div data-reveal className="relative min-h-[430px] sm:min-h-[540px]">
          <span aria-hidden="true" className="hero-color-shape atmosphere-float absolute -left-2 top-[10%] h-16 w-16 rounded-[20px] bg-brand-orange" />
          <span aria-hidden="true" className="hero-color-shape atmosphere-float-slow absolute right-[2%] top-[5%] h-3 w-32 rounded-full bg-brand-teal" />
          <span aria-hidden="true" className="hero-color-shape atmosphere-float absolute right-[3%] bottom-[16%] h-24 w-3 rounded-full bg-brand-pink" />

          {images.length ? <>
          <div className="absolute right-0 top-0 h-[78%] w-[83%] overflow-hidden rounded-[36px] border border-white/80 bg-white shadow-[0_34px_90px_rgba(13,27,61,.18)]">
            <Image src={images[0].src} alt={images[0].alt} fill priority sizes="(max-width: 1024px) 84vw, 45vw" className="object-cover transition duration-700 hover:scale-[1.025]" />
            <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-brand-navy/55 to-transparent" />
          </div>
          {images[1] ? (
            <div className="absolute bottom-0 left-0 h-[46%] w-[58%] overflow-hidden rounded-[28px] border-[8px] border-white shadow-[0_26px_65px_rgba(13,27,61,.18)]">
              <Image src={images[1].src} alt={images[1].alt} fill sizes="(max-width: 1024px) 60vw, 30vw" className="object-cover" />
            </div>
          ) : null}

          </> : <div className="relative flex min-h-[430px] flex-col justify-center rounded-[32px] bg-brand-navy p-7 text-white shadow-xl sm:p-10"><p className="text-xs font-bold uppercase tracking-widest text-brand-teal">Your portfolio starts here</p><h2 className="mt-4 text-3xl font-bold">Ideas become things you can show.</h2><div className="mt-7 grid grid-cols-2 gap-3">{["Visual story", "Campaign plan", "Short video", "Teaching demo"].map((label, i) => <div key={label} className="rounded-2xl border border-white/20 bg-white/10 p-4"><span className="text-brand-teal">0{i + 1}</span><p className="mt-3 font-semibold">{label}</p></div>)}</div><p className="mt-5 text-sm text-white/70">Illustrative portfolio outputs • Programme design</p></div>}
          {images.length > 0 && <div className="absolute bottom-[7%] right-[8%] z-10 rounded-2xl bg-brand-navy px-5 py-4 text-white shadow-xl">
            <div className="mb-2 flex gap-1.5">
              <span className="size-2 rounded-full bg-brand-pink" />
              <span className="size-2 rounded-full bg-brand-teal" />
              <span className="size-2 rounded-full bg-brand-orange" />
            </div>
            <strong className="block text-xs font-extrabold">Practical by design</strong>
            <span className="mt-1 block text-[10px] font-semibold text-white/55">Built for real-world delivery</span>
          </div>}
        </div>
      </Container>
    </section>
  );
}

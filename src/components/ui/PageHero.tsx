import Image from "next/image";
import { BrandAccentBar } from "@/components/ui/BrandAccentBar";
import { Container } from "@/components/ui/Container";
import { SectionAtmosphere } from "@/components/ui/SectionAtmosphere";

type HeroImage = { src: string; alt: string };

type PageHeroProps = {
  eyebrow: string;
  title: string;
  intro: string;
  tagline?: string;
  images?: HeroImage[];
};

export function PageHero({ eyebrow, title, intro, tagline, images = [] }: PageHeroProps) {
  const hasImages = images.length > 0;
  const sentenceLines = title.split(/(?<=\.)\s+/).filter(Boolean);

  return (
    <section className="site-page-hero relative overflow-hidden bg-[linear-gradient(135deg,#fff7fb_0%,#ffffff_42%,#effffc_72%,#fff6e9_100%)] pb-20 pt-36 sm:pb-24 sm:pt-40 lg:pb-28 lg:pt-44">
      <SectionAtmosphere variant="network" dense />
      <Container className={hasImages ? "relative grid items-center gap-12 lg:grid-cols-[1.1fr_.9fr] lg:gap-16" : "relative"}>
        <div data-reveal className={hasImages ? "" : "max-w-4xl"}>
          <p className="eyebrow !mb-4 !text-brand-pink">{eyebrow}</p>
          <h1 className="page-hero-heading max-w-4xl text-brand-navy">
            {sentenceLines.map((line, index) => (
              <span key={line} className={`hero-line block ${index === sentenceLines.length - 1 && sentenceLines.length > 1 ? "page-hero-gradient" : ""}`}>{line}</span>
            ))}
          </h1>
          <BrandAccentBar className="mt-6" />
          <p className="page-hero-intro mt-6 max-w-2xl">{intro}</p>
          {tagline ? (
            <div className="mt-7 inline-flex flex-wrap items-center gap-3 rounded-full border border-brand-orange/20 bg-white/80 px-4 py-2 text-xs font-extrabold text-brand-navy shadow-sm backdrop-blur">
              <span className="size-2 rounded-full bg-brand-orange" />
              {tagline}
            </div>
          ) : null}
        </div>

        {hasImages ? (
          <div data-reveal className="relative min-h-[430px] sm:min-h-[520px]">
            <span aria-hidden="true" className="absolute left-[5%] top-[3%] h-2 w-28 rounded-full bg-brand-teal" />
            <span aria-hidden="true" className="absolute right-[3%] top-[15%] h-24 w-2 rounded-full bg-brand-pink" />
            <span aria-hidden="true" className="absolute bottom-[8%] left-[8%] h-20 w-2 rounded-full bg-brand-orange" />

            <div className="absolute right-0 top-0 h-[78%] w-[82%] overflow-hidden rounded-[34px] border border-white/70 bg-white shadow-[0_30px_80px_rgba(13,27,61,.16)]">
              <Image src={images[0].src} alt={images[0].alt} fill priority sizes="(max-width: 1024px) 82vw, 44vw" className="object-cover" />
            </div>
            {images[1] ? (
              <div className="absolute bottom-0 left-0 h-[48%] w-[58%] overflow-hidden rounded-[28px] border-[8px] border-white shadow-[0_24px_60px_rgba(13,27,61,.16)]">
                <Image src={images[1].src} alt={images[1].alt} fill sizes="(max-width: 1024px) 58vw, 30vw" className="object-cover" />
              </div>
            ) : null}
            <div className="absolute bottom-[6%] right-[4%] rounded-2xl bg-brand-navy px-5 py-4 text-white shadow-xl">
              <strong className="block text-xs font-extrabold">Grassroots action</strong>
              <span className="mt-1 block text-[10px] font-semibold text-white/55">Built to create opportunity</span>
            </div>
          </div>
        ) : null}
      </Container>
    </section>
  );
}

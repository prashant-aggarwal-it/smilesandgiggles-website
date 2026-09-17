import Image from "next/image";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { BrainCircuit, CircuitBoard, School } from "@/components/ui/LucideIcons";
import type { HomePageContent } from "@/content/home";
import { Container } from "@/components/ui/Container";

const proofIcons = [CircuitBoard, BrainCircuit, School] as const;

export function HeroSection({ content }: { content: HomePageContent["hero"] }) {
  return (
    <section className="home-hero home-hero--full-bg relative overflow-hidden pt-[80px]">
      <div className="home-hero__background" aria-hidden="true">
        <Image
          src={content.image.src}
          alt=""
          fill
          priority
          sizes="100vw"
          className="home-hero__background-image"
        />
        <div className="home-hero__background-overlay" />
      </div>

      <Container className="home-hero__container home-hero__container--full-bg ">
        <div data-reveal className="home-hero__copy home-hero__copy--overlay">
          <h1 className="home-hero__title">
            <span className="hero-line">{content.titleLine1}</span>
            <span className="hero-line home-hero__gradient-text">{content.titleLine2}</span>
            <span className="hero-line home-hero__gradient-text home-hero__gradient-text--teal">{content.titleLine3}</span>
          </h1>

          <p className="home-hero__supporting">{content.supportingText}</p>

          <div className="mt-6 flex flex-wrap gap-3">
            <ButtonLink href={content.primaryCta.href} showArrow>{content.primaryCta.label}</ButtonLink>
            <ButtonLink href={content.secondaryCta.href} variant="outline">{content.secondaryCta.label}</ButtonLink>
          </div>

          <div className="home-hero__proof" aria-label="Foundation delivery strengths">
            {content.proofPoints.map((point, index) => {
              const Icon = proofIcons[index % proofIcons.length];
              return (
                <div key={point.title} className="home-hero__proof-item">
                  <span className="home-hero__proof-icon"><Icon size={18} aria-hidden="true" /></span>
                  <span className="home-hero__proof-copy">
                    <strong>{point.title}</strong>
                    <small>{point.description}</small>
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
      <div className="home-hero__ribbon" aria-hidden="true" />
    </section>
  );
}

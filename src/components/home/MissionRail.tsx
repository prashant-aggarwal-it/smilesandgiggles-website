import Link from "next/link";
import { ArrowRight, BrainCircuit, HandHeart, HeartPulse, School, UsersRound } from "@/components/ui/LucideIcons";
import type { HomePageContent } from "@/content/home";
import { Container } from "@/components/ui/Container";

const iconMap = {
  stem: School,
  ai: BrainCircuit,
  health: HeartPulse,
  csr: HandHeart,
  involved: UsersRound,
} as const;

const tones = {
  purple: "mission-rail-card--purple",
  teal: "mission-rail-card--teal",
  orange: "mission-rail-card--orange",
  pink: "mission-rail-card--pink",
  navy: "mission-rail-card--blue",
} as const;

export function MissionRail({ content }: { content: HomePageContent["missionRail"] }) {
  return (
    <section className="mission-rail" aria-label="Explore Smiles & Giggles Foundation impact areas">
      <Container className="max-w-[1360px]">
        <h2 className="sr-only">{content.title}</h2>
        <p className="sr-only">{content.intro}</p>
        <div className="mission-rail__viewport">
          <div className="mission-rail__track">
            {content.items.map((item) => {
              const Icon = iconMap[item.icon];
              return (
                <Link key={item.title} href={item.href} className={`mission-rail-card ${tones[item.tone]}`}>
                  <span className="mission-rail-card__icon" aria-hidden="true"><Icon size={23} /></span>
                  <span className="mission-rail-card__copy">
                    <strong>{item.title}</strong>
                    <small>{item.description}</small>
                  </span>
                  <ArrowRight className="mission-rail-card__arrow" size={15} aria-hidden="true" />
                </Link>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}

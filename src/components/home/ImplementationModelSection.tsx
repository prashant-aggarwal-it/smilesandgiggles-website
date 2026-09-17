import type { HomePageContent } from "@/content/home";
import { BarChart3, GraduationCap, Presentation, School, Sparkles, Wrench } from "@/components/ui/LucideIcons";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionAtmosphere } from "@/components/ui/SectionAtmosphere";

const icons = { school: School, sparkles: Sparkles, wrench: Wrench, users: GraduationCap, presentation: Presentation, chart: BarChart3 };
const stepStyles = [
  "border-brand-purple bg-brand-purple text-white shadow-[0_14px_30px_rgba(109,60,201,.20)]",
  "border-brand-teal bg-brand-teal text-white shadow-[0_14px_30px_rgba(20,184,166,.20)]",
  "border-brand-orange bg-brand-orange text-white shadow-[0_14px_30px_rgba(255,138,0,.20)]",
  "border-brand-pink bg-brand-pink text-white shadow-[0_14px_30px_rgba(232,61,140,.20)]",
  "border-brand-purple bg-brand-purple text-white shadow-[0_14px_30px_rgba(109,60,201,.20)]",
  "border-brand-teal bg-brand-teal text-white shadow-[0_14px_30px_rgba(20,184,166,.20)]",
];

export function ImplementationModelSection({ content }: { content: HomePageContent["process"] }) {
  return (
    <section className="section-pad section-surface-grid relative overflow-hidden">
      <SectionAtmosphere variant="circuits" className="z-0 opacity-80" />
      <Container className="relative z-10">
        <div data-reveal><SectionHeading eyebrow={content.eyebrow} title={content.title} intro={content.intro} align="center" accent="purple" /></div>
        <div data-reveal className="process-shell relative mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-6 lg:gap-4">
          <div aria-hidden="true" className="process-line absolute left-[7%] right-[7%] top-[52px] hidden h-px bg-slate-200 lg:block"><span className="block h-full w-full origin-left scale-x-0 bg-gradient-to-r from-brand-pink via-brand-orange to-brand-teal transition-transform duration-[1400ms] ease-out" /></div>
          {content.steps.map((step, index) => {
            const Icon = icons[step.icon as keyof typeof icons];
            return (
              <article key={step.number} className="relative text-center">
                <span className="text-[10px] font-extrabold tracking-[.14em] text-slate-400">{step.number}</span>
                <span className={`relative z-10 mx-auto mt-2 grid size-16 place-items-center rounded-[20px] border backdrop-blur-sm shadow-[0_12px_30px_rgba(30,36,70,.07)] ${stepStyles[index % stepStyles.length]}`}><Icon size={21} strokeWidth={1.7} /></span>
                <h3 className="mt-5 text-sm font-extrabold tracking-[-.025em] text-ink">{step.title}</h3>
                <p className="mt-2 text-xs leading-5 text-muted">{step.description}</p>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

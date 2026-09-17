import type { HomePageContent } from "@/content/home";
import { CheckCircle2 } from "@/components/ui/LucideIcons";
import { Container } from "@/components/ui/Container";
import { TextLink } from "@/components/ui/TextLink";

export function GovernanceStrip({ content }: { content: HomePageContent["governance"] }) {
  return (
    <section className="home-governance section-surface-governance border-y border-slate-200">
      <Container>
        <div data-reveal className="grid gap-7 lg:grid-cols-[1.2fr_.8fr] lg:items-center">
          <div>
            <p className="home-kicker text-brand-teal">{content.eyebrow}</p>
            <h2 className="text-[clamp(2rem,3.2vw,2.8rem)] font-extrabold tracking-[-.045em] text-ink">{content.title}</h2>
            <p className="mt-3 max-w-3xl text-[15px] leading-6 text-slate-600">{content.intro}</p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {content.indicators.map((indicator: string, index: number) => {
              const colors = ["text-brand-teal", "text-brand-pink", "text-brand-orange", "text-brand-purple"];
              return <span key={indicator} className="flex items-center gap-2 rounded-xl border border-white bg-white/95 px-4 py-3 text-[14px] font-extrabold text-slate-700 shadow-sm"><CheckCircle2 size={17} className={colors[index % colors.length]} />{indicator}</span>;
            })}
          </div>
          <div className="lg:col-span-2"><TextLink href="/governance">View Governance & Transparency</TextLink></div>
        </div>
      </Container>
    </section>
  );
}

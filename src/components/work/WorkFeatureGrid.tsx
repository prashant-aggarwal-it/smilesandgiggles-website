import { BookOpen, CircuitBoard, Code2, Heart, Leaf, School, Shield, Sparkles, Users, Wrench } from "@/components/ui/LucideIcons";
import type { WorkFeature } from "@/content/work";

const accentMap = {
  purple: { shell: "border-brand-purple/18 bg-brand-purple-soft/75", icon: "bg-brand-purple text-white", rail: "bg-brand-purple" },
  pink: { shell: "border-brand-pink/18 bg-brand-pink-soft/75", icon: "bg-brand-pink text-white", rail: "bg-brand-pink" },
  teal: { shell: "border-brand-teal/18 bg-brand-teal-soft/80", icon: "bg-brand-teal text-white", rail: "bg-brand-teal" },
  orange: { shell: "border-brand-orange/18 bg-brand-orange-soft/85", icon: "bg-brand-orange text-white", rail: "bg-brand-orange" },
};

const icons = {
  spark: Sparkles,
  code: Code2,
  cpu: CircuitBoard,
  people: Users,
  school: School,
  health: Heart,
  apple: Leaf,
  shield: Shield,
  activity: Wrench,
  book: BookOpen,
};

export function WorkFeatureGrid({ features, columns = 3 }: { features: WorkFeature[]; columns?: 2 | 3 }) {
  return (
    <div className={columns === 2 ? "grid gap-4 md:grid-cols-2" : "grid gap-4 md:grid-cols-2 xl:grid-cols-3"}>
      {features.map((feature) => {
        const Icon = icons[feature.icon];
        const colors = accentMap[feature.accent];
        return (
          <article data-reveal key={feature.title} className={`group relative overflow-hidden rounded-[24px] border p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_55px_rgba(13,27,61,.09)] ${colors.shell}`}>
            <span className={`absolute inset-y-0 left-0 w-1 ${colors.rail}`} />
            <div className={`grid size-11 place-items-center rounded-2xl shadow-sm ${colors.icon}`}><Icon size={20} strokeWidth={2.1} /></div>
            <h3 className="mt-5 text-lg font-[850] tracking-[-.035em] text-brand-navy">{feature.title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">{feature.description}</p>
            {feature.bullets?.length ? (
              <ul className="mt-5 space-y-2 border-t border-brand-navy/8 pt-4">
                {feature.bullets.map((item) => <li key={item} className="flex gap-2 text-xs font-semibold leading-5 text-slate-600"><span className={`mt-1.5 size-1.5 shrink-0 rounded-full ${colors.rail}`} />{item}</li>)}
              </ul>
            ) : null}
          </article>
        );
      })}
    </div>
  );
}

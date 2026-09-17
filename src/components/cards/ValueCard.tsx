import { Heart, School, ShieldCheck, Users, Wrench } from "@/components/ui/LucideIcons";
import { cn } from "@/lib/cn";

type Accent = "purple" | "pink" | "teal" | "orange";
type IconName = "heart" | "wrench" | "school" | "shield" | "users";

type ValueCardProps = {
  title: string;
  description: string;
  accent: Accent;
  icon: IconName;
};

const styles: Record<Accent, { rail: string; tile: string; icon: string }> = {
  purple: { rail: "bg-brand-purple", tile: "bg-brand-purple-soft", icon: "text-brand-purple" },
  pink: { rail: "bg-brand-pink", tile: "bg-brand-pink-soft", icon: "text-brand-pink" },
  teal: { rail: "bg-brand-teal", tile: "bg-brand-teal-soft", icon: "text-brand-teal" },
  orange: { rail: "bg-brand-orange", tile: "bg-brand-orange-soft", icon: "text-brand-orange" },
};

const icons = {
  heart: Heart,
  wrench: Wrench,
  school: School,
  shield: ShieldCheck,
  users: Users,
};

export function ValueCard({ title, description, accent, icon }: ValueCardProps) {
  const Icon = icons[icon];
  const style = styles[accent];

  return (
    <article data-reveal className="relative overflow-hidden rounded-[24px] border border-slate-200/80 bg-white p-6 shadow-[0_16px_45px_rgba(13,27,61,.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(13,27,61,.10)]">
      <span aria-hidden="true" className={cn("absolute inset-x-0 top-0 h-1.5", style.rail)} />
      <div className={cn("grid size-12 place-items-center rounded-2xl", style.tile)}>
        <Icon size={21} className={style.icon} />
      </div>
      <h3 className="mt-5 text-lg font-extrabold tracking-[-.035em] text-ink">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-muted">{description}</p>
    </article>
  );
}

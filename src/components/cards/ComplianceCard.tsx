import { BadgeCheck } from "@/components/ui/LucideIcons";
import { cn } from "@/lib/cn";

type Accent = "purple" | "pink" | "teal" | "orange";

type ComplianceCardProps = {
  label: string;
  value: string;
  accent: Accent;
};

const styles: Record<Accent, { border: string; tile: string; icon: string; value: string }> = {
  purple: { border: "border-brand-purple/20", tile: "bg-brand-purple-soft", icon: "text-brand-purple", value: "text-brand-purple" },
  pink: { border: "border-brand-pink/20", tile: "bg-brand-pink-soft", icon: "text-brand-pink", value: "text-brand-pink" },
  teal: { border: "border-brand-teal/20", tile: "bg-brand-teal-soft", icon: "text-brand-teal", value: "text-brand-teal" },
  orange: { border: "border-brand-orange/20", tile: "bg-brand-orange-soft", icon: "text-brand-orange", value: "text-brand-orange" },
};

export function ComplianceCard({ label, value, accent }: ComplianceCardProps) {
  const style = styles[accent];
  return (
    <article className={cn("rounded-[20px] border bg-white p-5 shadow-sm", style.border)}>
      <div className={cn("grid size-10 place-items-center rounded-xl", style.tile)}>
        <BadgeCheck size={19} className={style.icon} />
      </div>
      <p className="mt-4 text-[10px] font-extrabold uppercase tracking-[.13em] text-slate-500">{label}</p>
      <strong className={cn("mt-1 block text-sm font-extrabold", style.value)}>{value}</strong>
    </article>
  );
}

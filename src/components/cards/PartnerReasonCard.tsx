import { Blocks, Expand, FileCheck2, Network, School, ShieldCheck } from "@/components/ui/LucideIcons";
import type { PartnerReason } from "@/types/content";

const icons = { workflow: Network, school: School, blocks: Blocks, expand: Expand, file: FileCheck2, shield: ShieldCheck };
const accents = [
  { icon: "bg-brand-pink", number: "text-brand-pink" },
  { icon: "bg-brand-teal", number: "text-brand-teal" },
  { icon: "bg-brand-orange", number: "text-brand-orange" },
  { icon: "bg-brand-purple", number: "text-brand-purple" },
];

export function PartnerReasonCard({ reason, index }: { reason: PartnerReason; index: number }) {
  const Icon = icons[reason.icon];
  const accent = accents[index % accents.length];
  return (
    <article data-reveal className="group h-full rounded-[22px] lg:h-[250px] border border-white/60 bg-white p-5 text-brand-navy shadow-[0_16px_45px_rgba(0,0,0,.10)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(0,0,0,.15)] sm:p-6">
      <div className="flex items-center justify-between">
        <span className={`text-[12px] font-black tracking-[.14em] ${accent.number}`}>{String(index + 1).padStart(2, "0")}</span>
        <span className={`grid size-11 place-items-center rounded-2xl ${accent.icon} text-white shadow-md`}><Icon size={20} strokeWidth={1.9} /></span>
      </div>
      <h3 className="mt-5 text-[19px] font-black tracking-[-.025em] text-brand-navy">{reason.title}</h3>
      <p className="mt-2.5 text-[14px] leading-6 text-slate-600">{reason.description}</p>
    </article>
  );
}

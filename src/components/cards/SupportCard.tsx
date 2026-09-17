import { Box, GraduationCap, School, Wrench } from "@/components/ui/LucideIcons";
import type { SupportOption } from "@/types/content";
import { TextLink } from "@/components/ui/TextLink";

const icons = { school: School, box: Box, lab: Wrench, teacher: GraduationCap };
const iconStyles = {
  school: { icon: "bg-brand-pink text-white", rail: "bg-brand-pink", wash: "from-brand-pink-soft" },
  box: { icon: "bg-brand-teal text-white", rail: "bg-brand-teal", wash: "from-brand-teal-soft" },
  lab: { icon: "bg-brand-orange text-white", rail: "bg-brand-orange", wash: "from-brand-orange-soft" },
  teacher: { icon: "bg-brand-purple text-white", rail: "bg-brand-purple", wash: "from-brand-purple-soft" },
};

export function SupportCard({ option }: { option: SupportOption }) {
  const Icon = icons[option.icon];
  const style = iconStyles[option.icon];
  return (
    <article data-reveal className={`group relative flex min-h-[330px] flex-col overflow-hidden rounded-[24px] border border-white/90 bg-gradient-to-br ${style.wash} via-white to-white p-6 shadow-[0_14px_36px_rgba(29,36,70,.05)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_58px_rgba(29,36,70,.10)]`}>
      <span className={`absolute left-0 top-0 h-full w-1.5 ${style.rail}`} />
      <span className={`grid size-12 place-items-center rounded-2xl shadow-[0_12px_28px_rgba(13,27,61,.14)] ${style.icon}`}><Icon size={21} strokeWidth={1.9} /></span>
      <h3 className="mt-10 text-lg font-extrabold leading-snug tracking-[-.03em] text-ink">{option.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-6 text-muted">{option.description}</p>
      <div className="mt-5"><TextLink href={option.href}>{option.cta}</TextLink></div>
    </article>
  );
}

import { cn } from "@/lib/cn";

type Milestone = {
  label: string;
  title: string;
  description: string;
};

const accents = [
  { dot: "bg-brand-pink", text: "text-brand-pink", soft: "bg-brand-pink-soft" },
  { dot: "bg-brand-teal", text: "text-brand-teal", soft: "bg-brand-teal-soft" },
  { dot: "bg-brand-orange", text: "text-brand-orange", soft: "bg-brand-orange-soft" },
  { dot: "bg-brand-purple", text: "text-brand-purple", soft: "bg-brand-purple-soft" },
  { dot: "bg-brand-teal", text: "text-brand-teal", soft: "bg-brand-teal-soft" },
];

export function JourneyTimeline({ items }: { items: Milestone[] }) {
  return (
    <div className="relative mt-12 grid gap-5 lg:grid-cols-5 lg:gap-4">
      <span aria-hidden="true" className="absolute left-[8%] right-[8%] top-7 hidden h-[2px] bg-gradient-to-r from-brand-pink via-brand-teal via-brand-orange to-brand-purple lg:block" />
      {items.map((item, index) => {
        const accent = accents[index % accents.length];
        return (
          <article key={item.title} data-reveal className="relative rounded-[22px] border border-slate-200/80 bg-white/90 p-5 shadow-[0_14px_35px_rgba(13,27,61,.055)] backdrop-blur-sm">
            <div className={cn("relative z-10 grid size-14 place-items-center rounded-full border-[6px] border-white shadow-sm", accent.soft)}>
              <span className={cn("size-3 rounded-full", accent.dot)} />
            </div>
            <p className={cn("mt-5 text-[10px] font-extrabold uppercase tracking-[.14em]", accent.text)}>{item.label}</p>
            <h3 className="mt-2 text-base font-extrabold leading-6 tracking-[-.03em] text-ink">{item.title}</h3>
            <p className="mt-3 text-xs leading-6 text-muted">{item.description}</p>
          </article>
        );
      })}
    </div>
  );
}

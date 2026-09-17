import { CircuitBoard, Code2, FlaskConical, Lightbulb, Wrench } from "@/components/ui/LucideIcons";

type MakerLoopProps = {
  title: string;
  description: string;
};

const nodes = [
  { label: "Build", Icon: Wrench, className: "bg-brand-pink text-white", pos: "left-[8%] top-[44%]" },
  { label: "Test", Icon: FlaskConical, className: "bg-brand-teal text-white", pos: "left-[27%] top-[7%]" },
  { label: "Improve", Icon: Lightbulb, className: "bg-brand-orange text-white", pos: "right-[23%] top-[7%]" },
  { label: "Code", Icon: Code2, className: "bg-brand-purple text-white", pos: "right-[8%] top-[44%]" },
  { label: "Create", Icon: CircuitBoard, className: "bg-brand-navy text-white", pos: "left-1/2 bottom-[4%] -translate-x-1/2" },
] as const;

export function MakerLoop({ title, description }: MakerLoopProps) {
  return (
    <div className="maker-loop relative mx-auto mt-10 max-w-4xl overflow-hidden rounded-[32px] border border-white/80 bg-white/80 px-5 py-7 shadow-[0_22px_60px_rgba(40,50,90,.08)] backdrop-blur sm:px-8 sm:py-9">
      <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-brand-pink via-brand-teal to-brand-orange" />
      <div className="grid items-center gap-7 lg:grid-cols-[.8fr_1.2fr]">
        <div className="relative z-10">
          <span className="inline-flex rounded-full bg-brand-orange px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[.12em] text-white">Learning by doing</span>
          <h3 className="mt-4 text-2xl font-extrabold tracking-[-.04em] text-ink sm:text-3xl">{title}</h3>
          <p className="mt-3 max-w-lg text-sm leading-6 text-muted">{description}</p>
          <div className="mt-5 flex flex-wrap gap-2 lg:hidden">
            {nodes.map(({ label, className }) => <span key={label} className={`rounded-full px-3 py-2 text-xs font-extrabold ${className}`}>{label}</span>)}
          </div>
        </div>

        <div className="relative hidden min-h-[300px] lg:block" aria-label="Build, test, improve, code and create learning loop">
          <div className="maker-loop-ring absolute left-1/2 top-1/2 h-[230px] w-[390px] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border-2 border-dashed border-brand-purple/25" />
          <div className="absolute left-1/2 top-1/2 grid size-28 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-brand-navy text-center text-white shadow-[0_20px_45px_rgba(13,27,61,.22)]">
            <span className="text-xs font-extrabold uppercase tracking-[.12em]">Hands-On<br />STEM</span>
          </div>
          {nodes.map(({ label, Icon, className, pos }) => (
            <div key={label} className={`absolute ${pos} maker-loop-node`}>
              <div className={`grid size-14 place-items-center rounded-2xl shadow-[0_16px_35px_rgba(31,39,74,.18)] ${className}`}><Icon size={21} strokeWidth={1.9} /></div>
              <span className="mt-2 block text-center text-[11px] font-extrabold text-ink">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

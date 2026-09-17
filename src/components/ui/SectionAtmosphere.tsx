import { cn } from "@/lib/cn";

type AtmosphereVariant = "circuits" | "orbit" | "network" | "spark";

type SectionAtmosphereProps = {
  variant?: AtmosphereVariant;
  className?: string;
  dense?: boolean;
};

export function SectionAtmosphere({ variant = "circuits", className, dense = false }: SectionAtmosphereProps) {
  return (
    <div aria-hidden="true" className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      <div className="atmosphere-glow atmosphere-glow-purple -left-24 top-[8%]" />
      <div className="atmosphere-glow atmosphere-glow-teal -right-32 bottom-[6%]" />
      {dense ? <div className="atmosphere-glow atmosphere-glow-pink left-[48%] top-[16%]" /> : null}

      <div className={cn("brand-dot-field absolute opacity-55", dense ? "inset-0" : "right-0 top-0 h-[72%] w-[62%]")} />

      {variant === "circuits" ? (
        <svg className="atmosphere-drift absolute -right-16 top-[12%] h-[360px] w-[560px] opacity-[.21]" viewBox="0 0 560 360" fill="none">
          <path d="M30 74H178V132H300V58H438V122H530" stroke="var(--brand-purple)" strokeWidth="1.5" />
          <path d="M76 272H206V212H354V292H498" stroke="var(--brand-teal)" strokeWidth="1.5" />
          <path d="M208 212V158H372V122" stroke="var(--brand-pink)" strokeWidth="1.5" />
          <path d="M300 58V24" stroke="var(--brand-orange)" strokeWidth="1.5" />
          {[[30,74],[178,132],[300,58],[438,122],[530,122],[76,272],[206,212],[354,292],[498,292],[208,158],[372,122],[300,24]].map(([cx,cy]) => (
            <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="5.5" fill="white" stroke="var(--brand-purple)" strokeWidth="1.5" />
          ))}
        </svg>
      ) : null}

      {variant === "orbit" ? (
        <svg className="atmosphere-float-slow absolute -left-12 bottom-[4%] h-[320px] w-[420px] opacity-[.19]" viewBox="0 0 420 320" fill="none">
          <ellipse cx="206" cy="158" rx="138" ry="49" stroke="var(--brand-purple)" strokeWidth="1.5" transform="rotate(24 206 158)" />
          <ellipse cx="206" cy="158" rx="138" ry="49" stroke="var(--brand-teal)" strokeWidth="1.5" transform="rotate(-24 206 158)" />
          <ellipse cx="206" cy="158" rx="138" ry="49" stroke="var(--brand-pink)" strokeWidth="1.5" transform="rotate(88 206 158)" />
          <circle cx="206" cy="158" r="14" fill="var(--brand-orange)" fillOpacity=".7" />
          <circle cx="86" cy="88" r="8" fill="var(--brand-purple)" />
          <circle cx="325" cy="214" r="8" fill="var(--brand-teal)" />
          <circle cx="225" cy="294" r="7" fill="var(--brand-pink)" />
        </svg>
      ) : null}

      {variant === "network" ? (
        <svg className="atmosphere-drift absolute -right-14 bottom-[2%] h-[360px] w-[520px] opacity-[.20]" viewBox="0 0 520 360" fill="none">
          <path d="M58 242L144 122L246 184L340 78L456 158L396 286L246 184L160 282L58 242Z" stroke="var(--brand-purple)" strokeWidth="1.4" />
          <path d="M144 122L160 282M340 78L396 286M144 122L456 158" stroke="var(--brand-teal)" strokeWidth="1.3" />
          {[[58,242],[144,122],[246,184],[340,78],[456,158],[396,286],[160,282]].map(([cx,cy], index) => (
            <g key={`${cx}-${cy}`}>
              <circle cx={cx} cy={cy} r={index === 2 ? 13 : 8} fill="white" />
              <circle cx={cx} cy={cy} r={index === 2 ? 9 : 5} fill={index % 3 === 0 ? "var(--brand-pink)" : index % 2 === 0 ? "var(--brand-orange)" : "var(--brand-teal)"} />
            </g>
          ))}
        </svg>
      ) : null}

      {variant === "spark" ? (
        <div className="absolute inset-0">
          <span className="atmosphere-float absolute left-[7%] top-[20%] size-3 rotate-45 rounded-sm bg-brand-orange/25" />
          <span className="atmosphere-float-slow absolute right-[9%] top-[14%] size-5 rotate-45 rounded-md border border-brand-purple/25" />
          <span className="atmosphere-float absolute right-[17%] bottom-[17%] size-3 rounded-full bg-brand-teal/25" />
          <span className="atmosphere-pulse absolute left-[18%] bottom-[12%] size-2 rounded-full bg-brand-pink/35" />
        </div>
      ) : null}
    </div>
  );
}

"use client";

import { useState } from "react";
import { BarChart3, GraduationCap, School, UsersRound } from "@/components/ui/LucideIcons";
import type { ImpactLens as ImpactLensType, ImpactLensKey } from "@/content/impact";
import { cn } from "@/lib/cn";

const accentMap = {
  purple: { button: "bg-brand-purple text-white", soft: "bg-brand-purple-soft", text: "text-brand-purple", border: "border-brand-purple/20" },
  pink: { button: "bg-brand-pink text-white", soft: "bg-brand-pink-soft", text: "text-brand-pink", border: "border-brand-pink/20" },
  teal: { button: "bg-brand-teal text-white", soft: "bg-brand-teal-soft", text: "text-brand-teal", border: "border-brand-teal/20" },
  orange: { button: "bg-brand-orange text-white", soft: "bg-brand-orange-soft", text: "text-brand-orange", border: "border-brand-orange/20" },
};

const icons: Record<ImpactLensKey, typeof GraduationCap> = {
  students: GraduationCap,
  teachers: UsersRound,
  schools: School,
  partners: BarChart3,
};

export function ImpactLens({ items }: { items: ImpactLensType[] }) {
  const [activeKey, setActiveKey] = useState<ImpactLensKey>(items[0].key);
  const active = items.find((item) => item.key === activeKey) ?? items[0];
  const colors = accentMap[active.accent];
  const ActiveIcon = icons[active.key];

  return (
    <div className="grid gap-6 lg:grid-cols-[.72fr_1.28fr]">
      <div className="grid content-start gap-2">
        {items.map((item) => {
          const Icon = icons[item.key];
          const isActive = item.key === active.key;
          return (
            <button
              key={item.key}
              type="button"
              onClick={() => setActiveKey(item.key)}
              aria-pressed={isActive}
              className={cn(
                "group flex w-full items-center gap-4 rounded-[20px] border p-4 text-left transition duration-200",
                isActive ? `${accentMap[item.accent].button} border-transparent shadow-[0_14px_35px_rgba(13,27,61,.12)]` : "border-slate-200 bg-white/85 hover:-translate-y-0.5 hover:border-slate-300",
              )}
            >
              <span className={cn("grid size-10 shrink-0 place-items-center rounded-xl", isActive ? "bg-white/15" : accentMap[item.accent].soft)}>
                <Icon size={18} className={isActive ? "text-white" : accentMap[item.accent].text} />
              </span>
              <span>
                <strong className={cn("block text-sm font-extrabold", isActive ? "text-white" : "text-ink")}>{item.label}</strong>
                <small className={cn("mt-1 block text-sm", isActive ? "text-white/70" : "text-muted")}>{item.headline}</small>
              </span>
            </button>
          );
        })}
      </div>

      <div className={cn("relative overflow-hidden rounded-[30px] border bg-white p-6 shadow-[0_24px_70px_rgba(13,27,61,.08)] sm:p-8", colors.border)}>
        <span className={cn("absolute -right-20 -top-20 size-64 rounded-full opacity-70 blur-3xl", colors.soft)} />
        <div className="relative z-10">
          <div className="flex items-start justify-between gap-5">
            <div>
              <span className={cn("text-xs font-extrabold uppercase tracking-[.16em]", colors.text)}>Impact Lens • {active.label}</span>
              <h3 className="mt-3 max-w-xl text-2xl font-extrabold tracking-[-.04em] text-ink sm:text-3xl">{active.headline}</h3>
            </div>
            <span className={cn("hidden size-14 place-items-center rounded-2xl sm:grid", colors.soft)}><ActiveIcon className={colors.text} /></span>
          </div>
          <p className="mt-4 max-w-2xl text-base leading-8 text-muted">{active.description}</p>

          <div className="mt-7 grid gap-4 sm:grid-cols-2">
            <div className="rounded-[22px] border border-slate-200 bg-white/80 p-5">
              <span className="text-xs font-extrabold uppercase tracking-[.15em] text-slate-500">Signals we look for</span>
              <ul className="mt-4 grid gap-3">
                {active.signals.map((signal) => <li key={signal} className="flex gap-3 text-sm font-bold leading-6 text-slate-700"><span className={cn("mt-1.5 size-2 shrink-0 rounded-full", colors.button.split(" ")[0])} />{signal}</li>)}
              </ul>
            </div>
            <div className={cn("rounded-[22px] p-5", colors.soft)}>
              <span className={cn("text-xs font-extrabold uppercase tracking-[.15em]", colors.text)}>Evidence we can capture</span>
              <ul className="mt-4 grid gap-3">
                {active.evidence.map((evidence) => <li key={evidence} className="flex gap-3 text-sm font-bold leading-6 text-slate-700"><span className="mt-0.5 text-base">✓</span>{evidence}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

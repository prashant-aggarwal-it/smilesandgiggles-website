"use client";

import { useState } from "react";
import { Boxes, BrainCircuit, Check, ChevronRight, GraduationCap, HeartPulse, School, Wrench } from "@/components/ui/LucideIcons";
import type { PartnershipModule } from "@/content/csr";
import { cn } from "@/lib/cn";

const accentMap = {
  purple: { bg: "bg-brand-purple", soft: "bg-brand-purple-soft", text: "text-brand-purple", border: "border-brand-purple/20" },
  pink: { bg: "bg-brand-pink", soft: "bg-brand-pink-soft", text: "text-brand-pink", border: "border-brand-pink/20" },
  teal: { bg: "bg-brand-teal", soft: "bg-brand-teal-soft", text: "text-brand-teal", border: "border-brand-teal/20" },
  orange: { bg: "bg-brand-orange", soft: "bg-brand-orange-soft", text: "text-brand-orange", border: "border-brand-orange/20" },
};

const icons = [School, Boxes, Wrench, GraduationCap, BrainCircuit, HeartPulse];

export function PartnershipBuilder({ modules }: { modules: PartnershipModule[] }) {
  const [activeId, setActiveId] = useState(modules[0].id);
  const active = modules.find((module) => module.id === activeId) ?? modules[0];
  const colors = accentMap[active.accent];

  return (
    <div className="grid gap-6 lg:grid-cols-[320px_1fr] lg:items-stretch">
      <div role="tablist" aria-label="CSR partnership areas" className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0">
        {modules.map((module, index) => {
          const Icon = icons[index % icons.length];
          const isActive = module.id === active.id;
          const palette = accentMap[module.accent];
          return (
            <button
              key={module.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls={`csr-panel-${module.id}`}
              onClick={() => setActiveId(module.id)}
              className={cn(
                "group flex min-w-[220px] items-center gap-3 rounded-[18px] border px-4 py-3.5 text-left transition duration-150 lg:min-w-0",
                isActive
                  ? `${palette.bg} border-transparent text-white shadow-[0_12px_30px_rgba(13,27,61,.12)]`
                  : "border-slate-200 bg-white/90 text-brand-navy hover:border-slate-300 hover:bg-white hover:shadow-[0_10px_24px_rgba(13,27,61,.06)]"
              )}
            >
              <span className={cn("grid size-10 shrink-0 place-items-center rounded-xl", isActive ? "bg-white/16" : palette.soft)}>
                <Icon size={18} className={isActive ? "text-white" : palette.text} />
              </span>
              <span className="min-w-0 flex-1">
                <strong className={cn("block text-[14px] font-extrabold leading-5", isActive ? "text-white" : "text-brand-navy")}>{module.label}</strong>
                <span className={cn("mt-0.5 block text-[11px] font-bold uppercase tracking-[.08em]", isActive ? "text-white/72" : "text-slate-400")}>{isActive ? "Selected" : "View details"}</span>
              </span>
              <ChevronRight size={17} className={cn("shrink-0 transition-transform group-hover:translate-x-0.5", isActive ? "text-white" : "text-slate-400")} />
            </button>
          );
        })}
      </div>

      <article id={`csr-panel-${active.id}`} role="tabpanel" className={`relative overflow-hidden rounded-[30px] border bg-white p-6 shadow-[0_24px_70px_rgba(13,27,61,.08)] sm:p-8 ${colors.border}`}>
        <span className={`absolute -right-20 -top-20 size-64 rounded-full blur-3xl ${colors.soft}`} />
        <div className="relative z-10">
          <span className={`inline-flex rounded-full px-3 py-1.5 text-xs font-black uppercase tracking-[.13em] text-white ${colors.bg}`}>{active.label}</span>
          <h3 className="mt-4 max-w-3xl text-2xl font-black tracking-[-.04em] text-brand-navy sm:text-3xl">{active.title}</h3>
          <p className="mt-4 max-w-3xl text-[15px] leading-7 text-slate-600">{active.description}</p>
          <div className="mt-7 grid gap-5 sm:grid-cols-[1fr_.8fr]">
            <div className="rounded-[22px] border border-slate-200 bg-white/85 p-5">
              <span className="text-xs font-black uppercase tracking-[.14em] text-slate-500">What support can enable</span>
              <ul className="mt-4 grid gap-3">
                {active.includes.map((item) => (
                  <li key={item} className="flex gap-3 text-sm font-bold leading-6 text-slate-700">
                    <Check size={16} className={`mt-1 shrink-0 ${colors.text}`} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className={`rounded-[22px] p-5 ${colors.soft}`}>
              <span className={`text-xs font-black uppercase tracking-[.14em] ${colors.text}`}>A good fit for</span>
              <p className="mt-4 text-[15px] font-extrabold leading-7 text-brand-navy">{active.idealFor}</p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

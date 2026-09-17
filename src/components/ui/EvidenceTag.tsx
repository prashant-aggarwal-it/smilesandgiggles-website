import { Camera, CheckCircle2 } from "@/components/ui/LucideIcons";
import { cn } from "@/lib/cn";

export function EvidenceTag({ children, compact = false, className }: { children: string; compact?: boolean; className?: string }) {
  return (
    <span className={cn(
      "inline-flex items-center gap-1.5 rounded-full border border-white/80 bg-white/92 font-extrabold text-brand-navy shadow-[0_10px_26px_rgba(13,27,61,.12)] backdrop-blur-md",
      compact ? "px-2.5 py-1 text-[11px]" : "px-3 py-1.5 text-xs",
      className,
    )}>
      {compact ? <Camera size={13} aria-hidden="true" /> : <CheckCircle2 size={14} className="text-brand-teal" aria-hidden="true" />}
      {children}
    </span>
  );
}

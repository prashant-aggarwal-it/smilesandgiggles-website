import { cn } from "@/lib/cn";

type BrandAccentBarProps = {
  className?: string;
  compact?: boolean;
};

export function BrandAccentBar({ className, compact = false }: BrandAccentBarProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "flex items-center gap-1.5",
        compact ? "h-1.5" : "h-2",
        className,
      )}
    >
      <span className="h-full w-10 rounded-full bg-brand-pink" />
      <span className="h-full w-14 rounded-full bg-brand-teal" />
      <span className="h-full w-8 rounded-full bg-brand-orange" />
    </div>
  );
}

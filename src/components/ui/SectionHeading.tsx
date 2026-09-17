import { BrandAccentBar } from "@/components/ui/BrandAccentBar";
import { cn } from "@/lib/cn";

type Accent = "purple" | "pink" | "teal" | "orange";

type Props = {
  eyebrow: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
  accent?: Accent;
  className?: string;
};

const eyebrowColors: Record<Accent, string> = {
  purple: "text-brand-purple",
  pink: "text-brand-pink",
  teal: "text-brand-teal",
  orange: "text-brand-orange",
};

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  theme = "light",
  accent = "purple",
  className,
}: Props) {
  return (
    <header className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      <p className={cn("mb-4 text-xs font-extrabold uppercase tracking-[.16em]", theme === "dark" ? "text-brand-teal" : eyebrowColors[accent])}>{eyebrow}</p>
      <h2 className={cn("section-title", theme === "dark" && "section-title--dark")}>{title}</h2>
      <BrandAccentBar className={cn("mt-5", align === "center" && "justify-center")} compact />
      {intro ? (
        <p className={cn("mt-5 text-base leading-8 sm:text-[17px]", theme === "dark" ? "text-white/75" : "text-muted")}>{intro}</p>
      ) : null}
    </header>
  );
}

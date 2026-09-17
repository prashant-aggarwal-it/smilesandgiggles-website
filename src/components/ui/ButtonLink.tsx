import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "@/components/ui/LucideIcons";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "outline" | "white" | "outlineLight";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  showArrow?: boolean;
  onClick?: () => void;
};

const styles: Record<ButtonVariant, string> = {
  primary:
    "bg-gradient-to-r from-brand-purple to-brand-pink text-white shadow-[0_16px_40px_rgba(109,60,201,.25)] hover:-translate-y-0.5 hover:shadow-[0_20px_45px_rgba(232,61,140,.24)]",
  secondary: "border border-brand-teal/25 bg-brand-teal-soft text-brand-navy hover:-translate-y-0.5 hover:bg-brand-teal hover:text-white",
  outline: "border border-slate-300 bg-white text-ink hover:-translate-y-0.5 hover:border-brand-purple/40",
  white: "bg-white text-brand-purple shadow-[0_14px_36px_rgba(0,0,0,.15)] hover:-translate-y-0.5",
  outlineLight: "border border-white/35 bg-white/5 text-white hover:-translate-y-0.5 hover:bg-white/10",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
  showArrow = false,
  onClick,
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-extrabold transition duration-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-purple/20",
        styles[variant],
        className,
      )}
    >
      {children}
      {showArrow ? <ArrowRight aria-hidden="true" size={17} strokeWidth={2.2} /> : null}
    </Link>
  );
}

import Link from "next/link";
import { ArrowRight } from "@/components/ui/LucideIcons";

export function TextLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-1.5 text-sm font-extrabold text-brand-purple underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-purple/20"
    >
      {children}
      <ArrowRight className="transition-transform group-hover:translate-x-0.5" size={16} aria-hidden="true" />
    </Link>
  );
}

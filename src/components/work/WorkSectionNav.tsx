import Link from "next/link";
import { Container } from "@/components/ui/Container";

export function WorkSectionNav({ items }: { items: { label: string; href: string }[] }) {
  return (
    <div className="sticky top-[76px] z-30 border-y border-slate-200/75 bg-white/92 backdrop-blur-xl">
      <Container className="flex gap-2 overflow-x-auto py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {items.map((item, index) => {
          const dots = ["bg-brand-pink", "bg-brand-teal", "bg-brand-orange", "bg-brand-purple"];
          return (
            <Link key={item.href} href={item.href} className="inline-flex shrink-0 items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-extrabold text-slate-700 transition hover:-translate-y-0.5 hover:border-brand-purple/25 hover:shadow-md">
              <span className={`size-2 rounded-full ${dots[index % dots.length]}`} />
              {item.label}
            </Link>
          );
        })}
      </Container>
    </div>
  );
}

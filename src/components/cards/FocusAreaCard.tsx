import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@/components/ui/LucideIcons";
import type { FocusArea } from "@/types/content";
import { cn } from "@/lib/cn";

const accents = [
  { bar: "bg-brand-purple", glow: "bg-brand-purple" },
  { bar: "bg-brand-teal", glow: "bg-brand-teal" },
  { bar: "bg-brand-orange", glow: "bg-brand-orange" },
];

export function FocusAreaCard({ area, index = 0 }: { area: FocusArea; index?: number }) {
  const accent = accents[index % accents.length];
  const featured = area.featured || index === 0;

  return (
    <article
      data-reveal
      className={cn(
        "group relative overflow-hidden rounded-[28px] bg-slate-900 shadow-[0_18px_48px_rgba(13,27,61,.11)] transition duration-300 hover:-translate-y-1",
        featured
          ? "min-h-[500px] lg:row-span-2 lg:min-h-[570px]"
          : "min-h-[300px] sm:min-h-[330px] lg:min-h-0"
      )}
    >
      <Image
        src={area.image.src}
        alt={area.image.alt}
        fill
        sizes={featured ? "(max-width: 1024px) 100vw, 58vw" : "(max-width: 1024px) 100vw, 42vw"}
        className="object-cover transition duration-700 group-hover:scale-[1.035]"
      />
      <div className={cn(
        "absolute inset-0",
        featured
          ? "bg-gradient-to-t from-brand-navy/97 via-brand-navy/38 to-transparent"
          : "bg-gradient-to-t from-brand-navy/96 via-brand-navy/45 to-transparent"
      )} />
      <span className={`absolute left-0 top-0 z-10 h-2 w-full ${accent.bar}`} />
      <span className={`absolute -right-14 -top-14 z-10 size-32 rounded-full ${accent.glow} opacity-45 blur-2xl transition duration-500 group-hover:scale-125`} />

      <div className={cn("absolute inset-x-0 bottom-0 z-10 text-white", featured ? "p-7 sm:p-9" : "p-6 sm:p-7")}>
        <h3 className={cn("font-extrabold tracking-[-.035em]", featured ? "text-[31px] sm:text-[35px]" : "text-[24px] sm:text-[26px]")}>{area.title}</h3>
        <p className={cn("mt-3 max-w-2xl leading-7 text-white/85", featured ? "text-[16px]" : "text-[15px]")}>{area.description}</p>
        <Link href={area.href} className="mt-5 inline-flex items-center gap-2 text-[15px] font-extrabold text-white hover:underline">
          Explore <ArrowRight size={17} />
        </Link>
      </div>
    </article>
  );
}

import Image from "next/image";
import type { Program } from "@/types/content";
import { TextLink } from "@/components/ui/TextLink";

const topicStyles = [
  "border-brand-pink/20 bg-brand-pink-soft text-brand-pink",
  "border-brand-teal/20 bg-brand-teal-soft text-brand-teal",
  "border-brand-orange/20 bg-brand-orange-soft text-[#b85f00]",
  "border-brand-purple/20 bg-brand-purple-soft text-brand-purple",
];

export function ProgramCard({ program, index }: { program: Program; index: number }) {
  const gradeStyle = index % 2 === 0 ? "bg-brand-pink text-white" : "bg-brand-teal text-white";
  return (
    <article data-reveal className="group relative overflow-hidden rounded-[30px] border border-white/90 bg-white shadow-[0_16px_45px_rgba(29,36,70,.07)] transition duration-300 hover:-translate-y-1.5 hover:rotate-[.15deg] hover:shadow-[0_28px_70px_rgba(29,36,70,.13)]">
      <div className={`h-2 w-full bg-gradient-to-r ${index % 2 === 0 ? "from-brand-pink via-brand-orange to-brand-teal" : "from-brand-teal via-brand-purple to-brand-pink"}`} />
      <div className="relative h-[300px] overflow-hidden sm:h-[340px]">
        <Image src={program.image.src} alt={program.image.alt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition duration-700 group-hover:scale-[1.035]" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/25 to-transparent" />
        <span className={`absolute left-5 top-5 rounded-full px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[.1em] shadow-lg ${gradeStyle}`}>{program.grades}</span>
      </div>
      <div className="p-6 sm:p-8">
        <div className="flex items-center justify-between gap-3">
          <span className="text-[10px] font-extrabold uppercase tracking-[.16em] text-brand-orange">Hands-on learning pathway</span>
          <span className="text-sm font-extrabold text-slate-300">{String(index + 1).padStart(2, "0")}</span>
        </div>
        <h3 className="mt-4 text-2xl font-extrabold tracking-[-.035em] text-ink">{program.name}</h3>
        <p className="mt-3 text-sm leading-6 text-muted">{program.description}</p>
        <ul className="my-5 flex flex-wrap gap-2" aria-label={`${program.name} topics`}>
          {program.topics.map((topic, topicIndex) => (
            <li key={topic} className={`rounded-xl border px-2.5 py-1.5 text-[11px] font-bold ${topicStyles[topicIndex % topicStyles.length]}`}>{topic}</li>
          ))}
        </ul>
        <TextLink href={program.href}>Explore the Program</TextLink>
      </div>
    </article>
  );
}

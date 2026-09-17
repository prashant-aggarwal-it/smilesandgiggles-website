import Image from "next/image";
import type { FieldStory } from "@/types/content";
import { TextLink } from "@/components/ui/TextLink";

const accents = [
  { bar: "bg-brand-pink", label: "text-brand-pink", chip: "bg-brand-pink-soft" },
  { bar: "bg-brand-orange", label: "text-brand-orange", chip: "bg-brand-orange-soft" },
  { bar: "bg-brand-teal", label: "text-brand-teal", chip: "bg-brand-teal-soft" },
];

export function StoryCard({ story, index }: { story: FieldStory; index: number }) {
  const accent = accents[index % accents.length];
  return (
    <article data-reveal className="group relative overflow-hidden rounded-[26px] border border-white/90 bg-white shadow-[0_14px_36px_rgba(29,36,70,.06)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_60px_rgba(29,36,70,.11)]">
      <span className={`absolute inset-x-0 top-0 z-20 h-2 ${accent.bar}`} />
      <div className="relative h-60 overflow-hidden">
        <Image src={story.image.src} alt={story.image.alt} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition duration-700 group-hover:scale-[1.04]" />
      </div>
      <div className="p-6">
        <span className={`inline-flex rounded-full px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-[.12em] ${accent.chip} ${accent.label}`}>Story {String(index + 1).padStart(2, "0")}</span>
        <h3 className="mt-4 text-xl font-extrabold leading-snug tracking-[-.035em] text-ink">{story.title}</h3>
        <p className="mt-3 text-sm leading-6 text-muted">{story.description}</p>
        <div className="mt-5"><TextLink href={story.href}>Read the Story</TextLink></div>
      </div>
    </article>
  );
}

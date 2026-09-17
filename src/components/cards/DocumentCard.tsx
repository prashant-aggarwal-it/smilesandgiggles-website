import Link from "next/link";
import { FileText, LockKeyhole } from "@/components/ui/LucideIcons";

type DocumentCardProps = {
  category: string;
  title: string;
  description: string;
  href: string | null;
};

export function DocumentCard({ category, title, description, href }: DocumentCardProps) {
  return (
    <article data-reveal className="flex h-full flex-col rounded-[22px] border border-slate-200 bg-white p-6 shadow-[0_14px_38px_rgba(13,27,61,.055)]">
      <div className="flex items-start justify-between gap-4">
        <div className="grid size-12 place-items-center rounded-2xl bg-brand-purple-soft text-brand-purple">
          <FileText size={21} />
        </div>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-[9px] font-extrabold uppercase tracking-[.12em] text-slate-500">{category}</span>
      </div>
      <h3 className="mt-5 text-lg font-extrabold tracking-[-.035em] text-ink">{title}</h3>
      <p className="mt-3 flex-1 text-sm leading-6 text-muted">{description}</p>
      {href ? (
        <Link href={href} className="mt-5 inline-flex items-center gap-2 text-xs font-extrabold text-brand-purple hover:underline">
          View document →
        </Link>
      ) : (
        <div className="mt-5 inline-flex items-center gap-2 text-[11px] font-bold text-slate-400">
          <LockKeyhole size={14} /> Document available on request
        </div>
      )}
    </article>
  );
}

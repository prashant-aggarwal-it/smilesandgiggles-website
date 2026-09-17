import Image from "next/image";
import type { ImageAsset } from "@/types/content";

export function WorkGallery({ images }: { images: ImageAsset[] }) {
  const rails = ["bg-brand-pink", "bg-brand-teal", "bg-brand-orange", "bg-brand-purple"];
  return (
    <div className="grid auto-rows-[220px] grid-cols-1 gap-3 min-[480px]:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[260px]">
      {images.map((image, index) => (
        <figure data-reveal key={`${image.src}-${index}`} className={`group relative overflow-hidden rounded-[22px] bg-slate-100 ${index === 0 ? "min-[480px]:col-span-2 min-[480px]:row-span-2" : ""}`}>
          <Image src={image.src} alt={image.alt} fill sizes={index === 0 ? "(max-width:1024px) 100vw, 50vw" : "(max-width:479px) 100vw, (max-width:1024px) 50vw, 25vw"} className="object-cover transition duration-700 group-hover:scale-[1.035]" />
          <span className={`absolute inset-x-0 top-0 h-1.5 ${rails[index % rails.length]}`} />
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-brand-navy/75 via-brand-navy/20 to-transparent" />
          <figcaption className="absolute inset-x-0 bottom-0 p-4 text-[11px] font-bold leading-5 text-white/90 opacity-90 transition group-hover:opacity-100 sm:p-5">{image.alt}</figcaption>
        </figure>
      ))}
    </div>
  );
}

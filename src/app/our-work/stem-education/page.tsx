import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { createPageMetadata } from "@/lib/metadata";
import { StemEducationPage } from "@/components/work/StemEducationPage";
import { stemEducationContent } from "@/content/work";
import { getStemEducationContent } from "@/lib/content";

export const metadata = createPageMetadata(stemEducationContent.seo.title, stemEducationContent.seo.description, "/our-work/stem-education");

export default async function Page() {
  const content = await getStemEducationContent();
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Our Work", path: "/our-work" }, { name: "STEM, Robotics & Coding", path: "/our-work/stem-education" }]} />
      <StemEducationPage content={content} />
    </>
  );
}

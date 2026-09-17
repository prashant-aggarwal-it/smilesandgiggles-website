import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { createPageMetadata } from "@/lib/metadata";
import { PreventiveHealthPage } from "@/components/work/PreventiveHealthPage";
import { preventiveHealthContent } from "@/content/work";
import { getPreventiveHealthContent } from "@/lib/content";

export const metadata = createPageMetadata(preventiveHealthContent.seo.title, preventiveHealthContent.seo.description, "/our-work/preventive-health-awareness");

export default async function Page() {
  const content = await getPreventiveHealthContent();
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Our Work", path: "/our-work" }, { name: "Preventive Health & Awareness", path: "/our-work/preventive-health-awareness" }]} />
      <PreventiveHealthPage content={content} />
    </>
  );
}

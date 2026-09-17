import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { createPageMetadata } from "@/lib/metadata";
import { ImpactPage } from "@/components/impact/ImpactPage";
import { getImpactPageContent } from "@/lib/content";

export async function generateMetadata() {
  const content = await getImpactPageContent();
  return createPageMetadata(content.seo.title, content.seo.description, "/impact");
}

export default async function Page() {
  const content = await getImpactPageContent();
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Impact", path: "/impact" }]} />
      <ImpactPage content={content} />
    </>
  );
}

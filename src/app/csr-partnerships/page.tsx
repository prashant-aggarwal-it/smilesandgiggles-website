import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { createPageMetadata } from "@/lib/metadata";
import { CsrPage } from "@/components/csr/CsrPage";
import { getCsrPageContent } from "@/lib/content";

export async function generateMetadata() {
  const content = await getCsrPageContent();
  return createPageMetadata(content.seo.title, content.seo.description, "/csr-partnerships");
}

export default async function Page() {
  const content = await getCsrPageContent();
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "CSR Partnerships", path: "/csr-partnerships" }]} />
      <CsrPage content={content} />
    </>
  );
}

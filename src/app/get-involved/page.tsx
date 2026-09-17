import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { createPageMetadata } from "@/lib/metadata";
import { GetInvolvedPage } from "@/components/get-involved/GetInvolvedPage";
import { getGetInvolvedContent } from "@/lib/content";

export async function generateMetadata() {
  const content = await getGetInvolvedContent();
  return createPageMetadata(content.seo.title, content.seo.description, "/get-involved");
}

export default async function Page({ searchParams }: { searchParams: Promise<{ submitted?: string }> }) {
  const [content, params] = await Promise.all([getGetInvolvedContent(), searchParams]);
  const submitted = params.submitted === "1";
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Get Involved", path: "/get-involved" }]} />
      <GetInvolvedPage content={content} submitted={submitted} />
    </>
  );
}

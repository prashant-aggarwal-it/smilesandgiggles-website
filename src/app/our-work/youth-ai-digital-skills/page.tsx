import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { createPageMetadata } from "@/lib/metadata";
import { AiDigitalSkillsPage } from "@/components/work/AiDigitalSkillsPage";
import { aiDigitalSkillsContent } from "@/content/work";
import { getAiDigitalSkillsContent } from "@/lib/content";

export const metadata = createPageMetadata(aiDigitalSkillsContent.seo.title, aiDigitalSkillsContent.seo.description, "/our-work/youth-ai-digital-skills");

export default async function Page() {
  const content = await getAiDigitalSkillsContent();
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Our Work", path: "/our-work" }, { name: "AI Literacy & Digital Skills", path: "/our-work/youth-ai-digital-skills" }]} />
      <AiDigitalSkillsPage content={content} />
    </>
  );
}

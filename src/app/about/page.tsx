import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { createPageMetadata } from "@/lib/metadata";
import { AboutPage } from "@/components/about/AboutPage";
import { getAboutPageContent } from "@/lib/content";

export const metadata = createPageMetadata(
  "About Us | Hands-On Learning, Future Skills & Youth Capability",
  "Learn why Smiles & Giggles Foundation focuses on hands-on STEM, robotics, problem-solving, AI and digital skills to help children create and youth become more future-ready.",
  "/about",
);

export default async function Page() {
  const content = await getAboutPageContent();
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "About", path: "/about" }]} />
      <AboutPage content={content} />
    </>
  );
}

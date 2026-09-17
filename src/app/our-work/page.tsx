import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { createPageMetadata } from "@/lib/metadata";
import { WorkHubPage } from "@/components/work/WorkHubPage";
import { getWorkHubContent } from "@/lib/content";

export const metadata = createPageMetadata(
  "STEM, Robotics, AI & Digital Skills Programs",
  "Explore STEM, robotics and coding education, AI literacy and digital-skills programs, and preventive-health initiatives for students, youth and communities.",
  "/our-work",
);

export default async function OurWorkPage() {
  const content = await getWorkHubContent();
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Our Work", path: "/our-work" }]} />
      <WorkHubPage content={content} />
    </>
  );
}

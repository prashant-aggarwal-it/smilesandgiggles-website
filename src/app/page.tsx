import { createPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/content/site";
import { HomePage } from "@/components/home/HomePage";
import { getHomePageContent } from "@/lib/content";

export const metadata = createPageMetadata(
  "STEM, Robotics, AI & Digital Skills NGO in Delhi",
  siteConfig.description,
  "/",
);

export default async function Page() {
  const content = await getHomePageContent();
  return <HomePage content={content} />;
}

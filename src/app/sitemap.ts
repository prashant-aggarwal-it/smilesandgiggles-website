import type { MetadataRoute } from "next";
import { siteConfig } from "@/content/site";

const routes = [
  { path: "", changeFrequency: "weekly", priority: 1 },
  { path: "/our-work", changeFrequency: "monthly", priority: 0.9 },
  { path: "/our-work/stem-education", changeFrequency: "monthly", priority: 0.8 },
  { path: "/our-work/youth-ai-digital-skills", changeFrequency: "monthly", priority: 0.8 },
  { path: "/our-work/preventive-health-awareness", changeFrequency: "monthly", priority: 0.8 },
  { path: "/impact", changeFrequency: "monthly", priority: 0.9 },
  { path: "/csr-partnerships", changeFrequency: "monthly", priority: 0.9 },
  { path: "/get-involved", changeFrequency: "monthly", priority: 0.7 },
  { path: "/about", changeFrequency: "monthly", priority: 0.7 },
  { path: "/governance", changeFrequency: "monthly", priority: 0.7 },
  { path: "/donate", changeFrequency: "monthly", priority: 0.8 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.7 },
  { path: "/privacy", changeFrequency: "yearly", priority: 0.3 },
  { path: "/terms", changeFrequency: "yearly", priority: 0.3 },
  { path: "/donation-refund-policy", changeFrequency: "yearly", priority: 0.4 },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, changeFrequency, priority }) => ({
    url: `${siteConfig.url}${path}`,
    changeFrequency,
    priority,
  }));
}

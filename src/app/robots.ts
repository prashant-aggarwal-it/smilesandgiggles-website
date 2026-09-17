import type { MetadataRoute } from "next";
import { siteConfig } from "@/content/site";

export default function robots(): MetadataRoute.Robots {
  const isIndexableProduction = process.env.CONTEXT
    ? process.env.CONTEXT === "production"
    : process.env.NODE_ENV === "production";

  if (!isIndexableProduction) {
    return {
      rules: { userAgent: "*", disallow: "/" },
    };
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  };
}

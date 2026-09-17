import type { Metadata } from "next";
import { siteConfig } from "@/content/site";

const isIndexableProduction = process.env.CONTEXT
  ? process.env.CONTEXT === "production"
  : process.env.NODE_ENV === "production";

const socialImage = {
  url: siteConfig.brand.socialImage,
  width: 1200,
  height: 630,
  alt: `${siteConfig.name} — ${siteConfig.tagline}`,
};

export function createPageMetadata(title: string, description: string, path: string): Metadata {
  const fullTitle = `${title} | ${siteConfig.name}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    robots: isIndexableProduction
      ? {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        }
      : { index: false, follow: false, noarchive: true },
    openGraph: {
      title: fullTitle,
      description,
      url: path,
      siteName: siteConfig.name,
      locale: "en_IN",
      type: "website",
      images: [socialImage],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [socialImage.url],
    },
  };
}

import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { MotionBootstrap } from "@/components/ui/MotionBootstrap";
import { RouteScrollManager } from "@/components/ui/RouteScrollManager";
import { FloatingActions } from "@/components/ui/FloatingActions";
import { siteConfig } from "@/content/site";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#14275a",
  colorScheme: "light",
};

const isIndexableProduction = process.env.CONTEXT
  ? process.env.CONTEXT === "production"
  : process.env.NODE_ENV === "production";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
  title: {
    default: `${siteConfig.name} | STEM, Robotics, AI & Digital Skills NGO`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "nonprofit",
  alternates: { canonical: "/" },
  formatDetection: { email: false, address: false, telephone: false },
  ...(process.env.GOOGLE_SITE_VERIFICATION
    ? { verification: { google: process.env.GOOGLE_SITE_VERIFICATION } }
    : {}),
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
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
    title: `${siteConfig.name} | STEM, Robotics, AI & Digital Skills NGO`,
    description: siteConfig.description,
    siteName: siteConfig.name,
    url: siteConfig.url,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: siteConfig.brand.socialImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — ${siteConfig.tagline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | STEM, Robotics, AI & Digital Skills NGO`,
    description: siteConfig.description,
    images: [siteConfig.brand.socialImage],
  },
};

const socialProfiles = Object.values(siteConfig.social).filter((value): value is string => Boolean(value));

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "NGO",
  "@id": `${siteConfig.url}/#organization`,
  name: siteConfig.name,
  url: siteConfig.url,
  slogan: siteConfig.tagline,
  description: siteConfig.description,
  email: siteConfig.contact.email,
  telephone: "+91-9354251446",
  logo: {
    "@type": "ImageObject",
    url: `${siteConfig.url}${siteConfig.brand.logoSquare}`,
    width: 512,
    height: 512,
  },
  image: {
    "@type": "ImageObject",
    url: `${siteConfig.url}${siteConfig.brand.socialImage}`,
    width: 1200,
    height: 630,
  },
  areaServed: [
    { "@type": "City", name: "Delhi" },
    { "@type": "Country", name: "India" },
  ],
  knowsAbout: [
    "Hands-on STEM education",
    "Robotics education",
    "Coding education",
    "Electronics and physical computing",
    "Artificial intelligence literacy",
    "Digital literacy",
    "Digital skills for youth",
    "Teacher enablement and capacity building",
    "Government-school education",
    "CSR education programmes",
    "Preventive health awareness",
    "Oral health awareness",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "general enquiries",
    telephone: "+91-9354251446",
    email: siteConfig.contact.email,
    availableLanguage: ["English", "Hindi"],
    areaServed: "IN",
  },
  identifier: {
    "@type": "PropertyValue",
    name: "NGO DARPAN Unique ID",
    value: siteConfig.registrations.darpanId,
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "F184/D, Laxmi Nagar",
    addressLocality: "Delhi",
    addressRegion: "Delhi",
    postalCode: "110092",
    addressCountry: "IN",
  },
  ...(socialProfiles.length ? { sameAs: socialProfiles } : {}),
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteConfig.url}/#website`,
  url: siteConfig.url,
  name: siteConfig.name,
  description: siteConfig.description,
  publisher: { "@id": `${siteConfig.url}/#organization` },
  inLanguage: "en-IN",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en-IN">
      <body suppressHydrationWarning>
        <a href="#main-content" className="skip-link">Skip to content</a>
        <Header />
        {children}
        <Footer />
        <FloatingActions />
        <RouteScrollManager />
        <MotionBootstrap />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />
      </body>
    </html>
  );
}

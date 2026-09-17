import { siteConfig } from "@/content/site";

export type BreadcrumbItem = {
  name: string;
  path: string;
};

export function BreadcrumbJsonLd({ items }: { items: BreadcrumbItem[] }) {
  const itemListElement = [
    { name: "Home", path: "/" },
    ...items,
  ].map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: `${siteConfig.url}${item.path === "/" ? "" : item.path}`,
  }));

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
    />
  );
}

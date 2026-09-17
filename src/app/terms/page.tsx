import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { createPageMetadata } from "@/lib/metadata";
import { LegalPage } from "@/components/legal/LegalPage";
import { termsOfUse } from "@/content/legal";

export const metadata = createPageMetadata("Terms of Use", "Terms governing use of the Smiles & Giggles Foundation website, content, forms, volunteering, donations and third-party services.", "/terms");

export default function TermsPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Terms of Use", path: "/terms" }]} />
      <LegalPage document={termsOfUse} />
    </>
  );
}

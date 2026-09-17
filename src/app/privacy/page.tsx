import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { createPageMetadata } from "@/lib/metadata";
import { LegalPage } from "@/components/legal/LegalPage";
import { privacyPolicy } from "@/content/legal";

export const metadata = createPageMetadata("Privacy Policy", "Privacy Policy for the Smiles & Giggles Foundation website, forms, volunteering, school referrals and donation interactions.", "/privacy");

export default function PrivacyPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Privacy Policy", path: "/privacy" }]} />
      <LegalPage document={privacyPolicy} />
    </>
  );
}

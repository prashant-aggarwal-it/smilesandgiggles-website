import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { createPageMetadata } from "@/lib/metadata";
import { LegalPage } from "@/components/legal/LegalPage";
import { donationRefundPolicy } from "@/content/legal";

export const metadata = createPageMetadata("Donation & Refund Policy", "Donation, payment, refund and 80G receipt guidance for contributions to Smiles & Giggles Foundation.", "/donation-refund-policy");

export default function DonationRefundPolicyPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Donation & Refund Policy", path: "/donation-refund-policy" }]} />
      <LegalPage document={donationRefundPolicy} />
    </>
  );
}

import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { createPageMetadata } from "@/lib/metadata";
import { GovernancePage } from "@/components/governance/GovernancePage";
import { getGovernancePageContent } from "@/lib/content";

export const metadata = createPageMetadata(
  "NGO Governance, 80G, 12A & CSR-1",
  "Review Smiles & Giggles Foundation governance and compliance information, including NGO DARPAN, 12A, 80G and CSR-1 registration details for responsible partnerships.",
  "/governance",
);

export default async function Page() {
  const content = await getGovernancePageContent();
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Governance & Transparency", path: "/governance" }]} />
      <GovernancePage content={content} />
    </>
  );
}

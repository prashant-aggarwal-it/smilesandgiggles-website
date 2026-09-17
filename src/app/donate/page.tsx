import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { createPageMetadata } from "@/lib/metadata";
import { DonationPage } from "@/components/donate/DonationPage";

export const metadata = createPageMetadata(
  "Donate STEM Kits & Sponsor AI Literacy",
  "Sponsor hands-on Paper Circuit learning, reusable Robotics, Arduino and Mechanics kits for schools, support an AI literacy workshop for youth, or contribute any amount to Smiles & Giggles Foundation.",
  "/donate",
);

export default function DonateRoute() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Donate", path: "/donate" }]} />
      <DonationPage />
    </>
  );
}

import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { createPageMetadata } from "@/lib/metadata";
import { ContactPage } from "@/components/contact/ContactPage";

export const metadata = createPageMetadata(
  "Contact Our NGO in Delhi",
  "Contact Smiles & Giggles Foundation in Laxmi Nagar, Delhi for CSR partnerships, school programs, STEM and robotics initiatives, digital-skills programs, volunteering or donations.",
  "/contact",
);

export default async function ContactRoute({ searchParams }: { searchParams: Promise<{ submitted?: string }> }) {
  const params = await searchParams;
  const submitted = params.submitted === "1";
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Contact", path: "/contact" }]} />
      <ContactPage submitted={submitted} />
    </>
  );
}

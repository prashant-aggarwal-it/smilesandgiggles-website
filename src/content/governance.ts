import { siteConfig } from "@/content/site";

export const governancePageContent = {
  hero: {
    eyebrow: "GOVERNANCE & TRANSPARENCY",
    titleLine1: "Trust Built on Clear Governance.",
    titleLine2: "Accountability You Can Verify.",
    intro:
      "Smiles & Giggles Foundation maintains the registrations, policies and documentation needed for responsible charitable and institutional work. This page brings the key information together in one place.",
  },
  registrations: {
    eyebrow: "REGISTRATIONS",
    title: "Registrations You Can Verify",
    intro: "Key registrations that support our charitable, donor and institutional engagement.",
    items: [
      {
        title: "NGO DARPAN",
        status: "Registered",
        detail: `Unique ID: ${siteConfig.registrations.darpanId}`,
        description: "Government NGO registry identification used for institutional and public-sector engagement.",
        accent: "teal" as const,
        href: null as string | null,
      },
      {
        title: "12A Registration",
        status: "Registered",
        detail: "Charitable tax registration",
        description: "Income-tax registration supporting the Foundation’s nonprofit tax-exemption framework.",
        accent: "purple" as const,
        href: null as string | null,
      },
      {
        title: "80G Registration",
        status: "Registered",
        detail: "Eligible donation documentation",
        description: "Registration relevant to eligible donor tax benefits, subject to applicable law and valid documentation.",
        accent: "pink" as const,
        href: null as string | null,
      },
      {
        title: "CSR-1 Registration",
        status: "Registered",
        detail: "Institutional / CSR engagement",
        description: "Registration used for eligible CSR implementation partnerships under the applicable framework.",
        accent: "orange" as const,
        href: null as string | null,
      },
    ],
  },
  accountability: {
    eyebrow: "ACCOUNTABILITY IN PRACTICE",
    title: "What Responsible Governance Looks Like in the Work",
    intro: "Transparency is useful when it is visible in how programs are planned, delivered, documented and reviewed.",
    items: [
      { title: "Clear Documentation", description: "Maintain relevant registrations, records and supporting documents.", accent: "purple" as const },
      { title: "Responsible Use of Support", description: "Plan resources around defined charitable activities and implementation needs.", accent: "teal" as const },
      { title: "Evidence From the Field", description: "Where applicable, support delivery with attendance, activity records, photographs and project evidence.", accent: "pink" as const },
      { title: "Review & Reporting", description: "Institutional engagements can include agreed documentation, summaries and program reporting.", accent: "orange" as const },
    ],
  },
  documents: {
    eyebrow: "REGISTRATIONS & PUBLIC DOCUMENTS",
    title: "Key Governance Documents in One Place",
    intro: "Registration certificates and reviewed governance documents can be linked here as approved public copies become available.",
    items: [
      { category: "Registration", title: "NGO DARPAN Details", description: `Foundation DARPAN reference: ${siteConfig.registrations.darpanId}.`, href: null },
      { category: "Certificate", title: "12A Certificate", description: "Reviewed public PDF can be linked here when ready.", href: null },
      { category: "Certificate", title: "80G Certificate", description: "Reviewed public PDF can be linked here when ready.", href: null },
      { category: "Certificate", title: "CSR-1 Certificate", description: "Reviewed public PDF can be linked here when ready.", href: null },
    ],
  },
  partners: {
    eyebrow: "FOR INSTITUTIONAL & CSR PARTNERS",
    title: "What Partners Can Expect",
    items: [
      { title: "Defined Scope", description: "Clear objectives, responsibilities and implementation expectations." },
      { title: "Documented Delivery", description: "Activity evidence and reporting appropriate to the agreed engagement." },
      { title: "Open Communication", description: "Clear coordination around delivery, changes, issues and next steps." },
    ],
  },
  privacyNote: {
    title: "Transparency does not require publishing every identifier.",
    body:
      "PAN copies, banking information, personal identity documents, signatures and other sensitive records should generally be shared directly with verified partners when legitimately required rather than placed on a public website.",
  },
};

export type GovernancePageContent = typeof governancePageContent;

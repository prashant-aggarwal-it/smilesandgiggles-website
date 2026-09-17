import type { LinkItem } from "@/types/content";

export const ourWorkNavigation: LinkItem[] = [
  { label: "STEM Education", href: "/our-work/stem-education" },
  { label: "Youth AI & Digital Skills", href: "/our-work/youth-ai-digital-skills" },
  { label: "Preventive Health & Awareness", href: "/our-work/preventive-health-awareness" },
];

export const aboutNavigation: LinkItem[] = [
  { label: "Who We Are", href: "/about" },
  { label: "Governance & Transparency", href: "/governance" },
  { label: "Reports & Documents", href: "/governance#documents" },
];

export const getInvolvedNavigation: LinkItem[] = [
  { label: "Volunteer With Us", href: "/get-involved#ways-to-help" },
  { label: "Share Your Skills", href: "/get-involved#skill-mentor" },
  { label: "Refer a School / Community", href: "/get-involved#refer-school" },
  { label: "Donate", href: "/donate" },
  { label: "CSR Partnerships", href: "/csr-partnerships" },
];

export const mainNavigation: LinkItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Our Work", href: "/our-work" },
  { label: "Our Impact", href: "/impact" },
  { label: "CSR Partnerships", href: "/csr-partnerships" },
  { label: "Get Involved", href: "/get-involved" },
  { label: "Contact", href: "/contact" },
];

export const footerNavigation = {
  work: ourWorkNavigation,
  explore: [
    { label: "Our Impact", href: "/impact" },
    { label: "Our Work", href: "/our-work" },
    { label: "Get Involved", href: "/get-involved" },
    { label: "CSR Partnerships", href: "/csr-partnerships" },
  ],
  about: [
    { label: "Who We Are", href: "/about" },
    { label: "Our Vision", href: "/about#vision" },
    { label: "Our Team", href: "/about#team" },
    { label: "Governance & Transparency", href: "/governance" },
    { label: "Reports & Documents", href: "/governance#documents" },
  ],
  involved: [
    { label: "Get Involved", href: "/get-involved" },
    { label: "Volunteer", href: "/get-involved#ways-to-help" },
    { label: "Refer a School", href: "/get-involved#refer-school" },
    { label: "Donate", href: "/donate" },
    { label: "CSR Partnerships", href: "/csr-partnerships" },
  ],
};

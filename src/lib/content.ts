import { aboutPageContent } from "@/content/about";
import { governancePageContent } from "@/content/governance";
import { homePageContent } from "@/content/home";
import { impactPageContent } from "@/content/impact";
import { csrPageContent } from "@/content/csr";
import { getInvolvedContent } from "@/content/get-involved";
import { aiDigitalSkillsContent, preventiveHealthContent, stemEducationContent, workHubContent } from "@/content/work";

/**
 * Content access layer.
 * Today these functions return local typed content.
 * When Sanity is added later, page components can keep the same data contracts
 * while these functions are replaced by CMS queries.
 */
export async function getHomePageContent() {
  return homePageContent;
}

export async function getAboutPageContent() {
  return aboutPageContent;
}

export async function getGovernancePageContent() {
  return governancePageContent;
}

export async function getWorkHubContent() {
  return workHubContent;
}

export async function getStemEducationContent() {
  return stemEducationContent;
}

export async function getAiDigitalSkillsContent() {
  return aiDigitalSkillsContent;
}

export async function getPreventiveHealthContent() {
  return preventiveHealthContent;
}

export async function getImpactPageContent() {
  return impactPageContent;
}

export async function getCsrPageContent() {
  return csrPageContent;
}

export async function getGetInvolvedContent() {
  return getInvolvedContent;
}

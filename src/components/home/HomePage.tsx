import type { HomePageContent } from "@/content/home";
import { ClassroomGallerySection } from "@/components/home/ClassroomGallerySection";
import { FinalPartnershipCta } from "@/components/home/FinalPartnershipCta";
import { FocusAreasSection } from "@/components/home/FocusAreasSection";
import { GovernanceStrip } from "@/components/home/GovernanceStrip";
import { HeroSection } from "@/components/home/HeroSection";
import { ImpactStatsSection } from "@/components/home/ImpactStatsSection";
import { WhyPartnerSection } from "@/components/home/WhyPartnerSection";
import { VisionTeaserSection } from "@/components/home/VisionTeaserSection";

export function HomePage({ content }: { content: HomePageContent }) {
  return (
    <main id="main-content">
      <HeroSection content={content.hero} />
      <ImpactStatsSection content={content.impactAtGlance} />
      <FocusAreasSection content={content.focus} />
      <VisionTeaserSection content={content.visionTeaser} />
      <ClassroomGallerySection content={content.gallery} />
      <WhyPartnerSection content={content.partner} />
      <GovernanceStrip content={content.governance} />
      <FinalPartnershipCta content={content.finalCta} />
    </main>
  );
}

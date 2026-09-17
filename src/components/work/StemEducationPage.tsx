import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { WorkPageHero } from "@/components/work/WorkPageHero";
import { WorkPartnerCta } from "@/components/work/WorkPartnerCta";
import { ProgramPathwayCard } from "@/components/work/ProgramPathwayCard";
import { ProgrammeSection, Steps, PartnerOptions } from "@/components/work/ProgrammeSections";
import type { StemEducationContent } from "@/content/work";

export function StemEducationPage({ content: c }: { content: StemEducationContent }) {
  return <main id="main-content">
    <WorkPageHero {...c.hero} />
    <section className="border-y border-brand-purple/15 bg-brand-purple-soft py-6"><Container className="flex flex-wrap items-center justify-between gap-4"><p className="text-sm font-semibold text-brand-navy">Government-school experience • MCD schools & Vidyanjali engagement</p><Link className="text-sm font-bold text-brand-purple underline underline-offset-4" href="/impact">See documented reach and impact →</Link></Container></section>
    <ProgrammeSection eyebrow="Why Hands-On STEM" title="Understanding Grows When Children Build, Code and Test." intro="A circuit makes electricity visible. Robotics, coding and moving models turn abstract ideas into things a child can test. Structured practical learning creates space for questions, teamwork and confident explanations.">
      <p className="max-w-3xl text-base leading-8 text-slate-600">Grade-appropriate activities, reusable kits, trained facilitation and teacher orientation connect classroom concepts to purposeful STEM, robotics and coding projects. For older learners focused on responsible technology use and employability, explore our <Link href="/our-work/youth-ai-digital-skills" className="font-bold text-brand-purple underline underline-offset-4">AI literacy and digital-skills programmes</Link>.</p>
    </ProgrammeSection>
    <ProgrammeSection id="pathways" eyebrow="Our Programme Portfolio" title="A Pathway for Every Stage of Curiosity." intro="Two progressive age-based pathways, with a focused initiative to widen girls’ participation." tint><div className="space-y-6">{c.pathways.map(p => <ProgramPathwayCard key={p.title} pathway={p} />)}</div></ProgrammeSection>
    <ProgrammeSection eyebrow="One Learning Journey" title="Explore. Build. Test. Improve. Explain."><Steps items={c.journey.steps.map(s => [s.title, s.description])} /></ProgrammeSection>
    <ProgrammeSection id="showcase" eyebrow="Young Innovators Showcase" title="Where Projects Become Confidence." intro="Students explain what they built, demonstrate how it works and share what they learned. Exhibition-based learning has formed part of our MCD school work; future showcases can be shaped around each programme." tint>
      <Steps items={[["Build", "Develop working projects through guided activities and team challenges."], ["Demonstrate", "Test and present circuits, moving models, robotics or automation projects."], ["Explain", "Communicate the problem, process and learning to peers, teachers and visitors."]]} />
      <div className="mt-7 rounded-2xl bg-brand-navy p-6 text-white"><h3 className="text-xl font-bold">Small Ideas. Visible Possibilities.</h3><p className="mt-3 text-sm leading-7 text-white/80">Showcase themes can include clean energy, smart schools, circuits, moving models and community problem-solving. Partners can join as mentors and project reviewers.</p></div>
    </ProgrammeSection>
    <ProgrammeSection id="ground" eyebrow="Experience on the Ground" title="Designed for Real School Environments." intro="Our MCD primary-school work connects mechanics, paper circuits and beginner coding with project demonstrations. Vidyanjali engagement has included electronics, Arduino and sensors."><p className="max-w-3xl text-sm leading-7 text-slate-600">Activities are adapted to student age, infrastructure and group size. Detailed evidence and institutional stories sit together on <Link href="/impact" className="font-bold text-brand-purple underline">Our Impact</Link>.</p></ProgrammeSection>
    <ProgrammeSection id="partner" eyebrow="For Technology Companies & CSR Teams" title="What Your Partnership Can Enable." tint><PartnerOptions enable={["Nanhe Engineers or Yuva Innovators school programmes", "STEM Shakti girls’ cohorts and women mentors", "Reusable STEM, electronics and robotics kits", "Teacher orientation and classroom continuity", "Student exhibitions and innovation challenges", "Multi-school and community STEM initiatives"]} reporting={["Defined scope and structured session plan", "Participation and attendance records", "Photographic and project evidence, with appropriate consent", "Student learning and showcase outputs", "Programme summary and agreed utilisation reporting"]} /></ProgrammeSection>
    <WorkPartnerCta cta={c.cta} />
  </main>;
}

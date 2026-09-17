import type { ImageAsset } from "@/types/content";
import type { WorkAccent } from "@/content/work";

export type ImpactStat = {
  value: string;
  label: string;
  note: string;
  accent: WorkAccent;
};

export type ImpactEvidenceStory = {
  label: string;
  title: string;
  description: string;
  image: ImageAsset;
  accent: WorkAccent;
  evidence: string[];
};

export type ImpactSignal = {
  title: string;
  description: string;
  accent: WorkAccent;
  icon: "participation" | "build" | "confidence" | "continuity";
};

export type ImpactGalleryItem = ImageAsset & {
  label: string;
  note: string;
};

export const impactPageContent = {
  seo: {
    title: "Impact & Field Evidence",
    description:
      "See verified reach and field evidence from Smiles & Giggles Foundation's government-school STEM, robotics, teacher enablement and preventive oral-health work in Delhi.",
  },
  hero: {
    eyebrow: "Our Impact",
    title: "Impact You Can See. Evidence You Can Follow.",
    intro:
      "From hands-on STEM and robotics in Delhi government schools to preventive oral-health camps, we focus on practical participation, visible outputs and evidence that schools, communities and partners can understand.",
    proofLine: "Delhi • Government Schools • Hands-On Learning • Preventive Health",
    images: [
      { src: "/images/placeholders/science-fair-presentation.webp", alt: "Student explaining a hands-on STEM project" },
      { src: "/images/placeholders/stem-community-younger.webp", alt: "Government-school children participating in a hands-on STEM activity" },
      { src: "/images/placeholders/oral-health-school.webp", alt: "Children participating in preventive oral-health awareness" },
    ] as ImageAsset[],
  },
  stats: [
    { value: "5,000+", label: "Government-school students reached", note: "Hands-on STEM and robotics exposure", accent: "purple" },
    { value: "10+", label: "MCD primary schools engaged", note: "Activity-based classroom programs", accent: "teal" },
    { value: "300+", label: "Teachers supported", note: "Practical STEM exposure and activity methods", accent: "pink" },
    { value: "MCD + Vidyanjali", label: "Public-education experience", note: "Government-school and national-initiative settings", accent: "orange" },
  ] as ImpactStat[],
  field: {
    eyebrow: "Evidence From the Field",
    title: "Impact You Can See. Evidence You Can Trust.",
    intro:
      "We combine verified reach figures with classroom participation, student projects, demonstrations, photographs and responsible programme documentation.",
    note:
      "We report verified numbers where reliable records are available. Where they are not, we describe the work clearly without overstating the results.",
    stories: [
      {
        label: "MCD Primary Schools • Delhi",
        title: "Hands-On STEM & Robotics in Municipal Schools",
        description:
          "Primary students have engaged with mechanics, electricity, paper circuits, basic electronics and robotics through project-based activities that move learning from explanation to making.",
        image: { src: "/images/placeholders/stem-younger-maroon.webp", alt: "Students participating in a hands-on MCD school STEM activity" },
        accent: "purple",
        evidence: [
          "Working models, circuits and activity outputs",
          "Student participation, teamwork and guided problem-solving",
          "School showcases and student demonstrations",
        ],
      },
      {
        label: "Government-School Robotics",
        title: "Electronics, Arduino & Real-World Applications",
        description:
          "Through government-school and Vidyanjali-linked engagement, learners received practical exposure to electronics, robotics, Arduino, sensors, design and real-world applications.",
        image: { src: "/images/placeholders/clean-energy-project.webp", alt: "Government-school students learning electronics and robotics" },
        accent: "teal",
        evidence: [
          "Hands-on electronics and robotics sessions",
          "Arduino, sensors and applied circuit exposure",
          "Projects that connect technology with everyday problems",
        ],
      },
      {
        label: "Preventive Health",
        title: "Oral-Health Camps, Awareness & Follow-Up",
        description:
          "Preventive oral-health work combines child-friendly awareness with screening-led support by qualified professionals where applicable, clear communication and referral guidance when concerns are identified.",
        image: { src: "/images/placeholders/oral-health-school.webp", alt: "Preventive oral-health awareness and school health engagement" },
        accent: "orange",
        evidence: [
          "Correct brushing, hygiene and preventive guidance",
          "Screening support where applicable and professionally appropriate",
          "Parent communication, referral guidance and follow-up pathways",
        ],
      },
    ] as ImpactEvidenceStory[],
  },
  signals: {
    eyebrow: "Beyond the Numbers",
    title: "What Changes When Students Get the Opportunity",
    intro:
      "We look for practical signs of progress—greater participation, curiosity, problem-solving, confidence and continued learning. These are indicators we observe and document, not guaranteed outcomes from every session.",
    items: [
      {
        title: "Participation",
        description: "Are students asking questions, handling materials, collaborating and taking an active role rather than only watching?",
        accent: "purple",
        icon: "participation",
      },
      {
        title: "Applied Learning",
        description: "Can learners turn a concept into a working model, circuit, program, project or demonstration?",
        accent: "teal",
        icon: "build",
      },
      {
        title: "Confidence",
        description: "Can a learner explain what they made, describe how it works and respond to questions in their own words?",
        accent: "pink",
        icon: "confidence",
      },
      {
        title: "Continuity",
        description: "Are teachers, reusable resources or school processes helping practical learning continue beyond a single activity?",
        accent: "orange",
        icon: "continuity",
      },
    ] as ImpactSignal[],
  },
  gallery: {
    eyebrow: "Impact in Pictures",
    title: "See Our Work in Action",
    intro:
      "Projects, classroom activities, student explanations and health-awareness interactions make the delivery visible in ways that numbers alone cannot.",
    items: [
      { src: "/images/placeholders/stem-community-younger.webp", alt: "Younger students participating in hands-on STEM", label: "Government-School STEM", note: "Learning through making" },
      { src: "/images/placeholders/robotics-secondary.webp", alt: "Students learning robotics and electronics", label: "Robotics & Electronics", note: "From components to working systems" },
      { src: "/images/placeholders/science-fair-presentation.webp", alt: "Student presenting a project", label: "Student Demonstration", note: "Explaining builds confidence" },
      { src: "/images/placeholders/science-fair-clean-energy.webp", alt: "Students working on a clean-energy project", label: "Project Showcase", note: "Applied learning made visible" },
      { src: "/images/placeholders/stem-casual-workshop.webp", alt: "Students collaborating during a STEM workshop", label: "Collaborative Learning", note: "Build, test and improve together" },
      { src: "/images/placeholders/oral-health-school.webp", alt: "Children participating in oral-health awareness", label: "Preventive Oral Health", note: "Awareness before problems become barriers" },
      { src: "/images/generated/impact-student-project-demonstration.webp", alt: "Students explaining and reviewing a hands-on project during a learning session", label: "Student Project Demonstration", note: "Explaining a working project with confidence" },
      { src: "/images/generated/impact-teacher-enablement.webp", alt: "Educators taking part in practical STEM and digital-skills training", label: "Teacher Enablement", note: "Practical methods teachers can carry forward" },
    ] as ImpactGalleryItem[],
  },
  measurement: {
    eyebrow: "Evidence & Accountability",
    title: "How We Keep Impact Credible",
    intro:
      "The objective is not to create paperwork for its own sake. It is to leave a clear trail of what was planned, what was delivered, what participants created or experienced, and what should happen next.",
    steps: [
      { title: "Record", description: "Track sessions, participation, schools, activities and delivery against the agreed plan." },
      { title: "Capture", description: "Document classroom activity, project work, photographs and relevant field evidence." },
      { title: "Demonstrate", description: "Use working projects, student explanations, showcases and appropriate health-program records as visible evidence." },
      { title: "Learn & Report", description: "Summarize reach, delivery, observations, feedback and recommendations for the next phase." },
    ],
    partnerEvidence: [
      "Attendance and session records",
      "Activity and project documentation",
      "Photographs and showcase evidence",
      "Teacher / school feedback where collected",
      "Structured summary and recommendations",
    ],
  },
  cta: {
    eyebrow: "Scale Practical Impact",
    title: "Help More Classrooms and Communities Access Work That Can Be Seen, Used and Built Upon.",
    description:
      "Partner with us to expand government-school STEM, robotics, future-ready skills and preventive-health initiatives with practical delivery and transparent evidence.",
    primary: { label: "Explore CSR Partnerships", href: "/csr-partnerships" },
    secondary: { label: "Start a Conversation", href: "/contact" },
  },
};

export type ImpactPageContent = typeof impactPageContent;

// Contract retained for the reusable ImpactLens component.
export type ImpactLensKey = "students" | "teachers" | "schools" | "partners";
export type ImpactLens = {
  key: ImpactLensKey;
  label: string;
  headline: string;
  description: string;
  accent: WorkAccent;
  signals: string[];
  evidence: string[];
};

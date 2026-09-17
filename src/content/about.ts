import { siteConfig } from "@/content/site";

export const aboutPageContent = {
  hero: {
    eyebrow: "ABOUT SMILES & GIGGLES FOUNDATION",
    title: "We Believe Learning Should Help Young People Build, Solve and Create.",
    intro:
      "Smiles & Giggles Foundation helps children and youth build practical capabilities through hands-on STEM, robotics, AI and digital learning. We move learning beyond memorisation—towards experimenting, problem-solving, creating and applying ideas in the real world.",
    image: {
      src: "/images/placeholders/stem-community-younger.webp",
      alt: "Children and an educator taking part in a hands-on classroom activity",
    },
    secondaryImage: {
      src: "/images/placeholders/science-fair-presentation.webp",
      alt: "Student presenting a project during a school showcase",
    },
  },
  why: {
    eyebrow: "WHY WE EXIST",
    title: "Learning should build capability, not just memory.",
    paragraphs: [
      "Children are naturally curious, but learning can too easily become about remembering the right answer. We want learners to understand by doing—building, testing, questioning, making mistakes and improving their ideas.",
      "For youth, we focus on practical AI, digital and technology skills that can strengthen confidence and readiness for employment, self-employment, freelancing and entrepreneurship.",
    ],
    highlight:
      "The goal is not simply to teach technology. It is to help young people learn how to think, solve and create.",
  },
  vision: {
    eyebrow: "OUR VISION",
    title: "Young people who can solve problems, create value and shape opportunities.",
    body:
      "We envision children growing into curious problem-solvers and youth becoming capable, future-ready individuals who contribute meaningfully to their communities and the nation.",
  },
  mission: {
    eyebrow: "OUR MISSION",
    title: "Turn learning into capability.",
    body:
      "We create practical experiences in STEM, robotics, electronics, coding, AI and digital skills—helping learners move from knowing to doing, and from skills to real-world opportunity.",
  },
  differentiators: {
    eyebrow: "HOW WE ARE DIFFERENT",
    title: "Learning that goes beyond the textbook.",
    items: [
      {
        title: "Learn by Doing",
        description: "Build, test and experiment instead of only listening or memorising.",
      },
      {
        title: "Solve Before You Memorise",
        description: "Ask why, identify problems and explore different ways to solve them.",
      },
      {
        title: "Technology With Purpose",
        description: "Use robotics, electronics, AI and digital tools to create—not just consume.",
      },
      {
        title: "Skills for What Comes Next",
        description: "Build practical capabilities that can support education, work, freelancing and entrepreneurship.",
      },
    ],
  },
  audiences: {
    eyebrow: "TWO STAGES. ONE PURPOSE.",
    title: "Build problem-solvers early. Upskill for opportunity.",
    items: [
      {
        label: "CHILDREN & SCHOOL STUDENTS",
        title: "Build problem-solving early.",
        description:
          "Hands-on STEM, mechanics, circuits, robotics and coding help students explore concepts, solve problems and build confidence through making.",
        image: "/images/placeholders/stem-casual-workshop.webp",
      },
      {
        label: "YOUTH & YOUNG ADULTS",
        title: "Upskill for opportunity.",
        description:
          "Practical AI, digital and technology learning helps youth build confidence, work-readiness and pathways towards employment, self-employment and entrepreneurship.",
        image: "/images/placeholders/digital-skills-youth.webp",
      },
    ],
    steps: ["Explore", "Build", "Test", "Improve", "Create", "Explain"],
    closing:
      "We want young people to become creators of value—not passive consumers of knowledge or technology.",
    nationLine:
      "When more young people can think independently, adapt and contribute productively, stronger communities and a stronger nation follow.",
  },
  team: {
    eyebrow: "OUR TEAM",
    title: "People who help turn ideas into learning.",
    intro:
      "Our work is shaped by people who bring together curriculum, creativity, programme delivery and communication.",
    groups: [
      {
        title: "Academic, Technical & Creative Guidance",
        members: [
          {
            name: "Dr. Ankit Singhal",
            role: "STEM & Technical Advisor",
            credential: "PhD · IIT Delhi",
            description:
              "Advises on technical learning pathways, curriculum structure and practical project-based STEM experiences.",
            image: "/images/team/dr-ankit-singhal.webp",
            accent: "orange" as const,
          },
          {
            name: "Sweety Gupta",
            role: "Creative Arts & Cultural Engagement Advisor",
            credential: null,
            description:
              "Kathak practitioner, educator and stage artist who brings expression, discipline, confidence and cultural learning into student development.",
            image: "/images/team/sweety-gupta.webp",
            accent: "pink" as const,
          },
        ],
      },
      {
        title: "Program & Communications Support",
        members: [
          {
            name: "Arvind Singhania",
            role: "Program Operations Coordinator",
            credential: null,
            description: "Supports scheduling, school communication and day-to-day programme coordination.",
            image: null,
            initials: "AS",
            accent: "purple" as const,
          },
          {
            name: "Uma Verma",
            role: "Communications & Social Media Coordinator",
            credential: null,
            description:
              "Supports social-media communication and sharing of student learning and programme activities.",
            image: null,
            initials: "UV",
            accent: "teal" as const,
          },
        ],
      },
    ],
  },
  governance: {
    eyebrow: "PURPOSE WITH RESPONSIBILITY",
    title: "Purpose with responsibility.",
    intro:
      "We aim to be transparent about what we deliver, what we can verify and what we are still learning. Our registrations and governance information are available for donors, partners and institutions to review.",
    registrations: [
      { label: "NGO DARPAN", value: siteConfig.registrations.darpanId },
      { label: "12A", value: "Registered" },
      { label: "80G", value: "Registered" },
      { label: "CSR-1", value: "Registered" },
    ],
  },
  cta: {
    title: "See What We’re Building.",
    body: "Explore our programmes, review our impact or start a conversation about working together.",
  },
};

export type AboutPageContent = typeof aboutPageContent;

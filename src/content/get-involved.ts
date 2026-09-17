import type { WorkAccent } from "@/content/work";

export type InvolvementPathway = {
  id: "volunteer" | "skills" | "refer" | "employee";
  title: string;
  description: string;
  accent: WorkAccent;
  icon: "heart" | "skills" | "school" | "team";
};

export type ParticipantBenefit = {
  title: string;
  description: string;
  accent: WorkAccent;
  icon: "impact" | "purpose" | "field" | "people";
};

export type SkillArea = {
  title: string;
  description: string;
  accent: WorkAccent;
  icon: "technology" | "stem" | "education" | "health" | "creative" | "professional";
};

export const getInvolvedContent = {
  seo: {
    title: "Volunteer for Education, STEM & Digital Skills",
    description:
      "Volunteer or mentor in STEM, robotics, AI, digital skills, education and preventive-health initiatives, share professional expertise, refer a school or engage employees with Smiles & Giggles Foundation.",
  },
  hero: {
    eyebrow: "Get Involved",
    title: "Your Time. Your Skills. Someone’s Opportunity.",
    intro:
      "Whether you can mentor a learner, share professional expertise, connect us with a school or contribute as part of a company team, there is a meaningful way to take part.",
    primary: { label: "Find Your Way to Help", href: "#ways-to-help" },
    secondary: { label: "I’m Ready to Volunteer", href: "#interest-form" },
    image: {
      src: "/images/generated/get-involved-volunteers.webp",
      alt: "Volunteers guiding Indian government-school students through mechanics, circuits and a buzzer activity",
    },
  },
  pathways: {
    eyebrow: "Ways to Take Part",
    title: "Find Your Way to Contribute.",
    intro:
      "You do not need to fit one volunteer profile. Start with the way you would genuinely like to contribute.",
    items: [
      {
        id: "volunteer",
        title: "Volunteer",
        description: "Support learning activities, workshops, events and field programs where an extra pair of capable hands can help.",
        accent: "purple",
        icon: "heart",
      },
      {
        id: "skills",
        title: "Share Your Skills",
        description: "Use technology, education, healthcare, design or professional expertise for purposeful social impact.",
        accent: "teal",
        icon: "skills",
      },
      {
        id: "refer",
        title: "Connect a School or Community",
        description: "Make an introduction to a school, community group or institution where our programs may be useful.",
        accent: "orange",
        icon: "school",
      },
      {
        id: "employee",
        title: "Employee Volunteering",
        description: "Bring a company team into structured mentoring, skills sessions, project reviews or student showcases.",
        accent: "pink",
        icon: "team",
      },
    ] as InvolvementPathway[],
    donate: { label: "Prefer to contribute financially? Donate", href: "/donate" },
    csr: { label: "Representing a company? Explore CSR Partnerships", href: "/csr-partnerships" },
  },
  benefits: {
    eyebrow: "Why Take Part",
    title: "Make Your Contribution Meaningful — for Others and for You.",
    intro:
      "Good volunteering is not about filling time. It is about using what you know, learning from the field and contributing where there is a real need.",
    items: [
      {
        title: "Make a Visible Contribution",
        description: "See your time or expertise translated into practical learning and community activity.",
        accent: "purple",
        icon: "impact",
      },
      {
        title: "Use Your Skills With Purpose",
        description: "Apply what you know in a setting where it can genuinely support learners, educators or communities.",
        accent: "teal",
        icon: "purpose",
      },
      {
        title: "Learn From the Field",
        description: "Gain exposure to real educational and community contexts beyond the workplace or classroom.",
        accent: "orange",
        icon: "field",
      },
      {
        title: "Connect With People Who Care",
        description: "Work alongside educators, professionals, volunteers and communities united by a shared purpose.",
        accent: "pink",
        icon: "people",
      },
    ] as ParticipantBenefit[],
  },
  skills: {
    eyebrow: "Where You Can Help",
    title: "Different Backgrounds. Different Ways to Contribute.",
    intro: "Your role should fit your strengths. Here are some of the areas where professional skills can be useful.",
    items: [
      { title: "Technology & AI", description: "Coding, AI, robotics and digital-skills mentoring.", accent: "purple", icon: "technology" },
      { title: "Engineering & STEM", description: "Project guidance, design thinking and hands-on STEM support.", accent: "teal", icon: "stem" },
      { title: "Education", description: "Learning facilitation, resources and educator support.", accent: "orange", icon: "education" },
      { title: "Healthcare", description: "Qualified preventive-health awareness and professional support.", accent: "pink", icon: "health" },
      { title: "Design & Media", description: "Photography, video, design and impact storytelling.", accent: "teal", icon: "creative" },
      { title: "Professional Expertise", description: "Relevant legal, finance, HR, research or organisational support.", accent: "purple", icon: "professional" },
    ] as SkillArea[],
  },
  journey: {
    eyebrow: "How It Works",
    title: "Simple to Start. Thoughtful in Practice.",
    steps: [
      { number: "01", title: "Tell Us About You", description: "Share your skills, interests, city and availability." },
      { number: "02", title: "Find the Right Fit", description: "We match your profile to a current and suitable need." },
      { number: "03", title: "Brief & Prepare", description: "Understand the activity, expectations and safeguards." },
      { number: "04", title: "Contribute", description: "Join the agreed session, event or support assignment." },
      { number: "05", title: "Stay Connected", description: "Explore future opportunities when there is a good fit." },
    ],
  },
  specialPaths: {
    school: {
      eyebrow: "Open a Door",
      title: "Know a School or Community That Could Benefit?",
      description: "A useful introduction can be the first step toward a meaningful program.",
      cta: "Refer a School or Community",
      href: "#interest-form",
    },
    employee: {
      eyebrow: "For Companies & Teams",
      title: "Bring Your Team Into the Field.",
      description:
        "Employee volunteering can complement CSR work through mentoring, skills sessions, project judging and student showcases.",
      chips: ["Mentoring", "Skill Workshops", "Project Judging", "Student Showcases"],
      cta: "Explore CSR Partnerships",
      href: "/csr-partnerships",
    },
  },
  form: {
    eyebrow: "Take the Next Step",
    title: "Tell Us How You’d Like to Get Involved.",
    intro:
      "Share a few details. We will review the fit against current needs and get back to you with the most relevant next step.",
  },
  safeguarding: {
    title: "Responsible Volunteering Comes First.",
    description:
      "Roles involving children, schools or health activities may require suitability checks, relevant qualifications, permissions, supervision and safeguarding procedures.",
  },
  closing: {
    eyebrow: "Be Part of Creating Opportunity",
    title: "A Useful Contribution Can Start With One Conversation.",
    description: "Give time, share expertise or make a meaningful connection. We will help you find the right way to contribute.",
    primary: { label: "Share Your Interest", href: "#interest-form" },
    secondary: { label: "Contact the Foundation", href: "/contact" },
  },
};

export type GetInvolvedContent = typeof getInvolvedContent;

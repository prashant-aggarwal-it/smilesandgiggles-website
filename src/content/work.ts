import type { ImageAsset } from "@/types/content";

export type WorkAccent = "purple" | "pink" | "teal" | "orange";

export type WorkStat = {
  value: string;
  label: string;
  accent: WorkAccent;
};

export type WorkFeature = {
  title: string;
  description: string;
  accent: WorkAccent;
  icon: "spark" | "code" | "cpu" | "people" | "school" | "health" | "apple" | "shield" | "activity" | "book";
  bullets?: string[];
};

export type WorkPathway = {
  label: string;
  title: string;
  description: string;
  accent: WorkAccent;
  image?: ImageAsset;
  strapline?: string;
  projects?: string;
  topics: string[];
  outcome: string;
};

export type WorkCaseStudy = {
  label: string;
  title: string;
  description: string;
  accent: WorkAccent;
  image: ImageAsset;
  highlights: string[];
  footer?: string;
};

export type WorkStep = {
  number: string;
  title: string;
  description: string;
  accent: WorkAccent;
};

export const workHubContent = {
  hero: {
    eyebrow: "Our Work",
    title: "Three Pathways. One Purpose. Creating Opportunity That Lasts.",
    intro:
      "We work across hands-on STEM, robotics and coding education, AI literacy and digital skills, and preventive health—helping students, young people and communities build practical capability and confidence.",
    tagline: "Learn • Create • Grow • Thrive",
  },
  areas: [
    {
      title: "STEM, Robotics & Coding",
      description:
        "Hands-on science, engineering, electronics, coding, robotics and physical computing for government and underserved schools—built around learning by doing.",
      href: "/our-work/stem-education",
      image: { src: "/images/placeholders/stem-casual-workshop.webp", alt: "Students participating in hands-on STEM learning" },
      accent: "teal" as WorkAccent,
      badge: "Flagship Focus", audience: "Schools, students and teachers", tags: ["Making", "Problem-solving", "Teacher enablement"],
    },
    {
      title: "AI Literacy & Digital Skills",
      description:
        "Project-based AI literacy, digital literacy and future-skills programmes designed to help young people create, communicate and prepare for education and work.",
      href: "/our-work/youth-ai-digital-skills",
      image: { src: "/images/placeholders/digital-skills-youth.webp", alt: "Senior-school and college youth using digital tools" },
      accent: "pink" as WorkAccent,
      badge: "Future Skills", audience: "Young people and aspiring educators", tags: ["AI literacy", "Digital portfolios", "Employability"],
    },
    {
      title: "Preventive Health & Awareness",
      description:
        "Child-friendly oral-health, nutrition and preventive-awareness initiatives that connect healthy habits with learning and well-being.",
      href: "/our-work/preventive-health-awareness",
      image: { src: "/images/placeholders/oral-health-school.webp", alt: "Preventive health and awareness activity" },
      accent: "orange" as WorkAccent,
      badge: "Community Well-being", audience: "Children, families and communities", tags: ["Awareness", "Healthy habits", "Timely support"],
    },
  ],

  cta: {
    eyebrow: "One Foundation. Multiple Ways to Create Impact.",
    title: "Bring the Right Programme to Your Community",
    description:
      "Whether your focus is government-school STEM, future-ready skills or preventive awareness, we can shape a practical program around audience, geography, duration and desired outcomes.",
    primary: { label: "Explore CSR Partnerships", href: "/csr-partnerships" },
    secondary: { label: "See Our Impact", href: "/impact" },
  },
};

export const stemEducationContent = {
  seo: {
    title: "STEM, Robotics & Coding Education",
    description:
      "Hands-on STEM, robotics, coding, electronics and Arduino learning for government and underserved schools, with teacher enablement and student projects.",
  },
  hero: {
    eyebrow: "Our Work • STEM Education",
    title: "Hands-On STEM, Robotics & Coding. Future-Ready Minds.",
    intro:
      "From first circuits and moving models to coding, robotics, Arduino and automation, our programmes help government-school and underserved learners build, test, improve and confidently explain what they create.",
    tagline: "Explore • Build • Test • Improve • Innovate",
    images: [
      { src: "/images/placeholders/inclusive-community-stem.webp", alt: "Students building a hands-on STEM project" },
      { src: "/images/placeholders/stem-community-younger.webp", alt: "Students participating in a government-school STEM activity" },
    ] as ImageAsset[],
  },
  quickNav: [
    { label: "Our Model", href: "#model" },
    { label: "Program Pathways", href: "#pathways" },
    { label: "Work on Ground", href: "#ground" },
    { label: "Learning Outcomes", href: "#outcomes" },
  ],
  stats: [
    { value: "5,000+", label: "Government-school students reached", accent: "purple" },
    { value: "10+", label: "MCD primary schools engaged", accent: "teal" },
    { value: "300+", label: "Teachers supported", accent: "pink" },
    { value: "MCD + Vidyanjali", label: "Government & national initiative experience", accent: "orange" },
  ] as WorkStat[],
  model: {
    eyebrow: "Learning by Doing",
    title: "STEM That Moves From Explanation to Experience",
    intro:
      "Our model combines grade-appropriate kits, structured classroom sessions, trained facilitators, teacher involvement and student showcases. The goal is not simply to expose children to technology—it is to help them think, build, collaborate and gain confidence through making.",
    features: [
      { title: "Engineering Foundations", description: "Forces, motion, balance, structures, simple machines and mechanical systems become visible through working models.", accent: "orange", icon: "spark" },
      { title: "Electronics & Circuits", description: "Students explore electricity, LEDs, switches, motors, sensors and the foundations of modern electronic systems.", accent: "teal", icon: "cpu" },
      { title: "Coding & Computational Thinking", description: "Block-based and text-based programming build sequencing, logic, control and problem-solving skills.", accent: "purple", icon: "code" },
      { title: "Physical Computing & Automation", description: "Mechanics, electronics and code come together in Arduino, sensor and automation projects with real-world applications.", accent: "pink", icon: "activity" },
      { title: "Design & Creativity", description: "Students learn to think, visualise, prototype and improve ideas rather than wait for one ‘correct’ answer.", accent: "purple", icon: "book" },
      { title: "Teacher Enablement", description: "Teachers are oriented to practical STEM methods so learning can be reinforced beyond individual sessions.", accent: "teal", icon: "people" },
    ] as WorkFeature[],
  },
  pathways: [
    {
      label: "Grades 3–5",
      title: "Nanhe Engineers",
      strapline: "Curiosity Begins When Children Build",
      projects: "Paper circuits, electric doorbells, pulleys, levers, cardboard gears, moving models and beginner coding projects.",
      description:
        "A foundational pathway that develops curiosity, fine-motor engagement, logical thinking and confidence through approachable science and engineering activities.",
      accent: "orange",
      image: { src: "/images/generated/nanhe-engineers-mechanics-electricity.webp", alt: "Grades 3–5 Indian government-school students exploring pulleys, gears and a simple electric doorbell" },
      topics: ["Magnetism", "Electricity", "Paper Circuits", "Mechanics", "Block Coding", "Engineering Activities"],
      outcome: "Intended outcomes: curiosity, fine-motor development, logical thinking, teamwork and confidence in explaining a creation.",
    },
    {
      label: "Grade 6 onwards",
      title: "Yuva Innovators",
      strapline: "From Learning Technology to Creating With It",
      projects: "Smart street lights, water-level alarms, automated gates, environment monitors, smart-room systems and sensor-based safety devices.",
      description:
        "A progressive pathway that introduces electronics, Arduino, sensors, programming, mechanics and automation through structured project-based learning.",
      accent: "teal",
      image: { src: "/images/generated/yuva-innovators-automation.webp", alt: "Older Indian students building water-level, smart-lighting and servo automation projects" },
      topics: ["Electronics", "Arduino", "Sensors", "Coding", "Mechanics", "Automation", "Physical Computing", "IoT concepts", "Project documentation"],
      outcome: "Foundation → Build → Innovate → Present: develop technical confidence, computational thinking, collaboration, debugging and presentation skills through age-appropriate challenges.",
    },
    { label: "Focused initiative • Available for partnership", title: "STEM Shakti", strapline: "Girls Creating the Future", description: "A girls-focused initiative designed to run across the Nanhe Engineers and Yuva Innovators pathways, with supportive learning environments and visible opportunities to lead.", accent: "pink", image: { src: "/images/generated/stem-shakti-smart-irrigation.webp", alt: "Indian schoolgirls building a soil-moisture sensing and automatic plant-watering project" }, topics: ["Girls’ STEM clubs", "Electronics & coding", "Women-in-technology interactions", "Peer mentoring", "Leadership", "STEM career awareness"], projects: "Collaborative challenges, student-led demonstrations and project exhibitions. Companies can contribute through sponsorship, women mentors, employee volunteering and project reviews.", outcome: "Designed to build participation, technical confidence and leadership. Cohort outcomes will be documented following delivery." },
  ] as WorkPathway[],
  ground: [
    {
      label: "MCD Schools",
      title: "Joyful STEM Learning in Municipal Primary Schools",
      description:
        "Our MCD work has used project-based joyful learning with primary students to build engagement, fine-motor skills, logical thinking, collaboration and confidence through practical STEM and robotics activities.",
      accent: "purple",
      image: { src: "/images/placeholders/stem-younger-maroon.webp", alt: "Students participating in an MCD STEM and robotics activity" },
      highlights: ["Mechanics and moving models", "Paper circuits and electricity", "Basic electronics and coding", "Student-led robotics exhibitions"],
      footer: "Activity-based learning was used to connect classroom concepts with visible, working projects.",
    },
    {
      label: "Vidyanjali Initiative",
      title: "Electronics, Robotics & Real-World Applications",
      description:
        "Through Vidyanjali engagement, students received practical exposure to electronics and robotics with activities involving Arduino, sensors, design and real-world applications.",
      accent: "teal",
      image: { src: "/images/placeholders/clean-energy-project.webp", alt: "Students learning electronics and robotics through Vidyanjali" },
      highlights: ["Electronics & robotics", "Arduino exposure", "Sensors and circuits", "Design and applied learning"],
      footer: "The emphasis remains on doing, explaining and connecting technology to everyday applications.",
    },
  ] as WorkCaseStudy[],
  journey: {
    eyebrow: "The Learning Journey",
    title: "A Progression From Curiosity to Confident Creation",
    intro: "The activities become more sophisticated as learners progress, but the learning rhythm stays simple and repeatable.",
    steps: [
      { number: "01", title: "Explore", description: "Observe a phenomenon, mechanism or problem and ask what is happening.", accent: "orange" },
      { number: "02", title: "Build", description: "Use materials, kits and components to make the concept tangible.", accent: "teal" },
      { number: "03", title: "Test", description: "Try the model, circuit or code and notice what works and what does not.", accent: "purple" },
      { number: "04", title: "Improve", description: "Adjust, debug, rebuild and learn from mistakes instead of hiding them.", accent: "pink" },
      { number: "05", title: "Explain", description: "Present the project, articulate the idea and build confidence through demonstration.", accent: "orange" },
    ] as WorkStep[],
  },
  outcomes: [
    "Greater classroom participation and curiosity",
    "Stronger logical thinking and problem-solving",
    "Hands-on confidence with circuits, mechanisms and code",
    "Collaboration, leadership and social learning",
    "Student confidence through exhibitions and demonstrations",
    "Teacher exposure to practical STEM methods",
  ],
  gallery: [
    { src: "/images/placeholders/stem-casual-workshop.webp", alt: "Students exploring electricity" },
    { src: "/images/placeholders/stem-younger-maroon.webp", alt: "Students learning through mechanics" },
    { src: "/images/placeholders/robotics-secondary.webp", alt: "Students learning coding and robotics" },
    { src: "/images/placeholders/science-fair-presentation.webp", alt: "Student presenting a STEM project" },
  ] as ImageAsset[],
  cta: {
    eyebrow: "Bring Hands-On STEM to More Classrooms",
    title: "Partner With Us to Build Future-Ready Learners.",
    description:
      "CSR and institutional partners can support classroom programs, STEM kits, teacher enablement, learning spaces or multi-school initiatives.",
    primary: { label: "Start a Partnership Conversation", href: "/contact" },
    secondary: { label: "Explore CSR Opportunities", href: "/csr-partnerships" },
  },
};

export const aiDigitalSkillsContent = {
  "seo": {
    "title": "AI Literacy & Digital Skills for Youth",
    "description": "AI literacy, digital literacy and future-skills programs for senior-school and college learners, with responsible AI, practical projects and portfolios."
  },
  "hero": {
    "eyebrow": "Our Work • Youth AI & Digital Skills",
    "title": "AI Literacy & Digital Skills for Emerging Careers.",
    "intro": "Practical, project-based programmes that build AI literacy, digital literacy and responsible technology use for Classes 11–12 students, college learners, graduates and young adults preparing for education, work, freelancing and entrepreneurship.",
    "tagline": "Learn • Create • Apply • Present • Progress",
    "images": []
  },
  "assurances": [
    "Hands-on from Day One",
    "No Advanced Technical Background Required",
    "Portfolio-Based Learning",
    "Responsible AI Built In"
  ],
  "pathways": [
    {
      "label": "Classes 11–12, college students & young adults",
      "title": "Digital Career Launchpad",
      "strapline": "Practical Digital Skills for Education, Work and Enterprise",
      "description": "Realistic creative and workplace briefs help learners practise organised online working, digital communication and entrepreneurial thinking.",
      "accent": "teal",
      "image": { "src": "/images/generated/digital-career-launchpad.webp", "alt": "Indian senior-school and college youth learning design, video editing, social-media planning and portfolio creation" },
      "topics": [
        "Digital productivity",
        "AI-assisted research",
        "Proposals & presentations",
        "Graphic design",
        "Image & video creation",
        "Social-media planning",
        "Content calendars",
        "Résumés & professional profiles",
        "Basic data reporting",
        "Personal branding"
      ],
      "projects": "Create a month-long content calendar, a local-cause campaign, a promotional video, a small-business brand kit, a professional presentation and a résumé with a digital portfolio.",
      "outcome": "Intended outcome: visible digital employability skills and work learners can discuss confidently. Participation does not guarantee employment."
    },
    {
      "label": "College youth, graduates & aspiring educators",
      "title": "STEM Educator Launchpad",
      "strapline": "Learn. Facilitate. Inspire.",
      "description": "Prepare to assist with or facilitate practical STEM activities in schools, learning centres and community programmes through project work and teaching practice.",
      "accent": "purple",
      "image": { "src": "/images/generated/stem-educator-launchpad.webp", "alt": "Indian college youth practising hands-on STEM facilitation and lesson planning" },
      "topics": [
        "Experiential STEM",
        "Science & engineering activities",
        "Circuits & beginner robotics",
        "Age-appropriate explanations",
        "Session planning",
        "Child engagement & group management",
        "Kit safety & organisation",
        "Assessment & feedback",
        "Progress reporting",
        "AI-assisted teaching resources"
      ],
      "projects": "A sample lesson plan, working project, student worksheet, facilitation plan, assessment rubric and short teaching demonstration form a facilitator portfolio.",
      "outcome": "A preparation pathway for STEM educator and programme-facilitator roles, with demonstrations and student-showcase practice; recruitment is not guaranteed."
    }
  ] as WorkPathway[],
  "cta": {
    "eyebrow": "Available for Institutional & CSR Partnership",
    "title": "Help Young People Turn Skills Into Possibilities.",
    "description": "Shape a cohort around your audience, access to devices, learning priorities and practical portfolio goals. Programme scope and reporting are agreed with each partner.",
    "primary": {
      "label": "Discuss a Youth Skills Programme",
      "href": "/contact"
    },
    "secondary": {
      "label": "Explore CSR Partnerships",
      "href": "/csr-partnerships"
    }
  }
};

export const preventiveHealthContent = {
  seo: {
    title: "Preventive Health & Oral Health Awareness",
    description:
      "School and community preventive-health programs covering oral-health awareness, nutrition, healthy habits, screening-led support and referral pathways.",
  },
  hero: {
    eyebrow: "Our Work • Preventive Health & Awareness",
    title: "Healthy Habits Before Health Problems Become Barriers.",
    intro:
      "Our preventive-health work focuses on practical awareness that children and families can act on—especially oral healthcare, healthy daily habits and nutrition awareness, including work connected with Poshan Abhiyaan themes.",
    tagline: "Prevent • Screen • Inform • Refer • Follow Up",
    images: [
      { src: "/images/generated/preventive-health-school.webp", alt: "Preventive oral-health awareness session with Indian government-school students" },
    ] as ImageAsset[],
  },
  quickNav: [
    { label: "Our Focus", href: "#focus" },
    { label: "Oral Health", href: "#oral-health" },
    { label: "Nutrition Awareness", href: "#nutrition" },
    { label: "Our Approach", href: "#approach" },
  ],
  focus: [
    {
      title: "Oral Health Awareness & Screening",
      description:
        "Age-appropriate awareness, preventive guidance and screening-led support that helps identify visible concerns early and connects families with follow-up information where needed.",
      accent: "teal",
      icon: "health",
      bullets: ["Correct brushing & oral hygiene", "Basic screening by qualified professionals", "Dental health cards / findings", "Parent notes and referral guidance"],
    },
    {
      title: "Nutrition & Poshan Awareness",
      description:
        "Awareness around nutritious food choices and everyday preventive habits, with communication designed to be simple, practical and relevant for children and families.",
      accent: "orange",
      icon: "apple",
      bullets: ["Nutritious food choices", "Limiting sugary and sticky foods", "Child-friendly awareness", "Family and school reinforcement"],
    },
    {
      title: "School & Community Coordination",
      description:
        "Health awareness becomes more useful when schools, parents and professionals can coordinate around prevention, communication and appropriate follow-up.",
      accent: "pink",
      icon: "people",
      bullets: ["School coordination", "Parent communication", "Referral support", "Responsible reporting"],
    },
  ] as WorkFeature[],
  oralHealth: {
    label: "Oral Healthcare",
    title: "Healthy Smiles Support Better Learning.",
    description:
      "Our school oral-health model combines preventive education with early screening and a clear communication pathway. It is designed so concerns can be noticed before pain, infection or difficulty eating begins to affect concentration, attendance and confidence.",
    accent: "teal" as WorkAccent,
    image: { src: "/images/placeholders/oral-health-school.webp", alt: "Oral health and preventive awareness activity" },
    highlights: ["Dental screening and visible-concern identification", "Correct brushing and tongue-cleaning guidance", "Nutritious-food and preventive-habit awareness", "Parent notes, referral support and follow-up"],
    footer: "Clinical decisions and screening are handled within professional scope, with consent and privacy safeguards where required.",
  } as WorkCaseStudy,
  nutrition: {
    eyebrow: "Nutrition Awareness",
    title: "Make Healthy Choices Understandable, Not Abstract.",
    intro:
      "Our nutrition-awareness work—including Poshan Abhiyaan-related engagement—is best delivered through simple everyday choices children and families can understand and reinforce.",
    features: [
      { title: "Everyday Food Choices", description: "Connect nutrition messages to practical food choices rather than only theoretical advice.", accent: "orange", icon: "apple" },
      { title: "Preventive Habits", description: "Link food, oral hygiene and daily routines so health messages reinforce one another.", accent: "teal", icon: "activity" },
      { title: "Child-Friendly Communication", description: "Use simple examples, demonstrations and age-appropriate language that children can remember.", accent: "pink", icon: "book" },
      { title: "Family & School Reinforcement", description: "Encourage teachers and parents to reinforce healthier choices beyond a one-time awareness session.", accent: "purple", icon: "people" },
    ] as WorkFeature[],
  },
  approach: {
    eyebrow: "Preventive Health Workflow",
    title: "Awareness Is Stronger When There Is a Clear Next Step.",
    intro: "Our practical health model combines education with an organised pathway for screening, communication and follow-up where relevant.",
    steps: [
      { number: "01", title: "Prepare", description: "Coordinate the school/community, participants, consent needs and safe delivery format.", accent: "purple" },
      { number: "02", title: "Educate", description: "Deliver simple awareness on brushing, oral hygiene, nutrition and preventive habits.", accent: "orange" },
      { number: "03", title: "Screen", description: "Where applicable, qualified professionals conduct basic non-invasive screening within professional scope.", accent: "teal" },
      { number: "04", title: "Inform", description: "Share findings or referral guidance clearly with the school and parent/guardian as appropriate.", accent: "pink" },
      { number: "05", title: "Follow Up", description: "Track priority referrals and reinforce preventive messages so the activity does not end with the camp.", accent: "teal" },
    ] as WorkStep[],
  },
  safeguards: [
    { title: "Professional Scope", description: "Screening and clinical decisions are handled by qualified dental professionals or authorised partners.", accent: "teal", icon: "health" },
    { title: "Consent & Privacy", description: "Consent is obtained where required and individual health information is handled responsibly.", accent: "purple", icon: "shield" },
    { title: "Referral, Not Over-Promise", description: "Children needing detailed or specialised care are referred for appropriate professional evaluation.", accent: "pink", icon: "activity" },
  ] as WorkFeature[],
  outcomes: [
    "Improved awareness of correct brushing and daily oral hygiene",
    "Earlier identification of visible dental concerns where screening is conducted",
    "Clearer parent communication and referral guidance",
    "Better understanding of nutritious food choices and preventive habits",
    "Stronger coordination between school, family and health professionals",
    "Health awareness designed to support learning, attendance and confidence",
  ],
  cta: {
    eyebrow: "Healthy Communities, Stronger Learners",
    title: "Partner With Us on Preventive Health & Awareness.",
    description:
      "Schools, CSR partners and institutions can work with us on oral-health awareness, screening-led programs, nutrition awareness and preventive community initiatives.",
    primary: { label: "Discuss a Health Initiative", href: "/contact" },
    secondary: { label: "View Governance", href: "/governance" },
  },
};

export type WorkHubContent = typeof workHubContent;
export type StemEducationContent = typeof stemEducationContent;
export type AiDigitalSkillsContent = typeof aiDigitalSkillsContent;
export type PreventiveHealthContent = typeof preventiveHealthContent;

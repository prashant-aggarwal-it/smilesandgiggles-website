import type {
  EmergingOption,
  Engagement,
  FieldStory,
  FocusArea,
  GalleryItem,
  Outcome,
  PartnerReason,
  ProcessStep,
  Program,
  Stat,
  SupportOption,
} from "@/types/content";

const stats: Stat[] = [
  { value: "5,000+", numericValue: 5000, label: "Government-School Students Reached" },
  { value: "10+", numericValue: 10, label: "MCD Primary Schools Engaged" },
  { value: "300+", numericValue: 300, label: "Teachers Supported" },
  { value: "MCD + Vidyanjali", label: "Government-School & National Initiative Experience" },
];

const programs: Program[] = [
  {
    slug: "nanhe-engineers",
    name: "Nanhe Engineers",
    grades: "Classes 4–5",
    description:
      "Foundational STEM experiences designed to develop curiosity, logical thinking and confidence through practical exploration.",
    topics: ["Magnetism", "Electricity", "Paper Circuits", "Mechanics", "Block Coding", "Engineering Activities"],
    image: { src: "/images/placeholders/stem-younger-maroon.webp", alt: "Younger students participating in a hands-on STEM activity" },
    href: "/our-work/stem-education#pathways",
  },
  {
    slug: "yuva-innovators",
    name: "Yuva Innovators",
    grades: "Classes 6–8",
    description:
      "Progressive hands-on learning that introduces students to electronics, physical computing, coding and automation.",
    topics: ["Electronics", "Arduino", "Sensors", "Coding", "Mechanics", "Automation", "Physical Computing"],
    image: { src: "/images/placeholders/robotics-secondary.webp", alt: "Middle-school students learning electronics and Arduino" },
    href: "/our-work/stem-education#pathways",
  },
];

const focusAreas: FocusArea[] = [
  {
    title: "STEM, Robotics & Coding",
    featured: true,
    description:
      "Hands-on science, electronics, coding, robotics and physical computing through real projects.",
    image: { src: "/images/placeholders/stem-casual-workshop.webp", alt: "Hands-on STEM activity in a classroom" },
    href: "/our-work/stem-education",
  },
  {
    title: "AI Literacy & Digital Skills",
    description:
      "Practical AI literacy, digital literacy and future-ready skills for confident, responsible technology use.",
    image: { src: "/images/placeholders/digital-skills-youth.webp", alt: "Young people learning with digital tools" },
    href: "/our-work/youth-ai-digital-skills",
  },
  {
    title: "Preventive Health & Awareness",
    description:
      "Preventive learning and awareness for healthier children and communities.",
    image: { src: "/images/placeholders/oral-health-school.webp", alt: "Preventive health and awareness activity" },
    href: "/our-work/preventive-health-awareness",
  },
];

const gallery: GalleryItem[] = [
  {
    title: "Hands-On STEM",
    description: "Children explore science and engineering by building, testing and improving.",
    image: { src: "/images/placeholders/stem-community-younger.webp", alt: "Children taking part in a hands-on STEM activity" },
    size: "tall",
  },
  {
    title: "Youth Digital Skills",
    description: "Young people learn digital and AI skills through guided, practical activities.",
    image: { src: "/images/placeholders/digital-skills-youth.webp", alt: "Young people learning digital skills with laptops" },
    size: "wide",
  },
  {
    title: "Preventive Health",
    description: "Health-awareness activities turn simple preventive habits into memorable learning.",
    image: { src: "/images/placeholders/oral-health-school.webp", alt: "Children participating in preventive health learning" },
  },
  {
    title: "Student Showcases",
    description: "Learners build confidence by presenting projects and explaining what they created.",
    image: { src: "/images/placeholders/science-fair-presentation.webp", alt: "Students presenting a project at a school showcase" },
  },
  {
    title: "Build, Test, Improve",
    description: "Robotics and electronics give learners space to experiment, troubleshoot and try again.",
    image: { src: "/images/placeholders/robotics-secondary.webp", alt: "Students building and testing a robotics project" },
  },
  {
    title: "Learning Together",
    description: "Community learning becomes stronger when students, educators and mentors participate together.",
    image: { src: "/images/placeholders/inclusive-community-stem.webp", alt: "Students and educators learning together through a STEM activity" },
  },
];

const processSteps: ProcessStep[] = [
  { number: "01", title: "Understand the School", description: "We identify student needs, grades, available infrastructure and opportunities for hands-on learning.", icon: "school" },
  { number: "02", title: "Design the Program", description: "Activities, curriculum and STEM resources are selected according to age, learning level and program objectives.", icon: "sparkles" },
  { number: "03", title: "Learn by Doing", description: "Trained educators conduct structured hands-on sessions using experiments, models, electronics, coding and project-based learning.", icon: "wrench" },
  { number: "04", title: "Enable Teachers", description: "Teachers are introduced to practical STEM activities so that learning can continue beyond individual sessions.", icon: "users" },
  { number: "05", title: "Build & Showcase", description: "Students apply their learning through working models, projects, demonstrations and exhibitions.", icon: "presentation" },
  { number: "06", title: "Measure & Report", description: "Participation, sessions, learning activities, projects and program outcomes are documented for continuous improvement and partner reporting.", icon: "chart" },
];

const outcomes: Outcome[] = [
  { title: "Greater Engagement", description: "Activity-based learning encourages students to participate, ask questions and explore." },
  { title: "Curiosity to Build", description: "Students move from observing concepts to experimenting and creating working models." },
  { title: "Problem-Solving", description: "Projects encourage logical thinking, testing, teamwork and learning from mistakes." },
  { title: "Confidence", description: "Student exhibitions and demonstrations give children opportunities to explain their ideas and celebrate what they have built." },
  { title: "Teacher Enablement", description: "Teachers gain exposure to practical STEM methods and resources that can support future classroom learning." },
];

const engagements: Engagement[] = [
  {
    label: "MCD Schools",
    title: "Hands-On STEM in MCD Primary Schools",
    description: "Students have participated in practical activities covering mechanics, electricity, paper circuits, electronics, coding and robotics, followed by opportunities to showcase what they created.",
    images: [
      { src: "/images/placeholders/stem-community-younger.webp", alt: "Hands-on STEM activity in a government-school setting" },
    ],
    href: "/our-work/stem-education#ground",
  },
  {
    label: "Vidyanjali Initiative",
    title: "STEM Learning Through Vidyanjali",
    description: "Through the Government of India’s Vidyanjali initiative, students received exposure to practical learning including electronics, robotics, Arduino, design and real-world applications.",
    images: [{ src: "/images/placeholders/clean-energy-project.webp", alt: "STEM learning activity through the Vidyanjali initiative" }],
    href: "/our-work/stem-education#ground",
  },
];

const partnerReasons: PartnerReason[] = [
  { title: "Plan & Coordinate", description: "School onboarding, planning, resources and coordination managed as one connected process.", icon: "workflow" },
  { title: "Government-School Experience", description: "Real public-school experience helps us plan around classroom realities, not just proposals.", icon: "school" },
  { title: "Learning by Doing", description: "Children build, test, solve and explain so practical application stays central to learning.", icon: "blocks" },
  { title: "Flexible to Scale", description: "Start with a focused intervention and grow to school or multi-school implementation.", icon: "expand" },
  { title: "Evidence & Reporting", description: "Attendance, activity records, photographs, project evidence and summaries make delivery visible.", icon: "file" },
  { title: "CSR-Ready Governance", description: "DARPAN, 12A, 80G and CSR-1 registrations support responsible institutional collaboration.", icon: "shield" },
];

const supportOptions: SupportOption[] = [
  { title: "Sponsor a Government School", description: "Support structured hands-on STEM learning for students across an academic term or longer.", href: "/csr-partnerships#builder", cta: "Discuss This Program", icon: "school" },
  { title: "Sponsor STEM & Robotics Kits", description: "Provide reusable learning resources that allow students to experiment with mechanics, electronics, circuits, Arduino and related STEM activities.", href: "/csr-partnerships#builder", cta: "Support STEM Kits", icon: "box" },
  { title: "Create a STEM / Robotics Learning Space", description: "Support kits, tools, shared technology and learning resources for sustained practical STEM exposure.", href: "/csr-partnerships#builder", cta: "Explore STEM Infrastructure", icon: "lab" },
  { title: "Enable Teachers", description: "Support teacher training and practical STEM orientation to strengthen long-term classroom capability.", href: "/csr-partnerships#builder", cta: "Support Teacher Enablement", icon: "teacher" },
];

const emergingOptions: EmergingOption[] = [
  { title: "Launch a Youth AI Skills Initiative", description: "Partner with us to develop and pilot practical AI and digital-skilling programs for young people.", href: "/csr-partnerships#builder", cta: "Discuss an AI Skills Pilot", marker: "AI" },
  { title: "Support Preventive Health", description: "Enable preventive-awareness programs, screenings and community health initiatives.", href: "/csr-partnerships#builder", cta: "Explore Health Initiatives", marker: "+" },
];

const stories: FieldStory[] = [
  { title: "When Electricity Moves From the Textbook to the Table", description: "Students discover circuits by building them themselves—from paper circuits to LEDs and switches.", image: { src: "/images/placeholders/stem-casual-workshop.webp", alt: "Students building an electrical circuit" }, href: "/impact#field-evidence" },
  { title: "Building a Moving Model—and Understanding How It Works", description: "A simple moving model becomes a lesson in motion, teamwork, testing and problem-solving.", image: { src: "/images/placeholders/stem-younger-maroon.webp", alt: "Students testing a simple moving STEM model" }, href: "/impact#field-evidence" },
  { title: "The Moment a Student Becomes the Teacher", description: "At project exhibitions, children don’t simply display models—they explain how they work to teachers, visitors and fellow students.", image: { src: "/images/placeholders/science-fair-presentation.webp", alt: "Student explaining a project during an exhibition" }, href: "/impact#field-evidence" },
];

export const homePageContent = {
  hero: {
    eyebrow: "Hands-On Learning • Future-Ready Skills • Community Impact",
    titleLine1: "Learning by Doing.",
    titleLine2: "Skills for Life.",
    titleLine3: "Opportunity for All.",
    supportingText: "We expand access to hands-on STEM, robotics, coding, AI literacy, digital skills and preventive-health learning for students, youth and underserved communities—building practical capability, confidence and opportunity.",
    primaryCta: { label: "Explore Our Work", href: "/our-work" },
    secondaryCta: { label: "Partner With Us", href: "/csr-partnerships" },
    proofPoints: [
      { title: "Hands-On STEM & Robotics", description: "Building, coding and real-world innovation" },
      { title: "AI & Digital Upskilling", description: "Skills for learning and emerging careers" },
      { title: "Government-School Experience", description: "Ground-level delivery in real classrooms" },
    ],
    image: { src: "/images/generated/home-smart-room-hero.webp", alt: "Indian government-school students and an educator building a smart-room automation project" },
  },
  missionRail: {
    eyebrow: "Explore Our Impact Areas",
    title: "One Foundation. Multiple pathways to opportunity.",
    intro: "Move quickly to the work, partnership or participation pathway most relevant to you.",
    items: [
      { title: "STEM, Robotics & Coding", description: "Hands-on learning for brighter futures", href: "/our-work/stem-education", icon: "stem" as const, tone: "purple" as const },
      { title: "AI Literacy & Digital Skills", description: "Preparing youth for tomorrow’s opportunities", href: "/our-work/youth-ai-digital-skills", icon: "ai" as const, tone: "teal" as const },
      { title: "Preventive Health", description: "Healthier children, happier communities", href: "/our-work/preventive-health-awareness", icon: "health" as const, tone: "orange" as const },
      { title: "CSR Partnerships", description: "Collaborate for meaningful impact", href: "/csr-partnerships", icon: "csr" as const, tone: "pink" as const },
      { title: "Get Involved", description: "Volunteer, donate or refer a school", href: "/get-involved", icon: "involved" as const, tone: "navy" as const },
    ],
  },
  impactAtGlance: {
    eyebrow: "Our Reach",
    title: "Impact at a Glance",
    intro: "",
    stats,
    closingLine: "",
  },
  flagship: {
    eyebrow: "Our Flagship Focus",
    title: "Hands-On STEM Education",
    intro: "For many children, science and technology remain subjects they learn about rather than experiences they participate in.",
    emphasis: "We are working to change that.",
    body: "Our STEM programs bring science, engineering, mechanics, electronics, coding, robotics and emerging technologies into practical learning environments where students learn by doing.",
    buildLine: "Children don’t just watch. They build. Test. Improve. Code. Create.",
    programs,
  },
  story: {
    eyebrow: "Our Story",
    title: "Built From Action. Ready to Scale.",
    paragraphs: [
      "Smiles & Giggles Foundation is a nonprofit organization working to expand access to hands-on STEM, robotics and digital learning opportunities for underserved communities.",
      "Our journey did not begin with a large grant or corporate sponsorship. It began with a belief that children in government schools deserve opportunities to experiment, build and innovate just like anyone else.",
      "We have developed activities, created learning resources, entered classrooms, worked with students and teachers, and supported exhibitions largely through our own commitment and resources.",
      "Today, we are looking for CSR partners, foundations and institutions who can help us take this work to many more students and schools.",
    ],
    quote: "We started doing the work before we had the funding.",
    images: [
      { src: "/images/placeholders/stem-community-younger.webp", alt: "Hands-on classroom activity" },
      { src: "/images/placeholders/science-fair-clean-energy.webp", alt: "Student demonstration during an exhibition" },
    ],
  },

  visionTeaser: {
    eyebrow: "OUR VISION",
    title: "Help young people become problem-solvers, creators and contributors.",
    body: "We want children to learn by building, testing and solving—not only memorising—and youth to gain practical skills that can strengthen their readiness for work, self-employment and meaningful participation in society.",
    cta: { label: "Why We Exist", href: "/about#vision" },
  },
  focus: {
    eyebrow: "Our Work",
    title: "Three Ways We Create Opportunity",
    intro: "Hands-on STEM, robotics and coding; AI literacy and digital skills; and preventive health—three connected pathways to stronger futures.",
    areas: focusAreas,
  },
  gallery: {
    eyebrow: "Learning in Action",
    title: "See the Work. Feel the Impact.",
    intro: "A visual glimpse of classrooms, youth learning, health awareness and student showcases.",
    items: gallery,
  },
  process: {
    eyebrow: "Our Implementation Model",
    title: "From Opportunity to Measurable Learning",
    intro: "Sustainable STEM education requires more than donating equipment. Our approach combines program design, classroom delivery, teacher involvement and evidence of learning.",
    steps: processSteps,
  },
  impact: {
    eyebrow: "Beyond the Numbers",
    title: "When Students Start Creating, Learning Changes",
    intro: "For us, impact is not only how many students attend a program. It is what happens when a child who has mostly learned from a textbook begins to build a circuit, solve a mechanical problem, program an activity or confidently explain a project to others.",
    outcomes,
    images: [
      { src: "/images/placeholders/science-fair-presentation.webp", alt: "Student explaining a project" },
      { src: "/images/placeholders/science-fair-clean-energy.webp", alt: "Students demonstrating a STEM project" },
    ],
  },
  engagement: {
    eyebrow: "Experience on the Ground",
    title: "Working Where Opportunity Matters",
    intro: "Our experience includes hands-on STEM and robotics activities in government-school environments and participation in education initiatives designed to strengthen learning opportunities for students.",
    items: engagements,
  },
  partner: {
    eyebrow: "For CSR & Institutional Partners",
    title: "Designed for Delivery. Built for Evidence.",
    intro: "We help partners move from intent to structured implementation through school coordination, practical delivery, documentation and responsible governance.",
    reasons: partnerReasons,
  },
  support: {
    eyebrow: "Create the Impact That Matters to You",
    title: "Ways Your CSR Support Can Make a Difference",
    intro: "Partnerships can be designed around the scale, geography and impact priorities of your organization.",
    options: supportOptions,
    emergingTitle: "Emerging Impact Opportunities",
    emerging: emergingOptions,
  },
  stories: {
    eyebrow: "Stories of Learning",
    title: "Small Moments. Meaningful Change.",
    intro: "Behind every program are moments of curiosity, confidence and discovery.",
    items: stories,
  },
  governance: {
    eyebrow: "Trust & Transparency",
    title: "Ready for Responsible Partnerships.",
    intro: "Our governance framework and registrations support transparent, accountable institutional collaboration.",
    indicators: ["NGO DARPAN", "12A", "80G", "CSR-1"],
  },
  finalCta: {
    eyebrow: "Take Part",
    title: "Help Create the Next Opportunity.",
    body: "Partner, volunteer, connect us to a school or support the work directly—there is more than one way to help opportunity reach further.",
    image: { src: "/images/placeholders/inclusive-community-stem.webp", alt: "Students building and displaying a hands-on STEM project" },
    supportLine: "Partner • Volunteer • Refer a School • Donate",
  },
  donation: {
    title: "Every Contribution Can Create an Opportunity",
    body: "Prefer to support our work as an individual? Your contribution can help provide learning materials, STEM activities and opportunities for students who may otherwise have limited access to them.",
  },
};

export type HomePageContent = typeof homePageContent;

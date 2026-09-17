import type { ImageAsset } from "@/types/content";
import type { WorkAccent } from "@/content/work";

export type PartnershipModule = {
  id: string;
  label: string;
  title: string;
  description: string;
  accent: WorkAccent;
  includes: string[];
  idealFor: string;
};

export const csrPageContent = {
  seo: {
    title: "CSR Education, Robotics, AI & Digital Skills",
    description:
      "CSR programs for government-school STEM, robotics, coding, AI literacy, digital skills, teacher enablement and preventive health with structured reporting.",
  },
  hero: {
    eyebrow: "CSR & Institutional Partnerships",
    titleLine1: "CSR in Action.",
    titleLine2: "Impact with Evidence.",
    intro:
      "We help companies turn CSR intent into practical STEM and robotics education, AI literacy, digital-skills, teacher-enablement and preventive-health initiatives with clear scope, field delivery, documentation and reporting.",
    note: "Government-school experience • Flexible scale • Evidence-led reporting • CSR-ready governance",
    image: {
      src: "/images/generated/csr-classroom-safety.webp",
      alt: "A technology-company volunteer supporting Indian government-school students with a classroom safety-alarm project",
    } as ImageAsset,
  },
  proof: {
    items: [
      { value: "5,000+", label: "Government-school students reached", accent: "purple" as WorkAccent },
      { value: "10+", label: "MCD primary schools engaged", accent: "teal" as WorkAccent },
      { value: "300+", label: "Teachers supported", accent: "pink" as WorkAccent },
      { value: "MCD + Vidyanjali", label: "Public-education experience", accent: "orange" as WorkAccent },
    ],
  },
  builder: {
    eyebrow: "Partnership Areas",
    title: "Choose the Outcome You Want to Enable",
    intro:
      "Select a partnership area to see what support can practically include and where that model may fit your CSR priority.",
    modules: [
      {
        id: "school-program",
        label: "School Program",
        title: "Sponsor Structured Learning in a Government School",
        description: "Support a term-based or year-long hands-on learning program with curriculum, facilitators, resources, classroom delivery and documentation.",
        accent: "purple",
        includes: ["Grade-appropriate sessions", "Trainer deployment", "Learning resources", "Student projects / showcase", "Progress and final reporting"],
        idealFor: "Partners seeking visible school-level ownership and sustained engagement.",
      },
      {
        id: "kits",
        label: "STEM Resources",
        title: "Put Reusable Learning Tools Into Students’ Hands",
        description: "Fund practical kits and shared resources for mechanics, electricity, electronics, Arduino, sensors and project-based learning.",
        accent: "teal",
        includes: ["Mechanics resources", "Electricity and circuit materials", "Arduino / electronics kits", "Shared tools", "Usage and activity documentation"],
        idealFor: "Partners wanting a tangible, reusable classroom asset with broad student rotation.",
      },
      {
        id: "learning-space",
        label: "Learning Space",
        title: "Create a STEM / Robotics Learning Environment",
        description: "Support a shared practical-learning space with kits, tools, computing access and structured activities that can be used beyond a single workshop.",
        accent: "orange",
        includes: ["STEM / robotics resources", "Shared technology", "Tools and storage", "Curriculum / activity plan", "Teacher orientation"],
        idealFor: "Partners looking to build sustained infrastructure and a visible school asset.",
      },
      {
        id: "teachers",
        label: "Teacher Enablement",
        title: "Build Capability That Remains After the Program",
        description: "Support practical teacher orientation so educators can use activities, kits and digital tools more confidently in their own classrooms.",
        accent: "pink",
        includes: ["Hands-on teacher workshops", "Kit / activity orientation", "Digital / AI tools where relevant", "Classroom application", "Feedback and capability evidence"],
        idealFor: "Partners focused on sustainability, capacity building and multiplier impact.",
      },
      {
        id: "future-skills",
        label: "Future Skills",
        title: "Launch a Youth AI, Coding or Robotics Skills Pilot",
        description: "Develop practical skills around responsible AI use, coding, electronics, robotics or digital productivity for youth or educators.",
        accent: "pink",
        includes: ["Needs-based skill track", "Hands-on workshops", "Projects and guided practice", "Responsible technology use", "Completion evidence"],
        idealFor: "Partners exploring emerging skills, digital inclusion and youth employability readiness.",
      },
      {
        id: "health",
        label: "Preventive Health",
        title: "Support Preventive Awareness and School Health Initiatives",
        description: "Enable structured oral-health and preventive-awareness work including education, screening, parent communication, referral support and follow-up where applicable.",
        accent: "orange",
        includes: ["Awareness sessions", "Professional screening where planned", "Health / referral communication", "Follow-up workflow", "Program summary"],
        idealFor: "Partners connecting child wellbeing, preventive health and school participation.",
      },
    ] as PartnershipModule[],
  },
  fit: {
    eyebrow: "What a Partnership Can Include",
    title: "From CSR Intent to a Defined Delivery Model",
    intro:
      "Beyond funding an activity, a well-scoped partnership can bring together implementation, documentation and a clear view of what happened in the field.",
    items: [
      { title: "Defined Program Scope", description: "Agree the target group, geography, activities, timeline, responsibilities and evidence expectations before delivery begins.", accent: "purple" as WorkAccent },
      { title: "On-Ground Implementation", description: "School coordination, facilitators, resources and structured delivery are managed against the agreed scope.", accent: "teal" as WorkAccent },
      { title: "Evidence & Visibility", description: "Depending on the program, partners can receive attendance, activity records, photographs and project or showcase evidence.", accent: "orange" as WorkAccent },
      { title: "Review & Reporting", description: "Structured summaries, observations and recommendations help partners understand delivery and what may come next.", accent: "pink" as WorkAccent },
    ],
  },
  models: {
    eyebrow: "Choose the Scale",
    title: "Start at the Level That Fits Your CSR Priority",
    intro:
      "A partnership can begin as a focused pilot and expand after review. Scope is shaped around geography, budget, audience, depth and reporting needs.",
    options: [
      {
        label: "01 • Focused Intervention",
        title: "Fund a Defined Component",
        description: "Support a clear activity such as kits, a workshop series, teacher enablement, a showcase or preventive-health initiative.",
        bestFor: "Pilot or first engagement",
        examples: ["Defined scope", "Shorter timeline", "Clear deliverables"],
        accent: "teal" as WorkAccent,
      },
      {
        label: "02 • School Partnership",
        title: "Support One School More Deeply",
        description: "Combine learning sessions, resources, teacher involvement and documentation into one coherent school-level initiative.",
        bestFor: "One school or learner group",
        examples: ["Sustained engagement", "School-level ownership", "Impact documentation"],
        accent: "purple" as WorkAccent,
      },
      {
        label: "03 • Multi-School Program",
        title: "Build a Replicable Program Across Schools",
        description: "Use a common curriculum, delivery framework and reporting approach to expand a tested model across a cluster or geography.",
        bestFor: "Larger or phased CSR programs",
        examples: ["Common framework", "Central monitoring", "Consolidated reporting"],
        accent: "pink" as WorkAccent,
      },
    ],
    employee: {
      title: "Employee participation can be added where it genuinely helps.",
      description: "Mentoring, skill-based sessions, project judging or showcases can complement the program when appropriate to beneficiary needs, school permissions and safeguarding.",
    },
  },
  roadmap: {
    eyebrow: "From Brief to Report",
    title: "A Clear Partnership Journey",
    intro:
      "A simple implementation path keeps responsibilities, delivery and reporting visible from the start.",
    phases: [
      { number: "01", title: "Scope", description: "Align theme, geography, audience, scale, objectives and evidence expectations.", accent: "purple" as WorkAccent },
      { number: "02", title: "Prepare", description: "Confirm schools, resources, facilitators, permissions and the delivery plan.", accent: "teal" as WorkAccent },
      { number: "03", title: "Deliver", description: "Run the agreed activities, workshops or school program in the field.", accent: "orange" as WorkAccent },
      { number: "04", title: "Track", description: "Capture participation, activity records, project evidence and approved visuals.", accent: "pink" as WorkAccent },
      { number: "05", title: "Report & Improve", description: "Share the agreed evidence pack, learnings and recommendations for the next phase.", accent: "purple" as WorkAccent },
    ],
  },
  evidence: {
    eyebrow: "Evidence & Reporting",
    title: "See What Your Support Enabled",
    intro:
      "Reporting depth and format are agreed during scoping. Depending on the program, the evidence pack can include:",
    items: [
      { title: "Delivery Tracker", description: "Planned vs delivered sessions, schools, grades and activities.", accent: "purple" as WorkAccent },
      { title: "Participation Records", description: "Student and teacher participation where captured for the program.", accent: "teal" as WorkAccent },
      { title: "Learning / Project Evidence", description: "Projects, demonstrations or activity outcomes where applicable.", accent: "orange" as WorkAccent },
      { title: "Visual Documentation", description: "Approved photographs or videos showing real activity and resource use.", accent: "pink" as WorkAccent },
      { title: "School / Teacher Feedback", description: "Practical feedback on engagement, usability and continuation potential.", accent: "teal" as WorkAccent },
      { title: "Program Summary", description: "Reach, activities, observations, learnings and suggested next steps.", accent: "purple" as WorkAccent },
    ],
  },
  dueDiligence: {
    eyebrow: "Governance & Due Diligence",
    title: "Key Registrations in One Place",
    intro:
      "Corporate teams can review the Foundation’s registration information and public policies on the Governance & Transparency page. Final CSR treatment remains subject to applicable law, company policy and the agreed project structure.",
    registrations: [
      { label: "NGO DARPAN", value: "DL/2020/0272040", accent: "purple" as WorkAccent },
      { label: "12A", value: "Registered", accent: "teal" as WorkAccent },
      { label: "80G", value: "Registered", accent: "pink" as WorkAccent },
      { label: "CSR-1", value: "Registered", accent: "orange" as WorkAccent },
    ],
  },
  faq: {
    eyebrow: "CSR Questions, Answered",
    title: "What Corporate Teams Usually Want to Know",
    intro: "Practical answers for teams evaluating fit, scope, delivery and due diligence.",
    items: [
      { question: "Can we start with one school or a small pilot?", answer: "Yes. A partnership can begin with a focused intervention, one school or a defined skills or health initiative and expand after review." },
      { question: "Can the program be customised to our CSR theme or geography?", answer: "Yes. Scope is shaped around the agreed theme, geography, audience, school feasibility, available resources and desired outcomes." },
      { question: "Can you work with government schools?", answer: "Yes. The Foundation has experience with MCD schools and public-education initiatives, subject to the permissions and coordination required for each engagement." },
      { question: "How is the budget decided?", answer: "Budget is developed after the scope is clear. Key drivers include number of schools or learners, duration, facilitator requirements, kits or resources, travel and reporting needs." },
      { question: "What evidence and reporting can we receive?", answer: "Depending on the program, the evidence pack can include delivery trackers, participation records, activity or project evidence, approved photographs, feedback and a final summary." },
      { question: "Can employees volunteer as part of the partnership?", answer: "Where it genuinely adds value, employee mentoring, skill sessions, project judging or showcases can be included subject to permissions and safeguarding." },
      { question: "Can we review governance documents before proceeding?", answer: "Yes. The Governance & Transparency page brings together key registration information and public policies, and additional due-diligence documents can be shared as appropriate." },
      { question: "Is a donation automatically treated as a CSR project?", answer: "No. CSR eligibility and treatment depend on applicable law, company policy and the agreed project structure." },
    ],
  },
  cta: {
    eyebrow: "Ready to Explore Fit?",
    title: "Bring Us the CSR Goal. We’ll Help Shape the Delivery Model.",
    description:
      "A useful first conversation starts with a few basics. Share what you already know and we can help turn it into a practical implementation brief.",
    needs: ["CSR theme", "Geography", "Target audience", "Approx. scale", "Timeline", "Desired outcomes", "Reporting needs"],
    primary: { label: "Start a Partnership Conversation", href: "/contact" },
    secondary: { label: "See Our Impact", href: "/impact" },
  },
};

export type CsrPageContent = typeof csrPageContent;

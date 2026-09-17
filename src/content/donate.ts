export const donationContent = {
  hero: {
    eyebrow: "DONATE TO BUILD CAPABILITY",
    titleLine1: "Build Skills. Build Futures.",
    titleLine2: "Build the Nation.",
    intro:
      "Help students become confident problem-solvers through hands-on STEM, robotics and technology learning, and help youth develop practical AI and digital skills that can strengthen their path toward employment, self-employment and a better future.",
    primary: { label: "Create an Opportunity", href: "#sponsor" },
    secondary: { label: "Give Any Amount", href: "#donate-now" },
    badge: "From curiosity to capability. From skills to opportunity.",
    image: { src: "/images/placeholders/inclusive-community-stem.webp", alt: "Students and educators taking part in practical STEM learning" },
  },
  sponsorships: {
    eyebrow: "CHOOSE WHAT YOU WANT TO MAKE POSSIBLE",
    title: "Choose the opportunity you want to create.",
    intro:
      "Your contribution does more than fund a kit or workshop. It helps build capability through hands-on problem-solving, practical technology and future-ready skills.",
    items: [
      {
        id: "paper-circuit",
        amount: "₹1,200",
        audience: "SCHOOL RESOURCE",
        title: "Paper Circuit Kit",
        description:
          "Give younger students a hands-on first step into electricity by building working circuits with LEDs, switches and conductive paths.",
        bestFor: "Grades 2–6",
        develops: "Electricity • Circuits • Creativity",
        reuse: "Hands-on • Project-based • Multiple learners",
        cta: "Sponsor for ₹1,200",
        icon: "paper" as const,
        accent: "pink" as const,
      },
      {
        id: "robotics-car",
        amount: "₹3,500",
        audience: "SCHOOL RESOURCE",
        title: "Robotics Car Kit",
        description:
          "Let students build and program the same reusable platform for line following, obstacle avoidance, edge detection and other robotics challenges.",
        bestFor: "Grade 6 onwards",
        develops: "Sensors • Logic • Coding",
        reuse: "Reusable • Multiple projects",
        cta: "Sponsor for ₹3,500",
        icon: "robotics" as const,
        accent: "teal" as const,
      },
      {
        id: "arduino",
        amount: "₹4,000",
        audience: "SCHOOL RESOURCE",
        title: "Arduino Innovator Kit",
        description:
          "Help students turn ideas into working technology using electronics, sensors and code for automation, measurement and prototype projects.",
        bestFor: "Grade 6 onwards",
        develops: "Electronics • Sensors • Coding",
        reuse: "Reusable • Multiple projects",
        cta: "Sponsor for ₹4,000",
        icon: "arduino" as const,
        accent: "purple" as const,
      },
      {
        id: "ai-literacy",
        amount: "₹5,000",
        audience: "YOUTH SKILLS",
        title: "AI Literacy Workshop",
        description:
          "Help youth learn practical AI tools for content, images, video, presentations and productive digital work — skills that can support future employment, freelancing and self-employment opportunities.",
        bestFor: "Youth / young adults",
        develops: "AI Literacy • Digital Creation • Productivity",
        reuse: "Learn • Practise • Create",
        cta: "Sponsor a Workshop — ₹5,000",
        icon: "ai" as const,
        accent: "orange" as const,
        featured: true,
      },
      {
        id: "mechanics",
        amount: "₹7,500",
        audience: "SCHOOL RESOURCE",
        title: "Mechanics Learning Kit",
        description:
          "Sponsor a reusable LEGO-compatible construction kit through which younger students explore structures, gears, motion and mechanisms through repeated build challenges.",
        bestFor: "Grades 2–5",
        develops: "Mechanics • Construction • Problem-Solving",
        reuse: "Reusable • Multiple batches",
        cta: "Sponsor for ₹7,500",
        icon: "mechanics" as const,
        accent: "navy" as const,
      },
    ],
  },
  reusableValue: {
    eyebrow: "WHY THESE SPONSORSHIPS GO FURTHER",
    title: "One kit. Many learners. Many projects.",
    intro:
      "Where resources are reusable, they can support student teams across repeated sessions, projects and future batches—helping a single sponsorship create learning value again and again.",
    points: [
      { title: "Reusable", description: "Built for repeated learning." },
      { title: "Shared", description: "Used by multiple students and teams." },
      { title: "Project-Based", description: "One resource can support multiple challenges." },
      { title: "School-Focused", description: "Designed to keep creating learning value." },
    ],
  },
  pathways: {
    eyebrow: "THE REAL INVESTMENT IS CAPABILITY",
    title: "From first circuit to future opportunity.",
    school: {
      label: "FOR SCHOOL STUDENTS",
      title: "Build understanding step by step",
      steps: ["Paper Circuits", "Mechanics", "Robotics", "Arduino", "Innovation Projects"],
      note: "Students move from understanding basic concepts to building, coding and solving increasingly complex problems.",
    },
    youth: {
      label: "FOR YOUTH",
      title: "Move from digital user to digital creator",
      steps: ["AI Literacy", "Practise", "Create", "Portfolio", "Explore Opportunities"],
      note: "Practical AI and digital skills can strengthen readiness for further learning, work, freelancing and entrepreneurship. Participation does not guarantee employment or income.",
    },
    educator: {
      title: "7-Day STEM Educator Upskilling Programme",
      description:
        "Want to help a young person develop practical STEM knowledge and facilitation skills? Support our intensive 7-day educator pathway covering hands-on STEM, mechanics, electronics, Arduino and activity delivery.",
      cta: { label: "Ask About Sponsoring a Future STEM Educator", href: "/contact" },
    },
  },
  flexible: {
    eyebrow: "EVERY AMOUNT CAN HELP",
    title: "Not sponsoring the full amount? Contribute anyway.",
    intro:
      "Smaller contributions can be pooled with other donations to complete kits, workshops and programme delivery. You do not need to fund an entire resource to make your contribution useful.",
    amounts: ["₹500", "₹1,000", "₹2,000", "₹5,000", "Other"],
    note:
      "Complete sponsorship amounts describe the resource or workshop being supported. Where appropriate, reusable equipment is shared across students, teams and batches so it can continue creating value.",
  },
  trust: {
    eyebrow: "GIVE WITH CONFIDENCE",
    title: "Registered. Transparent. Accountable.",
    intro: "Review our registrations, policies and programme evidence before you contribute.",
    items: [
      { title: "NGO DARPAN", description: "DL/2020/0272040" },
      { title: "12A", description: "Registered" },
      { title: "80G", description: "Registered" },
      { title: "CSR-1", description: "Registered" },
    ],
    links: [
      { label: "Governance & Transparency", href: "/governance" },
      { label: "Our Impact", href: "/impact" },
      { label: "Donation & Refund Policy", href: "/donation-refund-policy" },
    ],
  },
};

export type DonationContent = typeof donationContent;

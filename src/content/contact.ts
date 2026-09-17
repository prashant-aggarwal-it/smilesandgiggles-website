export const contactContent = {
  hero: {
    eyebrow: "LET’S CONNECT",
    title: "Start a Conversation. Create Meaningful Impact.",
    intro:
      "Whether you are exploring a CSR partnership, bringing a program to a school or community, volunteering or supporting our work, tell us what you would like to make possible.",
  },
  enquiryTypes: [
    { value: "csr-partnership", label: "CSR / Institutional Partnership" },
    { value: "school-community-program", label: "School / Community Program" },
    { value: "volunteer", label: "Volunteer / Mentor" },
    { value: "donation", label: "Donation / Receipt" },
    { value: "media-collaboration", label: "Media / Collaboration" },
    { value: "general", label: "General Enquiry" },
  ],
  responseNote:
    "For partnership enquiries, sharing your organisation, geography and intended area of support helps us respond more meaningfully.",
};

export type ContactContent = typeof contactContent;

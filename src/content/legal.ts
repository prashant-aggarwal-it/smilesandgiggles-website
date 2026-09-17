export type LegalNote = {
  title: string;
  text: string;
  tone?: "purple" | "teal" | "orange" | "pink";
};

export type LegalSection = {
  id: string;
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  note?: LegalNote;
};

export type LegalDocument = {
  eyebrow: string;
  title: string;
  intro: string;
  effectiveDate: string;
  lastUpdated: string;
  quickPoints: string[];
  sections: LegalSection[];
};

const commonDates = {
  effectiveDate: "27 August 2026",
  lastUpdated: "27 August 2026",
};

export const privacyPolicy: LegalDocument = {
  eyebrow: "Legal & Privacy",
  title: "Privacy Policy",
  intro:
    "This policy explains how Smiles & Giggles Foundation may collect, use, protect and share personal information when you visit our website, contact us, volunteer, refer a school or community, support our work, or make a donation.",
  ...commonDates,
  quickPoints: [
    "We collect only information reasonably needed to respond, coordinate programs and operate the Foundation.",
    "Donation payments are processed through Razorpay; we do not intentionally collect or store your card, UPI PIN or bank authentication credentials on this website.",
    "We do not sell personal information.",
  ],
  sections: [
    {
      id: "information-we-collect",
      title: "1. Information We May Collect",
      paragraphs: [
        "The information we receive depends on how you interact with the website and the Foundation.",
      ],
      bullets: [
        "Contact information such as your name, email address, phone number, city and message when you contact us.",
        "Volunteer or mentor information such as profession, skills, interests, availability and preferred mode of contribution.",
        "School or community referral information such as institution name, location, approximate student reach, contact details and program interest.",
        "Donation-related information that may be made available to us by the payment processor, such as donor name, contact details, donation amount, transaction or payment reference, payment status and receipt-related information.",
        "Basic technical information generated when you use the website, such as browser/device information, IP address, pages visited and security logs, where such information is collected by our hosting, analytics or security providers.",
      ],
    },
    {
      id: "payments",
      title: "2. Donations and Payment Information",
      paragraphs: [
        "Online donations are processed using Razorpay or another payment service provider that we may appoint from time to time. Payment credentials are entered into the payment provider's checkout environment and are handled under that provider's own privacy and security practices.",
        "Smiles & Giggles Foundation does not intentionally collect or store full card numbers, CVV, UPI PINs, internet-banking passwords or similar payment authentication credentials on this website.",
      ],
      note: {
        title: "Payment privacy",
        text: "We may still receive transaction information needed for acknowledgement, reconciliation, receipt support, accounting and compliance.",
        tone: "teal",
      },
    },
    {
      id: "how-we-use",
      title: "3. How We Use Information",
      bullets: [
        "To respond to enquiries and communicate with you.",
        "To review volunteer, mentor and pro-bono interest and coordinate appropriate opportunities.",
        "To evaluate school/community referrals and plan potential programs.",
        "To process donation acknowledgements, reconcile payments and support eligible 80G receipt requests where applicable information is available.",
        "To administer programs, partnerships, events, reporting and legitimate organisational operations.",
        "To protect the website, prevent misuse, investigate security issues and comply with legal or regulatory obligations.",
        "To improve website usability, content and outreach where analytics or feedback tools are used.",
      ],
    },
    {
      id: "sharing",
      title: "4. When Information May Be Shared",
      paragraphs: [
        "We may share limited information only where reasonably necessary for the purpose for which it was collected or where required by law.",
      ],
      bullets: [
        "With service providers supporting hosting, email, forms, analytics, payment processing, accounting or other operational services.",
        "With schools, institutions, professionals or program partners when necessary to coordinate an enquiry, volunteer role, referral or program activity.",
        "With professional advisers, auditors, accountants or legal advisers where appropriate.",
        "With government authorities, regulators or law-enforcement bodies where disclosure is legally required or reasonably necessary to protect rights, safety or lawful interests.",
      ],
      note: {
        title: "No sale of personal information",
        text: "We do not sell personal information to advertisers or data brokers.",
        tone: "purple",
      },
    },
    {
      id: "children",
      title: "5. Children and Program Participants",
      paragraphs: [
        "Our work may involve children, but this public website is not intended to invite children to independently submit sensitive personal information. Where information about a child or student is required for a program, screening, referral, event or documentation activity, it should be handled through appropriate school, parent/guardian, professional and safeguarding processes.",
        "Health information and other sensitive program records should not be submitted through ordinary website contact or volunteer forms unless specifically requested through an appropriate secure process.",
      ],
    },
    {
      id: "cookies",
      title: "6. Cookies, Analytics and Similar Technologies",
      paragraphs: [
        "The website may use essential cookies or similar technologies needed for security and functionality. We may also use privacy-conscious analytics tools to understand how visitors use the site. If we introduce materially different tracking or advertising technologies, this policy should be updated accordingly.",
      ],
    },
    {
      id: "retention-security",
      title: "7. Retention and Security",
      paragraphs: [
        "We aim to retain personal information only for as long as reasonably needed for the relevant enquiry, volunteer relationship, program, donation, accounting, reporting or legal purpose.",
        "We use reasonable organisational and technical safeguards appropriate to the information we handle. However, no website, email system, hosting platform or internet transmission can be guaranteed to be completely secure.",
      ],
    },
    {
      id: "choices",
      title: "8. Your Choices and Requests",
      paragraphs: [
        "You may contact us to ask about personal information you have provided to us, request correction of inaccurate information, or request deletion where retention is not required for legitimate operational, accounting, legal or compliance reasons.",
        "Where you receive non-essential communications from us, you may ask us to stop sending them.",
      ],
    },
    {
      id: "external-links",
      title: "9. External Links and Third-Party Services",
      paragraphs: [
        "Our website may link to third-party websites, social platforms, maps, payment services or other services. Their privacy practices are governed by their own policies, and Smiles & Giggles Foundation is not responsible for the privacy practices of third-party services.",
      ],
    },
    {
      id: "updates-contact",
      title: "10. Changes to This Policy and Contact",
      paragraphs: [
        "We may revise this Privacy Policy when our website, programs, forms, payment methods or legal obligations change. The latest version will be published on this page with an updated date.",
        "For privacy-related questions or requests, contact Smiles & Giggles Foundation at smilesandgigglesfoundation@gmail.com or +91 9354251446.",
      ],
    },
  ],
};

export const termsOfUse: LegalDocument = {
  eyebrow: "Website Terms",
  title: "Terms of Use",
  intro:
    "These Terms of Use apply to your access to and use of the Smiles & Giggles Foundation website. By using this website, you agree to use it lawfully and responsibly.",
  ...commonDates,
  quickPoints: [
    "The website provides information about our programs, impact, partnerships, volunteering and donations.",
    "Submitting a form does not automatically create a volunteer, employment, beneficiary, school or partnership relationship.",
    "Website content may change as programs, availability and information evolve.",
  ],
  sections: [
    {
      id: "about-website",
      title: "1. About This Website",
      paragraphs: [
        "This website is operated for Smiles & Giggles Foundation to communicate its mission, programs, impact, governance, opportunities to participate and ways to support its work.",
        "Information on the site is provided in good faith for general informational and engagement purposes. Program availability, geography, timelines, eligibility, partners, costs, outcomes and other operational details may change.",
      ],
    },
    {
      id: "acceptable-use",
      title: "2. Acceptable Use",
      bullets: [
        "Use the website only for lawful purposes.",
        "Do not attempt to interfere with website security, availability, code, servers or connected systems.",
        "Do not submit false, misleading, abusive, unlawful or harmful information through forms or enquiries.",
        "Do not impersonate another person or organisation or misrepresent authority to act on their behalf.",
        "Do not scrape, reproduce or commercially exploit substantial website content without permission, except where permitted by law.",
      ],
    },
    {
      id: "content",
      title: "3. Website Content and Accuracy",
      paragraphs: [
        "We aim to keep website information useful and accurate, but we do not guarantee that every page will always be complete, current or error-free. Impact figures may be cumulative, rounded or based on program records and should be read together with any explanatory notes provided on the relevant page.",
        "Nothing on this website should be treated as a binding commitment to deliver a particular program, accept a proposal, provide funding, offer a volunteer role or enter into a partnership unless separately confirmed in writing by an authorised representative of the Foundation.",
      ],
    },
    {
      id: "no-advice",
      title: "4. No Professional Advice",
      paragraphs: [
        "Educational, health, technology, legal, tax or other information published on this website is general in nature and is not a substitute for advice from an appropriately qualified professional. Health-related program descriptions do not create a doctor-patient or dentist-patient relationship through the website.",
      ],
    },
    {
      id: "intellectual-property",
      title: "5. Intellectual Property",
      paragraphs: [
        "Unless otherwise stated, the website's original text, graphics, layout, program descriptions, brand elements and other original materials are owned by or used with permission by Smiles & Giggles Foundation.",
        "You may view and share links to public pages for personal, educational or non-commercial reference. Reproduction, republication, modification, branding use or commercial exploitation of substantial website material requires prior permission unless allowed by applicable law.",
      ],
    },
    {
      id: "photos-media",
      title: "6. Photographs, Stories and Program Media",
      paragraphs: [
        "Photographs, student work, stories, logos, partner names and event material may be displayed only where the Foundation believes it has an appropriate basis or permission to do so. Such material must not be downloaded, re-used or presented in a misleading context that implies endorsement, partnership or ownership that does not exist.",
      ],
    },
    {
      id: "donations",
      title: "7. Donations and Payment Services",
      paragraphs: [
        "Online donations may be processed by Razorpay or another third-party payment service provider. Your use of a payment service may also be subject to that provider's terms and policies.",
        "Donations are subject to our Donation & Refund Policy. Any tax benefit, including an 80G benefit where applicable, is subject to applicable law, donor eligibility and the availability of information required to issue a valid receipt.",
      ],
    },
    {
      id: "volunteering",
      title: "8. Volunteering, Mentoring and Referrals",
      paragraphs: [
        "Submitting a volunteer, mentoring or school/community referral form is an expression of interest only. It does not guarantee selection, assignment, onboarding, school access, reimbursement, employment, internship, partnership or any other formal relationship.",
        "Roles involving children, schools, health activities or sensitive settings may require identity verification, references, qualifications, background checks, safeguarding steps, institutional approvals, supervision or other requirements appropriate to the role.",
      ],
    },
    {
      id: "third-party",
      title: "9. Third-Party Websites and Services",
      paragraphs: [
        "Links to third-party websites, maps, social networks, payment services or external resources are provided for convenience. We do not control those services and are not responsible for their availability, content, security, terms or practices.",
      ],
    },
    {
      id: "liability",
      title: "10. Limitation of Responsibility",
      paragraphs: [
        "To the extent permitted by applicable law, Smiles & Giggles Foundation will not be responsible for indirect or consequential loss arising solely from reliance on general website information, interruption of website availability, or use of third-party services linked from the website.",
        "Nothing in these Terms is intended to exclude any responsibility that cannot lawfully be excluded.",
      ],
    },
    {
      id: "law-updates",
      title: "11. Applicable Law, Updates and Contact",
      paragraphs: [
        "These Terms are intended to operate under applicable laws of India. Subject to applicable law, disputes relating specifically to use of this website shall be subject to the jurisdiction of competent courts in Delhi.",
        "We may update these Terms as the website and our activities evolve. For questions, contact smilesandgigglesfoundation@gmail.com or +91 9354251446.",
      ],
    },
  ],
};

export const donationRefundPolicy: LegalDocument = {
  eyebrow: "Donor Information",
  title: "Donation & Refund Policy",
  intro:
    "We value every contribution made to Smiles & Giggles Foundation. This policy explains how online donations are processed, when a refund may be considered, and how donors can contact us about payment or receipt issues.",
  ...commonDates,
  quickPoints: [
    "Online donations are processed through Razorpay or another authorised payment service provider.",
    "Successfully processed donations are generally non-refundable, but duplicate, erroneous or exceptional transactions may be reviewed.",
    "Please contact us promptly with the payment reference if something went wrong.",
  ],
  sections: [
    {
      id: "use-of-donations",
      title: "1. Donations to Smiles & Giggles Foundation",
      paragraphs: [
        "Donations support the Foundation's charitable and programmatic work, which may include STEM education, future-ready and digital skills, preventive health and awareness, program materials, implementation, monitoring, outreach and other activities consistent with the Foundation's objectives.",
        "Unless a donation is accepted for a specifically confirmed restricted purpose, the Foundation may apply contributions where they are reasonably needed within its charitable objectives and approved activities.",
      ],
    },
    {
      id: "payment-processing",
      title: "2. Online Payment Processing",
      paragraphs: [
        "Online donations on this website may be completed using a Razorpay-hosted donation/payment button. Razorpay processes the payment transaction through its checkout environment. We may receive transaction information such as donor details, amount, payment status and payment reference for reconciliation and acknowledgement.",
      ],
      note: {
        title: "Do not share payment credentials with us",
        text: "Please never email or message us your CVV, UPI PIN, internet-banking password, OTP or similar authentication credentials.",
        tone: "orange",
      },
    },
    {
      id: "permitted-donations",
      title: "3. Permitted Donations and Foreign Contributions",
      paragraphs: [
        "A donor is responsible for ensuring that a donation is made from a source that may lawfully contribute under applicable Indian law.",
        "This website does not by itself represent that Smiles & Giggles Foundation is authorised to accept every form of foreign contribution. Donors outside India, foreign citizens, foreign entities, or persons unsure about the source of funds should contact us before donating so that the Foundation can confirm whether the contribution can be lawfully accepted.",
      ],
    },
    {
      id: "non-refundable",
      title: "4. General Rule: Donations Are Normally Final",
      paragraphs: [
        "A donation is a voluntary contribution. Once a donation has been successfully processed and accepted, it is generally treated as final and non-refundable.",
        "We recognise, however, that genuine payment mistakes or technical issues can occur. The Foundation may review refund requests in the circumstances described below.",
      ],
    },
    {
      id: "refund-circumstances",
      title: "5. When a Refund May Be Considered",
      bullets: [
        "The same donation was charged more than once because of a duplicate transaction.",
        "An incorrect amount was paid because of a clear input or technical error and the donor contacts us promptly.",
        "A transaction was successfully credited to the Foundation even though the payment flow displayed a technical failure or other material processing issue.",
        "The Foundation determines that it cannot lawfully or appropriately accept the contribution.",
        "Another exceptional circumstance is accepted by the Foundation after reviewing the available transaction records.",
      ],
      note: {
        title: "Refunds are reviewed case by case",
        text: "A request does not automatically create a right to a refund. Any refund remains subject to verification, applicable law, payment-processor rules and the Foundation's ability to identify the original transaction.",
        tone: "pink",
      },
    },
    {
      id: "request-refund",
      title: "6. How to Request a Refund",
      paragraphs: [
        "Please contact us as soon as possible and preferably within 7 days of the transaction at smilesandgigglesfoundation@gmail.com or +91 9354251446.",
        "To help us review the request, please provide the following information where available:",
      ],
      bullets: [
        "Donor name and contact details used for the payment.",
        "Donation amount and transaction date.",
        "Razorpay payment ID, transaction reference, bank reference or receipt number.",
        "A short explanation of the issue and the refund requested.",
        "Any supporting screenshot or payment confirmation that does not expose passwords, PINs, CVV or OTPs.",
      ],
    },
    {
      id: "refund-processing",
      title: "7. Review and Refund Processing",
      paragraphs: [
        "We will review the available payment records and may ask for additional non-sensitive information needed to verify the transaction. If a refund is approved, we will normally attempt to return it through the original payment method or another lawful method considered appropriate.",
        "We aim to communicate the outcome of a complete refund request within a reasonable period. Actual credit timelines after a refund is initiated depend on Razorpay, the bank, card network, UPI provider or other payment intermediary and may be outside the Foundation's control.",
      ],
    },
    {
      id: "failed-pending",
      title: "8. Failed, Pending or Duplicate Payments",
      paragraphs: [
        "If your account appears to have been debited but the donation is shown as failed or pending, please first allow the payment provider or bank's normal reconciliation process to complete. Some failed transactions are automatically reversed by the payment network.",
        "If the issue remains unresolved, contact us with the transaction reference so we can check whether the Foundation actually received the funds.",
      ],
    },
    {
      id: "receipts-80g",
      title: "9. Donation Acknowledgements and 80G Receipts",
      paragraphs: [
        "Where applicable, the Foundation may issue a donation acknowledgement or 80G receipt using the information provided by the donor and payment records available to us. Donors should provide accurate name, address, PAN or other information if and when such information is required for a compliant receipt.",
        "The availability and amount of any tax deduction depends on applicable law and the donor's circumstances. Donors should consult their tax adviser where necessary.",
        "If a donation is refunded after a receipt has been issued, the donor should not claim a tax benefit for the refunded amount and may be asked to return, disregard or accept cancellation/correction of the earlier receipt.",
      ],
    },
    {
      id: "chargebacks-contact",
      title: "10. Payment Disputes and Contact",
      paragraphs: [
        "If you believe a transaction was made in error, please contact us before initiating a chargeback where practical. Direct communication often allows duplicate or technical payment issues to be resolved faster.",
        "For donation, payment or receipt support, contact Smiles & Giggles Foundation at smilesandgigglesfoundation@gmail.com or +91 9354251446, F184/D, Laxmi Nagar, Delhi - 110092.",
      ],
    },
  ],
};

export interface Member {
  name: string;
  role: string;
  affiliation: string;
  image?: string;
  description: string;
}

export const cofounders: Member[] = [
  {
    name: "X. Edward Guo",
    role: "Co-Founder",
    affiliation: "Columbia University",
    description: "Honoring excellence and championing Asian American leadership across academic and public spheres.",
  },
  {
    name: "Mei Gao",
    role: "Co-Founder",
    affiliation: "IDG Capital",
    description: "Driving strategic growth and supporting the next generation of Asian American innovators and leaders.",
  },
  {
    name: "Kam Leong",
    role: "Co-Founder",
    affiliation: "Columbia University",
    description: "Advancing the visibility and influence of Asian Americans in the sciences and national institutions.",
  },
  {
    name: "Jay Liang",
    role: "Co-Founder",
    affiliation: "UCA PAC",
    description: "Elevating Asian American representation in civic engagement, public service, and national governance.",
  },
  {
    name: "Lei Carol Liang",
    role: "Co-Founder",
    affiliation: "JPM Chase",
    description: "Connecting distinguished leaders and fortifying the financial sustainability of the Asian American community.",
  },
  {
    name: "Catherine Pan",
    role: "Co-Founder",
    affiliation: "Dorsey & Whitney LLP",
    description: "Establishing a premier platform for Asian American public leadership and professional excellence.",
  },
  {
    name: "Sally Shi",
    role: "Co-Founder",
    affiliation: "ScalableVision Capital",
    description: "Perpetuating AAPI leadership and mentorship through strategic alliances and youth development.",
  }
];

export interface Program {
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  audience: string;
  outcomes: string[];
}

export const programs: Program[] = [
  {
    title: "Summer Academy",
    slug: "summer-academy",
    shortDescription: "A premier fellowship expanding beyond science and engineering to include leadership, history, and art for high-achieving youth.",
    fullDescription: "The Summer Academy is designed to cultivate the next generation of pioneers. By combining rigorous academic exploration with leadership development, we equip high school students with the tools to shape ideas and fortify institutions.",
    audience: "High School Students",
    outcomes: ["Leadership Development", "Cultural & Historical Education", "Mentorship from Distinguished Fellows"]
  },
  {
    title: "Congressional Fellows",
    slug: "congressional-fellows",
    shortDescription: "Elevating and preparing Asian American leaders for civic influence, public service, and national governance.",
    fullDescription: "Our Congressional Fellows program serves as a direct pipeline connecting rising stars with established political leaders. We provide the mentorship, network, and platform necessary to strengthen Asian American representation in public service.",
    audience: "Young Professionals & Early-Career Leaders",
    outcomes: ["Civic Engagement", "Public Policy Mentorship", "Direct Governance Experience"]
  }
];

export interface FaqItem {
  question: string;
  answer: string;
}

export const faqs: FaqItem[] = [
  {
    question: "What is the mission of AAAAS?",
    answer: "To honor excellence, unite leadership, and elevate Asian American public impact across the arts, sciences, humanities, business, and public life."
  },
  {
    question: "Who is eligible to become a Fellow?",
    answer: "Fellows are high-profile Asian American leaders—prominent scholars, artists, politicians, and innovators—recognized for extraordinary achievements and a commitment to shaping the future of the United States."
  },
  {
    question: "How does the organization support younger generations?",
    answer: "Through our \"feeder system\" of mentorship, including the Summer Academy for high schoolers and the Congressional Fellows program for young professionals, connecting them directly with visionary leaders."
  }
];

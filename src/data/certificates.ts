export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
  category: string;
  skills: string[];
  imageUrl: string;
}

export const certificates: Certificate[] = [
  {
    id: "cert-1",
    title: "Educational Tour Completion",
    issuer: "WATT",
    date: "November 22, 2025",
    description:
      "Certificate of Completion for successfully participating in the National Educational Tour Program, demonstrating commitment to experiential learning and personal growth.",
    category: "Educational Tour",
    skills: ["Experiential Learning", "Cultural Awareness", "Company Exposure"],
    imageUrl: "/gallery/watt_cert.jpg", 
  },
  {
    id: "cert-2",
    title: "Information Management Certificate",
    issuer: "CodeChum",
    date: "December 3, 2025",
    description:
      "Certificate of completion Information Management in CC105-2B (01057)-1000-1200_TTH with a total score of 969/1130",
    category: "Database Management",
    skills: ["Database Design", "SQL", "Data Integrity"],
    imageUrl: "/gallery/wardo_cert.jpg",
  },
];
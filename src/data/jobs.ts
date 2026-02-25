export interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  type: "Full-Time" | "Part-Time" | "Contract";
  posted: string;
  description: string;
  requirements: string[];
}

export const jobs: Job[] = [
  {
    id: "j1",
    title: "Sales Manager — Commercial Vehicles",
    department: "Sales",
    location: "Lahore",
    type: "Full-Time",
    posted: "2026-02-15",
    description: "Lead a team of sales executives to drive commercial vehicle sales across Punjab. Manage dealer relationships and meet quarterly targets.",
    requirements: ["5+ years in automotive sales", "Team management experience", "Knowledge of commercial vehicle market", "MBA preferred"],
  },
  {
    id: "j2",
    title: "Service Technician — Diesel Engines",
    department: "After-Sales",
    location: "Karachi",
    type: "Full-Time",
    posted: "2026-02-10",
    description: "Diagnose and repair diesel engines in commercial vehicles. Maintain service quality standards at our Karachi service center.",
    requirements: ["DAE Mechanical/Automotive", "3+ years diesel engine experience", "Knowledge of Euro II systems", "Valid driving license"],
  },
  {
    id: "j3",
    title: "Digital Marketing Executive",
    department: "Marketing",
    location: "Lahore",
    type: "Full-Time",
    posted: "2026-02-01",
    description: "Plan and execute digital campaigns across social media, Google Ads, and email. Track performance and optimize lead generation.",
    requirements: ["2+ years digital marketing", "Experience with Google Ads & Meta", "Analytics skills", "Automotive industry a plus"],
  },
];

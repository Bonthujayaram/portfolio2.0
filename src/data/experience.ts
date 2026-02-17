// Experience data

export interface Experience {
  id: string;
  company: string;
  role: string;
  duration: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
  logo?: string;
  type?: "internship" | "part-time" | "full-time";
}

export const experienceData: Experience[] = [
  {
    id: "htic-imaging-intern",
    company: "Healthcare Technology Innovation Centre (HTIC), IIT Madras",
    role: "Project Intern - Imaging Team",
    duration: "Jan 2026 - Present",
    location: "Chennai, Tamil Nadu, India (On-site)",
    description:
      "Contributing to a customized 3D Slicer-based medical imaging platform for image-guided therapy and clinical research.",
    achievements: [
      "Integrate tracking systems, imaging modules, and OpenIGTLink pipelines for real-time instrument visualization",
      "Design, test, and validate custom Slicer modules, workflows, and extensions to improve navigation accuracy",
      "Collaborate with researchers to analyze imaging data, optimize processing workflows, and improve system performance",
      "Gain hands-on experience in medical image processing, surgical navigation, and research-oriented healthcare software"
    ],
    technologies: [
      "Python",
      "C++",
      "Qt",
      "CMake",
      "3D Slicer",
      "OpenIGTLink",
      "Medical Imaging",
      "Surgical Navigation",
      "Kitware"
    ],
    type: "internship"
  },
  {
    id: "cranes-varsity-intern",
    company: "Cranes Varsity",
    role: "Data Science Intern",
    duration: "May 2025 - Aug 2025",
    location: "Remote",
    description:
      "Worked on Data Science projects involving Machine Learning algorithms and data analysis.",
    achievements: [
      "Implemented Machine Learning models for data prediction",
      "Analyzed large datasets to derive meaningful insights",
      "Gained hands-on experience with Python libraries for Data Science"
    ],
    technologies: [
      "Python",
      "Machine Learning",
      "Data Analysis",
      "Pandas",
      "Scikit-learn",
      "Sql",
      "Power Bi"
    ],
    type: "internship"
  },
  {
    id: "krunatic-intern",
    company: "Krunatic Solution",
    role: "Full Stack Web Developer Intern",
    duration: "Jun 2024 - Aug 2024",
    location: "Remote",
    description:
      "Contributed to full-stack web development projects, building responsive interfaces and robust backend systems.",
    achievements: [
      "Developed and maintained web applications using full-stack technologies",
      "Collaborated with the team to implement new features and fix bugs",
      "Ensured responsiveness and performance of web pages"
    ],
    technologies: ["Web Development", "Frontend", "Backend", "JavaScript"],
    type: "internship"
  }
];

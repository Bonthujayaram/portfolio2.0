// Leadership and achievements data

export interface Achievement {
  id: string;
  title: string;
  organization: string;
  description: string;
  impact: string[];

}

export const achievementsData: Achievement[] = [


  {
    id: "cranes-varsity-intern",
    title: "Data Science Intern",
    organization: "Cranes Varsity (May - Aug 2025)",
    description: "Gained hands-on experience in data science and machine learning by working on data preprocessing, model building, and applied ML workflows for real-world datasets and business use cases, including model evaluation, feature engineering, and performance optimization techniques.",
    impact: []
  },
  {
    id: "krunatic-intern",
    title: "Full Stack Web Developer Intern",
    organization: "Krunatic Solution (Jun - Aug 2024)",
    description: "Worked as a Full Stack Web Developer intern, contributing to frontend and backend development, building responsive web interfaces, integrating APIs, and collaborating on real-world application features, while following clean code practices and agile development workflows.",
    impact: []
  },
  {
    id: "nptel-certification",
    title: "NPTEL+ Certification",
    organization: "IIT Madras (Apr 2025)",
    description: "Completed an NPTEL+ certified course on GIS, Drones, and Machine Learning for Resource Mapping. Gained practical exposure to geospatial analysis, drone-based data acquisition, ML-driven decision-making, and real-world spatial problem-solving techniques used in industry projects.",
    impact: []
  },
  {
    id: "dsa-certification",
    title: "DSA Certification",
    organization: "CodeTantra (Mar 2024)",
    description: "Completed a comprehensive course on Data Structures and Algorithms using C, focused on placement-oriented problem solving, core concepts, and implementation efficiency, with strong emphasis on time complexity, memory optimization, and coding best practices.",
    impact: []
  },
  {
    id: "data-science-gold",
    title: "Data Science with AI/ML using Python – GOLD Certification",
    organization: "FutureSkills Prime/NASSCOM (11 Aug 2025)",
    description: " Gold-level certification demonstrating strong foundations in Python, machine learning, and applied data science, aligned with industry competency standards.",
    impact: []
  },
  {
    id: "agentic-ai-course",
    title: "The Complete Agentic AI Engineering Course",
    organization: "Udemy (30 Oct 2025)",
    description: "Completed an in-depth course on Agentic AI Engineering, covering autonomous AI agents, tool usage, planning, memory, and multi-step reasoning. Gained hands-on experience in designing and building intelligent agent-based systems using modern AI frameworks.",
    impact: []
  },
  {
    id: "ai-engineer-core",
    title: "AI Engineer,LLM Engineering, RAG, QLoRA & Agents",
    organization: "Udemy (21 Nov 2025)",
    description: "Completed an advanced AI engineering track focused on Large Language Models, Retrieval-Augmented Generation (RAG), QLoRA fine-tuning, and AI agents. Built a strong understanding of modern LLM pipelines, optimization techniques.",
    impact: []
  },
  {
    id: "web-dev-course",
    title: "Complete Web Development Course",
    organization: "Udemy (21 Nov 2025)",
    description: "Completed a comprehensive Web Development course covering HTML, CSS, JavaScript, frontend frameworks, and backend fundamentals. Developed multiple projects to strengthen skills in responsive design, and end-to-end web development.",
    impact: []
  },
];

// Education data
export interface Education {
  id: string;
  institution: string;
  degree: string;
  duration: string;
  location: string;

}

export const educationData: Education[] = [
  {
    id: "lloyd",
    institution: "Centurion University of Technology and Management",
    degree: "B.Tech in Computer Science Engineering",
    duration: "2022 - 2026",
    location: "Andhra Pradesh, India",

  }
];

export const personalInfo = {
  name: "Yuan-Hsiang Huang",
  nickname: "Oliver",
  title: "Information Management Student",
  subtitle: "Operations Research · Data Science · Software Engineering",
  university: "National Taiwan University",
  email: "oliver20050304@gmail.com",
  location: "Taipei, Taiwan",
  phone: "+886-939-966-954",
  github: "https://github.com/ntumarmot",
  linkedin: "https://www.linkedin.com/in/oliver-huang-047767331/",
  bio: "A passionate Information Management student at NTU with a strong foundation in optimization, data science, and software engineering. I enjoy solving complex real-world problems through mathematical modeling and algorithmic thinking.",
};

export const education = [
  {
    school: "National Taiwan University",
    degree: "Bachelor of Science in Information Management",
    period: "Sep. 2023 – June 2027",
    location: "Taipei, Taiwan",
    gpa: "4.03 / 4.30 (Junior) · 3.96 / 4.30 (Sophomore)",
    courses: [
      "Programming Design",
      "Data Structure and Algorithm",
      "Operating System",
      "Operations Research",
      "Computer Networking",
      "Database Management",
      "Linear Algebra",
      "Statistics",
    ],
    highlight:
      "A+ in Computer Networking (top 13% of class) · Top of the class in Statistics",
  },
];

export const experience = [
  {
    org: "Taiwan Academy of Banking and Finance",
    role: "AI Intern",
    period: "Jun. 2026 – Aug. 2026",
    location: "Taipei, Taiwan",
    bullets: [
      "Developed an AI chatbot for financial exam preparation using Retrieval-Augmented Generation (RAG).",
      "Built and optimized document retrieval pipelines to improve the chatbot's ability to answer finance-related questions.",
      "Processed financial exam materials and knowledge sources to support accurate and context-aware responses.",
    ],
  },
  {
    org: "Department of Information Management, National Taiwan University",
    role: "Teaching Assistant · Programming Design (First-Year Core Course)",
    period: "Aug. 2026 – Dec. 2026",
    location: "Taipei, Taiwan",
    bullets: [
      "Supported more than 60 first-year students with little to no prior programming experience in building foundational C++ programming and problem-solving skills.",
    ],
  },
  {
    org: "NTU AI Club",
    role: "Technical Department · Teaching Team Member",
    period: "July 2026 – Feb. 2027",
    location: "Taipei, Taiwan",
    bullets: [],
  },
  {
    org: "NTU Mystery Club",
    role: "Visual Design Officer",
    period: "Mar. 2025 – Present",
    location: "Taipei, Taiwan",
    bullets: [
      "Designed promotional materials including social media content to enhance club visibility.",
      "Managed and maintained the club's public image through consistent visual branding.",
    ],
  },
];

export const projects = [
  {
    id: "mip-production",
    title: "Multi-stage Production Planning Optimization",
    subtitle: "High-level Planning & Operations Research",
    period: "March 2026 – Present",
    status: "In Progress",
    statusColor: "yellow",
    description:
      "Developing a Mixed-Integer Programming (MIP) model for a multi-station production system to optimize scheduling across various material categories and work centers.",
    bullets: [
      "Developed a MIP model for a multi-station production system to optimize scheduling across various material categories and work centers.",
      "Formulated complex constraints including dynamic inventory balance, BOM consumption, and station capacity limits with overtime considerations.",
      "Implemented an objective function to minimize total costs (delivery penalties + overtime labor) using Python and Gurobi optimizer.",
      "Modeled sophisticated logical relationships such as setup time triggers and warehouse volume capacities using Big-M formulations.",
      "(Expected Dec. 2026) Deploying a scalable decision-support tool balancing inventory holding costs against customer service levels.",
    ],
    tags: ["Python", "Gurobi", "MIP", "Operations Research", "Optimization"],
    icon: "⚙️",
    github: null,
    demo: null,
  },
  {
    id: "ubike",
    title: "U-Bike Reallocation Project",
    subtitle: "Collaborative Operations Research",
    period: "April 2025 – June 2025",
    status: "Completed",
    statusColor: "green",
    description:
      "Collaborated with an international team to solve YouBike supply-demand imbalances across the NTU campus by optimizing dynamic reallocation via worker scheduling.",
    bullets: [
      "Collaborated with an international team to solve YouBike supply-demand imbalances across NTU campus.",
      "Engineered a data pipeline using Python to process raw trip logs, extracting hourly demand and utilizing KMeans clustering to analyze usage patterns.",
      "Formulated a MIP and developed scalable O(jdp) greedy heuristic algorithms with Python and Gurobi to minimize unmet demand and worker costs.",
      "Achieved near-optimal reallocation schedules — heuristic outperformed naive baselines by significantly reducing unmet demand with ~0.2s runtime on 48,000+ records.",
    ],
    tags: ["Python", "Gurobi", "KMeans", "Greedy Algorithm", "Data Pipeline"],
    icon: "🚲",
    github: null,
    demo: null,
  },
  {
    id: "hci-research",
    title: "Navigational HCI Research",
    subtitle: "Maximization Tendencies & Google Maps",
    period: "Feb. 2025 – June 2025",
    status: "Completed",
    statusColor: "green",
    description:
      "Conducted mixed-methods research to investigate how cognitive decision-making styles (Maximizers vs. Satisficers) influence user interactions with navigation tools.",
    bullets: [
      "Conducted mixed-methods research (Online Survey n=84, Email Interviews n=5) on cognitive decision-making styles in navigation tools.",
      "Performed data wrangling and statistical analysis using single and multiple linear regression models to evaluate behavioral traits.",
      "Identified statistically significant correlation (p < 0.05): Maximizers evaluate multiple routes more frequently.",
      "Concluded that highly structured digital recommendation systems standardize user behavior, reducing cognitive load and choice paralysis.",
    ],
    tags: ["Python", "Statistical Analysis", "Regression", "HCI", "Research"],
    icon: "🗺️",
    github: null,
    demo: null,
  },
  {
    id: "bible-reader",
    title: "Pure Bible Reader",
    subtitle: "Full-Stack Web App · PWA",
    period: "2026",
    status: "Completed",
    statusColor: "green",
    description:
      "A clean, mobile-friendly Bible reader supporting Traditional Chinese (CUV) and English (KJV), built as a Progressive Web App installable on iOS and Android.",
    bullets: [
      "Built a full-featured Bible reader supporting Traditional Chinese (CUV) and English (KJV) translations with complete 66-book navigation and chapter switching.",
      "Implemented font scaling and six colour themes for a comfortable and personalised reading experience.",
      "Added keyword search with jump-to-chapter functionality and auto-saves reading progress via localStorage.",
      "Deployed as a PWA — users can install it on iPhone or Android as a native-like app directly from the browser.",
    ],
    tags: ["JavaScript", "HTML", "CSS", "PWA", "localStorage"],
    icon: "📖",
    github: "https://github.com/ntumarmot/bible-web-app",
    demo: "https://ntumarmot.github.io/bible-web-app/",
  },
];

export const skills = {
  programming: [
    { name: "C++", level: 70 },
    { name: "Python", level: 90 },
    { name: "SQL", level: 75 },
    { name: "Java", level: 60 },
  ],
  tools: ["Git", "GitHub", "GitLab", "Notion", "Markdown", "HackMD"],
  aiTools: ["Codex", "Claude Code"],
  packages: ["NumPy", "Pandas", "Gurobi"],
  languages: [
    { lang: "Mandarin", level: "Native", flag: "🇹🇼" },
    { lang: "English", level: "Fluent · TOEIC 940 · TOEFL 103", flag: "🇺🇸" },
    { lang: "Japanese", level: "Beginner", flag: "🇯🇵" },
  ],
};

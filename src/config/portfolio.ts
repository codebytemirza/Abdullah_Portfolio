
import type { LucideIcon } from 'lucide-react';
import { Home, Wrench, Briefcase, BrainCircuit, Mail, Linkedin, Github, Twitter, Brain, Database, Code, Terminal, ShieldCheck, Users, Rocket, Lightbulb, FileText, BarChart2, SearchCode, Bot, UserCheck, Cpu, Building, Phone, MapPin } from 'lucide-react';

export interface NavItem {
  title: string;
  href: string;
  icon: LucideIcon;
}

export interface SkillCategory {
  category: string;
  items: string[];
  icon?: LucideIcon;
}

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  icon?: LucideIcon; // Optional: specific icon for a project, defaults to a generic one (e.g., Layers)
  links: {
    live?: string;
    github?: string;
  };
}

export interface PortfolioConfig {
  name: string;
  professionalTitle: string;
  address: string;
  phone: string;
  idCard?: string; // Optional as it's sensitive
  socialLinks: {
    linkedin: string;
    github: string;
    // twitter?: string; // Add if you have a Twitter/X link
  };
  contactEmail: string;
  summary: string;
  hero: {
    titlePrefix: string;
    name: string;
    subtitle: string;
    cta: string;
  };
  skills: SkillCategory[];
  projects: Project[];
  professionalHighlights?: Array<{ title: string; description: string; icon?: LucideIcon }>; // Optional section
  education: {
    degree: string;
    university: string;
    period: string;
    relevantCoursework?: string[];
    icon?: LucideIcon;
  };
  certifications?: Array<{ name: string; issuingOrganization: string; year: string; link?: string; icon?: LucideIcon }>;
  aiIntro: {
    portfolioSummary: string;
  };
  sidebarNav: NavItem[];
}

export const portfolioConfig: PortfolioConfig = {
  name: "MUHAMMAD ABDULLAH",
  professionalTitle: "Data Analyst | AI & Machine Learning Developer | Data Science Specialist",
  address: "Quetta Textile Mill Pvt. Ltd., 45KM, Multan Road, Lahore",
  phone: "+923284119134",
  idCard: "3650107801579", // Consider if you want this publicly visible
  socialLinks: {
    linkedin: "https://www.linkedin.com/in/muhammad-abdullah-ai-ml-developer/",
    github: "https://github.com/codebytemirza",
  },
  contactEmail: "abdullahcodewizard@gmail.com",
  summary: "I’m a data analyst and data scientist who enjoys working on AI and generative AI projects with tools like Python, Power BI, TensorFlow, and LangChain. I make things like sales dashboards for Amazon and Blinkit or AI chatbots for real estate and education, which help people in e-commerce, healthcare, and other areas. My skills in data analysis and machine learning let me work on cool projects that make a difference.",
  hero: {
    titlePrefix: "Hi, I'm",
    name: "Abdullah",
    subtitle: "A Data Analyst and AI & Machine Learning Developer specializing in Python, Power BI, TensorFlow, and LangChain. I craft data-driven solutions and AI applications for e-commerce, healthcare, and beyond.",
    cta: "Connect on LinkedIn", // Changed CTA to be more specific
  },
  skills: [
    {
      category: "Programming Languages",
      items: ["Python", "C++", "Java", "SQL", "HTML", "CSS", "JavaScript", "PHP"],
      icon: Code,
    },
    {
      category: "AI & Machine Learning",
      items: ["TensorFlow", "Keras", "PyTorch", "Scikit-learn", "XGBoost", "LightGBM", "LangChain", "Vertex AI"],
      icon: Brain,
    },
    {
      category: "Data Science & Visualization",
      items: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Plotly", "PowerBI", "Excel"],
      icon: BarChart2, 
    },
    {
      category: "Web Development",
      items: ["Streamlit", "Gradio", "Next.js", "React", "Tailwind CSS"],
      icon: Rocket,
    },
    {
      category: "Data Management",
      items: ["Snowflake", "MongoDB", "SQL Server", "PostgreSQL", "Firebase"], // Added from your resume
      icon: Database,
    },
    {
      category: "DevOps & Tools",
      items: ["Docker", "Linux", "Git & GitHub", "Google Colab", "Semgrep"],
      icon: Terminal,
    },
     {
      category: "Other Skills",
      items: ["NLP", "Image Processing", "AI Chatbots", "Agile Methodologies", "Static Analysis", "Data-Driven Decision Making", "Custom Model Training"],
      icon: Lightbulb,
    },
  ],
  projects: [
    {
      title: "Blinkit Branch Sales Data Analyst",
      description: "Excel Pivot Table for data exploration. Python and Google Colab for data Cleaning, EDA, KPI Findings and Visualizations.",
      techStack: ["Excel", "Python", "Pandas", "Google Colab", "Matplotlib", "Seaborn"],
      icon: BarChart2,
      links: {},
    },
    {
      title: "Amazon Sales Data Analyst",
      description: "Performed Initial Decision from Excel Data Exploration. Did EDA and data cleaning with Python and Google Colab. Professional Dashboard with PowerBI.",
      techStack: ["Excel", "Python", "PowerBI", "Pandas", "Google Colab"],
      icon: BarChart2,
      links: {},
    },
    {
      title: "fMRI ASD Detection using Deep Learning",
      description: "Developed a CNN to analyze fMRI data for Autism Spectrum Disorder detection, including preprocessing of neuroimaging data and custom training.",
      techStack: ["Python", "TensorFlow", "NumPy", "Pandas", "Matplotlib", "Google Colab"],
      icon: Brain,
      links: {},
    },
    {
      title: "Skin Cancer Classification using CNNs",
      description: "Designed a CNN model to classify skin lesions. Implemented data augmentation, cross-validation, and a Streamlit app for real-time predictions.",
      techStack: ["Python", "TensorFlow", "Keras", "OpenCV", "Streamlit", "Matplotlib", "Google Colab"],
      icon: Cpu,
      links: {},
    },
    {
      title: "Wheat Crop Disease Classification (Vision Transformers)",
      description: "Built a transformer-based solution for identifying diseases in wheat crop images. Integrated a Gradio UI for farmers.",
      techStack: ["PyTorch", "Vision Transformers", "Gradio", "Python"],
      icon: Cpu,
      links: {},
    },
     {
      title: "Scrape Graph for Business Targeting",
      description: "Built a scraping tool to extract and save business data from Google Maps for marketing strategies.",
      techStack: ["Python", "Web Scraping"], // Simplified tech stack
      icon: SearchCode,
      links: {},
    },
    {
      title: "Chatbot for Personal Course Site",
      description: "Designed an AI chatbot to provide real-time support for users navigating an educational course site.",
      techStack: ["Python", "LangChain", "NLP", "Generative AI"],
      icon: Bot,
      links: {},
    }
  ],
  professionalHighlights: [
    {
      title: "LLM Grep (Static Analysis + AI)",
      description: "Static code analysis tool combining Semgrep with AI-driven analysis using LLMs.",
      icon: SearchCode,
    },
    {
      title: "Email Management Python Script with LLM",
      description: "Developed a script to manage emails, leveraging LLMs for intelligent processing.", // Reworded based on understanding
      icon: Mail,
    },
    {
      title: "Heart Risk Prediction App",
      description: "Delivered a robust application for heart disease risk prediction based on user-provided health metrics.",
      icon: Cpu, // Or a health-related icon if available
    },
    {
      title: "Real Estate RAG ChatBot",
      description: "Created an AI chatbot with Streamlit UI and LangChain for real estate query handling, integrated with Snowflake.",
      icon: Bot,
    },
    {
      title: "Predictive Analysis for Employment Outcomes",
      description: "Conducted EDA and predictive modeling to evaluate how language proficiency, age, and regional factors influence employment.",
      icon: BarChart2,
    },
     {
      title: "Deep Learning Assignments",
      description: "Completed various deep learning assignments for different student clients.",
      icon: Lightbulb,
    }
  ],
  education: {
    degree: "Bachelor of Computer Science",
    university: "Superior University Lahore",
    period: "Nov 2022 - Expected Nov 2026",
    relevantCoursework: ["Programming Fundamentals", "OOP", "Data Structures", "Databases", "Web Application Development", "Digital Image Processing", "Theory of Programming Languages", "Intro to Software Engineering"],
    icon: Building, // Icon for education
  },
  certifications: [
    {
      name: "Professional Data Science Certificate",
      issuingOrganization: "IBM",
      year: "2024",
      link: "https://coursera.org/share/62f76eff0094675130d0561a45edd5cd",
      icon: FileText,
    },
    {
      name: "Generative AI Explorer – Vertex AI",
      issuingOrganization: "Google", // Inferred
      year: "2025", // Assuming this is correct
      link: undefined, // Add link if available
      icon: BrainCircuit,
    },
    {
      name: "PowerBI Data Competencies", // Simplified name
      issuingOrganization: "Microsoft", // Inferred
      year: "N/A", // Add year if known
      link: "https://learn.microsoft.com/en-us/users/mirzaabdullah-9135/",
      icon: BarChart2,
    }
  ],
  aiIntro: {
    portfolioSummary: "I’m Muhammad Abdullah, a Data Analyst and AI/ML Developer with a strong foundation in Python, Power BI, TensorFlow, and LangChain. I specialize in transforming data into actionable insights and developing intelligent applications, from e-commerce sales dashboards to sophisticated AI chatbots for real estate and education. My work in fMRI analysis for ASD detection and skin cancer classification showcases my ability to tackle complex challenges in healthcare AI. I am passionate about leveraging data science and machine learning to create impactful solutions and drive innovation.",
  },
  sidebarNav: [
    { title: "Home", href: "#hero", icon: Home },
    { title: "Skills", href: "#skills", icon: Wrench },
    { title: "Projects", href: "#projects", icon: Briefcase },
    // { title: "Highlights", href: "#highlights", icon: Star }, // Example, if you add a highlights section
    // { title: "Education", href: "#education", icon: GraduationCap }, // Example
    { title: "AI Intro", href: "#ai-intro", icon: BrainCircuit },
    { title: "Contact", href: "#contact", icon: Mail },
  ],
};

export const socialIcons: { [key: string]: LucideIcon } = {
  linkedin: Linkedin,
  github: Github,
  twitter: Twitter,
  email: Mail,
  phone: Phone,
  address: MapPin,
};

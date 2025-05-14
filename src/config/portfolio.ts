
import type { LucideIcon } from 'lucide-react';
import { Home, Wrench, Briefcase, BrainCircuit, Mail, Linkedin, Github, Twitter, Brain, Database, Code, Terminal, ShieldCheck, Users, Rocket, Lightbulb } from 'lucide-react';

export interface NavItem {
  title: string;
  href: string;
  icon: LucideIcon;
}

export interface SkillCategory {
  category: string;
  items: string[];
  icon?: LucideIcon; // Optional: if we want to add icons to skill categories
}

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  imageUrl: string;
  imageHint: string;
  links: {
    live?: string;
    github?: string;
  };
}

export interface PortfolioConfig {
  name: string;
  professionalTitle: string;
  socialLinks: {
    linkedin: string;
    github: string;
    // twitter?: string; // Twitter removed as per new info
  };
  contactEmail: string;
  hero: {
    titlePrefix: string;
    name: string; // Main name for Hero section, e.g., "Abdullah"
    subtitle: string;
    cta: string;
  };
  skills: SkillCategory[];
  projects: Project[];
  aiIntro: {
    portfolioSummary: string;
  };
  sidebarNav: NavItem[];
}

export const portfolioConfig: PortfolioConfig = {
  name: "MUHAMMAD ABDULLAH", // Full name for sidebar header etc.
  professionalTitle: "Data Analyst | AI & ML Developer | Data Science Specialist",
  socialLinks: {
    linkedin: "https://www.linkedin.com/in/muhammad-abdullah-ai-ml-developer/",
    github: "https://github.com/codebytemirza",
  },
  contactEmail: "abdullahcodewizard@gmail.com",
  hero: {
    titlePrefix: "Hi, I'm",
    name: "Abdullah", // Prominent name in hero
    subtitle: "A Data Analyst and AI & Machine Learning Developer specializing in Python, Power BI, TensorFlow, and LangChain. I craft data-driven solutions and AI applications for e-commerce, healthcare, and beyond.",
    cta: "Contact Me",
  },
  skills: [
    {
      category: "Programming Languages",
      items: ["Python", "C++", "Java", "SQL", "HTML", "CSS", "JavaScript", "PHP"],
      icon: Code,
    },
    {
      category: "Frontend & UI Development",
      items: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS", "Streamlit", "Gradio"],
      icon: Rocket,
    },
    {
      category: "Backend & API Development",
      items: ["Node.js", "Express.js", "Python (Flask/Django)", "PHP"],
      icon: Terminal,
    },
    {
      category: "AI & Machine Learning",
      items: ["TensorFlow", "Keras", "PyTorch", "Scikit-learn", "XGBoost", "LightGBM", "LangChain", "Vertex AI"],
      icon: Brain,
    },
    {
      category: "Data Science & Visualization",
      items: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Plotly", "PowerBI"],
      icon: Wrench, // Using Wrench as a general tool icon
    },
    {
      category: "Databases & Storage",
      items: ["PostgreSQL", "MongoDB", "SQL Server", "Snowflake", "Firebase"],
      icon: Database,
    },
    {
      category: "DevOps & Tools",
      items: ["Git & GitHub", "Docker", "Linux", "Google Colab", "Semgrep"],
      icon: Terminal, // Re-using terminal, or could be a specific DevOps icon
    },
    {
      category: "Specializations & Methodologies",
      items: ["NLP", "Image Processing", "AI Chatbots", "Agile Methodologies", "Generative AI"],
      icon: Lightbulb,
    },
  ],
  projects: [
    {
      title: "E-commerce Sales Analysis (Amazon & Blinkit)",
      description: "Analyzed sales data for Amazon and Blinkit using Excel, Python (Google Colab) for EDA & KPI identification, and PowerBI for professional dashboard creation.",
      techStack: ["Excel", "Python", "Pandas", "Google Colab", "PowerBI", "Matplotlib", "Seaborn"],
      imageUrl: "https://placehold.co/600x400.png",
      imageHint: "sales dashboard",
      links: {},
    },
    {
      title: "fMRI ASD Detection using Deep Learning",
      description: "Developed a CNN to analyze fMRI data for Autism Spectrum Disorder detection, including preprocessing of neuroimaging data and custom training.",
      techStack: ["Python", "TensorFlow", "NumPy", "Pandas", "Matplotlib", "Google Colab"],
      imageUrl: "https://placehold.co/600x400.png",
      imageHint: "fmri brain scan",
      links: {},
    },
    {
      title: "Skin Cancer Classification with CNN & Streamlit",
      description: "Designed a CNN model to classify skin lesions. Implemented data augmentation, cross-validation, and a Streamlit app for real-time predictions.",
      techStack: ["Python", "TensorFlow", "Keras", "OpenCV", "Streamlit", "Google Colab"],
      imageUrl: "https://placehold.co/600x400.png",
      imageHint: "skin cancer classification",
      links: {},
    },
    // Adding a fourth project from "Professional Highlights"
    {
      title: "Real Estate RAG ChatBot",
      description: "AI chatbot using Streamlit, LangChain, and Snowflake for handling real estate queries through Retrieval Augmented Generation.",
      techStack: ["Python", "Streamlit", "LangChain", "Snowflake", "Generative AI"],
      imageUrl: "https://placehold.co/600x400.png",
      imageHint: "chatbot real estate",
      links: {},
    }
  ],
  aiIntro: {
    portfolioSummary: "I’m Muhammad Abdullah, a Data Analyst and AI/ML Developer currently pursuing a Bachelor of Computer Science at Superior University Lahore (expected Nov 2026). I hold professional certifications in Data Science (IBM) and Generative AI (Google Vertex AI). My passion lies in leveraging Python, Power BI, TensorFlow, and LangChain to build intelligent solutions, from e-commerce sales dashboards to AI chatbots, making a tangible impact in sectors like e-commerce and healthcare. My expertise in data analysis and machine learning fuels my work on innovative projects.",
  },
  sidebarNav: [
    { title: "Home", href: "#hero", icon: Home },
    { title: "Skills", href: "#skills", icon: Wrench },
    { title: "Projects", href: "#projects", icon: Briefcase },
    { title: "AI Intro", href: "#ai-intro", icon: BrainCircuit },
    { title: "Contact", href: "#contact", icon: Mail },
  ],
};

export const socialIcons: { [key: string]: LucideIcon } = {
  linkedin: Linkedin,
  github: Github,
  twitter: Twitter, // Keep twitter icon definition in case it's re-added later
};

    
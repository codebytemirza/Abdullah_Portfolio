
import type { LucideIcon } from 'lucide-react';
import { Home, Wrench, Briefcase, BrainCircuit, Mail, Linkedin, Github, Twitter, Brain, Database, Code, Terminal, ShieldCheck, Users, Rocket, Lightbulb, FileText, BarChart2, SearchCode, Bot, UserCheck, Cpu } from 'lucide-react';

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
  socialLinks: {
    linkedin: string;
    github: string;
  };
  contactEmail: string;
  hero: {
    titlePrefix: string;
    name: string;
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
  name: "MUHAMMAD ABDULLAH",
  professionalTitle: "Data Analyst | AI & ML Developer | Data Science Specialist",
  socialLinks: {
    linkedin: "https://www.linkedin.com/in/muhammad-abdullah-ai-ml-developer/",
    github: "https://github.com/codebytemirza",
  },
  contactEmail: "abdullahcodewizard@gmail.com",
  hero: {
    titlePrefix: "Hi, I'm",
    name: "Abdullah",
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
      category: "Web Development & UI",
      items: ["Streamlit", "Gradio", "HTML", "CSS", "JavaScript", "Next.js", "React", "Tailwind CSS"],
      icon: Rocket,
    },
    {
      category: "Databases & Storage",
      items: ["PostgreSQL", "MongoDB", "SQL Server", "Snowflake", "Firebase"],
      icon: Database,
    },
    {
      category: "DevOps & Tools",
      items: ["Git & GitHub", "Docker", "Linux", "Google Colab", "Semgrep"],
      icon: Terminal,
    },
    {
      category: "Specializations",
      items: ["NLP", "Image Processing", "AI Chatbots", "Generative AI", "Static Analysis"],
      icon: Lightbulb,
    },
    {
      category: "Methodologies",
      items: ["Agile Methodologies", "Data-Driven Decision Making", "Custom Model Training"],
      icon: Users, // Represents collaboration/process
    }
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
      description: "Perform Initial Decision from Excel Data Exploration. Do EDA and data cleaning with the help of the python and google Colab. Professional Dashboard with the help of the PowerBI.",
      techStack: ["Excel", "Python", "PowerBI", "Pandas", "Google Colab"],
      icon: BarChart2,
      links: {},
    },
    {
      title: "fMRI ASD Detection using Deep Learning",
      description: "Developed a CNN to analyze fMRI data for Autism Spectrum Disorder detection, including preprocessing of neuroimaging data and custom training.",
      techStack: ["Python", "TensorFlow", "NumPy", "Pandas", "Matplotlib", "Google Colab"],
      icon: Brain, // Icon for AI/Deep Learning
      links: {},
    },
    {
      title: "Skin Cancer Classification using CNNs",
      description: "Designed a CNN model to classify skin lesions. Implemented data augmentation, cross-validation, and a Streamlit app for real-time predictions.",
      techStack: ["Python", "TensorFlow", "Keras", "OpenCV", "Streamlit", "Matplotlib", "Google Colab"],
      icon: Cpu, // Icon for CV/medical imaging AI
      links: {},
    },
    {
      title: "Wheat Crop Disease Classification (Vision Transformers)",
      description: "Built a transformer-based solution for identifying diseases in wheat crop images. Integrated a Gradio UI for farmers.",
      techStack: ["PyTorch", "Vision Transformers", "Gradio", "Python"],
      icon: Cpu, // Icon for CV/AgriTech AI
      links: {},
    },
    {
      title: "LLM Grep (Static Analysis + AI)",
      description: "Static code analysis tool combining Semgrep with AI-driven analysis using LLMs.",
      techStack: ["Python", "Semgrep", "LLM APIs", "Static Analysis"],
      icon: SearchCode, // Icon for code analysis
      links: {},
    },
    {
      title: "Real Estate RAG ChatBot",
      description: "AI chatbot using Streamlit, LangChain, and Snowflake for handling real estate queries through Retrieval Augmented Generation.",
      techStack: ["Python", "Streamlit", "LangChain", "Snowflake", "Generative AI"],
      icon: Bot, // Icon for Chatbot
      links: {},
    },
    {
      title: "Personal Course Site Chatbot",
      description: "Designed an AI chatbot to provide real-time support for users navigating an educational course site.",
      techStack: ["Python", "LangChain", "NLP", "Generative AI"], // Assuming LangChain or similar
      icon: Bot,
      links: {},
    }
  ],
  aiIntro: {
    portfolioSummary: "I’m Muhammad Abdullah, a Data Analyst and AI/ML Developer with a strong foundation in Python, Power BI, TensorFlow, and LangChain. I specialize in transforming data into actionable insights and developing intelligent applications, from e-commerce sales dashboards to sophisticated AI chatbots for real estate and education. My work in fMRI analysis for ASD detection and skin cancer classification showcases my ability to tackle complex challenges in healthcare AI. I am passionate about leveraging data science and machine learning to create impactful solutions and drive innovation.",
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
  twitter: Twitter,
};

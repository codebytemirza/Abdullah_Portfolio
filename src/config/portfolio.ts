import type { LucideIcon } from 'lucide-react';
import { Home, Wrench, Briefcase, BrainCircuit, Mail, Linkedin, Github, Twitter } from 'lucide-react';

export interface NavItem {
  title: string;
  href: string;
  icon: LucideIcon;
}

export interface SkillCategory {
  category: string;
  items: string[];
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
    twitter: string;
  };
  contactEmail: string; // For display or mailto link
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
  name: "Abdullah",
  professionalTitle: "Full Stack Developer & AI Enthusiast",
  socialLinks: {
    linkedin: "https://www.linkedin.com", // Replace with actual link
    github: "https://www.github.com", // Replace with actual link
    twitter: "https://www.twitter.com", // Replace with actual link
  },
  contactEmail: "contact@abdullah.dev", // Replace with actual email
  hero: {
    titlePrefix: "Hi, I'm",
    name: "Abdullah",
    subtitle: "Full Stack Developer & AI Enthusiast crafting innovative digital experiences.",
    cta: "Contact Me",
  },
  skills: [
    {
      category: "Programming Languages",
      items: ["JavaScript (ES6+)", "TypeScript", "Python", "Java", "SQL"],
    },
    {
      category: "Frameworks & Libraries",
      items: ["Next.js", "React", "Node.js", "Express.js", "Tailwind CSS", "Spring Boot"],
    },
    {
      category: "Databases & Storage",
      items: ["PostgreSQL", "MongoDB", "Firebase", "Redis"],
    },
    {
      category: "Tools & Platforms",
      items: ["Git & GitHub", "Docker", "AWS", "Google Cloud", "Vercel"],
    },
    {
      category: "Machine Learning",
      items: ["TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy"],
    },
  ],
  projects: [
    {
      title: "AI Powered E-commerce Platform",
      description: "A full-stack e-commerce site with personalized recommendations using ML. Features user authentication, product catalog, shopping cart, and an admin dashboard.",
      techStack: ["Next.js", "Node.js", "Python", "TensorFlow", "PostgreSQL", "Tailwind CSS"],
      imageUrl: "https://placehold.co/600x400.png",
      imageHint: "ecommerce dashboard",
      links: {
        live: "#", // Replace with actual link
        github: "#", // Replace with actual link
      },
    },
    {
      title: "Portfolio Website v2",
      description: "This very portfolio website, built with Next.js and featuring GenAI integration for personalized introductions.",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Genkit", "Shadcn UI"],
      imageUrl: "https://placehold.co/600x400.png",
      imageHint: "portfolio website",
      links: {
        github: "#", // Replace with actual link
      },
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, user roles, and project boards.",
      techStack: ["React", "Firebase", "Material UI", "Node.js"],
      imageUrl: "https://placehold.co/600x400.png",
      imageHint: "task management",
      links: {
        live: "#", // Replace with actual link
      },
    },
  ],
  aiIntro: {
    portfolioSummary: "Abdullah is a creative Full Stack Developer with expertise in building modern web applications using technologies like Next.js, React, and Node.js. He has a strong interest in Artificial Intelligence and Machine Learning, demonstrated through projects involving recommendation systems and data analysis. Abdullah is passionate about leveraging technology to solve real-world problems and create impactful user experiences.",
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

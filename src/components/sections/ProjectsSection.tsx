
"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import SectionWrapper from '@/components/SectionWrapper';
import { portfolioConfig } from '@/config/portfolio';
import { ExternalLink, Github, Layers } from 'lucide-react'; // Added Layers icon
import type { Project as ProjectType } from '@/config/portfolio'; // Import ProjectType for type safety

export default function ProjectsSection() {
  return (
    <SectionWrapper id="projects" className="bg-background">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-primary">Featured Projects</h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
          Here are some of the projects I've worked on.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {portfolioConfig.projects.map((project: ProjectType) => {
          const ProjectIcon = project.icon || Layers; // Use specific project icon or default Layers
          return (
            <Card key={project.title} className="flex flex-col shadow-xl hover:shadow-2xl transition-shadow duration-300 border-border/50 overflow-hidden group">
              {/* SVG Icon replacement for Image */}
              <div className="flex items-center justify-center w-full h-48 sm:h-56 md:h-64 bg-card group-hover:bg-muted/30 rounded-t-lg transition-colors duration-300">
                <ProjectIcon className="w-20 h-20 sm:w-24 sm:h-24 text-primary/60 group-hover:text-primary transition-colors duration-300" />
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-primary">{project.title}</CardTitle>
                <CardDescription className="text-foreground/70 min-h-[3em]">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <h4 className="text-sm font-semibold mb-2 text-muted-foreground">Tech Stack:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <Badge key={tech} variant="outline" className="border-accent text-accent hover:bg-accent/10 transition-colors">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="mt-auto">
                <div className="flex space-x-2">
                  {project.links.live && (
                    <Button variant="outline" size="sm" asChild className="hover:bg-accent/20 hover:text-accent-foreground">
                      <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                      </a>
                    </Button>
                  )}
                  {project.links.github && (
                    <Button variant="ghost" size="sm" asChild className="text-muted-foreground hover:text-primary hover:bg-primary/10">
                      <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" /> GitHub
                      </a>
                    </Button>
                  )}
                </div>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </SectionWrapper>
  );
}

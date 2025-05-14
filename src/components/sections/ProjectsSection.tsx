"use client";

import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import SectionWrapper from '@/components/SectionWrapper';
import { portfolioConfig } from '@/config/portfolio';
import { ExternalLink, Github } from 'lucide-react';

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
        {portfolioConfig.projects.map((project) => (
          <Card key={project.title} className="flex flex-col shadow-xl hover:shadow-2xl transition-shadow duration-300 border-border/50 overflow-hidden">
            <div className="relative w-full h-48 sm:h-56 md:h-64">
              <Image
                src={project.imageUrl}
                alt={project.title}
                layout="fill"
                objectFit="cover"
                data-ai-hint={project.imageHint}
                className="transition-transform duration-300 hover:scale-105"
              />
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
        ))}
      </div>
    </SectionWrapper>
  );
}

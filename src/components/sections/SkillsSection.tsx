
"use client";

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import SectionWrapper from '@/components/SectionWrapper';
import { portfolioConfig } from '@/config/portfolio';
import type { LucideIcon } from 'lucide-react';
import { CheckCircle } from 'lucide-react'; // Default icon

export default function SkillsSection() {
  return (
    <SectionWrapper id="skills" className="bg-secondary/20">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-primary">My Expertise</h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
          A collection of technologies and tools I'm proficient in.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolioConfig.skills.map((skillCategory) => {
          const IconComponent = skillCategory.icon || CheckCircle; // Use category icon or default
          return (
            <Card key={skillCategory.category} className="shadow-xl hover:shadow-2xl transition-shadow duration-300 border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center text-xl text-primary">
                  <IconComponent className="mr-3 h-6 w-6 text-accent" /> 
                  {skillCategory.category}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skillCategory.items.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-sm py-1 px-3 bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </SectionWrapper>
  );
}

    
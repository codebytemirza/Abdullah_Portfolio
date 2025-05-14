"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import SectionWrapper from '@/components/SectionWrapper';
import { portfolioConfig } from '@/config/portfolio';
import { ArrowDown } from 'lucide-react';

export default function HeroSection() {
  return (
    <SectionWrapper id="hero" className="bg-background text-center">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
          <span className="block text-muted-foreground">{portfolioConfig.hero.titlePrefix}</span>
          <span className="block text-primary mt-2">{portfolioConfig.hero.name}.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg sm:text-xl text-foreground/80">
          {portfolioConfig.hero.subtitle}
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="#contact" passHref legacyBehavior>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg transition-transform hover:scale-105">
              {portfolioConfig.hero.cta}
            </Button>
          </Link>
          <Link href="#projects" passHref legacyBehavior>
            <Button size="lg" variant="outline" className="shadow-lg transition-transform hover:scale-105">
              View My Work <ArrowDown className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </SectionWrapper>
  );
}

import { SidebarInset } from '@/components/ui/sidebar';
import HeroSection from '@/components/sections/HeroSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import AIIntroSection from '@/components/sections/AIIntroSection';
import ContactSection from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <SidebarInset>
      <main className="flex-1">
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        <AIIntroSection />
        <ContactSection />
      </main>
    </SidebarInset>
  );
}

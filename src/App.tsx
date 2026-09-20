import React, { useState } from 'react';
import { HeroSection } from './components/HeroSection';
import { MarqueeSection } from './components/MarqueeSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ContactModal } from './components/ContactModal';
import { ProjectModal } from './components/ProjectModal';
import { ProjectItem } from './types';
import { ArrowUp, Phone, Mail } from 'lucide-react';

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>('');
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  const handleOpenContact = (serviceName?: string) => {
    if (serviceName) {
      setSelectedService(serviceName);
    }
    setIsContactOpen(true);
  };

  const handleCloseContact = () => {
    setIsContactOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      id="main-portfolio-wrapper"
      className="bg-[#0C0C0C] text-[#D7E2EA] w-full min-h-screen relative font-['Kanit',sans-serif]"
      style={{ overflowX: 'clip' }}
    >
      {/* 1. Hero Section */}
      <HeroSection onContactClick={() => handleOpenContact()} />

      {/* 2. Marquee Section */}
      <MarqueeSection />

      {/* 3. About Section */}
      <AboutSection onContactClick={() => handleOpenContact()} />

      {/* 4. Services Section */}
      <ServicesSection
        onSelectService={(service) => handleOpenContact(service)}
      />

      {/* 5. Projects Section */}
      <ProjectsSection
        onOpenProject={(project) => setActiveProject(project)}
      />

      {/* Minimal Footer */}
      <footer className="bg-[#0C0C0C] border-t border-[#D7E2EA]/10 px-6 md:px-12 py-12 text-[#D7E2EA]/60 flex flex-col sm:flex-row items-center justify-between gap-6 relative z-20">
        <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <span className="font-bold text-white uppercase tracking-widest text-sm">
            Jack &bull; 3D Creator
          </span>
          <span className="hidden sm:inline text-[#D7E2EA]/30">&bull;</span>
          <span className="text-xs">
            Collaborating with <strong className="text-white">Shaswat Singh</strong> (+91 788722907)
          </span>
        </div>

        <div className="flex items-center gap-6">
          <button
            type="button"
            onClick={() => handleOpenContact()}
            className="text-xs uppercase tracking-wider text-[#D7E2EA]/80 hover:text-white transition-colors cursor-pointer"
          >
            Inquire Now
          </button>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="p-2.5 rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </footer>

      {/* Contact Inquiry Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={handleCloseContact}
        initialService={selectedService}
      />

      {/* Project High-Res Preview Modal */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
        onInquire={(projName) => handleOpenContact(`Project Inquiry: ${projName}`)}
      />
    </div>
  );
}

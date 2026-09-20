import React from 'react';
import { FadeIn } from './FadeIn';
import { HeroPortrait } from './HeroPortrait';
import { ContactButton } from './ContactButton';

interface HeroSectionProps {
  onContactClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onContactClick }) => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero-section"
      className="relative h-screen flex flex-col justify-between overflow-x-clip bg-[#0C0C0C] select-none"
    >
      {/* Navbar */}
      <FadeIn
        as="nav"
        delay={0}
        y={-20}
        duration={0.7}
        className="w-full z-20"
      >
        <div className="flex items-center justify-between px-6 md:px-10 pt-6 md:pt-8 text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem]">
          <button
            id="nav-about"
            onClick={() => scrollToSection('about-section')}
            className="hover:opacity-70 transition-opacity duration-200 cursor-pointer bg-transparent border-none p-0 uppercase font-medium tracking-wider"
          >
            About
          </button>
          <button
            id="nav-price"
            onClick={() => scrollToSection('services-section')}
            className="hover:opacity-70 transition-opacity duration-200 cursor-pointer bg-transparent border-none p-0 uppercase font-medium tracking-wider"
          >
            Price
          </button>
          <button
            id="nav-projects"
            onClick={() => scrollToSection('projects-section')}
            className="hover:opacity-70 transition-opacity duration-200 cursor-pointer bg-transparent border-none p-0 uppercase font-medium tracking-wider"
          >
            Projects
          </button>
          <button
            id="nav-contact"
            onClick={onContactClick}
            className="hover:opacity-70 transition-opacity duration-200 cursor-pointer bg-transparent border-none p-0 uppercase font-medium tracking-wider"
          >
            Contact
          </button>
        </div>
      </FadeIn>

      {/* Hero Portrait Centered - Behind Heading (z-10) */}
      <FadeIn
        delay={0.6}
        y={30}
        duration={0.8}
        className="absolute left-1/2 -translate-x-1/2 z-10 w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px] top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 pointer-events-auto"
      >
        <HeroPortrait />
      </FadeIn>

      {/* Hero Heading - In Front of juggling face (z-20) */}
      <div className="w-full overflow-hidden flex justify-center items-center z-20 px-2 sm:px-4 pointer-events-none">
        <FadeIn
          delay={0.15}
          y={40}
          duration={0.8}
          className="w-full text-center"
        >
          <h1
            id="hero-main-title"
            className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw] mt-6 sm:mt-4 md:-mt-5 select-none text-center drop-shadow-[0_10px_30px_rgba(12,12,12,0.85)]"
          >
            Hi, i&apos;m shaswat
          </h1>
        </FadeIn>
      </div>

      {/* Bottom Bar */}
      <div className="w-full z-20 px-6 md:px-10 pb-7 sm:pb-8 md:pb-10 flex justify-between items-end">
        {/* Left text */}
        <FadeIn delay={0.35} y={20} duration={0.7}>
          <p
            id="hero-tagline"
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px] text-[clamp(0.75rem,1.4vw,1.5rem)] select-text"
          >
            a 3d creator driven by crafting striking and unforgettable projects
          </p>
        </FadeIn>

        {/* Right Contact button */}
        <FadeIn delay={0.5} y={20} duration={0.7}>
          <ContactButton
            id="hero-contact-button"
            onClick={onContactClick}
          />
        </FadeIn>
      </div>
    </section>
  );
};

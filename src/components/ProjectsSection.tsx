import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FadeIn } from './FadeIn';
import { LiveProjectButton } from './LiveProjectButton';
import { ProjectItem } from '../types';

interface ProjectsSectionProps {
  onOpenProject: (project: ProjectItem) => void;
}

const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'nextlevel-studio',
    number: '01',
    category: 'Client',
    name: 'Nextlevel Studio',
    description: 'High-end 3D CGI product rendering, spatial environment design, and futuristic visual identity system.',
    col1Image1:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85',
    col1Image2:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85',
    col2Image:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85',
    tags: ['3D Modeling', 'Photorealistic Lighting', 'Cinema 4D'],
  },
  {
    id: 'aura-brand-identity',
    number: '02',
    category: 'Personal',
    name: 'Aura Brand Identity',
    description: 'Exploratory conceptual brand system combining tactile glassmorphic 3D artifacts with minimalist editorial typography.',
    col1Image1:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85',
    col1Image2:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85',
    col2Image:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85',
    tags: ['Art Direction', 'Shader Design', 'Brand Architecture'],
  },
  {
    id: 'solaris-digital',
    number: '03',
    category: 'Client',
    name: 'Solaris Digital',
    description: 'Immersive motion graphics sequence and interactive 3D web assets for clean tech launch.',
    col1Image1:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85',
    col1Image2:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85',
    col2Image:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85',
    tags: ['Motion Graphics', 'Web3 Visuals', 'Unreal Engine'],
  },
];

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
  totalCards: number;
  onOpenProject: (project: ProjectItem) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index,
  totalCards,
  onOpenProject,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);
  const cardTopOffset = 80 + index * 28;

  return (
    <div
      ref={containerRef}
      className="h-[85vh] min-h-[580px] sm:min-h-[660px] md:min-h-[720px] relative flex items-start justify-center"
    >
      <motion.div
        style={{
          scale,
          top: `${cardTopOffset}px`,
        }}
        className="sticky w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 flex flex-col gap-4 sm:gap-6 shadow-2xl overflow-hidden"
      >
        {/* Top Row */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#D7E2EA]/15 pb-4 sm:pb-6">
          <div className="flex items-baseline gap-3 sm:gap-6">
            {/* Huge Number */}
            <span className="font-black text-[#D7E2EA] leading-none text-[clamp(2.5rem,7vw,110px)] select-none tabular-nums">
              {project.number}
            </span>

            <div className="flex flex-col">
              <span className="text-xs sm:text-sm font-medium uppercase tracking-widest text-[#D7E2EA]/60">
                {project.category}
              </span>
              <h3 className="font-black uppercase tracking-tight text-[#D7E2EA] text-[clamp(1.2rem,2.8vw,2.5rem)] leading-none mt-0.5">
                {project.name}
              </h3>
            </div>
          </div>

          <LiveProjectButton
            id={`live-project-btn-${project.number}`}
            onClick={() => onOpenProject(project)}
          />
        </div>

        {/* Bottom Row - Two-column image grid */}
        <div className="flex flex-col md:flex-row gap-3 sm:gap-4 md:gap-5 w-full flex-1 min-h-0">
          {/* Left column (40% width) with 2 stacked images */}
          <div className="w-full md:w-[40%] flex flex-col gap-3 sm:gap-4 md:gap-5">
            {/* Left top image */}
            <div
              className="w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden bg-[#181A1F] h-[clamp(130px,16vw,230px)] relative group cursor-pointer"
              onClick={() => onOpenProject(project)}
            >
              <img
                src={project.col1Image1}
                alt={`${project.name} preview 1`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>

            {/* Left bottom image */}
            <div
              className="w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden bg-[#181A1F] h-[clamp(160px,22vw,340px)] relative group cursor-pointer"
              onClick={() => onOpenProject(project)}
            >
              <img
                src={project.col1Image2}
                alt={`${project.name} preview 2`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          </div>

          {/* Right column (60% width) with 1 tall image */}
          <div
            className="w-full md:w-[60%] rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden bg-[#181A1F] min-h-[260px] sm:min-h-[320px] md:min-h-0 relative group cursor-pointer flex-1"
            onClick={() => onOpenProject(project)}
          >
            <img
              src={project.col2Image}
              alt={`${project.name} full view`}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onOpenProject }) => {
  return (
    <section
      id="projects-section"
      className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 relative px-4 sm:px-8 md:px-12 pt-20 sm:pt-24 md:pt-32 pb-40"
    >
      {/* Heading */}
      <FadeIn delay={0} y={30} duration={0.8}>
        <h2
          id="projects-heading"
          className="hero-heading font-black uppercase text-center text-[clamp(3rem,12vw,160px)] leading-none tracking-tight mb-12 sm:mb-16 md:mb-20 select-none"
        >
          Project
        </h2>
      </FadeIn>

      {/* Sticky Stacking Cards Container */}
      <div className="max-w-6xl mx-auto flex flex-col gap-12 sm:gap-16 relative">
        {PROJECTS_DATA.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            totalCards={PROJECTS_DATA.length}
            onOpenProject={onOpenProject}
          />
        ))}
      </div>
    </section>
  );
};

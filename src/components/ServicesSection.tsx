import React from 'react';
import { FadeIn } from './FadeIn';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectService?: (serviceName: string) => void;
}

const SERVICES_DATA: ServiceItem[] = [
  {
    id: '01',
    number: '01',
    name: '3D Modeling',
    description:
      'Creation of detailed objects, characters, or environments tailored to specific client needs, ideal for games, products, and visualizations.',
  },
  {
    id: '02',
    number: '02',
    name: 'Rendering',
    description:
      'High-quality, photorealistic renders that showcase designs with custom lighting, textures, and materials to bring concepts to life.',
  },
  {
    id: '03',
    number: '03',
    name: 'Motion Design',
    description:
      'Dynamic animations and motion graphics that add energy and storytelling to brands, products, and digital experiences.',
  },
  {
    id: '04',
    number: '04',
    name: 'Branding',
    description:
      'Crafting cohesive visual identities -- from logos to full brand systems -- that communicate a clear and memorable presence.',
  },
  {
    id: '05',
    number: '05',
    name: 'Web Design',
    description:
      'Designing clean, modern, and conversion-focused websites with attention to layout, typography, and user experience.',
  },
];

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  return (
    <section
      id="services-section"
      className="bg-[#FFFFFF] text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-0"
    >
      {/* Heading */}
      <FadeIn delay={0} y={30} duration={0.8}>
        <h2
          id="services-heading"
          className="text-[#0C0C0C] font-black uppercase text-center text-[clamp(3rem,12vw,160px)] leading-none tracking-tight mb-16 sm:mb-20 md:mb-28 select-none"
        >
          Services
        </h2>
      </FadeIn>

      {/* Services List */}
      <div className="max-w-5xl mx-auto flex flex-col">
        {SERVICES_DATA.map((service, index) => (
          <FadeIn
            key={service.id}
            delay={index * 0.1}
            y={25}
            duration={0.7}
            className={`border-b border-[#0C0C0C]/15 py-8 sm:py-10 md:py-12 ${
              index === 0 ? 'border-t' : ''
            }`}
          >
            <div
              id={`service-item-${service.number}`}
              onClick={() => onSelectService?.(service.name)}
              className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-8 md:gap-14 group cursor-pointer transition-colors duration-200"
            >
              {/* Left Number */}
              <div className="shrink-0">
                <span className="font-black text-[#0C0C0C] leading-none text-[clamp(3rem,10vw,140px)] select-none tabular-nums tracking-tighter group-hover:translate-x-2 transition-transform duration-300 inline-block">
                  {service.number}
                </span>
              </div>

              {/* Right Name + Description */}
              <div className="flex flex-col justify-center flex-1">
                <h3 className="text-[#0C0C0C] font-medium uppercase text-[clamp(1rem,2.2vw,2.1rem)] tracking-wide group-hover:opacity-80 transition-opacity">
                  {service.name}
                </h3>
                <p className="text-[#0C0C0C] font-light leading-relaxed max-w-2xl text-[clamp(0.85rem,1.6vw,1.25rem)] opacity-60 mt-1 sm:mt-2 select-text">
                  {service.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};

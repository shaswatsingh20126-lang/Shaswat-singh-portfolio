import React from 'react';
import { FadeIn } from './FadeIn';
import { AnimatedText } from './AnimatedText';
import { ContactButton } from './ContactButton';

interface AboutSectionProps {
  onContactClick: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onContactClick }) => {
  const paragraphText =
    "With more than five years of experience in design, i focus on branding, web design, and user experience, i truly enjoy working with businesses that aim to stand out and present their best image. Let's build something incredible together!";

  return (
    <section
      id="about-section"
      className="relative min-h-screen flex flex-col items-center justify-center bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 overflow-hidden"
    >
      {/* 4 Decorative 3D images positioned absolutely in corners */}
      {/* Top-left: Moon icon */}
      <FadeIn
        delay={0.1}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] z-0 pointer-events-none"
      >
        <img
          id="about-deco-moon"
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
          alt="3D Moon Icon"
          className="w-[120px] sm:w-[160px] md:w-[210px] object-contain drop-shadow-2xl select-none"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
      </FadeIn>

      {/* Bottom-left: 3D object */}
      <FadeIn
        delay={0.25}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] z-0 pointer-events-none"
      >
        <img
          id="about-deco-object"
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
          alt="3D Geometric Object"
          className="w-[100px] sm:w-[140px] md:w-[180px] object-contain drop-shadow-2xl select-none"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
      </FadeIn>

      {/* Top-right: Lego icon */}
      <FadeIn
        delay={0.15}
        x={80}
        y={0}
        duration={0.9}
        className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] z-0 pointer-events-none"
      >
        <img
          id="about-deco-lego"
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
          alt="3D Lego Icon"
          className="w-[120px] sm:w-[160px] md:w-[210px] object-contain drop-shadow-2xl select-none"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
      </FadeIn>

      {/* Bottom-right: 3D group */}
      <FadeIn
        delay={0.3}
        x={80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] z-0 pointer-events-none"
      >
        <img
          id="about-deco-group"
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
          alt="3D Sphere Group"
          className="w-[130px] sm:w-[170px] md:w-[220px] object-contain drop-shadow-2xl select-none"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
      </FadeIn>

      {/* Centered Content Stack */}
      <div className="relative z-10 max-w-3xl w-full flex flex-col items-center text-center">
        {/* Heading */}
        <FadeIn delay={0} y={40} duration={0.8}>
          <h2
            id="about-heading"
            className="hero-heading font-black uppercase leading-none tracking-tight text-center text-[clamp(3rem,12vw,160px)]"
          >
            About me
          </h2>
        </FadeIn>

        {/* Gap between heading and text */}
        <div className="h-10 sm:h-14 md:h-16" />

        {/* Animated Paragraph */}
        <AnimatedText
          id="about-scroll-paragraph"
          text={paragraphText}
          className="mx-auto px-4"
        />

        {/* Gap between text and button */}
        <div className="h-16 sm:h-20 md:h-24" />

        {/* Contact Button */}
        <FadeIn delay={0.2} y={20} duration={0.7}>
          <ContactButton
            id="about-contact-button"
            onClick={onContactClick}
          />
        </FadeIn>
      </div>
    </section>
  );
};

import React from 'react';
import { motion, MotionProps } from 'framer-motion';

interface FadeInProps extends MotionProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  className?: string;
  id?: string;
  as?: 'div' | 'section' | 'nav' | 'header' | 'h1' | 'h2' | 'p' | 'span' | 'article';
}

export const FadeIn: React.FC<FadeInProps> = ({
  children,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  className = '',
  id,
  as = 'div',
  ...rest
}) => {
  const MotionComponent = motion[as] || motion.div;

  return (
    <MotionComponent
      id={id}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '50px', amount: 0 }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
      {...rest}
    >
      {children}
    </MotionComponent>
  );
};

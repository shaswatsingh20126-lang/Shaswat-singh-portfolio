import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Sparkles, Layers } from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onInquire: (projectName: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onInquire,
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!project) return null;

  const images = [
    { src: project.col2Image, label: 'Hero 3D Perspective' },
    { src: project.col1Image1, label: 'Material & Texture Study' },
    { src: project.col1Image2, label: 'Spatial Detail' },
  ];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative w-full max-w-4xl bg-[#121316] border-2 border-[#D7E2EA]/30 rounded-[32px] sm:rounded-[40px] p-6 sm:p-8 md:p-10 shadow-2xl z-10 my-8 max-h-[92vh] overflow-y-auto"
        >
          {/* Close Button */}
          <button
            id="close-project-modal"
            type="button"
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full text-[#D7E2EA]/70 hover:text-white hover:bg-white/10 transition-colors z-20"
            aria-label="Close project modal"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Header info */}
          <div className="flex flex-wrap items-baseline gap-4 mb-6">
            <span className="font-black text-[#D7E2EA] text-4xl sm:text-5xl select-none">
              {project.number}
            </span>
            <div>
              <span className="text-xs uppercase tracking-widest text-purple-400 font-medium">
                {project.category} Project
              </span>
              <h2 className="text-2xl sm:text-4xl font-black uppercase text-white tracking-tight">
                {project.name}
              </h2>
            </div>
          </div>

          {/* Main Large Image Display */}
          <div className="w-full h-[320px] sm:h-[420px] md:h-[480px] rounded-3xl overflow-hidden bg-black/40 border border-white/10 relative mb-4">
            <img
              src={images[activeImageIndex].src}
              alt={`${project.name} detail view`}
              className="w-full h-full object-cover transition-all duration-300"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-4 left-4 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-sm border border-white/15 text-xs text-white uppercase tracking-wider">
              {images[activeImageIndex].label}
            </div>
          </div>

          {/* Thumbnails */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            {images.map((img, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveImageIndex(idx)}
                className={`h-20 sm:h-24 rounded-2xl overflow-hidden border-2 transition-all cursor-pointer ${
                  activeImageIndex === idx
                    ? 'border-[#D7E2EA] scale-[1.02] shadow-lg'
                    : 'border-white/15 opacity-60 hover:opacity-90'
                }`}
              >
                <img
                  src={img.src}
                  alt={img.label}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </button>
            ))}
          </div>

          {/* Details & Tags */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-white/10">
            <div>
              <p className="text-[#D7E2EA]/80 text-sm max-w-xl font-light leading-relaxed mb-3">
                {project.description}
              </p>
              {project.tags && (
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-[#D7E2EA]/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onInquire(project.name);
                }}
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-white text-black font-medium hover:bg-neutral-200 transition-colors text-xs uppercase tracking-widest flex items-center justify-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-4 h-4" />
                <span>Inquire About This</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

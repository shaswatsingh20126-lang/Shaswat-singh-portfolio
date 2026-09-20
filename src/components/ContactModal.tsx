import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Phone, Mail, CheckCircle, Sparkles, MessageSquare } from 'lucide-react';
import { ContactFormState } from '../types';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  initialService = '',
}) => {
  const [formData, setFormData] = useState<ContactFormState>({
    name: '',
    email: '',
    phone: '',
    service: initialService || '3D Modeling',
    budget: '$2,000 - $5,000',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Update initialService when prop changes
  React.useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate reliable submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '3D Modeling',
      budget: '$2,000 - $5,000',
      message: '',
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative w-full max-w-2xl bg-[#121316] border-2 border-[#D7E2EA]/30 rounded-[32px] sm:rounded-[40px] p-6 sm:p-8 md:p-10 shadow-2xl z-10 my-8 max-h-[90vh] overflow-y-auto"
          >
            {/* Close Button */}
            <button
              id="close-contact-modal"
              type="button"
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full text-[#D7E2EA]/70 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-6 h-6" />
            </button>

            {isSubmitted ? (
              <div className="flex flex-col items-center text-center py-8">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-6">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white mb-3">
                  Inquiry Received
                </h3>
                <p className="text-[#D7E2EA]/80 font-light max-w-md mb-6 leading-relaxed">
                  Thank you, <span className="text-white font-medium">{formData.name}</span>. Your project inquiry for{' '}
                  <span className="text-white font-medium">{formData.service}</span> has been noted. We will get back to you shortly.
                </p>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 w-full max-w-md text-left text-sm text-[#D7E2EA]/80 mb-8 space-y-2">
                  <p className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-purple-400" />
                    <span>Direct line: <strong className="text-white">+91 788722907 (m648)</strong></span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-purple-400" />
                    <span>Consultant: <strong className="text-white">Shaswat Singh</strong> (Freelancer & E-Business)</span>
                  </p>
                </div>

                <div className="flex flex-wrap gap-4 justify-center">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="px-6 py-2.5 rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors text-sm uppercase tracking-wider"
                  >
                    Send Another Note
                  </button>
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-8 py-2.5 rounded-full bg-white text-black font-medium hover:bg-neutral-200 transition-colors text-sm uppercase tracking-wider"
                  >
                    Done
                  </button>
                </div>
              </div>
            ) : (
              <div>
                {/* Header */}
                <div className="mb-6 pr-8">
                  <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/60 font-medium">
                    Start a Conversation
                  </span>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-white mt-1">
                    Project Inquiry & Contact
                  </h2>
                  <p className="text-[#D7E2EA]/70 text-sm mt-2 font-light leading-relaxed">
                    Have an upcoming project, e-business venture, or 3D visual commission? Reach out directly to collaborate.
                  </p>
                </div>

                {/* Freelancer Profile Badge */}
                <div className="flex flex-wrap items-center justify-between gap-3 p-4 rounded-2xl bg-white/[0.04] border border-white/10 mb-6">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-purple-300 font-semibold">
                      Featured Consultant & Freelancer
                    </p>
                    <p className="text-white font-bold text-base mt-0.5">
                      Shaswat Singh
                    </p>
                    <p className="text-xs text-[#D7E2EA]/60">
                      Freelancer & E-Business Specialist (E-Trading Books, 3D Assets, Digital Strategy)
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href="tel:+91788722907"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-purple-600/30 text-purple-200 border border-purple-500/40 text-xs font-medium hover:bg-purple-600/50 transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>788722907</span>
                    </a>
                  </div>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#D7E2EA]/80 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        id="contact-form-name"
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Alex Morgan"
                        className="w-full bg-[#181A1F] border border-white/15 rounded-xl px-4 py-3 text-white text-sm placeholder-[#D7E2EA]/30 focus:outline-none focus:border-white/50 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#D7E2EA]/80 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        id="contact-form-email"
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="alex@company.com"
                        className="w-full bg-[#181A1F] border border-white/15 rounded-xl px-4 py-3 text-white text-sm placeholder-[#D7E2EA]/30 focus:outline-none focus:border-white/50 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#D7E2EA]/80 mb-1.5">
                        Phone / Mobile
                      </label>
                      <input
                        id="contact-form-phone"
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 000-0000"
                        className="w-full bg-[#181A1F] border border-white/15 rounded-xl px-4 py-3 text-white text-sm placeholder-[#D7E2EA]/30 focus:outline-none focus:border-white/50 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#D7E2EA]/80 mb-1.5">
                        Service Category
                      </label>
                      <select
                        id="contact-form-service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full bg-[#181A1F] border border-white/15 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-white/50 transition-colors"
                      >
                        <option value="3D Modeling">01 - 3D Modeling</option>
                        <option value="Rendering">02 - Rendering</option>
                        <option value="Motion Design">03 - Motion Design</option>
                        <option value="Branding">04 - Branding</option>
                        <option value="Web Design">05 - Web Design</option>
                        <option value="E-Trading & Digital Business">E-Trading & Digital Business</option>
                        <option value="Complete Creative Direction">Complete Creative Direction</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#D7E2EA]/80 mb-1.5">
                        Budget Range
                      </label>
                      <select
                        id="contact-form-budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full bg-[#181A1F] border border-white/15 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-white/50 transition-colors"
                      >
                        <option value="< $2,000">&lt; $2,000</option>
                        <option value="$2,000 - $5,000">$2,000 - $5,000</option>
                        <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                        <option value="$10,000+">$10,000+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#D7E2EA]/80 mb-1.5">
                      Project Details & Timeline *
                    </label>
                    <textarea
                      id="contact-form-message"
                      name="message"
                      rows={3}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Briefly describe your vision, deliverables, or questions..."
                      className="w-full bg-[#181A1F] border border-white/15 rounded-xl px-4 py-3 text-white text-sm placeholder-[#D7E2EA]/30 focus:outline-none focus:border-white/50 transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-[#D7E2EA]/50 flex items-center gap-1.5">
                      <MessageSquare className="w-3.5 h-3.5" />
                      Typically responds within 24 business hours.
                    </p>

                    <button
                      id="submit-inquiry-btn"
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full font-medium uppercase tracking-widest text-white cursor-pointer px-8 py-3.5 text-sm transition-all duration-300 hover:brightness-110 disabled:opacity-50"
                      style={{
                        background:
                          'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
                        boxShadow:
                          '0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset',
                        outline: '2px solid #FFFFFF',
                        outlineOffset: '-3px',
                      }}
                    >
                      <Send className="w-4 h-4" />
                      <span>{isSubmitting ? 'Sending...' : 'Send Inquiry'}</span>
                    </button>
                  </div>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactSectionProps {
  onOpenResume: () => void;
  onOpenMessageDialog: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  onOpenResume,
  onOpenMessageDialog,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="w-full bg-[#F3F0E8] py-20 md:py-28">
      <div className="max-w-[1360px] mx-auto px-6 md:px-12">
        <div className="max-w-3xl">
          <span className="font-mono text-[11px] md:text-xs tracking-[0.22em] text-[#5E5B55] uppercase font-medium block mb-3">
            04 / CONTACT &amp; COLLABORATION
          </span>

          {/* Headline */}
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#171918] tracking-tight mb-6">
            {PERSONAL_INFO.contactHeadline}
          </h2>

          {/* Supporting Copy */}
          <p className="font-sans text-base sm:text-lg md:text-xl leading-relaxed text-[#5E5B55] mb-12">
            {PERSONAL_INFO.contactSupporting}
          </p>

          {/* 4 Editable Connection Points */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {/* 1. Email */}
            <div className="bg-[#EAE6DC]/60 border border-[#D6D0C5] p-5 flex flex-col justify-between">
              <div>
                <span className="font-mono text-[10px] tracking-widest text-[#8E8B84] uppercase block mb-1">
                  Email
                </span>
                <span className="font-mono text-xs text-[#171918] font-medium break-all block mb-4">
                  {PERSONAL_INFO.email}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="font-mono text-[11px] text-[#171918] hover:text-[#B68C4A] uppercase underline tracking-wider"
                >
                  Compose
                </a>
                <span className="text-[#8E8B84]">•</span>
                <button
                  onClick={handleCopyEmail}
                  className="font-mono text-[11px] text-[#5E5B55] hover:text-[#171918] uppercase tracking-wider cursor-pointer"
                >
                  {copied ? 'Copied ✓' : 'Copy'}
                </button>
              </div>
            </div>

            {/* 2. GitHub */}
            <div className="bg-[#EAE6DC]/60 border border-[#D6D0C5] p-5 flex flex-col justify-between">
              <div>
                <span className="font-mono text-[10px] tracking-widest text-[#8E8B84] uppercase block mb-1">
                  GitHub Profile
                </span>
                <span className="font-mono text-xs text-[#171918] font-medium block mb-4">
                  @{PERSONAL_INFO.githubUsername}
                </span>
              </div>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[11px] text-[#171918] hover:text-[#B68C4A] uppercase tracking-wider flex items-center gap-1"
              >
                <span>View Repositories</span>
                <span>↗</span>
              </a>
            </div>

            {/* 3. LinkedIn */}
            <div className="bg-[#EAE6DC]/60 border border-[#D6D0C5] p-5 flex flex-col justify-between">
              <div>
                <span className="font-mono text-[10px] tracking-widest text-[#8E8B84] uppercase block mb-1">
                  LinkedIn
                </span>
                <span className="font-mono text-xs text-[#171918] font-medium block mb-4">
                  shantanu-patil
                </span>
              </div>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[11px] text-[#171918] hover:text-[#B68C4A] uppercase tracking-wider flex items-center gap-1"
              >
                <span>Connect on LinkedIn</span>
                <span>↗</span>
              </a>
            </div>

            {/* 4. Resume */}
            <div className="bg-[#EAE6DC]/60 border border-[#D6D0C5] p-5 flex flex-col justify-between">
              <div>
                <span className="font-mono text-[10px] tracking-widest text-[#8E8B84] uppercase block mb-1">
                  Resume / CV
                </span>
                <span className="font-mono text-xs text-[#171918] font-medium block mb-4">
                  Software Engineering
                </span>
              </div>
              <button
                onClick={onOpenResume}
                className="font-mono text-[11px] text-[#171918] hover:text-[#B68C4A] uppercase tracking-wider text-left flex items-center gap-1 cursor-pointer"
              >
                <span>Preview &amp; Export</span>
                <span>↓</span>
              </button>
            </div>
          </div>

          {/* Quick Message Button */}
          <div className="pt-2">
            <button
              onClick={onOpenMessageDialog}
              className="group inline-flex items-center gap-3 bg-[#171918] text-[#F3F0E8] px-8 py-4 font-mono text-xs tracking-[0.16em] uppercase font-medium hover:bg-[#2A2E2C] transition-all cursor-pointer focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#B68C4A]"
            >
              <span>SEND A DIRECT INQUIRY</span>
              <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">
                →
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

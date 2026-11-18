import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onOpenResume?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume }) => {
  return (
    <footer className="w-full bg-[#F3F0E8] border-t border-[#D6D0C5] py-10 md:py-12">
      <div className="max-w-[1360px] mx-auto px-6 md:px-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
        {/* Left: Monogram and Working Philosophy Anchor */}
        <div className="flex items-center gap-3">
          <span className="font-serif text-2xl tracking-tight text-[#171918]">
            {PERSONAL_INFO.monogram}
          </span>
          <span className="text-[#8E8B84] select-none">—</span>
          <span className="font-serif italic text-sm md:text-base text-[#5E5B55]">
            Ideas into scalable products.
          </span>
        </div>

        {/* Center / Navigation Links */}
        <div className="flex items-center gap-6 md:gap-8 text-xs sm:text-[13px] font-sans">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#171918] hover:text-[#B68C4A] transition-colors flex items-center gap-1 focus:outline-hidden focus-visible:ring-1 focus-visible:ring-[#B68C4A]"
          >
            <span>GitHub</span>
            <span aria-hidden="true" className="text-[10px]">
              ↗
            </span>
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#171918] hover:text-[#B68C4A] transition-colors flex items-center gap-1 focus:outline-hidden focus-visible:ring-1 focus-visible:ring-[#B68C4A]"
          >
            <span>LinkedIn</span>
            <span aria-hidden="true" className="text-[10px]">
              ↗
            </span>
          </a>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="text-[#171918] hover:text-[#B68C4A] transition-colors flex items-center gap-1 focus:outline-hidden focus-visible:ring-1 focus-visible:ring-[#B68C4A]"
          >
            <span>Email</span>
            <span aria-hidden="true" className="text-[10px]">
              ↗
            </span>
          </a>
          <button
            onClick={onOpenResume}
            className="text-[#171918] hover:text-[#B68C4A] transition-colors flex items-center gap-1 cursor-pointer focus:outline-hidden focus-visible:ring-1 focus-visible:ring-[#B68C4A]"
          >
            <span>Resume</span>
            <span aria-hidden="true" className="text-[10px]">
              ↓
            </span>
          </button>
        </div>

        {/* Right: Copyright */}
        <div>
          <span className="font-mono text-[10px] md:text-[11px] tracking-wide text-[#8E8B84] block">
            © 2026 Shantanu Patil. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

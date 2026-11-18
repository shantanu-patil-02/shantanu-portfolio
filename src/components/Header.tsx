import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeaderProps {
  onOpenResume?: () => void;
  onOpenContact?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenResume, onOpenContact }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-[#F3F0E8] border-b border-[#D6D0C5]/50 sticky top-0 z-40 backdrop-blur-xs">
      <div className="max-w-[1360px] mx-auto px-6 md:px-12 py-5 flex items-center justify-between">
        {/* Brand Zone: Monogram + Full Name */}
        <a
          href="#"
          className="flex items-center gap-3 group focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#B68C4A]"
          aria-label="Shantanu Patil — Home"
        >
          <span className="font-serif text-2xl tracking-tight text-[#171918] group-hover:text-[#B68C4A] transition-colors">
            {PERSONAL_INFO.monogram}
          </span>
          <span className="font-mono text-[11px] md:text-xs tracking-[0.22em] text-[#171918] uppercase font-medium">
            {PERSONAL_INFO.name}
          </span>
        </a>

        {/* Desktop Nav Zone */}
        <nav
          className="hidden md:flex items-center gap-8 text-[13px] font-sans text-[#5E5B55]"
          aria-label="Main Navigation"
        >
          <a
            href="#work"
            className="hover:text-[#171918] transition-colors py-1 focus:outline-hidden focus-visible:ring-1 focus-visible:ring-[#B68C4A]"
          >
            Selected Work
          </a>
          <a
            href="#about"
            className="hover:text-[#171918] transition-colors py-1 focus:outline-hidden focus-visible:ring-1 focus-visible:ring-[#B68C4A]"
          >
            About
          </a>
          <a
            href="#approach"
            className="hover:text-[#171918] transition-colors py-1 focus:outline-hidden focus-visible:ring-1 focus-visible:ring-[#B68C4A]"
          >
            Approach
          </a>
          <a
            href="#skills"
            className="hover:text-[#171918] transition-colors py-1 focus:outline-hidden focus-visible:ring-1 focus-visible:ring-[#B68C4A]"
          >
            Skills
          </a>
          <button
            onClick={onOpenResume}
            className="hover:text-[#171918] transition-colors py-1 cursor-pointer focus:outline-hidden focus-visible:ring-1 focus-visible:ring-[#B68C4A]"
          >
            Resume
          </button>
          <button
            onClick={onOpenContact}
            className="flex items-center gap-2 hover:text-[#171918] transition-colors py-1 cursor-pointer focus:outline-hidden focus-visible:ring-1 focus-visible:ring-[#B68C4A]"
          >
            <span>Contact</span>
            <span
              className="w-2 h-2 rounded-full bg-[#B68C4A] inline-block"
              aria-hidden="true"
            />
          </button>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#171918] focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#B68C4A]"
          aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
          aria-expanded={mobileMenuOpen}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#F3F0E8] border-b border-[#D6D0C5] px-6 py-6 flex flex-col gap-4 text-sm font-sans animate-in fade-in duration-200">
          <a
            href="#work"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#171918] hover:text-[#B68C4A] py-2 transition-colors border-b border-[#D6D0C5]/40"
          >
            Selected Work
          </a>
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#171918] hover:text-[#B68C4A] py-2 transition-colors border-b border-[#D6D0C5]/40"
          >
            About
          </a>
          <a
            href="#approach"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#171918] hover:text-[#B68C4A] py-2 transition-colors border-b border-[#D6D0C5]/40"
          >
            Approach
          </a>
          <a
            href="#skills"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#171918] hover:text-[#B68C4A] py-2 transition-colors border-b border-[#D6D0C5]/40"
          >
            Skills
          </a>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenResume?.();
            }}
            className="text-left text-[#171918] hover:text-[#B68C4A] py-2 transition-colors border-b border-[#D6D0C5]/40 cursor-pointer"
          >
            Resume
          </button>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenContact?.();
            }}
            className="flex items-center justify-between text-[#171918] hover:text-[#B68C4A] py-2 transition-colors cursor-pointer"
          >
            <span>Contact</span>
            <span className="w-2 h-2 rounded-full bg-[#B68C4A]" />
          </button>
        </div>
      )}
    </header>
  );
};

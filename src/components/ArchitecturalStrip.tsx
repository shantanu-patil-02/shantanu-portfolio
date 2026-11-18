import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ArchitecturalStrip: React.FC = () => {
  return (
    <section
      id="quote-strip"
      className="relative w-full bg-[#121413] text-[#F3F0E8] overflow-hidden py-12 md:py-16 border-y border-[#1C1F1E]"
      aria-label="Design Philosophy"
    >
      {/* Background Architectural Texture Image */}
      <div className="absolute inset-0 pointer-events-none opacity-40 mix-blend-luminosity">
        <img
          src="/assets/extracted/architectural-bg.png"
          alt=""
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
          onError={(e) => {
            const target = e.currentTarget;
            if (!target.src.includes('architectural-strip.png')) {
              target.src = '/assets/extracted/architectural-strip.png';
            }
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#121413]/90 via-[#121413]/70 to-[#121413]/90" />
      </div>

      <div className="relative max-w-[1360px] mx-auto px-6 md:px-12 flex flex-col md:flex-row md:items-center justify-between gap-8 z-10">
        {/* Left: Editorial Serif Manifesto */}
        <div className="max-w-xl">
          <p className="font-serif italic text-xl sm:text-2xl md:text-[25px] leading-[1.3] text-[#F3F0E8] tracking-tight">
            <span className="block">{PERSONAL_INFO.quote.line1}</span>
            <span className="block pl-4 sm:pl-6">{PERSONAL_INFO.quote.line2}</span>
            <span className="block pl-8 sm:pl-12 text-[#B68C4A]/90">
              {PERSONAL_INFO.quote.line3}
            </span>
          </p>
        </div>

        {/* Right: Technical Metadata Label */}
        <div className="md:text-right shrink-0">
          <span className="font-mono text-[10px] md:text-[11px] tracking-[0.24em] text-[#A6A29A] uppercase block">
            {PERSONAL_INFO.quote.subtext}
          </span>
        </div>
      </div>
    </section>
  );
};

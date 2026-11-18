import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onExploreProjects: () => void;
  onAboutMe: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreProjects,
  onAboutMe,
}) => {
  const [usePhotoPlaceholder, setUsePhotoPlaceholder] = useState(false);

  return (
    <section className="relative w-full bg-[#F3F0E8] overflow-hidden pt-8 md:pt-14 pb-14 md:pb-20 border-b border-[#D6D0C5]/50">
      <div className="max-w-[1360px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative">
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col justify-center pr-0 lg:pr-6">
            {/* Kicker */}
            <div className="mb-4">
              <span className="font-mono text-[11px] md:text-xs tracking-[0.22em] text-[#5E5B55] uppercase font-medium">
                {PERSONAL_INFO.role}
              </span>
            </div>

            {/* Oversized Serif Headline */}
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[80px] xl:text-[86px] leading-[1.04] text-[#171918] tracking-tight mb-6">
              <span className="block">{PERSONAL_INFO.heroHeadline.line1}</span>
              <span className="block">{PERSONAL_INFO.heroHeadline.line2}</span>
            </h1>

            {/* Supporting Copy */}
            <p className="font-sans text-base sm:text-lg md:text-[19px] leading-relaxed text-[#5E5B55] max-w-xl mb-6">
              {PERSONAL_INFO.supportingCopy}
            </p>

            {/* Subtle Availability / Career Interest line */}
            <div className="flex items-center gap-2.5 mb-8 text-[#5E5B55]">
              <span
                className="w-1.5 h-1.5 rounded-full bg-[#B68C4A] shrink-0"
                aria-hidden="true"
              />
              <span className="font-mono text-xs text-[#5E5B55]">
                {PERSONAL_INFO.availability}
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-6 sm:gap-8">
              <button
                onClick={onExploreProjects}
                className="group inline-flex items-center gap-3 bg-[#171918] text-[#F3F0E8] px-7 py-3.5 font-mono text-[11px] md:text-xs tracking-[0.16em] uppercase font-medium hover:bg-[#2A2E2C] transition-all cursor-pointer focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#B68C4A]"
              >
                <span>VIEW SELECTED WORK</span>
                <span
                  className="transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  →
                </span>
              </button>

              <button
                onClick={onAboutMe}
                className="font-mono text-[11px] md:text-xs tracking-[0.16em] uppercase font-medium text-[#171918] pb-1 border-b border-[#171918] hover:text-[#B68C4A] hover:border-[#B68C4A] transition-colors cursor-pointer focus:outline-hidden focus-visible:ring-1 focus-visible:ring-[#B68C4A]"
              >
                ABOUT ME
              </button>
            </div>
          </div>

          {/* Right Column: Restrained Professional Portrait / Placeholder */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end relative">
            <div className="relative w-full max-w-[360px] md:max-w-[390px] shadow-sm">
              {/* Portrait Frame */}
              <div className="relative overflow-hidden bg-[#E7E2D7] aspect-[3/3.8] border border-[#D6D0C5] flex flex-col items-center justify-center">
                {usePhotoPlaceholder ? (
                  /* Editorial Placeholder mode as requested in Stitch reference */
                  <div className="w-full h-full p-8 flex flex-col justify-between bg-[#E9E4D9]">
                    <div className="flex justify-between items-center text-[10px] font-mono text-[#8E8B84] uppercase">
                      <span>FIGURE 01</span>
                      <span>PORTRAIT SPEC</span>
                    </div>

                    <div className="text-center py-10">
                      <div className="w-16 h-16 mx-auto mb-4 border border-[#B68C4A]/40 flex items-center justify-center font-serif text-2xl text-[#171918]">
                        SP
                      </div>
                      <p className="font-mono text-xs text-[#5E5B55] tracking-wider uppercase mb-1">
                        Shantanu Patil
                      </p>
                      <span className="font-sans text-[11px] text-[#8E8B84]">
                        [Personal photograph placeholder]
                      </span>
                    </div>

                    <button
                      onClick={() => setUsePhotoPlaceholder(false)}
                      className="text-[10px] font-mono text-[#171918] hover:text-[#B68C4A] uppercase tracking-wider underline cursor-pointer text-center"
                    >
                      Show photo view
                    </button>
                  </div>
                ) : (
                  /* High-contrast Monochrome Portrait with Signature Tape */
                  <div className="relative w-full h-full group">
                    <img
                      src="/assets/extracted/portrait-clean.png"
                      alt="Shantanu Patil portrait"
                      className="w-full h-full object-cover grayscale contrast-105"
                      loading="eager"
                      referrerPolicy="no-referrer"
                      onError={() => setUsePhotoPlaceholder(true)}
                    />

                    {/* Subtle toggle option */}
                    <button
                      onClick={() => setUsePhotoPlaceholder(true)}
                      className="absolute top-2 right-2 bg-[#171918]/80 text-[#F3F0E8] font-mono text-[9px] px-2 py-0.5 opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-wider cursor-pointer"
                      title="Switch to editorial placeholder view"
                    >
                      Toggle Box
                    </button>
                  </div>
                )}

                {/* Golden Handwritten Signature Tape */}
                <div className="absolute bottom-4 right-4 bg-[#F9F8F5] border border-[#D6D0C5] px-3.5 py-1.5 shadow-sm transform rotate-[-1.5deg] select-none pointer-events-none">
                  <span className="font-signature text-2xl text-[#B68C4A] font-bold tracking-wide">
                    Shantanu
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Far Right Editorial Marginalia (Desktop Only) */}
          <div className="hidden lg:flex lg:col-span-1 flex-col justify-between items-center h-[380px] pl-2 self-center">
            {/* Location Rotated */}
            <div className="[writing-mode:vertical-rl] text-right font-mono text-[10px] tracking-[0.24em] text-[#8E8B84] uppercase select-none">
              BASED IN INDIA — PUNE
            </div>

            {/* Scroll Indicator */}
            <a
              href="#quote-strip"
              className="flex flex-col items-center gap-1 font-mono text-[10px] tracking-[0.2em] text-[#8E8B84] hover:text-[#171918] transition-colors select-none group"
              aria-label="Scroll to featured section"
            >
              <span>SCROLL</span>
              <span className="transition-transform group-hover:translate-y-0.5">
                ↓
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

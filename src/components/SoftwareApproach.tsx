import React from 'react';
import { APPROACH_STEPS } from '../data/portfolioData';

export const SoftwareApproach: React.FC = () => {
  return (
    <section
      id="approach"
      className="w-full bg-[#F3F0E8] py-16 md:py-24 border-b border-[#D6D0C5]"
    >
      <div className="max-w-[1360px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 md:mb-16">
          <span className="font-mono text-[11px] md:text-xs tracking-[0.22em] text-[#5E5B55] uppercase font-medium block mb-3">
            WORKING PHILOSOPHY
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#171918] tracking-tight mb-4">
            My Approach to Building Software
          </h2>
          <p className="font-sans text-sm sm:text-base leading-relaxed text-[#5E5B55]">
            I treat development as a disciplined craft that connects user intent with technical reality. Here is how I think through building digital products from concept to delivery.
          </p>
        </div>

        {/* 4-Step Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {APPROACH_STEPS.map((step) => (
            <div
              key={step.number}
              className="bg-[#EAE6DC]/50 hover:bg-[#EAE6DC] border border-[#D6D0C5] p-6 sm:p-7 transition-colors duration-200 flex flex-col justify-between group"
            >
              <div>
                {/* Step Number */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#D6D0C5]/60">
                  <span className="font-serif text-3xl text-[#171918] group-hover:text-[#B68C4A] transition-colors">
                    {step.number}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B68C4A]/60" />
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl text-[#171918] mb-2 leading-snug">
                  {step.title}
                </h3>

                {/* Summary */}
                <p className="font-sans font-medium text-xs text-[#171918] mb-3 leading-relaxed">
                  {step.summary}
                </p>

                {/* Details */}
                <p className="font-sans text-xs text-[#5E5B55] leading-relaxed">
                  {step.details}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-[#D6D0C5]/40 flex items-center justify-between text-[10px] font-mono text-[#8E8B84] uppercase tracking-wider">
                <span>Phase {step.number}</span>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity text-[#B68C4A]">
                  Active Craft
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import {
  SKILL_CATEGORIES,
  PERSONAL_INFO,
  WHAT_IM_FOCUSED_ON,
  EDUCATION,
  ACHIEVEMENTS,
} from '../data/portfolioData';

export const SkillsAndAboutSplit: React.FC = () => {
  return (
    <section id="skills" className="w-full border-b border-[#D6D0C5]">
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[700px]">
        {/* Left Column: Dark Tools & Capabilities */}
        <div className="lg:col-span-5 bg-[#141716] text-[#F3F0E8] p-8 sm:p-12 lg:p-14 flex flex-col justify-between">
          <div>
            {/* Header Lockup */}
            <div className="pb-8 border-b border-[#252927] mb-10">
              <span className="font-mono text-[11px] md:text-xs tracking-[0.22em] text-[#8E8B84] uppercase font-medium block mb-3">
                02 / CAPABILITIES &amp; SKILLS
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-[42px] leading-[1.08] text-[#F3F0E8] tracking-tight mb-4">
                Tools &amp;
                <br />
                Technologies
              </h2>
              <p className="font-serif italic text-xs md:text-sm leading-relaxed text-[#A6A29A]">
                Organised by capability. Technologies I actively use, build with, and explore to solve engineering problems.
              </p>
            </div>

            {/* 5 Capability Categories */}
            <div className="space-y-8">
              {SKILL_CATEGORIES.map((cat) => (
                <div key={cat.title} className="border-b border-[#222624] pb-6 last:border-b-0">
                  <div className="flex items-baseline justify-between mb-2">
                    <h3 className="font-serif text-lg md:text-xl text-[#F3F0E8]">
                      {cat.title}
                    </h3>
                    {cat.description && (
                      <span className="font-mono text-[10px] text-[#8E8B84] uppercase tracking-wider">
                        {cat.description}
                      </span>
                    )}
                  </div>

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-1.5 gap-x-4 font-sans text-xs sm:text-[13px] text-[#A6A29A]">
                    {cat.skills.map((skill) => (
                      <li key={skill} className="flex items-center gap-2 hover:text-[#F3F0E8] transition-colors cursor-default">
                        <span className="text-[#B68C4A] text-xs font-mono">•</span>
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Warm Paper About Me, Philosophy, Education & Activities */}
        <div
          id="about"
          className="lg:col-span-7 bg-[#F3F0E8] text-[#171918] p-8 sm:p-12 lg:p-16 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-[#D6D0C5]"
        >
          <div>
            {/* Header */}
            <div className="mb-8">
              <span className="font-mono text-[11px] md:text-xs tracking-[0.22em] text-[#5E5B55] uppercase font-medium block mb-3">
                03 / ABOUT ME
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-[46px] leading-[1.08] text-[#171918] tracking-tight mb-4">
                {PERSONAL_INFO.aboutHeadline}
              </h2>
            </div>

            {/* Introduction Paragraphs */}
            <div className="font-sans text-sm sm:text-[15px] leading-relaxed text-[#5E5B55] space-y-4 mb-10 max-w-2xl">
              <p>
                I’m Shantanu Patil, a Computer Science student at MGM University with a growing focus on full-stack development and software engineering. I enjoy turning ideas into usable digital products—from designing intuitive interfaces to building the backend systems and databases that power them.
              </p>
              <p>
                My approach combines structured problem-solving with an interest in thoughtful visual design. I’m developing my skills across the MERN stack, Java, data structures and algorithms, and AI/ML, with the goal of building software that is both technically sound and genuinely useful.
              </p>
            </div>

            {/* What I'm Focused On */}
            <div className="mb-10">
              <h3 className="font-mono text-xs tracking-[0.2em] uppercase font-bold text-[#171918] pb-2 border-b border-[#D6D0C5] mb-4">
                What I’m focused on
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {WHAT_IM_FOCUSED_ON.map((item) => (
                  <div
                    key={item.title}
                    className="bg-[#EAE6DC]/50 p-4 border border-[#D6D0C5]/60"
                  >
                    <h4 className="font-serif text-base text-[#171918] mb-1">
                      {item.title}
                    </h4>
                    <p className="font-sans text-xs text-[#5E5B55] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Personal Philosophy Quote */}
            <div className="p-6 bg-[#EAE6DC] border-l-2 border-[#B68C4A] border-y border-r border-[#D6D0C5] mb-10">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#8E8B84] block mb-2">
                Personal Philosophy
              </span>
              <p className="font-serif italic text-sm sm:text-base text-[#171918] leading-relaxed">
                “{PERSONAL_INFO.philosophy}”
              </p>
            </div>

            {/* Education & Student Achievements */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-[#D6D0C5]">
              {/* Education */}
              <div>
                <h4 className="font-mono text-[11px] tracking-[0.2em] text-[#8E8B84] uppercase font-bold mb-3">
                  Education
                </h4>
                <div className="bg-[#EAE6DC]/40 p-4 border border-[#D6D0C5]">
                  <h5 className="font-serif text-lg text-[#171918] mb-1">
                    {EDUCATION.institution}
                  </h5>
                  <p className="font-mono text-xs text-[#171918] font-medium mb-2">
                    {EDUCATION.degree} — {EDUCATION.department}
                  </p>
                  <ul className="space-y-1 font-sans text-xs text-[#5E5B55]">
                    {EDUCATION.focusAreas.map((f, i) => (
                      <li key={i}>• {f}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Achievements & Student Activities */}
              <div>
                <h4 className="font-mono text-[11px] tracking-[0.2em] text-[#8E8B84] uppercase font-bold mb-3">
                  Student Activities &amp; Milestones
                </h4>
                <div className="space-y-3">
                  {ACHIEVEMENTS.map((ach) => (
                    <div
                      key={ach.title}
                      className="bg-[#EAE6DC]/40 p-3.5 border border-[#D6D0C5]"
                    >
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="font-sans font-semibold text-xs text-[#171918]">
                          {ach.title}
                        </span>
                        <span className="font-mono text-[10px] px-1.5 py-0.5 bg-[#B68C4A]/15 text-[#977236]">
                          {ach.stage}
                        </span>
                      </div>
                      <p className="font-sans text-[11px] text-[#5E5B55] leading-relaxed">
                        {ach.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

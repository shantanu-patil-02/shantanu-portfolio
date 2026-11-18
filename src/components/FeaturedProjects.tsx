import React from 'react';
import { Project } from '../types/portfolio';
import { PROJECTS } from '../data/portfolioData';

interface FeaturedProjectsProps {
  onSelectProject: (project: Project) => void;
}

export const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({
  onSelectProject,
}) => {
  return (
    <section id="work" className="w-full bg-[#F3F0E8] py-16 md:py-24 border-b border-[#D6D0C5]">
      <div className="max-w-[1360px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-14 md:mb-18">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-8 border-b border-[#D6D0C5]/50">
            <div>
              <span className="font-mono text-[11px] md:text-xs tracking-[0.22em] text-[#5E5B55] uppercase font-medium block mb-3">
                01 / SELECTED WORK
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#171918] tracking-tight">
                Curated
                <br />
                Projects
              </h2>
            </div>

            <div className="max-w-xl">
              <p className="font-sans text-sm md:text-[15px] leading-relaxed text-[#5E5B55]">
                Real web applications and prototypes built with the MERN stack, Java, and emerging technologies. Each project represents hands-on problem solving, from database schemas to interface design.
              </p>
            </div>
          </div>
        </div>

        {/* 4-Project Curated Asymmetric Index */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {PROJECTS.map((project) => (
            <article
              key={project.id}
              className="group flex flex-col justify-between bg-transparent border border-[#D6D0C5] p-6 sm:p-7 hover:border-[#171918]/60 transition-all duration-300 shadow-xs bg-[#EAE6DC]/30 hover:bg-[#EAE6DC]/60"
            >
              <div>
                {/* Browser Mockup Frame */}
                <div
                  onClick={() => onSelectProject(project)}
                  className="cursor-pointer overflow-hidden border border-[#D6D0C5] bg-[#EAE6DC] transition-transform duration-300 group-hover:-translate-y-1 shadow-xs mb-6"
                >
                  {/* Browser Header Bar */}
                  <div
                    className={`flex items-center px-3.5 py-2.5 border-b ${
                      project.id === 'certificate-verification'
                        ? 'bg-[#181B1A] border-[#2A2E2C]'
                        : 'bg-[#E5E0D5] border-[#D6D0C5]'
                    }`}
                  >
                    {/* 3 Traffic Light Dots */}
                    <div className="flex items-center gap-1.5 mr-3">
                      <span
                        className={`w-2 h-2 rounded-full ${
                          project.id === 'certificate-verification'
                            ? 'bg-[#555A58]'
                            : 'bg-[#A8A399]'
                        }`}
                      />
                      <span
                        className={`w-2 h-2 rounded-full ${
                          project.id === 'certificate-verification'
                            ? 'bg-[#404543]'
                            : 'bg-[#BBB6AC]'
                        }`}
                      />
                      <span
                        className={`w-2 h-2 rounded-full ${
                          project.id === 'certificate-verification'
                            ? 'bg-[#404543]'
                            : 'bg-[#BBB6AC]'
                        }`}
                      />
                    </div>

                    {/* Centered / Aligned URL Bar */}
                    <div className="flex-1 text-center pr-8">
                      <span
                        className={`font-mono text-[10px] tracking-wide select-none ${
                          project.id === 'certificate-verification'
                            ? 'text-[#8E9491]'
                            : 'text-[#68645E]'
                        }`}
                      >
                        {project.mockupUrl}
                      </span>
                    </div>
                  </div>

                  {/* Window Body Image */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-white">
                    <img
                      src={project.imageSrc}
                      alt={`${project.title} interface preview`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />

                    {/* Hover Overlay Hint */}
                    <div className="absolute inset-0 bg-[#171918]/15 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="bg-[#171918] text-[#F3F0E8] font-mono text-[10px] tracking-widest px-3.5 py-1.5 uppercase shadow-sm">
                        View Project Details
                      </span>
                    </div>
                  </div>
                </div>

                {/* Project Metadata */}
                <div>
                  <div className="flex items-center justify-between gap-4 mb-2">
                    <span className="font-mono text-[10px] md:text-[11px] tracking-[0.2em] text-[#8E8B84] uppercase font-medium">
                      {project.number} / {project.category}
                    </span>
                    <span
                      className={`font-mono text-[9px] px-2 py-0.5 tracking-wider uppercase ${
                        project.status === 'Implemented'
                          ? 'bg-[#171918] text-[#F3F0E8]'
                          : 'bg-[#B68C4A]/20 text-[#977236]'
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>

                  <h3
                    onClick={() => onSelectProject(project)}
                    className="font-serif text-2xl md:text-3xl text-[#171918] group-hover:text-[#B68C4A] transition-colors cursor-pointer mb-2.5 leading-snug"
                  >
                    {project.title}
                  </h3>

                  <p className="font-sans text-sm leading-relaxed text-[#5E5B55] mb-5">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Bottom Tags & Action */}
              <div className="pt-4 border-t border-[#D6D0C5]/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-[#EAE5DA] text-[#4A4742] font-mono text-[10px] px-2 py-0.5 rounded-[2px] tracking-wide"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* View Project Action */}
                <button
                  onClick={() => onSelectProject(project)}
                  className="group/btn inline-flex items-center gap-1.5 font-sans font-semibold text-xs text-[#171918] hover:text-[#B68C4A] transition-colors cursor-pointer shrink-0 focus:outline-hidden focus-visible:ring-1 focus-visible:ring-[#B68C4A]"
                >
                  <span>Explore Case</span>
                  <span
                    className="transition-transform group-hover/btn:translate-x-1"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

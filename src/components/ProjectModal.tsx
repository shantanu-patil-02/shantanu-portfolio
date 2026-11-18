import React, { useEffect } from 'react';
import { Project } from '../types/portfolio';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-[#171918]/70 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#F3F0E8] border border-[#D6D0C5] shadow-2xl p-6 sm:p-10 md:p-12 text-[#171918]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-[#5E5B55] hover:text-[#171918] transition-colors focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#B68C4A] cursor-pointer"
          aria-label="Close modal"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Modal Header */}
        <div className="mb-8 pr-8 border-b border-[#D6D0C5]/50 pb-6">
          <div className="flex items-center gap-3 mb-2">
            <span className="font-mono text-[11px] tracking-[0.22em] text-[#8E8B84] uppercase font-medium">
              PROJECT {project.number} / {project.category}
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

          <h2
            id="modal-project-title"
            className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#171918] tracking-tight mb-3"
          >
            {project.title}
          </h2>

          <p className="font-sans text-base leading-relaxed text-[#5E5B55] max-w-2xl">
            {project.description}
          </p>
        </div>

        {/* Media Window */}
        <div className="mb-8 border border-[#D6D0C5] bg-[#EAE6DC] overflow-hidden shadow-xs">
          <div className="flex items-center px-4 py-2.5 bg-[#E5E0D5] border-b border-[#D6D0C5]">
            <div className="flex items-center gap-1.5 mr-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#A8A399]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#BBB6AC]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#BBB6AC]" />
            </div>
            <span className="font-mono text-xs text-[#68645E] select-none mx-auto">
              https://{project.mockupUrl}
            </span>
          </div>
          <div className="relative aspect-[16/9] bg-white">
            <img
              src={project.imageSrc}
              alt={`${project.title} interface preview`}
              className="w-full h-full object-contain md:object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Deep Dive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-8">
          <div className="md:col-span-7 space-y-6">
            {/* Problem / Purpose */}
            <div>
              <h3 className="font-mono text-xs tracking-[0.2em] uppercase font-bold text-[#171918] mb-2">
                Problem &amp; Purpose
              </h3>
              <p className="font-sans text-sm leading-relaxed text-[#5E5B55]">
                {project.problem}
              </p>
            </div>

            {/* My Contribution */}
            <div>
              <h3 className="font-mono text-xs tracking-[0.2em] uppercase font-bold text-[#171918] mb-2">
                My Contribution
              </h3>
              <p className="font-sans text-sm leading-relaxed text-[#5E5B55]">
                {project.contribution}
              </p>
            </div>

            {/* Technical Decisions */}
            <div>
              <h3 className="font-mono text-xs tracking-[0.2em] uppercase font-bold text-[#171918] mb-2">
                Key Technical Decisions
              </h3>
              <ul className="space-y-2">
                {project.technicalDecisions.map((decision, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2.5 font-sans text-xs sm:text-sm text-[#5E5B55]"
                  >
                    <span className="text-[#B68C4A] font-mono text-xs mt-0.5" aria-hidden="true">
                      —
                    </span>
                    <span>{decision}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Stack & Repositories */}
          <div className="md:col-span-5 bg-[#EAE6DC]/60 p-6 border border-[#D6D0C5] self-start space-y-6">
            <div>
              <h4 className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#171918] font-semibold mb-3">
                Main Technologies
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((t) => (
                  <span
                    key={t}
                    className="bg-[#F3F0E8] border border-[#D6D0C5] text-[#171918] font-mono text-xs px-2.5 py-1 rounded-[2px]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-[#D6D0C5] space-y-3">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#171918] text-[#F3F0E8] px-4 py-2.5 font-mono text-xs tracking-wider uppercase font-medium hover:bg-[#2A2E2C] transition-colors flex items-center justify-center gap-2"
              >
                <span>GitHub Repository</span>
                <span aria-hidden="true">↗</span>
              </a>

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-transparent border border-[#171918] text-[#171918] px-4 py-2.5 font-mono text-xs tracking-wider uppercase font-medium hover:bg-[#171918]/5 transition-colors flex items-center justify-center gap-2"
                >
                  <span>Live Preview [Demo]</span>
                  <span aria-hidden="true">↗</span>
                </a>
              )}

              <span className="block text-center font-mono text-[10px] text-[#8E8B84]">
                Repository: {project.githubUrl.replace('https://github.com/', '')}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

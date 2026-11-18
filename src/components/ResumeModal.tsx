import React, { useEffect } from 'react';
import {
  PERSONAL_INFO,
  PROJECTS,
  SKILL_CATEGORIES,
  EDUCATION,
  ACHIEVEMENTS,
} from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadTxt = () => {
    const resumeText = `
SHANTANU PATIL
Full-Stack Developer in the Making
Location: ${PERSONAL_INFO.location}
Email: ${PERSONAL_INFO.email}
GitHub: ${PERSONAL_INFO.github}
LinkedIn: ${PERSONAL_INFO.linkedin}

===================================================================
EDUCATION
===================================================================
${EDUCATION.institution}
${EDUCATION.degree} — ${EDUCATION.department}
Focus: ${EDUCATION.focusAreas.join(', ')}

===================================================================
TECHNICAL CAPABILITIES & SKILLS
===================================================================
${SKILL_CATEGORIES.map((c) => `${c.title}: ${c.skills.join(', ')}`).join('\n')}

===================================================================
SELECTED ENGINEERING PROJECTS
===================================================================
1. Prime Properties (${PROJECTS[0].category})
   Stack: ${PROJECTS[0].technologies.join(', ')}
   Description: ${PROJECTS[0].description}
   Contribution: ${PROJECTS[0].contribution}

2. Student Portal (${PROJECTS[1].category})
   Stack: ${PROJECTS[1].technologies.join(', ')}
   Description: ${PROJECTS[1].description}
   Contribution: ${PROJECTS[1].contribution}

3. Certificate Verification (${PROJECTS[2].category})
   Stack: ${PROJECTS[2].technologies.join(', ')}
   Description: ${PROJECTS[2].description}
   Contribution: ${PROJECTS[2].contribution}

4. FarmPro (${PROJECTS[3].category})
   Stack: ${PROJECTS[3].technologies.join(', ')}
   Description: ${PROJECTS[3].description}
   Contribution: ${PROJECTS[3].contribution}

===================================================================
STUDENT ACHIEVEMENTS & ACTIVITIES
===================================================================
- ${ACHIEVEMENTS[0].title}: ${ACHIEVEMENTS[0].stage} — ${ACHIEVEMENTS[0].description}
- ${ACHIEVEMENTS[1].title}: ${ACHIEVEMENTS[1].stage} — ${ACHIEVEMENTS[1].description}
- ${ACHIEVEMENTS[2].title}: ${ACHIEVEMENTS[2].stage} — ${ACHIEVEMENTS[2].description}

===================================================================
PERSONAL PHILOSOPHY
===================================================================
"${PERSONAL_INFO.philosophy}"
    `.trim();

    const blob = new Blob([resumeText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Shantanu_Patil_Resume.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-[#171918]/70 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-title"
    >
      <div
        className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto bg-[#F9F8F5] border border-[#D6D0C5] shadow-2xl p-6 sm:p-10 text-[#171918]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Action Bar */}
        <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#D6D0C5] print:hidden">
          <span className="font-mono text-xs tracking-widest text-[#8E8B84] uppercase">
            Curriculum Vitae — Shantanu Patil
          </span>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="bg-[#171918] text-[#F3F0E8] font-mono text-[11px] tracking-wider px-3 py-1.5 uppercase hover:bg-[#2A2E2C] transition-colors cursor-pointer"
            >
              Print / Save PDF
            </button>
            <button
              onClick={handleDownloadTxt}
              className="border border-[#171918] font-mono text-[11px] tracking-wider px-3 py-1.5 uppercase hover:bg-[#171918]/5 transition-colors cursor-pointer"
            >
              Export .TXT
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-[#5E5B55] hover:text-[#171918] transition-colors cursor-pointer ml-2"
              aria-label="Close resume"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Printable Resume Sheet */}
        <div className="bg-white p-8 sm:p-12 border border-[#E5E0D5] shadow-xs font-sans print:border-none print:shadow-none print:p-0">
          {/* Header */}
          <div className="border-b border-[#171918] pb-6 mb-6">
            <h1 id="resume-title" className="font-serif text-3xl sm:text-4xl text-[#171918] mb-1">
              {PERSONAL_INFO.name}
            </h1>
            <p className="font-mono text-xs tracking-wider text-[#5E5B55] uppercase mb-3">
              {PERSONAL_INFO.role}
            </p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-[11px] text-[#5E5B55]">
              <span>📍 {PERSONAL_INFO.location}</span>
              <span>•</span>
              <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:underline">
                ✉️ {PERSONAL_INFO.email}
              </a>
              <span>•</span>
              <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="hover:underline">
                github.com/{PERSONAL_INFO.githubUsername}
              </a>
              <span>•</span>
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="hover:underline">
                linkedin.com/in/shantanu-patil
              </a>
            </div>
          </div>

          {/* Education */}
          <div className="mb-6">
            <h2 className="font-mono text-xs tracking-widest uppercase font-bold text-[#171918] pb-1 border-b border-[#D6D0C5] mb-3">
              Education
            </h2>
            <div className="flex justify-between items-baseline">
              <div>
                <h3 className="font-semibold text-sm text-[#171918]">
                  {EDUCATION.degree} in {EDUCATION.department}
                </h3>
                <p className="text-xs text-[#5E5B55]">{EDUCATION.institution}</p>
              </div>
              <div className="text-right">
                <span className="font-mono text-xs text-[#8E8B84]">Computer Science</span>
              </div>
            </div>
            <p className="text-[11px] text-[#5E5B55] mt-1.5">
              Focus: {EDUCATION.focusAreas.join(' · ')}
            </p>
          </div>

          {/* Technical Capabilities */}
          <div className="mb-6">
            <h2 className="font-mono text-xs tracking-widest uppercase font-bold text-[#171918] pb-1 border-b border-[#D6D0C5] mb-3">
              Technical Capabilities
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 text-xs">
              {SKILL_CATEGORIES.map((c) => (
                <div key={c.title} className="pr-4">
                  <span className="font-semibold text-[#171918]">{c.title}: </span>
                  <span className="text-[#5E5B55]">{c.skills.join(', ')}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div className="mb-6">
            <h2 className="font-mono text-xs tracking-widest uppercase font-bold text-[#171918] pb-1 border-b border-[#D6D0C5] mb-3">
              Selected Engineering Projects
            </h2>
            <div className="space-y-4 text-xs">
              {PROJECTS.map((proj) => (
                <div key={proj.id}>
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="font-semibold text-[#171918]">
                      {proj.title} <span className="font-mono text-[10px] text-[#8E8B84]">[{proj.category}]</span>
                    </h3>
                    <span className="font-mono text-[10px] text-[#5E5B55]">
                      {proj.technologies.join(' · ')}
                    </span>
                  </div>
                  <p className="text-[#5E5B55] leading-relaxed mb-1">
                    {proj.description}
                  </p>
                  <p className="text-[11px] text-[#5E5B55]">
                    <strong className="text-[#171918]">Contribution:</strong> {proj.contribution}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Student Activities */}
          <div>
            <h2 className="font-mono text-xs tracking-widest uppercase font-bold text-[#171918] pb-1 border-b border-[#D6D0C5] mb-3">
              Activities &amp; Involvement
            </h2>
            <ul className="list-disc list-inside text-xs text-[#5E5B55] space-y-1">
              {ACHIEVEMENTS.map((ach) => (
                <li key={ach.title}>
                  <strong className="text-[#171918]">{ach.title} ({ach.stage}):</strong> {ach.description}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

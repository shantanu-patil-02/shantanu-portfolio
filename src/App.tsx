/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ArchitecturalStrip } from './components/ArchitecturalStrip';
import { FeaturedProjects } from './components/FeaturedProjects';
import { SoftwareApproach } from './components/SoftwareApproach';
import { SkillsAndAboutSplit } from './components/SkillsAndAboutSplit';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { ResumeModal } from './components/ResumeModal';
import { ContactModal } from './components/ContactModal';
import { Project } from './types/portfolio';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [contactDialogOpen, setContactDialogOpen] = useState(false);

  const scrollToWork = () => {
    const el = document.getElementById('work');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    const el = document.getElementById('about');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F3F0E8] text-[#171918] selection:bg-[#B68C4A]/20 selection:text-[#171918] flex flex-col font-sans">
      {/* 1. Header (Slim SP Monogram, Single-line Nav, Resume, Contact Indicator) */}
      <Header
        onOpenResume={() => setResumeOpen(true)}
        onOpenContact={scrollToContact}
      />

      {/* Main Content Flow */}
      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero
          onExploreProjects={scrollToWork}
          onAboutMe={scrollToAbout}
        />

        {/* 3. Architectural Manifesto Banner */}
        <ArchitecturalStrip />

        {/* 4. Section 01: Selected Work (4 Curated Projects including FarmPro) */}
        <FeaturedProjects
          onSelectProject={(project) => setSelectedProject(project)}
        />

        {/* 5. Section: My Approach to Building Software (4-Step Working Philosophy) */}
        <SoftwareApproach />

        {/* 6. Section 02 / 03: Dual Block Split (Capabilities & Skills + About Me, Education & Milestones) */}
        <SkillsAndAboutSplit />

        {/* 7. Section 04: Dedicated Contact & Collaboration ("Have a worthwhile problem to solve?") */}
        <ContactSection
          onOpenResume={() => setResumeOpen(true)}
          onOpenMessageDialog={() => setContactDialogOpen(true)}
        />
      </main>

      {/* 8. Editorial Footer */}
      <Footer onOpenResume={() => setResumeOpen(true)} />

      {/* Interactive Modals */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />

      <ContactModal
        isOpen={contactDialogOpen}
        onClose={() => setContactDialogOpen(false)}
      />
    </div>
  );
}

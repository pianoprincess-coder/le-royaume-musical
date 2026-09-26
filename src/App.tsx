/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { SectionId } from './types/music';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { HistoryPavilion } from './components/HistoryPavilion';
import { InstrumentsPavilion } from './components/InstrumentsPavilion';
import { SolfegePavilion } from './components/SolfegePavilion';
import { SciencePavilion } from './components/SciencePavilion';
import { TechnologyPavilion } from './components/TechnologyPavilion';
import { PeoplePavilion } from './components/PeoplePavilion';
import { QuestionsPavilion } from './components/QuestionsPavilion';
import { LearningStudio } from './components/LearningStudio';
import { KnowledgeSearchModal } from './components/KnowledgeSearchModal';
import { Footer } from './components/Footer';

export default function App() {
  const [currentSection, setCurrentSection] = useState<SectionId>('accueil');
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [isStudioOpen, setIsStudioOpen] = useState<boolean>(false);

  // Global hotkey: Ctrl+K or Cmd+K opens universal search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(prev => !prev);
      }
      if (e.key === 'Escape') {
        setIsSearchOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleNavigate = (section: SectionId) => {
    setCurrentSection(section);
    setIsStudioOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectSearchResult = (section: SectionId, _topicId?: string) => {
    handleNavigate(section);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFF9FA] text-[#2C1823]">
      
      {/* Top Bar Navigation */}
      <Navbar
        currentSection={currentSection}
        onNavigate={handleNavigate}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenStudio={() => {
          setIsStudioOpen(true);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        
        {/* Studio Sonore Display if Active */}
        {isStudioOpen ? (
          <LearningStudio 
            onClose={() => setIsStudioOpen(false)} 
            onNavigate={handleNavigate}
          />
        ) : (
          <>
            {currentSection === 'accueil' && (
              <>
                <HeroSection onNavigate={handleNavigate} />
                <div className="border-t border-[#F3D5DF]/70">
                  <QuestionsPavilion onNavigate={handleNavigate} />
                </div>
              </>
            )}

            {currentSection === 'histoire' && (
              <HistoryPavilion onNavigate={handleNavigate} />
            )}

            {currentSection === 'instruments' && (
              <InstrumentsPavilion onNavigate={handleNavigate} />
            )}

            {currentSection === 'solfege' && (
              <SolfegePavilion onNavigate={handleNavigate} />
            )}

            {currentSection === 'science' && (
              <SciencePavilion onNavigate={handleNavigate} />
            )}

            {currentSection === 'technologie' && (
              <TechnologyPavilion onNavigate={handleNavigate} />
            )}

            {currentSection === 'personnalites' && (
              <PeoplePavilion onNavigate={handleNavigate} />
            )}

            {currentSection === 'questions' && (
              <QuestionsPavilion onNavigate={handleNavigate} />
            )}

            {currentSection === 'apprendre' && (
              <LearningStudio onNavigate={handleNavigate} />
            )}
          </>
        )}

      </main>

      {/* Universal Search Dialog Modal */}
      <KnowledgeSearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectResult={handleSelectSearchResult}
      />

      {/* Curatorial Institutional Footer */}
      <Footer onNavigate={handleNavigate} />

    </div>
  );
}

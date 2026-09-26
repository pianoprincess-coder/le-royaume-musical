import React from 'react';
import { Search, Music, Sparkles } from 'lucide-react';
import { SectionId } from '../types/music';
import logoImg from '../assets/images/logo_royaume_musical_1790429419196.jpg';

interface NavbarProps {
  currentSection: SectionId;
  onNavigate: (section: SectionId) => void;
  onOpenSearch: () => void;
  onOpenStudio: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentSection,
  onNavigate,
  onOpenSearch,
  onOpenStudio
}) => {
  return (
    <header className="sticky top-0 z-40 bg-[#FFF9FA]/90 backdrop-blur-md border-b border-[#F5D5DF]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        
        {/* Zone 1: Single text element Brand Zone with Logo */}
        <a 
          href="#accueil" 
          onClick={(e) => { e.preventDefault(); onNavigate('accueil'); }}
          className="flex items-center gap-2.5 group cursor-pointer"
        >
          <img 
            src={logoImg} 
            alt="Logo Le Royaume Musical" 
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = '/assets/images/logo_royaume_musical_1790429419196.jpg';
            }}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover border border-[#E8B8C8] shadow-xs group-hover:scale-105 transition-transform shrink-0"
          />
          <span className="text-xl sm:text-2xl font-serif font-bold tracking-tight text-[#3A1D28] group-hover:text-[#B33964] transition-colors">
            Le Royaume Musical
          </span>
        </a>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#684C55]">
          <button 
            onClick={() => onNavigate('histoire')}
            className={`cursor-pointer transition-colors hover:text-[#9F2D55] ${currentSection === 'histoire' ? 'text-[#9F2D55] font-semibold border-b-2 border-[#D48BA3] pb-1' : ''}`}
          >
            Histoire Universelle
          </button>
          <button 
            onClick={() => onNavigate('instruments')}
            className={`cursor-pointer transition-colors hover:text-[#9F2D55] ${currentSection === 'instruments' ? 'text-[#9F2D55] font-semibold border-b-2 border-[#D48BA3] pb-1' : ''}`}
          >
            Palais des Instruments
          </button>
          <button 
            onClick={() => onNavigate('solfege')}
            className={`cursor-pointer transition-colors hover:text-[#9F2D55] ${currentSection === 'solfege' ? 'text-[#9F2D55] font-semibold border-b-2 border-[#D48BA3] pb-1' : ''}`}
          >
            Solfège & Notation
          </button>
          <button 
            onClick={() => onNavigate('science')}
            className={`cursor-pointer transition-colors hover:text-[#9F2D55] ${currentSection === 'science' ? 'text-[#9F2D55] font-semibold border-b-2 border-[#D48BA3] pb-1' : ''}`}
          >
            Sciences & Mathématiques
          </button>
          <button 
            onClick={() => onNavigate('technologie')}
            className={`cursor-pointer transition-colors hover:text-[#9F2D55] ${currentSection === 'technologie' ? 'text-[#9F2D55] font-semibold border-b-2 border-[#D48BA3] pb-1' : ''}`}
          >
            Technologies
          </button>
          <button 
            onClick={() => onNavigate('questions')}
            className={`cursor-pointer transition-colors hover:text-[#9F2D55] ${currentSection === 'questions' ? 'text-[#9F2D55] font-semibold border-b-2 border-[#D48BA3] pb-1' : ''}`}
          >
            Grandes Questions
          </button>
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenSearch}
            className="flex items-center gap-2 px-3.5 py-1.5 text-xs sm:text-sm font-medium text-[#5B3E48] bg-[#FCECEF] hover:bg-[#F9DDE5] border border-[#F3C4D4] rounded-lg transition-colors cursor-pointer"
            title="Recherche universelle dans l'encyclopédie"
          >
            <Search className="w-3.5 h-3.5 text-[#A33D62]" />
            <span className="hidden sm:inline">Rechercher</span>
            <kbd className="hidden md:inline text-[10px] text-[#865969] bg-white/70 px-1 py-0.5 rounded border border-[#E9BDCE]">⌘K</kbd>
          </button>

          <button
            onClick={onOpenStudio}
            className="flex items-center gap-2 px-3.5 py-1.5 text-xs sm:text-sm font-medium text-white bg-[#9F2D55] hover:bg-[#852345] rounded-lg shadow-sm hover:shadow transition-all cursor-pointer whitespace-nowrap"
          >
            <Music className="w-3.5 h-3.5" />
            <span>Studio Sonore</span>
          </button>
        </div>

      </div>
    </header>
  );
};

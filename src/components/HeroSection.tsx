import React from 'react';
import { SectionId } from '../types/music';
import heroImg from '../assets/images/hero_royaume_musical_1790388213256.jpg';
import { 
  Landmark, 
  Sparkles, 
  BookOpen, 
  FlaskConical, 
  Binary, 
  Brain, 
  Mic, 
  Cpu, 
  HelpCircle, 
  ChevronRight,
  Globe2,
  Users
} from 'lucide-react';

interface HeroSectionProps {
  onNavigate: (section: SectionId) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24">
      {/* Decorative royal soft ambient background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-[#FCE8ED]/80 via-[#FFF5F8]/40 to-transparent pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Curatorial Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-[#9D4366] font-medium mb-3">
            <span>Encyclopédie Musicale</span>
            <span aria-hidden="true">·</span>
            <span>Musée Numérique</span>
            <span aria-hidden="true">·</span>
            <span>Sciences Acoustiques & Histoire</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#2A1720] tracking-tight mb-4 text-balance">
            Le Royaume Musical
          </h1>

          <p className="text-lg sm:text-xl font-serif italic text-[#7C3F57] mb-5">
            « Là où la musique raconte son histoire. »
          </p>

          <div className="p-4 sm:p-5 rounded-2xl bg-[#FFF0F4]/70 border border-[#F3CAD7] shadow-sm max-w-2xl mx-auto">
            <p className="text-base sm:text-lg text-[#4E2D3A] font-serif leading-relaxed italic">
              « Avant d'arriver jusqu'à ton oreille, chaque musique a parcouru une immense histoire. »
            </p>
          </div>
        </div>

        {/* Hero Architectural Image Artwork */}
        <div className="relative rounded-2xl overflow-hidden shadow-lg border border-[#ECD1DC] mb-16 bg-[#FFF2F5]">
          <div className="aspect-[16/9] max-h-[480px] w-full relative">
            <img 
              src={heroImg} 
              alt="Le Grand Salon de Musique du Royaume Musical" 
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = '/assets/images/hero_royaume_musical_1790388213256.jpg';
              }}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            {/* Elegant gradient scrim */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#25121B]/85 via-[#25121B]/30 to-transparent flex flex-col justify-end p-6 sm:p-10 text-white">
              <span className="text-xs uppercase tracking-widest text-[#F9D2DF] font-medium mb-1">
                Portail des Savoirs Musicaux Universels
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-white mb-2 max-w-2xl">
                Explorez les cathédrales du son, de la première flûte en os jusqu'aux symphonies quantiques.
              </h2>
              <p className="text-sm sm:text-base text-[#F7D8E2] max-w-2xl">
                Un voyage rigoureux reliant organologie, solfège, équations de Pythagore, biomécanique vocale et révolutions technologiques.
              </p>
            </div>
          </div>
        </div>

        {/* The 10 Pavilions of Knowledge */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-6 border-b border-[#F0CBD8] pb-3">
            <div>
              <h2 className="text-2xl font-serif font-bold text-[#2A1720]">
                Les Pavillons du Savoir
              </h2>
              <p className="text-xs sm:text-sm text-[#73515E]">
                Pénétrez dans les galeries thématiques de notre musée et conservatoire numérique.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            
            {/* Pavillon 1: Histoire Universelle */}
            <button 
              onClick={() => onNavigate('histoire')}
              className="text-left p-5 rounded-xl bg-white border border-[#EED0DC] hover:border-[#D17E9C] hover:shadow-md transition-all group cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#FCE8EE] text-[#9F2D55] flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                  <Landmark className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-serif font-bold text-[#301622] group-hover:text-[#9F2D55] transition-colors mb-1">
                  Château de l'Histoire
                </h3>
                <p className="text-xs text-[#7A5B67] leading-relaxed">
                  De la Préhistoire aux temps modernes : Mésopotamie, Grèce antique, Moyen Âge, Renaissance, Baroque, et traditions du monde (Maroc, Orient, Inde).
                </p>
              </div>
              <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-[#9F2D55]">
                <span>Explorer la chronologie</span>
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>

            {/* Pavillon 2: Instruments */}
            <button 
              onClick={() => onNavigate('instruments')}
              className="text-left p-5 rounded-xl bg-white border border-[#EED0DC] hover:border-[#D17E9C] hover:shadow-md transition-all group cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#FCE8EE] text-[#9F2D55] flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-serif font-bold text-[#301622] group-hover:text-[#9F2D55] transition-colors mb-1">
                  Palais des Instruments
                </h3>
                <p className="text-xs text-[#7A5B67] leading-relaxed">
                  Anatomie complète et chaîne acoustique : Piano, Violon, Oud, Guembri gnawa, Kora d'Afrique et classification Hornbostel-Sachs.
                </p>
              </div>
              <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-[#9F2D55]">
                <span>Découvrir l'anatomie</span>
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>

            {/* Pavillon 3: Solfège */}
            <button 
              onClick={() => onNavigate('solfege')}
              className="text-left p-5 rounded-xl bg-white border border-[#EED0DC] hover:border-[#D17E9C] hover:shadow-md transition-all group cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#FCE8EE] text-[#9F2D55] flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-serif font-bold text-[#301622] group-hover:text-[#9F2D55] transition-colors mb-1">
                  Bibliothèque du Solfège
                </h3>
                <p className="text-xs text-[#7A5B67] leading-relaxed">
                  L'invention des notes par Guido d'Arezzo, Ut queant laxis, la portée, les clés (Sol, Fa, Ut), les figures rythmiques et métronome.
                </p>
              </div>
              <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-[#9F2D55]">
                <span>Lire la notation</span>
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>

            {/* Pavillon 4: Sciences & Acoustique */}
            <button 
              onClick={() => onNavigate('science')}
              className="text-left p-5 rounded-xl bg-white border border-[#EED0DC] hover:border-[#D17E9C] hover:shadow-md transition-all group cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#FCE8EE] text-[#9F2D55] flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                  <FlaskConical className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-serif font-bold text-[#301622] group-hover:text-[#9F2D55] transition-colors mb-1">
                  Laboratoire du Son & Mathématiques
                </h3>
                <p className="text-xs text-[#7A5B67] leading-relaxed">
                  Ondes de pression, spectre de Fourier, harmoniques, monocorde de Pythagore, formule du tempérament égal et lois de Mersenne.
                </p>
              </div>
              <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-[#9F2D55]">
                <span>Calculer & écouter</span>
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>

            {/* Pavillon 5: Technologies */}
            <button 
              onClick={() => onNavigate('technologie')}
              className="text-left p-5 rounded-xl bg-white border border-[#EED0DC] hover:border-[#D17E9C] hover:shadow-md transition-all group cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#FCE8EE] text-[#9F2D55] flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                  <Cpu className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-serif font-bold text-[#301622] group-hover:text-[#9F2D55] transition-colors mb-1">
                  Galerie des Inventions
                </h3>
                <p className="text-xs text-[#7A5B67] leading-relaxed">
                  De l'imprimerie de Petrucci au phonautographe, phonographe d'Edison, disque vinyle, bande magnétique, synthèse Moog et MP3.
                </p>
              </div>
              <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-[#9F2D55]">
                <span>Parcourir les inventions</span>
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>

            {/* Pavillon 6: Grandes Questions */}
            <button 
              onClick={() => onNavigate('questions')}
              className="text-left p-5 rounded-xl bg-white border border-[#EED0DC] hover:border-[#D17E9C] hover:shadow-md transition-all group cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#FCE8EE] text-[#9F2D55] flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                  <HelpCircle className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-serif font-bold text-[#301622] group-hover:text-[#9F2D55] transition-colors mb-1">
                  Les Grandes Énigmes Résolues
                </h3>
                <p className="text-xs text-[#7A5B67] leading-relaxed">
                  Pourquoi 7 notes ? Pourquoi « octave » ? Pourquoi 12 demi-tons ? Pourquoi 440 Hz ? Pourquoi le piano a 88 touches ?
                </p>
              </div>
              <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-[#9F2D55]">
                <span>Consulter les réponses</span>
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>

          </div>
        </div>

        {/* Curatorial Trust Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-[#FFF6F8] border border-[#F1D6DF] flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#FCE3EC] border border-[#F3C4D4] flex items-center justify-center shrink-0 text-[#9F2D55]">
              <Globe2 className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-serif font-bold text-[#2E1822]">
                Sources Académiques & Rigueur Scientifique
              </h4>
              <p className="text-xs text-[#6F4E5A] max-w-xl">
                Contenus fondés sur les travaux de musicologie comparée, les conservatoires nationaux, les archives du CNRS, de l'IRCAM et du Musée de la Musique.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 text-xs text-[#8E5168] font-medium shrink-0">
            <span>Archéoacoustique</span>
            <span>·</span>
            <span>Organologie</span>
            <span>·</span>
            <span>Solfège historique</span>
          </div>
        </div>

      </div>
    </section>
  );
};

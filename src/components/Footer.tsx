import React from 'react';
import { SectionId } from '../types/music';
import { Globe2, BookMarked, Landmark, Sparkles } from 'lucide-react';

interface FooterProps {
  onNavigate: (section: SectionId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#FFF3F6] border-t border-[#F1D0DC] text-[#442834] pt-14 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Brand & Slogan Column */}
          <div className="space-y-3">
            <h3 className="font-serif font-bold text-2xl text-[#2B1521]">
              Le Royaume Musical
            </h3>
            <p className="text-xs font-serif italic text-[#8B3F5B] leading-relaxed">
              « Là où la musique raconte son histoire. »
            </p>
            <p className="text-xs text-[#6F4E5B] leading-relaxed pt-1">
              « Avant d'arriver jusqu'à ton oreille, chaque musique a parcouru une immense histoire. »
            </p>
            <div className="pt-2 text-[11px] text-[#865969]">
              Encyclopédie · Musée numérique · Solfège · Sciences · Mathématiques · Organologie
            </div>
          </div>

          {/* Pavilions Links */}
          <div className="space-y-2">
            <h4 className="text-xs uppercase font-mono tracking-widest text-[#9F2D55] font-bold mb-3">
              Les Pavillons
            </h4>
            <ul className="space-y-1.5 text-xs text-[#5D3D4B]">
              <li>
                <button onClick={() => onNavigate('histoire')} className="hover:text-[#9F2D55] transition-colors cursor-pointer">
                  Château de l'Histoire Universelle
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('instruments')} className="hover:text-[#9F2D55] transition-colors cursor-pointer">
                  Palais des Instruments & Anatomie
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('solfege')} className="hover:text-[#9F2D55] transition-colors cursor-pointer">
                  Bibliothèque du Solfège & Notations
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('science')} className="hover:text-[#9F2D55] transition-colors cursor-pointer">
                  Laboratoire du Son & Mathématiques
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('technologie')} className="hover:text-[#9F2D55] transition-colors cursor-pointer">
                  Galerie des Inventions & Technologies
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('questions')} className="hover:text-[#9F2D55] transition-colors cursor-pointer">
                  Salle des Grandes Énigmes Résolues
                </button>
              </li>
            </ul>
          </div>

          {/* Institutions & Sources */}
          <div className="space-y-2">
            <h4 className="text-xs uppercase font-mono tracking-widest text-[#9F2D55] font-bold mb-3">
              Sources & Rigueur Académique
            </h4>
            <ul className="space-y-1.5 text-xs text-[#5D3D4B]">
              <li>Musée de la Musique — Philharmonie de Paris</li>
              <li>Institut de Recherche et Coordination Acoustique/Musique (IRCAM)</li>
              <li>Laboratoire d'Acoustique Musicale (Sorbonne Université / CNRS)</li>
              <li>The New Grove Dictionary of Music and Musicians</li>
              <li>Conservatoire National Supérieur de Musique et de Danse (CNSMDP)</li>
              <li>Bibliothèque nationale de France (Département de la Musique)</li>
            </ul>
          </div>

          {/* Pedagogy Principles */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase font-mono tracking-widest text-[#9F2D55] font-bold mb-3">
              Charte Pédagogique
            </h4>
            <p className="text-xs text-[#6F4E5B] leading-relaxed">
              Priorité absolue à l'exactitude historique, à l'universalité culturelle et à la complétude scientifique. Aucune date ou théorie n'est inventée.
            </p>
            <div className="p-3 rounded-xl bg-white border border-[#EACBD7] text-[11px] text-[#784A5B]">
              <strong>Niveaux d'apprentissage :</strong>
              <div className="mt-1 flex items-center gap-2">
                <span>Niveau 1 (Clarté)</span>
                <span>·</span>
                <span>Niveau 2 (Approfondi)</span>
                <span>·</span>
                <span>Niveau 3 (Équations)</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Hairline & Legal Bar */}
        <div className="pt-6 border-t border-[#F2D0DC] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#875B6B]">
          <div>
            © 2026 <span className="font-serif font-semibold text-[#301622]">Le Royaume Musical</span> — Fondé par Amira Zakir — Tous droits réservés au service de la culture universelle.
          </div>
          <div className="flex items-center gap-3">
            <span>Harmonie</span>
            <span>·</span>
            <span>Acoustique</span>
            <span>·</span>
            <span>Histoire</span>
            <span>·</span>
            <span>Solfège</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

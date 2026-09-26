import React, { useState } from 'react';
import { PEOPLE_DATA } from '../data/peopleData';
import { SectionId } from '../types/music';
import { Crown, BookOpen, Quote, Sparkles, ArrowRight } from 'lucide-react';

interface PeoplePavilionProps {
  onNavigate: (section: SectionId) => void;
  onSelectTopic?: (topic: string) => void;
}

export const PeoplePavilion: React.FC<PeoplePavilionProps> = ({ onNavigate, onSelectTopic }) => {
  const [selectedPersonId, setSelectedPersonId] = useState<string>(PEOPLE_DATA[0].id);

  const person = PEOPLE_DATA.find(p => p.id === selectedPersonId) || PEOPLE_DATA[0];

  return (
    <div className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header */}
      <div className="mb-8 border-b border-[#F2D1DC] pb-6">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#A24467] font-medium mb-1">
          <span>Galerie des Personnalités & Penseurs</span>
          <span aria-hidden="true">·</span>
          <span>Compositeurs, Théoriciens, Facteurs & Scientifiques</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#2A1620] mb-3">
          Ceux qui ont Façonné l'Histoire du Son
        </h2>
        <p className="text-sm sm:text-base text-[#6F4E5A] max-w-3xl leading-relaxed">
          Découvrez la vie, les découvertes et les œuvres phares des génies qui ont transformé notre écoute, de la Grèce antique aux pionniers de l'électronique.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left List of Figures */}
        <div className="lg:col-span-4 space-y-2">
          <h3 className="text-xs uppercase tracking-widest text-[#933D5E] font-medium mb-3">
            Galerie des Portraits
          </h3>
          <div className="space-y-1.5 max-h-[700px] overflow-y-auto pr-2">
            {PEOPLE_DATA.map(item => {
              const isSelected = item.id === selectedPersonId;
              return (
                <button
                  key={item.id}
                  onClick={() => setSelectedPersonId(item.id)}
                  className={`w-full text-left p-3.5 rounded-xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-white border-[#D682A0] shadow-sm ring-1 ring-[#E8A5BD]'
                      : 'bg-[#FFF7F9] border-[#F2D7DF] hover:bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs text-[#95536B] mb-1">
                    <span className="font-mono text-[10px]">{item.lifespan}</span>
                    <span className="text-[10px] text-[#AC6A82] truncate max-w-[110px]">{item.era}</span>
                  </div>
                  <div className={`font-serif font-bold text-sm ${isSelected ? 'text-[#8F254B]' : 'text-[#3B1F2A]'}`}>
                    {item.name}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Exhibit */}
        <div className="lg:col-span-8 bg-white rounded-2xl border border-[#EDCED8] p-6 sm:p-8 shadow-sm">
          
          <div className="border-b border-[#F4D2DD] pb-5 mb-6">
            <div className="flex items-center gap-2 text-xs text-[#8E4962] font-mono mb-1">
              <span>{person.lifespan}</span>
              <span aria-hidden="true">·</span>
              <span>{person.birthPlace}</span>
              <span aria-hidden="true">·</span>
              <span>{person.era}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#2A1520] mb-2">
              {person.name}
            </h3>
            <div className="flex flex-wrap gap-1.5 mt-2">
              {person.roles.map((role, i) => (
                <span key={i} className="px-2.5 py-0.5 rounded-md bg-[#FFF0F4] border border-[#F3CAD8] text-xs text-[#852C4B] font-medium">
                  {role}
                </span>
              ))}
            </div>
          </div>

          {/* Context and Contributions */}
          <div className="space-y-4 mb-6">
            <div className="p-4 rounded-xl bg-[#FFF9FA] border border-[#F4DBE3]">
              <h4 className="text-xs uppercase tracking-widest text-[#933D5E] font-semibold mb-1">
                Contexte Historique
              </h4>
              <p className="text-xs sm:text-sm text-[#4E2D3B] leading-relaxed">
                {person.historicalContext}
              </p>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-widest text-[#933D5E] font-semibold mb-2">
                Contributions Majeures au Patrimoine
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-[#462734]">
                {person.mainContributions.map((contrib, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#9F2D55] font-bold">·</span>
                    <span>{contrib}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Key Works / Inventions */}
          <div className="mb-6 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-[#933D5E] font-semibold">
              Œuvres, Inventions ou Traités Clés
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {person.keyWorksOrInventions.map((work, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-white border border-[#F2D7DF] space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-serif font-bold text-sm text-[#381B28]">{work.title}</span>
                    {work.year && <span className="font-mono text-[#8C4E63] text-[10px]">{work.year}</span>}
                  </div>
                  <p className="text-xs text-[#634351] leading-relaxed">
                    {work.details}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Quotes or Testimonies */}
          {person.quotesOrTestimonies && (
            <div className="p-4 rounded-xl bg-[#FAF5F7] border border-[#ECD3DC] mb-6 flex items-start gap-3">
              <Quote className="w-5 h-5 text-[#9F2D55] shrink-0 mt-0.5" />
              <div>
                <p className="text-xs sm:text-sm italic font-serif text-[#3E212E] leading-relaxed">
                  {person.quotesOrTestimonies}
                </p>
              </div>
            </div>
          )}

          {/* Influences Cross Links */}
          <div className="pt-4 border-t border-[#F5D5E0] flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2 text-[#7F4458]">
              <span className="font-semibold text-[#8F254B]">À explorer ensuite :</span>
              <span>{person.relatedTopics.join(' · ')}</span>
            </div>
            <button
              onClick={() => onNavigate('histoire')}
              className="flex items-center gap-1 font-semibold text-[#8F254B] hover:text-[#5F122E] transition-colors cursor-pointer"
            >
              <span>Voir sa période historique</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>

    </div>
  );
};

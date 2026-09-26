import React, { useState } from 'react';
import { BIG_QUESTIONS_DATA } from '../data/questionsData';
import { SectionId } from '../types/music';
import { HelpCircle, Sparkles, BookOpen, ArrowRight, CheckCircle2 } from 'lucide-react';

interface QuestionsPavilionProps {
  onNavigate: (section: SectionId) => void;
  onSelectTopic?: (topic: string) => void;
}

export const QuestionsPavilion: React.FC<QuestionsPavilionProps> = ({ onNavigate, onSelectTopic }) => {
  const [selectedQuestionId, setSelectedQuestionId] = useState<string>(BIG_QUESTIONS_DATA[0].id);
  const [pedagogicalTier, setPedagogicalTier] = useState<1 | 2 | 3>(1);

  const question = BIG_QUESTIONS_DATA.find(q => q.id === selectedQuestionId) || BIG_QUESTIONS_DATA[0];

  return (
    <div className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header */}
      <div className="mb-8 border-b border-[#F2D1DC] pb-6">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#A24467] font-medium mb-1">
          <span>Salle des Grandes Énigmes Résolues</span>
          <span aria-hidden="true">·</span>
          <span>Histoire, Acoustique, Biologie & Archéologie</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#2A1620] mb-3">
          Les Mystères Fondamentaux de la Musique
        </h2>
        <p className="text-sm sm:text-base text-[#6F4E5A] max-w-3xl leading-relaxed">
          Pourquoi 7 notes ? Pourquoi 12 demi-tons ? Pourquoi 440 Hz ? Pourquoi le piano a 88 touches ? Réponses rigoureuses, étayées par l'archéologie, la physique et la neurologie.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left List of Questions */}
        <div className="lg:col-span-5 space-y-2">
          <h3 className="text-xs uppercase tracking-widest text-[#933D5E] font-medium mb-3">
            Questions au Programme
          </h3>
          <div className="space-y-1.5 max-h-[700px] overflow-y-auto pr-2">
            {BIG_QUESTIONS_DATA.map((item, idx) => {
              const isSelected = item.id === selectedQuestionId;
              return (
                <button
                  key={item.id}
                  onClick={() => setSelectedQuestionId(item.id)}
                  className={`w-full text-left p-3.5 rounded-xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-white border-[#D682A0] shadow-sm ring-1 ring-[#E8A5BD]'
                      : 'bg-[#FFF7F9] border-[#F2D7DF] hover:bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs text-[#95536B] mb-1">
                    <span className="font-mono text-[10px]">Énigme 0{idx + 1}</span>
                  </div>
                  <div className={`font-serif font-bold text-sm ${isSelected ? 'text-[#8F254B]' : 'text-[#3B1F2A]'}`}>
                    {item.question}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Deep Answer Exhibit with 3 Levels */}
        <div className="lg:col-span-7 bg-white rounded-2xl border border-[#EDCED8] p-6 sm:p-8 shadow-sm">
          
          <div className="border-b border-[#F4D2DD] pb-5 mb-6">
            <span className="text-xs uppercase font-mono tracking-widest text-[#9F2D55] font-bold">
              Enquête Musicologique & Scientifique
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#2A1520] mt-1 mb-2">
              {question.question}
            </h3>
            <p className="text-sm font-serif italic text-[#8B3F5B] leading-relaxed">
              {question.subtitle}
            </p>
          </div>

          {/* 3 Pedagogical Tiers */}
          <div className="flex items-center gap-2 mb-6 p-1 bg-[#FDF1F4] rounded-xl w-fit border border-[#F4D0DC]">
            <button
              onClick={() => setPedagogicalTier(1)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer ${
                pedagogicalTier === 1
                  ? 'bg-white text-[#8F254B] shadow-sm font-semibold'
                  : 'text-[#6C4B57] hover:text-[#2E141F]'
              }`}
            >
              Niveau 1 : Synthèse Claire
            </button>
            <button
              onClick={() => setPedagogicalTier(2)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer ${
                pedagogicalTier === 2
                  ? 'bg-white text-[#8F254B] shadow-sm font-semibold'
                  : 'text-[#6C4B57] hover:text-[#2E141F]'
              }`}
            >
              Niveau 2 : Explication Complète
            </button>
            <button
              onClick={() => setPedagogicalTier(3)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer ${
                pedagogicalTier === 3
                  ? 'bg-white text-[#8F254B] shadow-sm font-semibold'
                  : 'text-[#6C4B57] hover:text-[#2E141F]'
              }`}
            >
              Niveau 3 : Rigueur & Sources
            </button>
          </div>

          {/* Dynamic Content */}
          <div className="space-y-6">
            
            {pedagogicalTier === 1 && (
              <div className="p-5 rounded-2xl bg-[#FFF9FA] border border-[#F4DBE3]">
                <h4 className="text-xs uppercase tracking-widest text-[#933D5E] font-semibold mb-2">
                  La Réponse en Bref
                </h4>
                <p className="text-base text-[#3E212E] leading-relaxed font-serif">
                  {question.shortSummary}
                </p>
              </div>
            )}

            {pedagogicalTier === 2 && (
              <div className="p-5 rounded-2xl bg-[#FFF9FA] border border-[#F4DBE3]">
                <h4 className="text-xs uppercase tracking-widest text-[#933D5E] font-semibold mb-2">
                  Développement Historique et Acoustique
                </h4>
                <p className="text-sm sm:text-base text-[#3E212E] leading-relaxed">
                  {question.detailedExplanation}
                </p>
              </div>
            )}

            {pedagogicalTier === 3 && (
              <div className="space-y-4">
                <div className="p-5 rounded-2xl bg-[#FFF9FA] border border-[#F4DBE3]">
                  <h4 className="text-xs uppercase tracking-widest text-[#933D5E] font-semibold mb-2">
                    Nuance Scientifique, Débats & Données Physiques
                  </h4>
                  <p className="text-sm sm:text-base text-[#3E212E] leading-relaxed">
                    {question.scientificHistoricalNuance}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#F2D7DF] space-y-2">
                  <h5 className="text-xs uppercase tracking-widest text-[#8F254B] font-semibold">
                    Sources Académiques et Traces Archéologiques
                  </h5>
                  <ul className="space-y-1 text-xs text-[#523340]">
                    {question.sourcesAndEvidence.map((src, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#9F2D55] font-bold">✓</span>
                        <span>{src}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* Cross Links */}
            <div className="pt-4 border-t border-[#F5D5E0] flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2 text-[#7F4458]">
                <span className="font-semibold text-[#8F254B]">À explorer ensuite :</span>
                <span>{question.relatedTopics.join(' · ')}</span>
              </div>
              <button
                onClick={() => onNavigate('solfege')}
                className="flex items-center gap-1 font-semibold text-[#8F254B] hover:text-[#5F122E] transition-colors cursor-pointer"
              >
                <span>Voir le solfège et les clés</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

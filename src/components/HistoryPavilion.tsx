import React, { useState } from 'react';
import { HISTORICAL_PERIODS, WORLD_TRADITIONS } from '../data/historyData';
import { SectionId } from '../types/music';
import { Calendar, Globe2, BookOpen, ChevronRight, Music, ArrowRight, Sparkles } from 'lucide-react';

interface HistoryPavilionProps {
  onNavigate: (section: SectionId) => void;
  onSelectTopic?: (topic: string) => void;
}

export const HistoryPavilion: React.FC<HistoryPavilionProps> = ({ onNavigate, onSelectTopic }) => {
  const [activeTab, setActiveTab] = useState<'chronologie' | 'monde'>('chronologie');
  const [selectedPeriodId, setSelectedPeriodId] = useState<string>(HISTORICAL_PERIODS[0].id);
  const [selectedTraditionId, setSelectedTraditionId] = useState<string>(WORLD_TRADITIONS[0].id);

  const selectedPeriod = HISTORICAL_PERIODS.find(p => p.id === selectedPeriodId) || HISTORICAL_PERIODS[0];
  const selectedTradition = WORLD_TRADITIONS.find(t => t.id === selectedTraditionId) || WORLD_TRADITIONS[0];

  return (
    <div className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Pavilion Header */}
      <div className="mb-8 border-b border-[#F2D1DC] pb-6">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#A24467] font-medium mb-1">
          <span>Château de l'Histoire</span>
          <span aria-hidden="true">·</span>
          <span>Chronologie Universelle & Civilisations</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#2A1620] mb-3">
          L'Épopée Millénaire de la Musique
        </h2>
        <p className="text-sm sm:text-base text-[#6F4E5A] max-w-3xl leading-relaxed">
          De l'os de vautour façonné dans la pénombre des cavernes aurignaciennes jusqu'aux algorithmes modernes, découvrez comment chaque civilisation a inventé sa propre grammaire du souffle et des cordes.
        </p>

        {/* Tab selection: Chronology vs World Traditions */}
        <div className="flex items-center gap-2 mt-6 p-1 bg-[#FCECEF] rounded-xl w-fit border border-[#F4CDD8]">
          <button
            onClick={() => setActiveTab('chronologie')}
            className={`flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'chronologie'
                ? 'bg-white text-[#8F254B] shadow-sm font-semibold'
                : 'text-[#6C4B57] hover:text-[#2E141F]'
            }`}
          >
            <Calendar className="w-4 h-4" />
            <span>Chronologie des Époques</span>
          </button>
          <button
            onClick={() => setActiveTab('monde')}
            className={`flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'monde'
                ? 'bg-white text-[#8F254B] shadow-sm font-semibold'
                : 'text-[#6C4B57] hover:text-[#2E141F]'
            }`}
          >
            <Globe2 className="w-4 h-4" />
            <span>Musiques du Monde & Civilisations</span>
          </button>
        </div>
      </div>

      {/* MODE 1: CHRONOLOGIE HISTORIQUE */}
      {activeTab === 'chronologie' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Timeline Rail */}
          <div className="lg:col-span-4 space-y-2">
            <h3 className="text-xs uppercase tracking-widest text-[#933D5E] font-medium mb-3">
              Frise Chronologique
            </h3>
            <div className="space-y-1.5 max-h-[700px] overflow-y-auto pr-2">
              {HISTORICAL_PERIODS.map((period, idx) => {
                const isSelected = period.id === selectedPeriodId;
                return (
                  <button
                    key={period.id}
                    onClick={() => setSelectedPeriodId(period.id)}
                    className={`w-full text-left p-3.5 rounded-xl border transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-white border-[#D682A0] shadow-sm ring-1 ring-[#E8A5BD]'
                        : 'bg-[#FFF6F8] border-[#F2D7DF] hover:bg-[#FDF0F3]'
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs text-[#95536B] mb-1">
                      <span className="font-mono">{period.dates}</span>
                      <span className="text-[10px] text-[#AC6A82]">Étape 0{idx + 1}</span>
                    </div>
                    <div className={`font-serif font-bold text-sm ${isSelected ? 'text-[#8F254B]' : 'text-[#3B1F2A]'}`}>
                      {period.name}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Detailed Period Exhibit */}
          <div className="lg:col-span-8 bg-white rounded-2xl border border-[#EDCED8] p-6 sm:p-8 shadow-sm">
            
            {/* Header of the Selected Period */}
            <div className="border-b border-[#F4D2DD] pb-5 mb-6">
              <div className="flex flex-wrap items-center gap-2 text-xs text-[#8E4962] font-mono mb-2">
                <span>{selectedPeriod.dates}</span>
                <span aria-hidden="true">·</span>
                <span>{selectedPeriod.region}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#2A1520] mb-2">
                {selectedPeriod.name}
              </h3>
              <p className="text-sm font-serif italic text-[#8B3F5B]">
                {selectedPeriod.subtitle}
              </p>
            </div>

            {/* Context Narrative */}
            <div className="mb-6">
              <h4 className="text-xs uppercase tracking-widest text-[#9D4B6C] font-semibold mb-2">
                Contexte & Pratiques Musicales
              </h4>
              <p className="text-sm sm:text-base text-[#3A222B] leading-relaxed mb-4">
                {selectedPeriod.context}
              </p>
              <div className="p-4 rounded-xl bg-[#FFF5F8] border border-[#F5D8E2] text-xs sm:text-sm text-[#55323E] leading-relaxed">
                <span className="font-semibold text-[#8F254B]">Pratiques rituelles et profanes : </span>
                {selectedPeriod.musicalPractices}
              </div>
            </div>

            {/* Structural Causality Engine: AVANT -> APPARITION -> ÉVOLUTION -> APRÈS */}
            <div className="mb-8">
              <h4 className="text-xs uppercase tracking-widest text-[#9D4B6C] font-semibold mb-3">
                L'Engrenage Historique : Avant → Apparition → Évolution → Après
              </h4>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="p-3.5 rounded-xl bg-[#FFF9FA] border border-[#F3DBE3]">
                  <span className="text-xs font-semibold text-[#9F2D55] block mb-1">
                    01. Avant
                  </span>
                  <p className="text-xs text-[#553441] leading-relaxed">
                    {selectedPeriod.before}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#FFF9FA] border border-[#F3DBE3]">
                  <span className="text-xs font-semibold text-[#9F2D55] block mb-1">
                    02. Apparition
                  </span>
                  <p className="text-xs text-[#553441] leading-relaxed">
                    {selectedPeriod.appearance}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#FFF9FA] border border-[#F3DBE3]">
                  <span className="text-xs font-semibold text-[#9F2D55] block mb-1">
                    03. Évolution
                  </span>
                  <p className="text-xs text-[#553441] leading-relaxed">
                    {selectedPeriod.evolution}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#FFF9FA] border border-[#F3DBE3]">
                  <span className="text-xs font-semibold text-[#9F2D55] block mb-1">
                    04. Après
                  </span>
                  <p className="text-xs text-[#553441] leading-relaxed">
                    {selectedPeriod.after}
                  </p>
                </div>
              </div>
            </div>

            {/* Key Innovations & Emblematic Instruments */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6 pt-5 border-t border-[#F5D5E0]">
              <div>
                <h5 className="text-xs uppercase tracking-widest text-[#8F3354] font-semibold mb-2">
                  Innovations Clés
                </h5>
                <ul className="space-y-1.5 text-xs text-[#4F2D3A]">
                  {selectedPeriod.keyInnovations.map((innov, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#9F2D55] font-bold">·</span>
                      <span>{innov}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h5 className="text-xs uppercase tracking-widest text-[#8F3354] font-semibold mb-2">
                  Instruments Emblématiques
                </h5>
                <div className="flex flex-wrap gap-1.5">
                  {selectedPeriod.emblematicInstruments.map((inst, i) => (
                    <span 
                      key={i} 
                      className="px-2.5 py-1 text-xs rounded-md bg-[#FFF0F4] border border-[#F3CAD8] text-[#7E2D4A]"
                    >
                      {inst}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Representative Works */}
            {selectedPeriod.representativeWorks.length > 0 && (
              <div className="mb-6 p-4 rounded-xl bg-[#FAF5F7] border border-[#EED7E0]">
                <h5 className="text-xs uppercase tracking-widest text-[#7E2D4A] font-semibold mb-2">
                  Œuvre Témoin de l'Époque
                </h5>
                {selectedPeriod.representativeWorks.map((work, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-serif font-bold text-sm text-[#30141F]">{work.title}</span>
                      <span className="text-[#884B60] font-mono">{work.date}</span>
                    </div>
                    <div className="text-xs text-[#6F4E5A] italic">Compositeur : {work.composer}</div>
                    <p className="text-xs text-[#4D2D38] leading-relaxed pt-1">
                      {work.description}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* Major Figures & Interconnected Links */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#F5D5E0] text-xs">
              <div className="flex items-center gap-2 text-[#7F4458]">
                <span className="font-semibold text-[#8F254B]">Figures majeures :</span>
                <span>{selectedPeriod.majorFigures.join(', ')}</span>
              </div>
              <button 
                onClick={() => onNavigate('instruments')}
                className="flex items-center gap-1 font-semibold text-[#8F254B] hover:text-[#5F122E] transition-colors cursor-pointer"
              >
                <span>Voir les instruments associés</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </div>
      )}

      {/* MODE 2: MUSIQUES DU MONDE & CIVILISATIONS */}
      {activeTab === 'monde' && (
        <div className="space-y-8">
          <div className="p-4 rounded-xl bg-[#FFF0F4] border border-[#F3CDD9] text-xs sm:text-sm text-[#613645] leading-relaxed">
            <span className="font-semibold text-[#8F254B]">L'Histoire musicale n'est pas seulement européenne : </span>
            Du Maghreb aux rives du Gange, des cours impériales de Chine aux veillées des griots mandingues, chaque peuple a développé des systèmes d'une sophistication théorique et spirituelle prodigieuse.
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {WORLD_TRADITIONS.map(trad => {
              const isSelected = trad.id === selectedTraditionId;
              return (
                <button
                  key={trad.id}
                  onClick={() => setSelectedTraditionId(trad.id)}
                  className={`p-4 text-left rounded-xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-white border-[#D682A0] shadow-sm ring-1 ring-[#E8A5BD]'
                      : 'bg-[#FFF9FA] border-[#F2D7DF] hover:bg-white'
                  }`}
                >
                  <span className="text-[10px] uppercase font-mono tracking-widest text-[#9C4B6B] block mb-1">
                    {trad.region}
                  </span>
                  <h4 className="font-serif font-bold text-base text-[#341824] mb-1">
                    {trad.name}
                  </h4>
                  <p className="text-xs text-[#73515E] line-clamp-2">
                    {trad.culturalHeritage}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Detailed Tradition Card */}
          <div className="bg-white rounded-2xl border border-[#ECCDD7] p-6 sm:p-8 shadow-sm">
            <div className="border-b border-[#F4D2DE] pb-4 mb-6">
              <span className="text-xs uppercase tracking-widest text-[#9F3B60] font-mono">
                {selectedTradition.region}
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#2E1521] mt-1 mb-2">
                {selectedTradition.name}
              </h3>
              <p className="text-sm sm:text-base text-[#462734] leading-relaxed">
                {selectedTradition.culturalHeritage}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="p-4 rounded-xl bg-[#FFF9FA] border border-[#F3DAE2]">
                <h5 className="text-xs uppercase tracking-widest text-[#9F2D55] font-semibold mb-2">
                  Système Musical & Théorie
                </h5>
                <p className="text-xs sm:text-sm text-[#4E2E3C] leading-relaxed">
                  {selectedTradition.musicalSystem}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#FFF9FA] border border-[#F3DAE2]">
                <h5 className="text-xs uppercase tracking-widest text-[#9F2D55] font-semibold mb-2">
                  Portée Spirituelle & Rôle Social
                </h5>
                <p className="text-xs sm:text-sm text-[#4E2E3C] leading-relaxed">
                  {selectedTradition.culturalSignificance}
                </p>
              </div>
            </div>

            {/* Historical Evolution & Notable Masters */}
            <div className="space-y-4 mb-6">
              <div>
                <h5 className="text-xs uppercase tracking-widest text-[#7C3650] font-semibold mb-1">
                  Évolution Historique & Transmission
                </h5>
                <p className="text-xs sm:text-sm text-[#482835] leading-relaxed">
                  {selectedTradition.historicalEvolution}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-[#F5D5E0] text-xs">
                <span className="font-semibold text-[#8F254B]">Grands Maîtres :</span>
                <span className="text-[#55303E]">{selectedTradition.notableMasters.join(' · ')}</span>
              </div>
            </div>

            {/* Emblematic Instruments Chips */}
            <div className="pt-4 border-t border-[#F5D5E0]">
              <span className="text-xs uppercase tracking-widest text-[#8F3354] font-semibold block mb-2">
                Instruments Identitaires
              </span>
              <div className="flex flex-wrap gap-2">
                {selectedTradition.emblematicInstruments.map((inst, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1.5 text-xs rounded-lg bg-[#FFF0F4] border border-[#F3CAD8] text-[#852C4B] font-medium"
                  >
                    {inst}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};

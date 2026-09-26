import React, { useState } from 'react';
import { INSTRUMENTS_DATA } from '../data/instrumentsData';
import { MusicalInstrument, SectionId } from '../types/music';
import { audioEngine } from '../utils/audioEngine';
import palaisInstrumentsImg from '../assets/images/palais_instruments_1790388226063.jpg';
import { 
  Sparkles, 
  Volume2, 
  Layers, 
  History, 
  ArrowRight, 
  ChevronRight,
  Info
} from 'lucide-react';

interface InstrumentsPavilionProps {
  onNavigate: (section: SectionId) => void;
  onSelectTopic?: (topic: string) => void;
}

export const InstrumentsPavilion: React.FC<InstrumentsPavilionProps> = ({ onNavigate, onSelectTopic }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedInstrumentId, setSelectedInstrumentId] = useState<string>(INSTRUMENTS_DATA[0].id);
  const [activeTab, setActiveTab] = useState<'anatomie' | 'chaine' | 'histoire'>('anatomie');

  const filteredInstruments = selectedCategory === 'all'
    ? INSTRUMENTS_DATA
    : INSTRUMENTS_DATA.filter(inst => inst.category === selectedCategory);

  const instrument = INSTRUMENTS_DATA.find(inst => inst.id === selectedInstrumentId) || INSTRUMENTS_DATA[0];

  const handlePlaySample = () => {
    // Play characteristic tone according to instrument
    if (instrument.id === 'piano') {
      audioEngine.playChord([261.63, 329.63, 392.00, 523.25], 2.2);
    } else if (instrument.id === 'violon') {
      audioEngine.playTone(440, 1.8, 'sawtooth', 0.2);
    } else if (instrument.id === 'flute-traversiere') {
      audioEngine.playTone(587.33, 1.8, 'sine', 0.25);
    } else if (instrument.id === 'oud') {
      audioEngine.playChord([220, 277.18, 329.63], 1.6);
    } else if (instrument.id === 'guembri') {
      audioEngine.playTone(110, 1.4, 'triangle', 0.35);
    } else if (instrument.id === 'kora') {
      audioEngine.playChord([330, 392, 493.88, 587.33], 2.0);
    } else {
      audioEngine.playTone(392, 1.5, 'sine', 0.2);
    }
  };

  return (
    <div className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header */}
      <div className="mb-8 border-b border-[#F2D1DC] pb-6">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#A24467] font-medium mb-1">
          <span>Palais des Instruments</span>
          <span aria-hidden="true">·</span>
          <span>Organologie & Anatomie Acoustique</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#2A1620] mb-3">
          L'Anatomie des Instruments du Monde
        </h2>
        <p className="text-sm sm:text-base text-[#6F4E5A] max-w-3xl leading-relaxed">
          Découvrez la physique intime de chaque instrument : comment un choc de marteau, un frottement d'archet ou un tourbillon d'air se métamorphose en vibration chantante.
        </p>

        {/* Curatorial Museum Display Visual Banner */}
        <div className="mt-6 rounded-2xl overflow-hidden border border-[#EACCD7] shadow-sm max-h-64 relative bg-[#FFF4F7]">
          <img 
            src={palaisInstrumentsImg} 
            alt="Exposition muséale du Palais des Instruments" 
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = '/assets/images/palais_instruments_1790388226063.jpg';
            }}
            className="w-full h-full object-cover max-h-64"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2B141F]/80 via-[#2B141F]/30 to-transparent flex items-center p-6 sm:p-8 text-white">
            <div className="max-w-md">
              <span className="text-[11px] uppercase tracking-widest text-[#F9D2DE] font-mono">
                Classification Hornbostel-Sachs
              </span>
              <h3 className="text-xl sm:text-2xl font-serif font-bold mt-1 text-white">
                Cordophones · Aérophones · Membranophones · Idiophones
              </h3>
            </div>
          </div>
        </div>

        {/* Hornbostel-Sachs Classification Tabs */}
        <div className="flex flex-wrap items-center gap-2 mt-6">
          {[
            { id: 'all', label: 'Tous les Instruments' },
            { id: 'cordophone', label: 'Cordophones (Cordes)' },
            { id: 'aerophone', label: 'Aérophones (Vent & Souffle)' },
            { id: 'electrophone', label: 'Électrophones (Circuits)' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setSelectedCategory(tab.id)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                selectedCategory === tab.id
                  ? 'bg-[#9F2D55] text-white shadow-sm'
                  : 'bg-[#FFF0F4] text-[#714E5B] hover:bg-[#FCE6EE] border border-[#F4D1DC]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Grid: Selector on left, Deep Exhibit on right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Instruments List */}
        <div className="lg:col-span-4 space-y-2">
          <h3 className="text-xs uppercase tracking-widest text-[#933D5E] font-medium mb-3">
            Instruments en Exposition
          </h3>
          <div className="space-y-1.5">
            {filteredInstruments.map(inst => {
              const isSelected = inst.id === selectedInstrumentId;
              return (
                <button
                  key={inst.id}
                  onClick={() => setSelectedInstrumentId(inst.id)}
                  className={`w-full text-left p-3.5 rounded-xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-white border-[#D682A0] shadow-sm ring-1 ring-[#E8A5BD]'
                      : 'bg-[#FFF7F9] border-[#F2D7DF] hover:bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs text-[#95536B] mb-1">
                    <span className="capitalize">{inst.category}</span>
                    <span className="font-mono text-[10px]">{inst.originRegion}</span>
                  </div>
                  <div className={`font-serif font-bold text-sm ${isSelected ? 'text-[#8F254B]' : 'text-[#3B1F2A]'}`}>
                    {inst.name}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Deep Instrument Exhibit */}
        <div className="lg:col-span-8 bg-white rounded-2xl border border-[#EDCED8] p-6 sm:p-8 shadow-sm">
          
          {/* Header of Selected Instrument */}
          <div className="border-b border-[#F4D2DD] pb-5 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs text-[#8E4962] font-mono mb-1">
                <span className="capitalize">{instrument.category}</span>
                <span aria-hidden="true">·</span>
                <span>{instrument.originRegion}</span>
                <span aria-hidden="true">·</span>
                <span>{instrument.approximateDate}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#2A1520]">
                {instrument.name}
              </h3>
              <p className="text-xs text-[#7B5361] mt-1">
                {instrument.subcategory}
              </p>
            </div>

            {/* Play Sound Button */}
            <button
              onClick={handlePlaySample}
              className="flex items-center gap-2 px-4 py-2 bg-[#9F2D55] hover:bg-[#852345] text-white text-xs font-semibold rounded-xl shadow-sm transition-all cursor-pointer self-start sm:self-auto shrink-0"
            >
              <Volume2 className="w-4 h-4" />
              <span>Faire résonner</span>
            </button>
          </div>

          {/* Sub-tabs: Anatomie, Chaîne Acoustique, Histoire & Rôle */}
          <div className="flex items-center gap-2 mb-6 p-1 bg-[#FDF1F4] rounded-xl w-fit border border-[#F4D0DC]">
            <button
              onClick={() => setActiveTab('anatomie')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer ${
                activeTab === 'anatomie'
                  ? 'bg-white text-[#8F254B] shadow-sm font-semibold'
                  : 'text-[#6C4B57] hover:text-[#2E141F]'
              }`}
            >
              Anatomie des Pièces
            </button>
            <button
              onClick={() => setActiveTab('chaine')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer ${
                activeTab === 'chaine'
                  ? 'bg-white text-[#8F254B] shadow-sm font-semibold'
                  : 'text-[#6C4B57] hover:text-[#2E141F]'
              }`}
            >
              Chaîne de Production du Son
            </button>
            <button
              onClick={() => setActiveTab('histoire')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer ${
                activeTab === 'histoire'
                  ? 'bg-white text-[#8F254B] shadow-sm font-semibold'
                  : 'text-[#6C4B57] hover:text-[#2E141F]'
              }`}
            >
              Évolution & Rôle Culturel
            </button>
          </div>

          {/* TAB 1: ANATOMIE COMPLÈTE */}
          {activeTab === 'anatomie' && (
            <div className="space-y-4">
              <div className="p-3.5 rounded-xl bg-[#FFF9FA] border border-[#F4DBE3] text-xs text-[#5C3A47] leading-relaxed">
                <span className="font-semibold text-[#8F254B]">Mécanisme de génération : </span>
                {instrument.soundMechanism}
              </div>

              <div className="space-y-3">
                <h4 className="text-xs uppercase tracking-widest text-[#933D5E] font-semibold">
                  Dissection Organologique
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {instrument.anatomy.map((part, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-[#FFF8FA] border border-[#F3DCE4]">
                      <div className="flex items-center justify-between text-xs mb-1">
                        <span className="font-serif font-bold text-sm text-[#381B26]">{part.name}</span>
                        <span className="text-[10px] text-[#8C5267] font-mono">{part.location}</span>
                      </div>
                      <div className="text-[11px] text-[#785160] italic mb-1.5">
                        Matériau : {part.material}
                      </div>
                      <p className="text-xs text-[#4E2F3B] leading-relaxed">
                        {part.acousticRole}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: CHAÎNE ACOUSTIQUE */}
          {activeTab === 'chaine' && (
            <div className="space-y-6">
              <div className="p-4 rounded-xl bg-[#FFF7F9] border border-[#F4DAE3] text-xs sm:text-sm text-[#5C3B49] leading-relaxed">
                Voici le parcours physique exact de l'énergie mécanique : de l'impulsion motrice initiale jusqu'à la stimulation de la membrane tympanique.
              </div>

              <div className="relative pl-6 space-y-4 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-[#E8A5BD]">
                {instrument.soundChain.map((step, idx) => (
                  <div key={idx} className="relative flex items-start gap-3">
                    <div className="absolute -left-6 top-1 w-4 h-4 rounded-full bg-white border-2 border-[#9F2D55] flex items-center justify-center text-[9px] font-bold text-[#9F2D55]">
                      {idx + 1}
                    </div>
                    <div className="p-3 rounded-lg bg-white border border-[#F2D7E0] w-full text-xs text-[#442330] shadow-2xs">
                      {step}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: ÉVOLUTION HISTORIQUE & CULTURE */}
          {activeTab === 'histoire' && (
            <div className="space-y-5">
              <div>
                <h4 className="text-xs uppercase tracking-widest text-[#933D5E] font-semibold mb-2">
                  Rôle Musical & Culturel
                </h4>
                <p className="text-xs sm:text-sm text-[#3E212E] leading-relaxed">
                  {instrument.culturalRole}
                </p>
              </div>

              <div>
                <h4 className="text-xs uppercase tracking-widest text-[#933D5E] font-semibold mb-2">
                  Évolution & Métamorphoses
                </h4>
                <p className="text-xs sm:text-sm text-[#3E212E] leading-relaxed">
                  {instrument.historicalEvolution}
                </p>
              </div>

              {instrument.ancestors.length > 0 && (
                <div className="pt-3 border-t border-[#F5D5E0]">
                  <span className="text-xs uppercase tracking-widest text-[#8F3354] font-semibold block mb-1">
                    Ancêtres historiques :
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {instrument.ancestors.map((anc, i) => (
                      <span key={i} className="px-2.5 py-1 text-xs rounded-md bg-[#FFF0F4] border border-[#F3CAD8] text-[#7F2E4A]">
                        {anc}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Interconnected Cross-links */}
          <div className="mt-8 pt-4 border-t border-[#F5D5E0] flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2 text-[#7F4458]">
              <span className="font-semibold text-[#8F254B]">À explorer ensuite :</span>
              <span>{instrument.relatedTopics.join(' · ')}</span>
            </div>
            <button
              onClick={() => onNavigate('science')}
              className="flex items-center gap-1 font-semibold text-[#8F254B] hover:text-[#5F122E] transition-colors cursor-pointer"
            >
              <span>Comprendre les lois de Mersenne</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </div>

    </div>
  );
};

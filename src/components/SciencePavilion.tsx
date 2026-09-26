import React, { useState } from 'react';
import { SCIENCE_TOPICS, ScienceTopic } from '../data/scienceData';
import { SectionId } from '../types/music';
import { audioEngine } from '../utils/audioEngine';
import scienceImg from '../assets/images/laboratoire_acoustique_1790388238477.jpg';
import { 
  FlaskConical, 
  Binary, 
  Brain, 
  Mic, 
  Volume2, 
  Play, 
  Sparkles, 
  ArrowRight,
  Info,
  Check
} from 'lucide-react';

interface SciencePavilionProps {
  onNavigate: (section: SectionId) => void;
  onSelectTopic?: (topic: string) => void;
}

export const SciencePavilion: React.FC<SciencePavilionProps> = ({ onNavigate, onSelectTopic }) => {
  const [selectedTopicId, setSelectedTopicId] = useState<string>(SCIENCE_TOPICS[0].id);
  const [pedagogicalLevel, setPedagogicalLevel] = useState<1 | 2 | 3>(1);

  // Equal temperament interactive calculator state
  const [semitonesOffset, setSemitonesOffset] = useState<number>(0);
  const [baseFreq, setBaseFreq] = useState<number>(440);

  const topic = SCIENCE_TOPICS.find(t => t.id === selectedTopicId) || SCIENCE_TOPICS[0];

  const calculatedFreq = Number((baseFreq * Math.pow(2, semitonesOffset / 12)).toFixed(2));

  const handlePlayCalculatedTone = () => {
    audioEngine.playTone(calculatedFreq, 1.5, 'sine', 0.25);
  };

  const handlePlayHarmonicsSeries = () => {
    audioEngine.playHarmonicsDemo(110, 6);
  };

  const handlePlayTemperamentComparison = (isPure: boolean) => {
    audioEngine.playTemperamentComparison(261.63, isPure);
  };

  return (
    <div className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header */}
      <div className="mb-8 border-b border-[#F2D1DC] pb-6">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#A24467] font-medium mb-1">
          <span>Laboratoire du Son & Galerie des Mathématiques</span>
          <span aria-hidden="true">·</span>
          <span>Acoustique, Équations, Cerveau & Voix</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#2A1620] mb-3">
          La Science Secrète des Ondes Musicales
        </h2>
        <p className="text-sm sm:text-base text-[#6F4E5A] max-w-3xl leading-relaxed">
          Pourquoi la musique nous émeut-elle ? Parce qu'elle est la convergence magistrale entre la physique vibratoire des gaz, les lois arithmétiques de Pythagore et la tonotopie de notre cerveau.
        </p>

        {/* Acoustics Laboratory Visual Artwork */}
        <div className="mt-6 rounded-2xl overflow-hidden border border-[#EACCD7] shadow-sm max-h-56 relative bg-[#FFF4F7]">
          <img 
            src={scienceImg} 
            alt="Laboratoire de physique acoustique avec diapasons et figures de Chladni" 
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = '/assets/images/laboratoire_acoustique_1790388238477.jpg';
            }}
            className="w-full h-full object-cover max-h-56"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2B141F]/85 via-[#2B141F]/30 to-transparent flex items-center p-6 sm:p-8 text-white">
            <div className="max-w-md">
              <span className="text-[11px] uppercase tracking-widest text-[#F9D2DE] font-mono">
                Acoustique Fondamentale
              </span>
              <h3 className="text-xl sm:text-2xl font-serif font-bold mt-1 text-white">
                De l'Équation d'Onde à la Résonance Cérébrale
              </h3>
            </div>
          </div>
        </div>

        {/* Topic Selector Badges */}
        <div className="flex flex-wrap items-center gap-2 mt-6">
          {SCIENCE_TOPICS.map(t => (
            <button
              key={t.id}
              onClick={() => setSelectedTopicId(t.id)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                selectedTopicId === t.id
                  ? 'bg-[#9F2D55] text-white shadow-sm font-semibold'
                  : 'bg-[#FFF0F4] text-[#714E5B] hover:bg-[#FCE6EE] border border-[#F4D1DC]'
              }`}
            >
              {t.title.split(':')[0]}
            </button>
          ))}
        </div>
      </div>

      {/* Main Exhibition Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Side: Topic Navigation & Interactive Demos */}
        <div className="lg:col-span-4 space-y-4">
          <div className="bg-white rounded-2xl border border-[#ECCED7] p-5 shadow-2xs space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-[#933D5E] font-semibold">
              Sujets Scientifiques
            </h4>
            <div className="space-y-1.5">
              {SCIENCE_TOPICS.map(t => {
                const isSelected = t.id === selectedTopicId;
                return (
                  <button
                    key={t.id}
                    onClick={() => setSelectedTopicId(t.id)}
                    className={`w-full text-left p-3 rounded-xl border text-xs transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[#FFF2F6] border-[#D682A0] text-[#8F254B] font-bold shadow-2xs'
                        : 'bg-white border-[#F2D7DF] text-[#4A2D3A] hover:bg-[#FFF9FA]'
                    }`}
                  >
                    {t.title}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Interactive Acoustic Tools Card */}
          <div className="bg-[#FFF5F8] rounded-2xl border border-[#F2CDDA] p-5 shadow-2xs space-y-4">
            <div className="flex items-center gap-2 text-xs uppercase font-mono tracking-widest text-[#9F2D55] font-bold">
              <FlaskConical className="w-4 h-4" />
              <span>Simulations Acoustiques</span>
            </div>

            {/* Demo 1: Harmonic Series */}
            <div className="p-3.5 bg-white rounded-xl border border-[#F3DCE4] space-y-2">
              <div className="text-xs font-serif font-bold text-[#351825]">
                Série Harmonique de Fourier (f₀, 2f₀, 3f₀...)
              </div>
              <p className="text-[11px] text-[#6E4957] leading-relaxed">
                Écoutez la fondamentale puis l'apparition successive des harmoniques naturelles créant le timbre.
              </p>
              <button
                onClick={handlePlayHarmonicsSeries}
                className="w-full flex items-center justify-center gap-2 py-2 px-3 bg-[#9F2D55] hover:bg-[#852345] text-white rounded-lg text-xs font-semibold cursor-pointer transition-colors"
              >
                <Volume2 className="w-3.5 h-3.5" />
                <span>Générer la série harmonique</span>
              </button>
            </div>

            {/* Demo 2: Temperament Comparison */}
            <div className="p-3.5 bg-white rounded-xl border border-[#F3DCE4] space-y-2">
              <div className="text-xs font-serif font-bold text-[#351825]">
                Comparaison : Tierce Pure vs Tempérée
              </div>
              <p className="text-[11px] text-[#6E4957] leading-relaxed">
                Comparez l'accord pur (ratio 5/4) et l'accord tempéré du piano (+14 cents).
              </p>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => handlePlayTemperamentComparison(true)}
                  className="py-1.5 px-2 bg-[#FCECEF] hover:bg-[#F9DCE4] text-[#8F254B] border border-[#F2CAD7] rounded text-xs font-medium cursor-pointer"
                >
                  Tierce Pure (5/4)
                </button>
                <button
                  onClick={() => handlePlayTemperamentComparison(false)}
                  className="py-1.5 px-2 bg-[#FCECEF] hover:bg-[#F9DCE4] text-[#8F254B] border border-[#F2CAD7] rounded text-xs font-medium cursor-pointer"
                >
                  Tempérée (Piano)
                </button>
              </div>
            </div>

            {/* Demo 3: Equation f_n = f_0 * 2^(n/12) */}
            <div className="p-3.5 bg-white rounded-xl border border-[#F3DCE4] space-y-3">
              <div className="text-xs font-serif font-bold text-[#351825]">
                Calculateur : f_n = f_0 × 2^(n/12)
              </div>
              
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-[11px] text-[#6E4957]">
                  <span>Demi-tons (n) :</span>
                  <span className="font-mono font-bold text-[#8F254B]">{semitonesOffset > 0 ? `+${semitonesOffset}` : semitonesOffset}</span>
                </div>
                <input
                  type="range"
                  min="-12"
                  max="12"
                  value={semitonesOffset}
                  onChange={(e) => setSemitonesOffset(Number(e.target.value))}
                  className="w-full accent-[#9F2D55] cursor-pointer"
                />
              </div>

              <div className="p-2 rounded bg-[#FFF5F8] border border-[#F3CDDA] text-center font-mono text-xs text-[#8F254B]">
                Fréquence résultante : <strong>{calculatedFreq} Hz</strong>
              </div>

              <button
                onClick={handlePlayCalculatedTone}
                className="w-full py-1.5 px-3 bg-[#9F2D55] hover:bg-[#852345] text-white rounded text-xs font-semibold cursor-pointer flex items-center justify-center gap-1.5"
              >
                <Volume2 className="w-3.5 h-3.5" />
                <span>Faire entendre la fréquence</span>
              </button>
            </div>

          </div>
        </div>

        {/* Right Side: Deep Curatorial Explanation with 3 Pedagogical Tiers */}
        <div className="lg:col-span-8 bg-white rounded-2xl border border-[#EDCED8] p-6 sm:p-8 shadow-sm">
          
          {/* Header of Exhibit */}
          <div className="border-b border-[#F4D2DD] pb-5 mb-6">
            <span className="text-xs uppercase font-mono tracking-widest text-[#9F2D55] font-bold">
              Domaine : {topic.category}
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#2A1520] mt-1 mb-2">
              {topic.title}
            </h3>
            <p className="text-sm font-serif italic text-[#8B3F5B] leading-relaxed">
              « {topic.hook} »
            </p>
          </div>

          {/* Pedagogical 3-Tier Selector Buttons */}
          <div className="flex items-center gap-2 mb-6 p-1 bg-[#FDF1F4] rounded-xl w-fit border border-[#F4D0DC]">
            <button
              onClick={() => setPedagogicalLevel(1)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer ${
                pedagogicalLevel === 1
                  ? 'bg-white text-[#8F254B] shadow-sm font-semibold'
                  : 'text-[#6C4B57] hover:text-[#2E141F]'
              }`}
            >
              Niveau 1 : Explication Simple
            </button>
            <button
              onClick={() => setPedagogicalLevel(2)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer ${
                pedagogicalLevel === 2
                  ? 'bg-white text-[#8F254B] shadow-sm font-semibold'
                  : 'text-[#6C4B57] hover:text-[#2E141F]'
              }`}
            >
              Niveau 2 : Approfondissement
            </button>
            <button
              onClick={() => setPedagogicalLevel(3)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer ${
                pedagogicalLevel === 3
                  ? 'bg-white text-[#8F254B] shadow-sm font-semibold'
                  : 'text-[#6C4B57] hover:text-[#2E141F]'
              }`}
            >
              Niveau 3 : Détails Techniques & Formules
            </button>
          </div>

          {/* Dynamic Content by Pedagogical Level */}
          <div className="space-y-6">
            
            {pedagogicalLevel === 1 && (
              <div className="p-5 rounded-2xl bg-[#FFF9FA] border border-[#F4DBE3]">
                <h4 className="text-xs uppercase tracking-widest text-[#933D5E] font-semibold mb-2">
                  L'Essentiel en Clarté (Niveau Découverte)
                </h4>
                <p className="text-base text-[#3E212E] leading-relaxed font-serif">
                  {topic.simpleExplanation}
                </p>
              </div>
            )}

            {pedagogicalLevel === 2 && (
              <div className="p-5 rounded-2xl bg-[#FFF9FA] border border-[#F4DBE3]">
                <h4 className="text-xs uppercase tracking-widest text-[#933D5E] font-semibold mb-2">
                  Analyse Physique et Harmonique Approfondie
                </h4>
                <p className="text-sm sm:text-base text-[#3E212E] leading-relaxed">
                  {topic.deepExplanation}
                </p>
              </div>
            )}

            {pedagogicalLevel === 3 && (
              <div className="space-y-5">
                <div className="p-5 rounded-2xl bg-[#FFF9FA] border border-[#F4DBE3]">
                  <h4 className="text-xs uppercase tracking-widest text-[#933D5E] font-semibold mb-2">
                    Rigueur Mathématique & Démonstrations
                  </h4>
                  <p className="text-sm sm:text-base text-[#3E212E] leading-relaxed mb-4">
                    {topic.technicalDetails}
                  </p>

                  {/* Formulas List if Available */}
                  {topic.equationsOrKeyData && (
                    <div className="space-y-3 pt-3 border-t border-[#F2CAD7]">
                      {topic.equationsOrKeyData.map((eq, i) => (
                        <div key={i} className="p-3 bg-white rounded-xl border border-[#F2D7DF] font-mono text-xs">
                          <div className="text-base font-bold text-[#8F254B] mb-1">
                            {eq.formula}
                          </div>
                          <div className="text-[11px] text-[#6F4B59]">
                            {eq.explanation}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Did you know callout */}
            <div className="p-4 rounded-xl bg-[#FFF2F6] border border-[#F3CDDA] flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-[#9F2D55] shrink-0 mt-0.5" />
              <div>
                <span className="text-xs uppercase tracking-widest text-[#8F254B] font-bold block mb-1">
                  Le Saviez-Vous ?
                </span>
                <p className="text-xs text-[#523340] leading-relaxed">
                  {topic.didYouKnow}
                </p>
              </div>
            </div>

            {/* Interconnected Cross-links */}
            <div className="pt-4 border-t border-[#F5D5E0] flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2 text-[#7F4458]">
                <span className="font-semibold text-[#8F254B]">À explorer ensuite :</span>
                <span>{topic.relatedTopics.join(' · ')}</span>
              </div>
              <button
                onClick={() => onNavigate('questions')}
                className="flex items-center gap-1 font-semibold text-[#8F254B] hover:text-[#5F122E] transition-colors cursor-pointer"
              >
                <span>Pourquoi 12 demi-tons et pourquoi 440 Hz ?</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>
      </div>

    </div>
  );
};

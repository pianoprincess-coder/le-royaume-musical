import React, { useState } from 'react';
import { 
  GUIDO_HYMN_VERSES, 
  NOTE_VALUES, 
  CLEF_DEFINITIONS, 
  THEORY_CADENCES 
} from '../data/solfegeData';
import { SectionId } from '../types/music';
import { audioEngine } from '../utils/audioEngine';
import manuscritSolfegeImg from '../assets/images/manuscrit_solfege_1790388248887.jpg';
import { Volume2, Play, Square, BookOpen, Music, Check, Sparkles, ArrowRight } from 'lucide-react';

interface SolfegePavilionProps {
  onNavigate: (section: SectionId) => void;
  onSelectTopic?: (topic: string) => void;
}

export const SolfegePavilion: React.FC<SolfegePavilionProps> = ({ onNavigate, onSelectTopic }) => {
  const [activeTab, setActiveTab] = useState<'guido' | 'cles' | 'rythme' | 'cadences'>('guido');
  const [metronomeBpm, setMetronomeBpm] = useState<number>(100);
  const [isMetronomeActive, setIsMetronomeActive] = useState<boolean>(false);
  const [currentBeat, setCurrentBeat] = useState<number>(1);

  const handlePlayNote = (noteLetter: string) => {
    const freq = audioEngine.noteToFreq(noteLetter, 4);
    audioEngine.playTone(freq, 1.2, 'triangle', 0.3);
  };

  const toggleMetronome = () => {
    if (isMetronomeActive) {
      audioEngine.stopMetronome();
      setIsMetronomeActive(false);
    } else {
      setIsMetronomeActive(true);
      audioEngine.startMetronome(metronomeBpm, (beat) => {
        setCurrentBeat(beat);
      });
    }
  };

  const handleBpmChange = (newBpm: number) => {
    setMetronomeBpm(newBpm);
    if (isMetronomeActive) {
      audioEngine.startMetronome(newBpm, (beat) => {
        setCurrentBeat(beat);
      });
    }
  };

  const handlePlayCadence = (cadenceName: string) => {
    if (cadenceName.includes('Parfaite')) {
      // V (G maj) then I (C maj)
      audioEngine.playChord([196, 246.94, 293.66], 1.0);
      setTimeout(() => {
        audioEngine.playChord([261.63, 329.63, 392.00], 1.8);
      }, 950);
    } else if (cadenceName.includes('Plagale')) {
      // IV (F maj) then I (C maj)
      audioEngine.playChord([174.61, 220, 261.63], 1.0);
      setTimeout(() => {
        audioEngine.playChord([261.63, 329.63, 392.00], 1.8);
      }, 950);
    } else if (cadenceName.includes('Rompue')) {
      // V (G maj) then VI (A min)
      audioEngine.playChord([196, 246.94, 293.66], 1.0);
      setTimeout(() => {
        audioEngine.playChord([220, 261.63, 329.63], 1.8);
      }, 950);
    } else {
      // Half cadence stopping on V
      audioEngine.playChord([261.63, 329.63, 392.00], 0.8);
      setTimeout(() => {
        audioEngine.playChord([196, 246.94, 293.66], 2.0);
      }, 750);
    }
  };

  return (
    <div className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header */}
      <div className="mb-8 border-b border-[#F2D1DC] pb-6">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#A24467] font-medium mb-1">
          <span>Bibliothèque du Solfège & Notation</span>
          <span aria-hidden="true">·</span>
          <span>Histoire, Clés, Rythme & Théorie</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#2A1620] mb-3">
          Le Langage Écrit de la Musique
        </h2>
        <p className="text-sm sm:text-base text-[#6F4E5A] max-w-3xl leading-relaxed">
          Comment des moines du XIe siècle ont capturé le vent et la voix pour créer une écriture universelle capable de traverser les siècles sans altération.
        </p>

        {/* Illuminated Manuscript Artwork Visual Banner */}
        <div className="mt-6 rounded-2xl overflow-hidden border border-[#EACCD7] shadow-sm max-h-56 relative bg-[#FFF4F7]">
          <img 
            src={manuscritSolfegeImg} 
            alt="Manuscrit médiéval enluminé du solfège de Guido d'Arezzo" 
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = '/assets/images/manuscrit_solfege_1790388248887.jpg';
            }}
            className="w-full h-full object-cover max-h-56"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2B141F]/85 via-[#2B141F]/30 to-transparent flex items-center p-6 sm:p-8 text-white">
            <div className="max-w-md">
              <span className="text-[11px] uppercase tracking-widest text-[#F9D2DE] font-mono">
                Abbaye de Pomposa · Vers 1025
              </span>
              <h3 className="text-xl sm:text-2xl font-serif font-bold mt-1 text-white">
                Guido d'Arezzo et l'Hymne à Saint Jean-Baptiste
              </h3>
            </div>
          </div>
        </div>

        {/* Pavilion Sections Tabs */}
        <div className="flex flex-wrap items-center gap-2 mt-6">
          {[
            { id: 'guido', label: '1. Guido d\'Arezzo & Origine des Notes' },
            { id: 'cles', label: '2. La Portée & Les Clés' },
            { id: 'rythme', label: '3. Rythme, Durées & Métronome' },
            { id: 'cadences', label: '4. Harmonie & Cadences Musicales' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as typeof activeTab)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                activeTab === tab.id
                  ? 'bg-[#9F2D55] text-white shadow-sm'
                  : 'bg-[#FFF0F4] text-[#714E5B] hover:bg-[#FCE6EE] border border-[#F4D1DC]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* SECTION 1: GUIDO D'AREZZO & L'HYMNE */}
      {activeTab === 'guido' && (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl border border-[#EDCED8] p-6 sm:p-8 shadow-sm">
            <div className="max-w-3xl mb-6">
              <h3 className="text-2xl font-serif font-bold text-[#2C1521] mb-2">
                Comment sont nés les noms des notes : Do, Ré, Mi, Fa, Sol, La, Si
              </h3>
              <p className="text-sm text-[#4E2D3A] leading-relaxed">
                Avant Guido d'Arezzo, les moines devaient mémoriser des milliers de chants à l'oreille, ce qui prenait jusqu'à dix ans. Vers 1025, Guido remarque que chaque vers de l'hymne liturgique à Saint Jean-Baptiste commence exactement un degré plus haut que le précédent. Il utilise alors la première syllabe de chaque vers pour nommer la note !
              </p>
            </div>

            {/* Interactive Note Syllable Table */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 mb-6">
              {GUIDO_HYMN_VERSES.map((item, idx) => (
                <div 
                  key={idx} 
                  className="p-4 rounded-xl bg-[#FFF9FA] border border-[#F3DCE4] flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs uppercase font-mono tracking-widest text-[#9F2D55] font-bold">
                        Note {item.originNote}
                      </span>
                      <button
                        onClick={() => handlePlayNote(item.originNote)}
                        className="flex items-center gap-1 text-[11px] font-semibold text-[#8F254B] bg-[#FCECEF] hover:bg-[#F9DCE4] px-2 py-0.5 rounded cursor-pointer"
                      >
                        <Volume2 className="w-3 h-3" />
                        <span>Écouter</span>
                      </button>
                    </div>
                    <div className="text-xl font-serif font-bold text-[#341825] mb-1">
                      {item.modernName}
                    </div>
                    <div className="text-xs text-[#8A4A62] italic font-serif">
                      « {item.latinVerse} »
                    </div>
                  </div>
                  <p className="text-[11px] text-[#553643] mt-2 pt-2 border-t border-[#F5DFE6]">
                    {item.frenchTranslation}
                  </p>
                </div>
              ))}
            </div>

            {/* Historical Transformation Ut -> Do & SI */}
            <div className="p-4 rounded-xl bg-[#FFF0F4] border border-[#F2CAD7] text-xs sm:text-sm text-[#542F3D] leading-relaxed space-y-2">
              <p>
                <span className="font-semibold text-[#8F254B]">Pourquoi « Do » au lieu d'« Ut » ? </span>
                La syllabe « Ut » se terminait par une consonne sourde difficile à vocaliser pour les chanteurs italiens. Au XVIIe siècle, Giovanni Battista Doni l'a remplacée par <strong>DO</strong> (inspiré de <em>Dominus</em>, le Seigneur, ou de son propre nom).
              </p>
              <p>
                <span className="font-semibold text-[#8F254B]">Et le « Si » ? </span>
                Le chant latin s'achevait par <em><strong>S</strong>ancte <strong>I</strong>ohannes</em>. À la fin du XVIe siècle, Anselme de Flandres réunit ces initiales pour former la 7e note manquante : <strong>SI</strong>.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* SECTION 2: LA PORTÉE & LES CLÉS */}
      {activeTab === 'cles' && (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl border border-[#EDCED8] p-6 sm:p-8 shadow-sm">
            <h3 className="text-2xl font-serif font-bold text-[#2C1521] mb-2">
              L'Architecture de la Portée et le Rôle des Clés
            </h3>
            <p className="text-sm text-[#4E2D3A] leading-relaxed mb-6">
              Une note isolée sur une page blanche n'a aucune hauteur absolue. C'est la <strong>Clé</strong> posée au tout début de la portée qui sert de repère de référence universel.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {CLEF_DEFINITIONS.map((clef, idx) => (
                <div key={idx} className="p-5 rounded-xl bg-[#FFF9FA] border border-[#F3DCE4] space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase font-mono tracking-widest text-[#9F2D55] font-bold">
                      {clef.standardLine}
                    </span>
                    <span className="text-[11px] text-[#7A5060] font-mono">Origine : {clef.originLetter}</span>
                  </div>

                  <h4 className="text-xl font-serif font-bold text-[#341724]">
                    {clef.name}
                  </h4>

                  <p className="text-xs text-[#523340] leading-relaxed">
                    {clef.explanation}
                  </p>

                  <div className="pt-2 border-t border-[#F5DEE5] text-[11px] text-[#694352]">
                    <span className="font-semibold text-[#8F254B]">Instruments : </span>
                    {clef.instrumentsUsed.join(', ')}
                  </div>
                </div>
              ))}
            </div>

            {/* Interactive Clef Visualization */}
            <div className="mt-8 p-6 rounded-xl bg-[#FAF5F7] border border-[#ECD3DC]">
              <h4 className="text-xs uppercase tracking-widest text-[#9F2D55] font-semibold mb-3">
                Repère Visuel : Les 5 Lignes et les 4 Interlignes
              </h4>
              <div className="p-6 bg-white rounded-lg border border-[#E9C8D4] space-y-3 font-mono text-xs text-[#6F4958]">
                <div className="border-b border-[#2C1521] pb-1 flex justify-between">
                  <span>5e Ligne (Fa 4 en clé de Sol)</span>
                  <span className="text-[#9F2D55]">----------------------------------------</span>
                </div>
                <div className="border-b border-[#2C1521] pb-1 flex justify-between">
                  <span>4e Ligne (Ré 4)</span>
                  <span className="text-[#9F2D55]">----------------------------------------</span>
                </div>
                <div className="border-b border-[#2C1521] pb-1 flex justify-between">
                  <span>3e Ligne (Si 3)</span>
                  <span className="text-[#9F2D55]">----------------------------------------</span>
                </div>
                <div className="border-b-2 border-[#9F2D55] pb-1 flex justify-between font-bold text-[#9F2D55]">
                  <span>2e Ligne : Ancrage de la Clé de Sol (Sol 3 = 392 Hz)</span>
                  <span>----------------------------------------</span>
                </div>
                <div className="border-b border-[#2C1521] pb-1 flex justify-between">
                  <span>1re Ligne (Mi 3)</span>
                  <span className="text-[#9F2D55]">----------------------------------------</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* SECTION 3: RYTHME, DURÉES & MÉTRONOME */}
      {activeTab === 'rythme' && (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl border border-[#EDCED8] p-6 sm:p-8 shadow-sm">
            <h3 className="text-2xl font-serif font-bold text-[#2C1521] mb-2">
              Figures de Notes, Silences et Pulsation Temporelle
            </h3>
            <p className="text-sm text-[#4E2D3A] leading-relaxed mb-6">
              La musique est un découpage du temps. Chaque figure de note divise exactement par 2 la durée de la précédente.
            </p>

            {/* Note Values Table */}
            <div className="overflow-x-auto mb-8">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-[#F2D0DC] text-[#933D5E] font-semibold uppercase tracking-wider">
                    <th className="py-2.5 px-3">Figure</th>
                    <th className="py-2.5 px-3">Temps (en 4/4)</th>
                    <th className="py-2.5 px-3">Valeur relative</th>
                    <th className="py-2.5 px-3">Silence équivalent</th>
                    <th className="py-2.5 px-3">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#F6E1E8] text-[#4F2D3A]">
                  {NOTE_VALUES.map((val, idx) => (
                    <tr key={idx} className="hover:bg-[#FFF8FA]">
                      <td className="py-3 px-3 font-serif font-bold text-sm text-[#351825]">{val.name}</td>
                      <td className="py-3 px-3 font-mono font-bold text-[#8F254B]">{val.beats} temps</td>
                      <td className="py-3 px-3 font-mono">{val.fraction}</td>
                      <td className="py-3 px-3">{val.restEquivalent}</td>
                      <td className="py-3 px-3 text-[#6A4755]">{val.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Interactive Metronome */}
            <div className="p-6 rounded-2xl bg-[#FFF5F8] border border-[#F3CDDA] flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2 text-center md:text-left">
                <span className="text-xs uppercase font-mono tracking-widest text-[#9F2D55] font-bold">
                  Métronome Numérique Intégré
                </span>
                <h4 className="text-xl font-serif font-bold text-[#301522]">
                  {metronomeBpm} BPM (Battements Par Minute)
                </h4>
                <div className="text-xs text-[#7B4D5F]">
                  {metronomeBpm <= 60 && 'Largo / Lento (Lent et solennel)'}
                  {metronomeBpm > 60 && metronomeBpm <= 88 && 'Andante (Allant, au pas)'}
                  {metronomeBpm > 88 && metronomeBpm <= 120 && 'Moderato (Modéré)'}
                  {metronomeBpm > 120 && metronomeBpm <= 150 && 'Allegro (Vif, joyeux)'}
                  {metronomeBpm > 150 && 'Presto (Très rapide et véloce)'}
                </div>

                {/* Visual Beat Indicator */}
                <div className="flex items-center justify-center md:justify-start gap-2 pt-2">
                  {[1, 2, 3, 4].map(b => (
                    <div 
                      key={b}
                      className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-mono font-bold transition-all ${
                        isMetronomeActive && currentBeat === b
                          ? 'bg-[#9F2D55] text-white scale-110 shadow-sm'
                          : 'bg-[#FBE4EC] text-[#8C4E63]'
                      }`}
                    >
                      {b}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4">
                <input
                  type="range"
                  min="40"
                  max="200"
                  value={metronomeBpm}
                  onChange={(e) => handleBpmChange(Number(e.target.value))}
                  className="w-48 accent-[#9F2D55] cursor-pointer"
                />

                <button
                  onClick={toggleMetronome}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white shadow-sm transition-all cursor-pointer whitespace-nowrap ${
                    isMetronomeActive ? 'bg-[#4B1E2E] hover:bg-[#381421]' : 'bg-[#9F2D55] hover:bg-[#852345]'
                  }`}
                >
                  {isMetronomeActive ? (
                    <>
                      <Square className="w-4 h-4 fill-white" />
                      <span>Arrêter le battement</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4 fill-white" />
                      <span>Lancer la pulsation</span>
                    </>
                  )}
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* SECTION 4: CADENCES & HARMONIE */}
      {activeTab === 'cadences' && (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl border border-[#EDCED8] p-6 sm:p-8 shadow-sm">
            <h3 className="text-2xl font-serif font-bold text-[#2C1521] mb-2">
              Les Cadences Fondamentales : La Ponctuation Musicale
            </h3>
            <p className="text-sm text-[#4E2D3A] leading-relaxed mb-6">
              Tout comme une phrase de prose utilise la virgule, le point d'interrogation ou le point final, la musique utilise des <strong>cadences</strong> harmoniques pour créer l'attente, la surprise ou l'apaisement définitif.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {THEORY_CADENCES.map((cad, idx) => (
                <div key={idx} className="p-5 rounded-xl bg-[#FFF9FA] border border-[#F3DCE4] space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase font-mono tracking-widest text-[#9F2D55] font-bold">
                      {cad.chordProgression}
                    </span>
                    <button
                      onClick={() => handlePlayCadence(cad.name)}
                      className="flex items-center gap-1 text-[11px] font-semibold text-[#8F254B] bg-[#FCECEF] hover:bg-[#F9DCE4] px-2 py-1 rounded cursor-pointer"
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                      <span>Écouter la cadence</span>
                    </button>
                  </div>

                  <h4 className="text-lg font-serif font-bold text-[#351825]">
                    {cad.name}
                  </h4>

                  <div className="text-xs text-[#7F4459] italic">
                    Effet émotionnel : {cad.sensoryEffect}
                  </div>

                  <p className="text-xs text-[#523340] leading-relaxed pt-1">
                    {cad.explanation}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-4 border-t border-[#F5D5E0] flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2 text-[#7F4458]">
                <span className="font-semibold text-[#8F254B]">À explorer ensuite :</span>
                <span>Pythagore · Gammes & Modes · Le Clavier bien tempéré de Bach</span>
              </div>
              <button
                onClick={() => onNavigate('science')}
                className="flex items-center gap-1 font-semibold text-[#8F254B] hover:text-[#5F122E] transition-colors cursor-pointer"
              >
                <span>Découvrir la formule du tempérament égal</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
